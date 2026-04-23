
export function Landing(){
  return(
    
  <div className="relative z-10 flex flex-col mt-30 justify-center items-center">
  <div className="h-[600px] w-[750px] rounded-[20px] px-10 py-10 flex flex-col">
    <div className='bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4'>
      
      {/* Name */}
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">AL</span>
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Usman</span>
      </div>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-white" />

      {/* Title */}
      <div className="text-[13px] font-semibold tracking-[0.3em] uppercase text-gray-400">
        Full Stack Developer
      </div>

      {/* Tagline */}
      <div className="text-[22px] font-light italic text-white">
        "Code. Play. Create."
      </div>

      {/* Bio */}
      <div className="text-[14px] text-gray-300 leading-relaxed">
       I design and develop modern mobile applications and websites with a gamer’s mindset, combining strategy, precision, and creativity to build high-performance, immersive experiences that are intuitive, engaging, and crafted to keep users coming back.</div>

    </div>
  </div>
  



  {/*Projects*/}
  <div className="flex flex-col justify-center items-center gap-4 w-[1500px]">


 <div className="w-full flex justify-start items-start">
    <div className=' bg-black text-white border-2 border-white rounded-[20px] px-5 py-3'>
      
      {/* Name */}
      <div className="flex flex-col">
        <span className="text-[30px] font-bold tracking-widest uppercase leading-tight">Projects...</span>
            </div>
    </div>
  </div>


  <div className="flex flex-row gap-4">

    {/*Website Quiz Game*/}
    <div className="flex-1 bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Make your Own Quiz Game</span>
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">(Web Platform)</span>
      </div>
      <div className="w-16 h-[2px] bg-white" />
      <div className="text-[14px] text-gray-300 leading-relaxed">
        Not Deployed Yet.....
      </div>
    </div>

    {/*PlayStore Quiz Game*/}
    <div className="flex-1 bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Make your Own Quiz Game</span>
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">(Mobile App)</span>
      </div>
      <div className="w-16 h-[2px] bg-white" />
      <div className="text-[14px] text-gray-300 leading-relaxed">
        Not Deployed Yet.....
      </div>
    </div>

  </div>

  <div className="flex flex-row gap-4">

    {/*Paws Mobile app*/}
    <div className="flex-1 bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Paws</span>
      </div>
      <div className="w-16 h-[2px] bg-white" />
      <div className="text-[14px] text-gray-300 leading-relaxed">
        The Plant Automatic Watering System (PAWS) is an application and device developed by my classmate and me, where I served as the Team Leader and Head Programmer. The project focuses on providing a real-time, automated plant watering solution using soil moisture sensing technology. The system utilizes Firebase as a real-time database and ESP8266 for wireless communication between the hardware and the mobile application. The mobile application was developed using React Native, with technologies such as HTML, CSS, and JavaScript, enabling real-time monitoring and mobile notifications.
      </div>
    </div>

    {/*Grid Mobile app*/}
    <div className="flex-1 bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Grid</span>
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Mobile App</span>
      </div>
      <div className="w-16 h-[2px] bg-white" />
      <div className="text-[14px] text-gray-300 leading-relaxed">
        I am part of the development team at Grid Property Ventures, a startup focused on delivering innovative mobile solutions in the real estate industry. As a member of the mobile app development team, I collaborate with designers, backend developers, and stakeholders to build and enhance features that streamline property listing, management, and user interaction. I contribute to developing, testing, and optimizing application functionalities to ensure a smooth and reliable user experience for both property owners and clients.
      </div>
    </div>

  </div>
</div>
</div>
   
  );
}