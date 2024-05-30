import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import Language from './Language';
import AddSkill from './AddSkill';
import Radiobtn from './Radiobtn';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Temp1 from './Temp1';
import Temp2 from './Temp2';
import Temp from './Temp';
import GetStart from './GetStart';



function FillData() {



  const [formData, setFormData] = useState({
    profile: '',
    firstName: '',
    middleName: '',
    lastName: '',
    job:'',
    phone: '',
    email: '',
    address:'',
    profilePhoto: '',
    language:'',
    skill:'',
  });



  const [project, setProject] = useState([{ projectList: '' }]);
  const [certificate, setCertificate] = useState([{ certificateList: '' }]);
  const [achieve, setAchieve] = useState([{ achieveList: '' }]);

  const [workExperiences, setWorkExperiences] = useState([
    { jobTitle: '', companyName: '', startDate: '', endDate: '', jobDescription: '',working:'' }
  ]);

  const [education, setEducation] = useState([
    { degree: '', collegeName: '', startDate: '', endDate: '', percentage: '',enrolled:'' }
  ]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,

      [name]: value,
    });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTemp, setShowTemp] = useState(false);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const resumeData = {
      formData: formData,
      workExperiences: workExperiences,
      project: project,
      education: education,
      achieve: achieve,
      certificate: certificate,

    };
    // setIsSubmitted(true);
    setShowTemp(true);
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     window.location.reload();
  //   }
  // }, [isSubmitted]);

  const handleInputChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index][name as keyof typeof newWorkExperiences[number]] = value;
    setWorkExperiences(newWorkExperiences);
  };

  const handleProjectChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const newProject = [...project];
    newProject[index][name as keyof typeof newProject[number]] = value;
    setProject(newProject);
  };

  const handleCertificateChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const newCertificate = [...certificate];
    newCertificate[index][name as keyof typeof newCertificate[number]] = value;
    setCertificate(newCertificate);
  };

  const handleAchieveChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const newAchieve = [...achieve];
    newAchieve[index][name as keyof typeof newAchieve[number]] = value;
    setAchieve(newAchieve);
  };

  const handleEducationChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const newEducation = [...education];
    newEducation[index][name as keyof typeof newEducation[number]] = value;
    setEducation(newEducation);
  };



  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { jobTitle: '', companyName: '', startDate: '', endDate: '', jobDescription: '' ,working:''}
    ]);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { degree: '', collegeName: '', startDate: '', endDate: '', percentage: '',enrolled:'' }
    ]);
  };

  const handleAddProject = () => {
    setProject([
      ...project,
      { projectList: '' }
    ]);
  };

  const handleAddCertificate = () => {
    setCertificate([
      ...certificate,
      { certificateList: '' }
    ]);
  };

  const handleAddAchieve = () => {
    setAchieve([
      ...achieve,
      { achieveList: '' }
    ]);
  };



  const handleRemoveWorkExperience = (index: number) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences.splice(index, 1);
    setWorkExperiences(newWorkExperiences);
  };

  const handleRemoveProject = (index: number) => {
    const newProject = [...project];
    newProject.splice(index, 1);
    setProject(newProject);
  };

  const handleRemoveCertificate = (index: number) => {
    const newCertificate = [...certificate];
    newCertificate.splice(index, 1);
    setCertificate(newCertificate);
  };

  const handleRemoveAchieve = (index: number) => {
    const newAchieve = [...achieve];
    newAchieve.splice(index, 1);
    setAchieve(newAchieve);
  };

  const handleRemoveEducation = (index: number) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const photoURL = URL.createObjectURL(file);
      setFormData({
        ...formData,
        profilePhoto: photoURL,
      });
    } else {
      console.error('Please select a valid image file.');
    }
  };
  const [showGetStart, setShowGetStart] = useState(false);

  const handleBack = () => {
      setShowGetStart(true);
  };
 

  return (
    <>
       {showTemp || showGetStart ? (
  showTemp ? <Temp /> : <GetStart />
) : (
        <>
      {/* <Navbar /> */}
      
      <div className='flex flex-col w-full h-auto bg-[url("/image/bg3.jpg")] bg-cover'>
        <p className='text-center text-3xl font-semibold tracking-widest mt-10'>Resume Builder</p>
        <div className='flex flex-row justify-evenly w-auto h-auto'>
          <div>
            <form className='flex flex-col'>
              <h5 className='mt-4 ml-[90px]'>Add Profile Photo</h5>
              <img src={formData.profilePhoto} alt="" className='w-[140px] h-[140px] bg-cover border-purple-800 border-2 rounded-full ml-[90px]' />
              <input type="file" className='mt-2 ml-[90px]' id="profilePhoto" onChange={handlePhotoChange} accept="image/*" />
              <h5 className='mt-3'>Profile Summary</h5>
              <TextField
                id="standard-textarea"
                placeholder="Describe"
                multiline
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='profile'
              />
              <h5 className='mt-3'>Job Title</h5>
              <TextField
                id="standard-textarea"
                placeholder="Job Title"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='job'
              />
              <h5 className='mt-3'>First Name</h5>
              <TextField
                id="standard-textarea"
                placeholder="First Name"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='firstName'
              />
              <h5 className='mt-3'>Middle Name</h5>
              <TextField
                id="standard-textarea"
                placeholder="Middle Name"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='middleName'
              />
              <h5 className='mt-3'>Last Name</h5>
              <TextField
                id="standard-textarea"
                placeholder="Last Name"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='lastName'
              />
              
              <h5 className='mt-3'>Contact</h5>
              <TextField
                id="standard-textarea"
                placeholder="Phone"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='phone'
              />
              <h5 className='mt-3'>Email</h5>
              <TextField
                id="standard-textarea"
                placeholder="abc@gmail.com"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='email'
              />
              <h5 className='mt-3'>Address</h5>
              <TextField
                id="standard-textarea"
                placeholder="Address"
                variant="standard"
                style={{ width: '300px' }}
                onChange={handleChange}
                name='address'
              />
              <div className='mt-3'>
                <h5 className='mt-3'>Language</h5>
                <Language />
              </div>
              <div className='mb-20 mt-2'>
                <h5 className='mt-3'>Add Skills</h5>
                <AddSkill />
              </div>
            </form>
          </div>
          <div>
            <div className='flex flex-col w-full'>
              <div>
                <h5 className='mt-6'>Project</h5>
                {project.map((project, index) => (
                  <div key={index}>
                    <TextField
                      id="standard-textarea"
                      placeholder="Your Project"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='projectList'
                      value={project.projectList}
                      onChange={(event) => handleProjectChange(index, event)}
                    />
                    <button type="button" onClick={() => handleRemoveProject(index)}>
                      Remove
                    </button>
                  </div>
                ))}

                <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '120px' }}>
                  <Fab
                    onClick={handleAddProject}
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{ width: '40px', height: '40px' }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </div>
              <div className='flex flex-col'>
                <h5 className='mt-6'>Work Experience</h5>
                {workExperiences.map((experience, index) => (
                  <div key={index} className='flex flex-col'>
                    <TextField
                      id="standard-textarea"
                      placeholder="Job Title"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      value={experience.jobTitle}
                      onChange={(event) => handleInputChange(index, event)}
                      name="jobTitle"
                    />
                    {/* <Radiobtn /> */}
                    <TextField
                      id="standard-textarea"
                      placeholder="Company Name"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='companyName'
                      value={experience.companyName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="Job Description"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name="jobDescription"
                      value={experience.jobDescription}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="Start Date (YYYY)"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='startDate'
                      value={experience.startDate}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="End Date (YYYY)"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='endDate'
                      value={experience.endDate}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <FormControlLabel control={<Checkbox style={{ color: 'purple' }} />} label="I am currently working" name='working'  onChange={(event) => handleInputChange(index, event)} />
                    <button type="button" onClick={() => handleRemoveWorkExperience(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '120px' }}>
                  <Fab
                    onClick={handleAddWorkExperience}
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{ width: '40px', height: '40px' }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </div>
              <div className='flex flex-col'>
                <h5 className='mt-6'>Add Education</h5>
                {education.map((education, index) => (
                  <div key={index} className='flex flex-col'>
                    <TextField
                      id="standard-textarea"
                      placeholder="Degree"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='degree'
                      value={education.degree}
                      onChange={(event) => handleEducationChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="College/School Name"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name="collegeName"
                      value={education.collegeName}
                      onChange={(event) => handleEducationChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="Percentage"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      value={education.percentage}
                      onChange={(event) => handleEducationChange(index, event)}
                      name="percentage"
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="Start Date (YYYY)"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='startDate'
                      value={education.startDate}
                      onChange={(event) => handleEducationChange(index, event)}
                    />
                    <TextField
                      id="standard-textarea"
                      placeholder="End Date (YYYY)"
                      multiline
                      variant="standard"
                      style={{ width: '300px' }}
                      name='endDate'
                      value={education.endDate}
                      onChange={(event) => handleEducationChange(index, event)}
                    />
                    <FormControlLabel control={<Checkbox style={{ color: 'purple' }} />} label="Currently Enrolled" name='enroll'   onChange={(event) => handleEducationChange(index, event)} />
                    <button type="button" onClick={() => handleRemoveEducation(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '120px' }}>
                  <Fab
                    onClick={handleAddEducation}
                    size="small"
                    color="secondary"
                    aria-label="add"
                    sx={{ width: '40px', height: '40px' }}
                  >
                    <AddIcon />
                  </Fab>
                </Box>
              </div>
              <h5 className='mt-6'>Certificate</h5>
              {certificate.map((cert, index) => (
                <div key={index}>
                  <TextField
                    id="standard-textarea"
                    placeholder="Certificate"
                    multiline
                    variant="standard"
                    style={{ width: '300px' }}
                    name='certificateList'
                    value={cert.certificateList}
                    onChange={(event) => handleCertificateChange(index, event)}
                  />
                  <button type="button" onClick={() => handleRemoveCertificate(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '120px' }}>
                <Fab
                  onClick={handleAddCertificate}
                  size="small"
                  color="secondary"
                  aria-label="add"
                  sx={{ width: '40px', height: '40px' }}
                >
                  <AddIcon />
                </Fab>
              </Box>
              <h5 className='mt-6'>Achievements</h5>
              {achieve.map((achieve, index) => (
                <div key={index}>
                  <TextField
                    id="standard-textarea"
                    placeholder="Your Achievement"
                    multiline
                    variant="standard"
                    style={{ width: '300px' }}
                    name='achieveList'
                    value={achieve.achieveList}
                    onChange={(event) => handleAchieveChange(index, event)}
                  />
                  <button type="button" onClick={() => handleRemoveAchieve(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: '120px' }}>
                <Fab
                  onClick={handleAddAchieve}
                  size="small"
                  color="secondary"
                  aria-label="add"
                  sx={{ width: '40px', height: '40px' }}
                >
                  <AddIcon />
                </Fab>
              </Box>
            </div>
         
            <Box sx={{ marginLeft: '70px', marginTop: '5px' , marginBottom:'200px'}}>
              <Fab
                onClick={handleSubmit}
                variant="extended"
                sx={{
                  m: 2,
                  backgroundColor: 'purple',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                }}
              >
                Generate CV
              </Fab>
            </Box>
            
          </div>
        </div>
        <button onClick={handleBack} className="mx-auto mb-20 px-6 py-2 bg-fuchsia-950 text-white rounded">Back</button>
      </div>
      
      {/* <Footer/> */}

      </>
      )}
    
    </>
  );
}

export default FillData;
 