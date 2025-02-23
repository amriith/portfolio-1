import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex-auto grid grid-cols-2 h-screen">

      <div className="flex flex-col items-center justify-center text-white">

        <div className=" grid-cols-2 backdrop-blur-lg p-6 text-2xl text-center">
          
        <div className="flex justify-center py-5" >
            <img
              className="w-20 h-20 rounded-full"
              src="src/images/avatar.jpg"
              alt="Rounded avatar"
            />
          </div>
          Hello I'm Amrith Jayadeep 👋
         
        </div>

        <ChangingTexts />
      </div>

      <div className=""></div>
    </div>
  );
}

export function ChangingTexts() {
  return (
    <div className="text-center text-white text-2xl mt-4">
      <TypeAnimation
        sequence={[
          "I'm a Web Developer",
          2000,
          "I'm a Geek",
          2000,
          "I'm a Software Engineer",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
}
