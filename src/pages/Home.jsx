
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="flex-auto h-screen col-2 justify-between w-[50%]">
      <div className="backdrop-blur-lg h-screen shadow-lg hover:shadow-2xl rounded-xl p-6 text-2xl text-center flex items-center justify-center text-white">
        Hello I'm Amrith Jayadeep 👋
        <div className="px-4">
          <img className="w-20 h-20 rounded-full" src="src/images/avatar.jpg" alt="Rounded avatar" />
        </div>
      </div>
      <div className="text-center text-pink-400 text-3xl mt-6 font-bold">
        <ChangingTexts />
      </div>
    </div>
  );
}

// ✅ Fixed `ChangingTexts` component
export function ChangingTexts() {
  const sentences = [
    "I'm a Humanbeing",
    "I'm a Geek",
    "I'm a Web Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return <span>{sentences[index]}</span>;
}