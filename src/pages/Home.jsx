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

      <div className="text-slate-400 text-lg pt-10">
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


      <WorkExperience companyName={"OneAdvanced"} year={"Jan 2022- August 2023"} link={"https://www.oneadvanced.com/"} description={<> Contributed to the development of <a href="https://www.oneadvanced.com/products/clinical-patient-management/" className="text-white text-bold"> Adastra </a>, a .NET/C# desktop application for NHS UK, enhancing patient management and streamlining urgent and unscheduled care interactions.Developed and maintained the patient booking slot availability and doctor appointment system API, utilizing REST API design, development, and integration to enhance data retrieval efficiency.
        Contributed to the development of the emergency booking and referral service endpoint within the BaRS API Gateway for Adastra
        Conducted API testing and validation using Postman, improving the robustness of API interactions and debugging workflows.
      <br /><br />

       Designed and implemented various sub-features, including:
      
        Book Appointment, Emergency Ambulance Enabled rapid ambulance dispatch functionality through the API.
        Cancel Referral, Additional Features Built enhancements to improve API performance and data accuracy.
      
      <br />

     Collaborated closely with product managers, designers, and engineers to refine API workflows, optimize performance, and ensure compliance with healthcare standards.
     
      </>  }
      techStack={"C#"}  />
      <WorkExperience/>
      <WorkExperience>

      </WorkExperience>
     
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
