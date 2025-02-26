import { TypeAnimation } from "react-type-animation";
import { Appbar } from "../components/Appbar";
import { WorkExperience } from "../components/WorkExperience";

export default function Home() {
  return (
    <> 
    <Appbar/>
    <div className="flex-auto grid grid-cols-2 h-screen">

      <div className="flex flex-col h-200 items-center justify-center text-white">

        <div className=" grid-cols-2 backdrop-blur-lg text-2xl text-center">
          
        <div className="flex justify-center pb-4" >
            <img
              className="w-40 h-40 rounded-full"
              src="src/images/avatar.jpg"
              alt="Rounded avatar"
            />
          </div>
          Hello I'm Amrith Jayadeep 👋
         
        </div>

        <ChangingTexts />
      </div>

      <div className="text-slate-400 text-md pt-10">
  <p className="mb-6">
    Experienced Software Developer with a strong foundation in full-stack development, specializing in building 
    scalable, high-performance web applications with a focus on backend architecture and system functionality. 
    Currently, I am pursuing a Master’s in Information Technology at Deakin University, Melbourne. Beyond academics, 
    I have been freelancing, developing websites for local businesses, and building my own e-commerce platform, 
    <a href="https://mriid.com" className="text-bold text-white"> MRIID</a>, where I handle everything from backend 
    architecture to deployment. Previously, I worked as an Associate Software Engineer at 
    <a href="https://www.oneadvanced.com/" className="text-bold text-white"> OneAdvanced</a>, contributing to 
    large-scale enterprise applications.
  </p>

  <p className="mb-6">
    While I have experience across the stack, I find backend development particularly fascinating. Designing
    APIs, optimizing databases, and creating seamless integrations excites me more than UI design. I enjoy solving 
    complex problems and implementing scalable solutions.
  </p>

  <p className="mb-20">
  Beyond coding, I’m 
    passionate about reading, hiking, cycling, working out, and practicing martial arts. I believe discipline and 
    perseverance, both in physical training and software development, go hand in hand in shaping my approach to 
    challenges—whether in technology or life.
  </p>


      <WorkExperience companyName={"OneAdvanced  ↗"} year={"Jan 2022- August 2023"} link={"https://www.oneadvanced.com/"} description={<> Developed Adastra, a .NET/C# app for NHS UK, improving patient management.
Built & maintained doctor appointment APIs, streamlining scheduling & availability.
<br/>Contributed to the BaRS API Gateway, enabling emergency referral services.
Enhanced API performance & debugging using Postman & REST API best practices.
Implemented key features: ambulance dispatch, appointment booking, referral cancellations.
Collaborated with product managers & engineers, ensuring compliance & efficiency.</>  }
     techStack={["C#","HTML & CSS", ".NET", "Postman", "Angular", "Reddis", "Microsoft SQL"]}      />
      <WorkExperience companyName={"Thoth Tech  ↗"} year={"Aug 2024 - Feb 2025"} link={"https://internal-systems.vercel.app/"}  description={<> 
        Contributed to OnTrack, an educational platform used by major Australian universities, enhancing the student learning experience through backend and frontend improvements.
         Led the migration of legacy code from CoffeeScript to TypeScript, modernizing the platform for better performance and maintainability. Designed user-centric interfaces, improving student engagement and user journeys.
          Developed a customizable email notification system based on user research to optimize interactions.
         Implemented Docker containers, streamlining development and deployment processes.
      </>} techStack={["TypeScript", "Ruby on Rails", "HTML & CSS", "Docker", "Postgre SQL"]} />

      <WorkExperience companyName={"Freelance Software Developer"} year={"2022 – Present"} description={<> Designed and implemented cloud-based solutions for healthcare providers and small businesses, optimizing performance and scalability. 
        Built microservices-based applications using React and Node.js.
        Deployed applications using Docker and cloud services like AWS & Azure, enabling efficient hosting and scaling.
         Integrated secure payment gateways with Stripe.</>} techStack={["React", "Node.js", "Docker", "AWS" , "Azure" , "Stripe", "JavaScript", "TypeScript", "Postgre SQL","Mongo DB", "Prisma ORM"]} />

      
     
      </div>
    </div>
    </>
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
