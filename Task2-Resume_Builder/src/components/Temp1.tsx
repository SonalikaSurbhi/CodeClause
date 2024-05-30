import React, { useEffect, useState, useRef } from 'react';
import Footer from './Footer';
import { useReactToPrint } from 'react-to-print';
import Navbar from './Navbar';
import FillData from './Filldata';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function Temp1() {
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
          {/* -------------------------------------------P A G E 1------------------------------------------------------------- */}
          <div className='w-[595px] h-auto mx-auto'>
            <div ref={componentRef} className='flex flex-col w-full  bg-cover bg-[url("/image/temp.png")] break-words'>
              <div className='flex flex-row flex-wrap justify-evenly mt-3 ml-[50px]'>
                <div className='basis-[25%]'>
                  <div className='w-[140px] h-[140px] rounded-full -ml-3 mt-10'>
                    {formData?.profilePhoto && (
                      <img
                        src={formData.profilePhoto}
                        alt="Profile"
                        className='w-[140px] h-[140px] bg-cover border-4 border-[#27384C] rounded-full' />
                    )}
                  </div>
                </div>
                <div className='flex flex-col basis-2/3 text-[#27384C]'>
                  <span className='mt-12 pl-3 text-4xl tracking-wider font-extrabold'>
                    {formData?.firstName} {formData?.middleName} {formData?.lastName}
                  </span>
                  <span className='font-semibold text-lg ml-14'>{formData?.job}</span>
                  <span className='text-xs ml-14'> <EmailIcon className=' text-sm mr-1' />{formData?.email}</span>
                  <span className='text-xs ml-14'><PhoneIcon className=' text-sm mr-2' />{formData?.phone}</span>
                  <span className='text-xs ml-14'><LocationOnIcon className=' text-sm mr-1' />{formData?.address}</span>
                </div>
              </div>
              {/*-------------------------------------Profile Summary--------------------------------------------------------------------------*/}
              <div className='ml-5 mr-7 mt-3'>
                <div className='w-full h-auto'>
                  <div className='text-lg pl-1 tracking-wider font-bold text-[#27384C] mb-1'><EditIcon className='-mt-1 text-xl mr-1' />Summary</div>

                  <p className='text-xs ml-7'>
                    {formData?.profile}
                  </p>
                </div>
                {/*--------------------------------Work Experience--------------------------------------------------------------------------*/}
                <div className='w-full h-auto mt-2'>
                  <div className='font-bold text-[#27384C] tracking-wider text-lg pl-1 mb-1'><WorkIcon className='-mt-1 text-xl mr-1' />Work Experience</div>

                  <div className=''>
                    {workExperiences && workExperiences.map((experience: any, index: number) => (
                      <ul key={index} className='text-xs'>
                        <div className="flex flex-row justify-between">
                          <li className='font-semibold'>{experience.jobTitle}</li>
                          <li className='font-mono'>
                            {experience.startDate} to {experience.working ? 'Present' : experience.endDate}
                          </li>
                        </div>
                        <li className='font-semibold '>{experience.companyName}</li>
                        <li className='break-words'>{experience.jobDescription}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                {/*----------------------------------------------Project--------------------------------------------------------------------------*/}
                <div className='mt-2 w-full h-auto'>
                  <div className='font-bold text-[#27384C] tracking-wider mb-1 text-lg pl-1'>< DriveFileRenameOutlineIcon className='-mt-1 text-xl mr-1' />Project</div>

                  {project && project.map((project: any, index: number) => (
                    <div key={index}>
                      <ul className="list-disc text-xs">
                        <li>{project.projectList} </li>
                      </ul>
                    </div>
                  ))}
                </div>
                {/*----------------------------------------------Education--------------------------------------------------------------------------*/}
                <div className='mt-2 w-full h-auto'>
                  <div className='font-bold text-[#27384C] tracking-wider text-lg mb-1 pl-1'><SchoolIcon className='-mt-1 text-xl mr-1' />Education</div>
                  <div className='grid grid-cols-2 grid-flow-row  gap-x-8'>
                    {education && education.map((education: any, index: number) => (
                      <ul key={index} className='text-xs'>
                        <div className="flex flex-row justify-between ">
                          <li className='font-semibold list-disc'>{education.degree}</li>
                          <li className='font-mono font-bold ml-4'> {education.percentage} </li>
                        </div>
                        <li className=' break-words '>{education.collegeName}</li>
                        <li className='font-mono'>
                          {education.startDate} to {education.enrolled ? 'Present' : education.endDate}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                {/*------------------------Skill And Language--------------------------------------------------------------------------*/}
                <div className='flex flex-row justify-between mt-2'>
                  <div className='basis-[45%]'>
                    <div className='font-bold text-[#27384C] tracking-wider text-lg pl-1 mb-1'><PsychologyIcon className='-mt-1 text-xl mr-1' />Skills</div>

                    <ul className='list-disc grid grid-cols-2 grid-flow-row gap-1 text-xs ml-7'>
                      <li>Lorem.</li>
                      <li>Perferendis.</li>
                      <li>Pariatur.</li>
                    </ul>
                  </div>
                  <div className='basis-1/2'>
                    <div className='font-bold text-[#27384C] tracking-wider mb-1 text-lg pl-1'><LanguageIcon className='-mt-[2px] text-xl mr-1' />Language</div>
                    <ul className='list-disc grid grid-cols-2 grid-flow-row gap-1 text-xs ml-7'>
                      <li>{formData?.language}</li>

                    </ul>
                  </div>
                </div>
                {/*----------------------------------------------Certificate--------------------------------------------------------------------------*/}
                <div className='mt-2 w-full h-auto mb-10'>
                  <div className="flex flex-row justify-evenly">
                    <div className="flex flex-col basis-1/2">
                      <div className='font-bold text-[#27384C] tracking-wider text-lg mb-1 pl-1'> <MenuBookIcon className='-mt-1 text-xl mr-1' />Certificate</div>

                      {certificate && certificate.map((cert: any, index: number) => (
                        <div key={index}>
                          <ul className="list-disc text-xs">
                            <li>{cert.certificateList}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col basis-1/2">
                    <div className='mt-2 w-full h-auto mb-12'>
                      <div className='font-bold text-[#27384C] tracking-wider text-lg pl-1 mb-1'><StarIcon className='-mt-1 text-xl mr-1' />Achievements</div>

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

              

              </div>
            </div>
          </div>
          <button onClick={handlePrint} className="mx-auto mt-8 mb-20 p-2 bg-gray-900 text-white rounded">Print</button>
          {/* <button onClick={handleBack} className="mx-auto mb-20 p-2 bg-gray-900 text-white rounded">Back</button> */}
        </div>
        
          {/* <Footer /> */}
        </>

      )}
    </>
  );
}

export default Temp1;
