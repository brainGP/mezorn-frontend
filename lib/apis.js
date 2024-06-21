const apiURL = process.env.API_URL;

export const getUsers = async () => {
  const url = `${apiURL}/users`;
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    return error;
  }
};

export const getParagraph = async () => {
  try {
    const url = `https://random-word-api.herokuapp.com/all`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const handleLogin = async (email, password) => {
  const url = `${apiURL}/login`;
  try {
    const response = await axios.post(url, {
      email,
      password,
    });
    setIsLoggedIn(true);
    setUserName(response.data.data.name);
    setSuccessMessage("You have successfully Logged in!");
    setTimeout(() => {
      closeModal();
    }, 2000);
  } catch (error) {
    alert(error);
  }
};

export const handleSignUp = async (name, email, password) => {
  const url = `${apiURL}/signup`;
  try {
    const response = await axios.post(url, {
      name,
      email,
      password,
    });
    setIsLoggedIn(true);
    setUserName(name);
    setSuccessMessage("You have successfully Signed up!");
    setTimeout(() => {
      closeModal();
    }, 2000);
  } catch (error) {
    alert(error);
  }
};
