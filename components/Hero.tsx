import { BackgroundRippleEffect } from "./ui/background-ripple-effect"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className=' z-[10] w-full h-screen justify-center flex flex-col items-center relative gap-0 '>
   <div className=" p-3 rounded-full bg-radial from-[#bccdf4d0] to-60%  w-1/3 space-y-4    -translate-y-1/2 text-center  ">
     <h1 className=' text-6xl font-bold text-transparent bg-clip-text bg-radial from-[#2d65ff] to-[#58678e] italic'> ContractGuard <span className=" text-black text-5xl -mx-1 not-italic">AI</span>  </h1>

     <h3 className=' text-3xl font-semibold text-neutral-700'>Eliminate Contract Risks Before They <span className="text-transparent bg-clip-text font-bold bg-radial from-[#2563EB] to-[#7b8eb6]  rounded-lg px-2 py-1 shadow-lg shadow-[#a9b9fb]">Eliminate</span> Your <span className="text-transparent bg-clip-text font-bold bg-gradient-to-tr from-[#67aa83] to-[#529a6f]">$Profits</span> </h3>
   </div>
  <BackgroundRippleEffect />

   <div className=" -mt-16 flex flex-col text-center w-1/2">
        <h2 className=" font-semibold">An AI That Reads Contracts So Your Team {`Doesn't`} Have To</h2>
        <p className=" text-sm text-neutral-500">68% of businesses discover contract risks only AFTER {`they've`} cost an average of $4.7M — {`Don't`} be another statistic</p>
    </div>
    <div className=" mt-10 space-x-3">
         <Button size={"lg"} className=" cursor-pointer font-medium  text-xl  shadow-md rounded-lg shadow-[#c2c9f1] bg-gradient-to-t  to-[#faffff] from-[#f4f4f4] translate-y-0 hover:-translate-y-0.5 hover:shadow-lg text-neutral-800">Get Started</Button>
         <Button size={"lg"} className=" cursor-pointer font-medium  text-xl  shadow-md rounded-lg shadow-[#6fa6f3] bg-gradient-to-t    from-[#7daefc] to-[#2b57bf] translate-y-0 hover:-translate-y-0.5 hover:shadow-lg text-white" >Learn More</Button>
    </div>
    </div>
  ) 
}

export default Hero 