import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FillData from './Filldata';

function GetStart() {

  const [showTemp, setShowTemp] = useState(false);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // setIsSubmitted(true);
    setShowTemp(true);
  };
  return (
   <>
      {showTemp ? (
        <FillData />
      ) : (
        <>
          <div className=''>
            <h1 className='text-7xl font-bold ml-[250px] tracking-wider text-violet-950 pt-[250px]'>ResumeBuilder</h1>
            <h3 className='text-3xl font-semibold ml-[255px] mt-2'><span className='text-violet-950 font-bold'>W</span>elcome <span className='text-violet-950 font-bold'>T</span>o <span className='text-violet-950 font-bold'>R</span>esumeBuilder</h3>
            <p className='text-lg ml-[255px] mt-3 w-[800px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magni neque sequi ad corporis non dolor! Saepe alias ad praesentium blanditiis, eos illo numquam maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, eveniet voluptatum culpa cupiditate ullam dolorem.</p>
            <button type="submit" className='bg-violet-950 border-4 boxline blink border-violet-950 mt-6 px-12 py-1 ml-[256px] text-2xl font-mono text-white' onClick={handleSubmit}>Start <ArrowRightAltIcon style={{ width: '50px', height: '40px', marginLeft:'-15px' }}/></button>
          </div>  
       </>
      )}
   </>
  )
}

export default GetStart