"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import axios from "axios";
import Navigation from "./header/Navigation";
import LoggedIn from "./header/LoggedIn";
import ModalHeader from "./header/ModalHeader";
import { MenuIcon } from "@/assets/icons";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideNav = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideNav);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNav);
    };
  }, []);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openModal = (isLoginForm) => {
    setIsLogin(isLoginForm);
    setIsNavOpen(false);
    setIsModalOpen(true);
    setSuccessMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage("");
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      setIsLoggedIn(true);
      setUserName(response.data.data.name);
      setSuccessMessage("You have successfully logged in!");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password,
      });
      setIsLoggedIn(true);
      setUserName(name);
      setSuccessMessage("You have successfully signed up!");
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="w-full bg-transparent shadow-md border-b border-b-white/10 fixed">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <Link href="/" className="block w-36">
          <Image src="/Mezorn-logo.svg" alt="Mezorn" width={200} height={50} />
        </Link>
        <Navigation
          navRef={navRef}
          isNavOpen={isNavOpen}
          toggleNavigation={toggleNavigation}
        />
        <Button
          className="lg:hidden bg-red-600 text-white rounded-lg"
          onClick={toggleNavigation}
        >
          <MenuIcon />
        </Button>
        <LoggedIn
          isLoggedIn={isLoggedIn}
          userName={userName}
          openModal={openModal}
        />
      </div>
      <ModalHeader
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        successMessage={successMessage}
        isLogin={isLogin}
      />
    </header>
  );
};

export default Header;
