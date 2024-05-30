import React, { useEffect, useRef, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useReactToPrint } from 'react-to-print';
import Footer from './Footer';
import Navbar from './Navbar';
import FillData from './Filldata';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';




function Temp2() {

    const [formData, setFormData] = useState<any>(null);
  const [workExperiences, setWorkExperiences] = useState<any>(null);
  const [project, setProject] = useState<any>(null);
  const [education, setEducation] = useState<any>(null);
  const [certificate, setCertificate] = useState<any>(null);
  const [achieve, setAchieve] = useState<any>(null);

  const componentRef = useRef<HTMLDivElement>(null);

  const [showFillData, setShowFillData] = useState(false);

  const handleBack = () => {
    setShowFillData(true);
  };


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData.formData);
      setWorkExperiences(parsedData.workExperiences);
      setEducation(parsedData.education);
      setProject(parsedData.project);
      setCertificate(parsedData.certificate);
      setAchieve(parsedData.achieve);
    }
  }, []);

    return (
        <>
            {showFillData ? (
                <FillData />
            ) : (
                <>
                    <div className='flex flex-col'>
                        {/* <Navbar /> */}
                        <div  className='w-[595px] h-auto mb-20 break-before-page mx-auto'>
                        <div ref={componentRef} className='flex flex-col w-full font-serif bg-white break-words'>
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-around mt-12">
                                    <div className="flex flex-col basis-[55%] pl-7 ">
                                        <h1 className='text-[#3d6028] font-bold'>{formData?.firstName} {formData?.middleName} {formData?.lastName}</h1>
                                        <p className=' text-[#3d6028] font-semibold'>{formData?.job}</p>
                                    </div>
                                    <div className='flex flex-col basis-[40%] pl-5 mt-2  -ml-4 pr-5'>
                                        <span className='mt-3 text-sm'><PhoneIcon className='text-sm mr-2 text-[#3d6028]' />{formData?.phone}</span>
                                        <span className='mt-3 text-sm flex flex-row'><EmailIcon className='text-sm mr-2 text-[#3d6028]' /><span className='-mt-1'>{formData?.email}</span></span>
                                        <span className='mt-3 text-sm'><LocationOnIcon className='text-sm mr-2 text-[#3d6028]' />{formData?.address}</span>
                                    </div>
                                </div>
                                <p className='pl-8 pr-7 text-justify text-xs'>{formData?.profile}</p>
                            </div>
                           <hr className=' border-1 text-[#3d6028]' />
                            <div className='flex flex-col pl-7 pr-7'>
                                <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><WorkIcon className='-mt-1 text-xl mr-1' />Work Experience</h4>
                                {workExperiences && workExperiences.map((experience: any, index: number) => (
                                        <ul key={index} className='text-xs'>
                                            <div className="flex flex-row justify-between">
                                            <li className='font-semibold list-disc'>{experience.jobTitle}</li>
                                            <li className='font-mono'>{experience.startDate} to {experience.working ? 'Present' : experience.endDate}</li>
                                            </div>                                           
                                            <li className='font-semibold '>{experience.companyName}</li>
                                            <li className='break-words text-justify'>{experience.jobDescription}</li>
                                        </ul>
                                    ))}
                        </div>
                       <hr className=' border-1 text-[#3d6028]' />
                        <div className='flex flex-col pl-7 pr-7 text-justify'>
                            <h4 className='text-[#3d6028] mb-2 text-lg font-semibold'><EditIcon className='-mt-1 text-xl mr-1' />Project</h4>
                            {project && project.map((project: any, index: number) => (
                                <div key={index}>
                                    <ul className="list-disc text-xs">
                                        <li>{project.projectList} </li>
                                    </ul>
                                </div>
                            ))}
                        </div>

                       <hr className=' border-1 text-[#3d6028]' />
                        <div className="flex flex-col ml-7 pr-7">
                            <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><SchoolIcon className='-mt-1 text-xl mr-1' />Education</h4>
                            <div className='grid grid-cols-2 grid-flow-row  gap-x-8'>
                            {education && education.map((education: any, index: number) => (
                                <ul key={index} className='text-xs'>
                                    <div className="flex flex-row justify-between ">
                                        <li className='font-semibold list-disc'>{education.degree}</li>
                                        <li className='font-mono font-bold'> {education.percentage} </li>
                                    </div>
                                    <li className=' break-words '>{education.collegeName}</li>
                                    <li className='font-mono'>
                                        {education.startDate} to {education.enrolled ? 'Present' : education.endDate}</li>
                                </ul>
                            ))}
                            </div>
                        </div>
                       <hr className=' border-1 text-[#3d6028]' />
                        <div className='flex flex-row'>
                            <div className='flex flex-col basis-1/2 pl-8 '>
                                <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><PsychologyIcon className='-mt-1 text-xl mr-1' />Skills</h4>
                                <ul className='list-disc grid grid-cols-2 grid-flow-row gap-1 text-xs'>
                                    <li>Lorem.</li>
                                    <li>Perferendis.</li>
                                    <li>Pariatur.</li>
                                </ul>
                            </div>
                            <div className='flex flex-col basis-1/2 pl-3'>
                                <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><LanguageIcon className='-mt-[2px] text-xl mr-1' />Language</h4>
                                <ul className='list-disc grid grid-cols-2 grid-flow-row gap-1 text-xs'>
                                    <li>Lorem.</li>
                                    <li>Perferendis.</li>
                                    <li>Pariatur.</li>
                                    <li>Lorem.</li>
                                    <li>Alias!</li>
                                    <li>Amet.</li>
                                    <li>Fugit.</li>
                                </ul>
                            </div>

                        </div>
                       <hr className=' border-1 text-[#3d6028]' />
                        <div className='flex flex-row mb-14'>
                            <div className='flex flex-col basis-1/2 pl-7'>
                                <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><MenuBookIcon className='-mt-1 text-xl mr-1' />Certification</h4>
                                {certificate && certificate.map((cert: any, index: number) => (
                                    <div key={index}>
                                        <ul className="list-disc text-xs">
                                            <li>{cert.certificateList}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col basis-1/2 pl-3'>
                                <h4 className='mb-2 text-[#3d6028] text-lg font-semibold'><StarIcon className='-mt-1 text-xl mr-1' />Achievement</h4>
                                {achieve && achieve.map((achieve: any, index: number) => (
                                    <div key={index}>
                                        <ul className="list-disc text-xs">
                                            <li>{achieve.achieveList}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                        </div>
                    <button onClick={handlePrint} className="mx-auto -mt-12 mb-20 p-2 bg-gray-900 text-white rounded">Print</button>
                    {/* <button onClick={handleBack} className="mx-auto mb-20 p-2 bg-gray-900 text-white rounded">Back</button> */}
                </div >
            {/* <Footer /> */}
        </>

    )
}

        </>
    )
}

export default Temp2