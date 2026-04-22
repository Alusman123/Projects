import Profile from "../assets/Profilepic.jpg"

export function Header(){
  return(
    <div className='bg-black absolute top-0 left-0 z-50 flex items-center justify-between border-b-[1.5px] border-white rounded-b-[40px] w-full h-[100px] px-8'>
      <div className="flex justify-center items-center flex-row gap-3">
  <img 
    src={Profile} 
    alt="Profile" 
    className="w-14 h-14 rounded-full object-cover border-[0.5px] border-white"
  />
  <div className='text-white text-2xl font-bold tracking-widest uppercase'>
    Portfolio
  </div>
</div>
      

      <nav className='flex gap-6'>
        <button className='text-white border-[0.5px] border-white rounded-[20px] px-4 py-1 hover:bg-white hover:text-black transition-colors duration-200'>
          Resume
        </button>
        <button className='text-white border-[0.5px] border-white rounded-[20px] px-4 py-1 hover:bg-white hover:text-black transition-colors duration-200'>
          Projects
        </button>
        <button className='text-white border-[0.5px] border-white rounded-[20px] px-4 py-1 hover:bg-white hover:text-black transition-colors duration-200'>
          Tech Stack
        </button>
        <button className='text-white border-[0.5px] border-white rounded-[20px] px-4 py-1 hover:bg-white hover:text-black transition-colors duration-200'>
          Experience
        </button>
      </nav>
    </div>
  );
}