import TypingTest from "@/components/TypingTest";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <main className="bg-black w-full h-screen">
      <Header />
      <TypingTest />
    </main>
  );
}
