import './cvLayout.css'
import './index.css'
import { useState } from 'react'
const sideBarSection = document.querySelector(".sideBarSection");



export default function DetailsLayout({fullNameSet, emailSet, phoneNumberSet, addressSet
    ,setEduToggle, eduToggle,
    setEducationInfo, educationInfo,
    jobInfo, setJobInfo,
    jobToggle, setJobToggle}) {

    
    return (
        <>
        
        <PersonalDetailsCard fullNameSet={fullNameSet} emailSet={emailSet} phoneNumberSet={phoneNumberSet} addressSet={addressSet}/>
        <EducationExperienceCard setEduToggle={setEduToggle} eduToggle={eduToggle} setEducationInfo={setEducationInfo} educationInfo={educationInfo}/>
        <JobExperienceCard jobInfo={jobInfo} setJobInfo={setJobInfo} jobToggle={jobToggle} setJobToggle={setJobToggle} />
        </>
        
        
    )

}

function PersonalDetailsCard ({fullNameSet, emailSet, phoneNumberSet, addressSet}) {
    
    function handleNameChange (userName) {
        fullNameSet(userName);

    }
    function handleEmailChange (userEmail) {
        emailSet(userEmail);


    }
    function handlePhoneChange (userPhone) {
        phoneNumberSet(userPhone);

    }
    function handleAddressChange (userAddress){
        addressSet(userAddress);

    }
    
    function handleSubmit (){   
        const nameInput = document.forms["detailsForm"]["fullName"].value;
        const emailInput = document.forms["detailsForm"]["email"].value;
        const phoneInput = document.forms["detailsForm"]["phoneNumber"].value;
        const addressInput = document.forms["detailsForm"]["address"].value;
        
        const nameChange =  handleNameChange(nameInput);
        const emailChange = handleEmailChange(emailInput);
        const phoneChange = handlePhoneChange(phoneInput);
        const addressChange = handleAddressChange(addressInput); 
   
        return ([nameChange, emailChange, phoneChange, addressChange]);
    }
    


    return (
        <>

        
        <form name="detailsForm" className='detailsForm' action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input type='text' id="fullName" name="fullName"></input>

            <label htmlFor="email">Email: </label>
            <input type='text' id="email" name="email"></input>

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type='text' id="phoneNumber" name="phoneNumber"></input>

            <label htmlFor="address">Address: </label>
            <input type='text' id="address" name="address"></input>

            <button 
            className='submitBtn'
            onClick = { () => {
                 handleSubmit();      
            }}
            type="button"
            >Add To Cv</button>
        </form>
        
        
       
        </>
    )




}

function EducationExperienceCard ({setEduToggle, eduToggle, setEducationInfo, educationInfo}) { // Will be used for both work and eduction experience || WIll Be Expandable
    
    const [newEduToggle, setNewEduToogle] = useState(false);


    function handleNewEduSubmit (){
        const eduName = document.forms["createNewEduForm"]["eduName"].value;
        const eduStartDate = document.forms["createNewEduForm"]["eduStartDate"].value;
        const eduEndDate = document.forms["createNewEduForm"]["eduEndDate"].value;
        const eduDegree = document.forms["createNewEduForm"]["eduDegree"].value;
        const eduLocation = document.forms["createNewEduForm"]["eduLocation"].value;
        const eduDescription = document.forms["createNewEduForm"]["eduDescription"].value;
        
        setEducationInfo([...educationInfo, 
            {
                id : educationInfo.length,
                name : eduName,
                startDate : eduStartDate,
                endDate : eduEndDate,
                degree : eduDegree,
                location : eduLocation,
                description : eduDescription
            }])
    }

   




    return (
    <div className='educationCardDiv'>

    <div className="previewEduSection">
        <h2>Education</h2>
        <button
        className='expandBtn'
        onClick={() => setEduToggle(!eduToggle)}
        >
        {eduToggle ? "Collapse" : "Expand"}
        </button>
    </div>
    
    <div className="mainEduSection"
    style={{
        height : eduToggle && !newEduToggle ? "auto" : "0px",
       
    }}
    >

    {educationInfo.map(education => 
        <div
        className='customEduCard'
        key={education.id}
        >
            <h2>{education.name} {education.id}</h2>
            
        </div>
    )}
    <button 
    className='addNewEduBtn'
    onClick={
        () => {
            setNewEduToogle(!newEduToggle);
        }
    }
    >Add Education</button>   
    </div>
    <div 
    className="createEduDiv"
    style={{
        height : newEduToggle ? "auto" : "0px",
       
    }}>
        <form action="" className='createNewEduForm' name='createNewEduForm'>
        <label htmlFor="eduName">School</label>
        <input type="text" id='eduName' className='eduName' placeholder='Enter School or University'/>
        
        <label htmlFor="eduStartDate">Start Date</label>
        <input type="text" id='eduStartDate' className='eduStartDate' placeholder='MM/YYYY'/>
        
        <label htmlFor="eduEndDate">End Date</label>
        <input type="text" id='eduEndDate' className='eduEndDate' placeholder='MM/YYYY'/>
        
        <label htmlFor="eduDegree">Degree</label>
        <input type="text" className='eduDegree' id='eduDegree' placeholder='Enter Field of Study or Degree'/>

        <label htmlFor="eduLocation">Location</label>
        <input type="text" id='eduLocation' className='eduLocation' placeholder='city, country'/>

        <label htmlFor="eduDescription">Description</label>
        <input type="text" id='eduDescription' className='eduDescription' placeholder='Enter brief description (optional)'/>

        <button
        type='button'
        className='eduSumbitBtn'
        onClick={ () =>{
            handleNewEduSubmit();
            setNewEduToogle(!newEduToggle);

        }
            }
        >Submit</button>
        </form>

    </div>
    
    </div>)

}


function JobExperienceCard ({setJobToggle, jobToggle, jobInfo, setJobInfo}){
     
    const [newJobToggle, setNewJobToogle] = useState(false);


    function handleNewJobSubmit (){
        const jobName = document.forms["createNewJobForm"]["jobName"].value;
        const jobStartDate = document.forms["createNewJobForm"]["jobStartDate"].value;
        const jobEndDate = document.forms["createNewJobForm"]["jobEndDate"].value;
        const jobRole = document.forms["createNewJobForm"]["jobRole"].value;
        const jobLocation = document.forms["createNewJobForm"]["jobLocation"].value;
        const jobDescription = document.forms["createNewJobForm"]["jobDescription"].value;
        
        setJobInfo([...jobInfo, 
            {
                id : jobInfo.length,
                name : jobName,
                startDate : jobStartDate,
                endDate : jobEndDate,
                role : jobRole,
                location : jobLocation,
                description : jobDescription
            }])
    }




    return (
    <div className='jobCardDiv'>

    <div className="previewJobSection">
        <h2>Work Experince</h2>
        <button
        className='expandJobBtn'
        onClick={() => setJobToggle(!jobToggle)}
        >
        {jobToggle ? "Collapse" : "Expand"}
        </button>
    </div>
    
    <div className="mainJobSection"
    style={{
        height : jobToggle && !newJobToggle ? "auto" : "0px",
       
    }}
    >

    {jobInfo.map(job => 
        <div
        key= {job.id}
        className='customEduCard'
        
        >
            <h2>{job.name} {job.id}</h2>
            
        </div>
    )}
    <button 
    className='addNewJobBtn'
    onClick={
        () => {
            setNewJobToogle(!newJobToggle);
        }
    }
    >Add Work</button>   
    </div>
    <div 
    className="createJobDiv"
    style={{
        height : newJobToggle ? "auto" : "0px",
       
    }}>
        <form action="" className='createNewJobForm' name='createNewJobForm'>
        <label htmlFor="jobName">Company</label>
        <input type="text" id='jobName' className='jobName' placeholder='Enter Company'/>
        
        <label htmlFor="jobStartDate">Start Date</label>
        <input type="text" id='jobStartDate' className='jobStartDate' placeholder='MM/YYYY'/>
        
        <label htmlFor="jobEndDate">End Date</label>
        <input type="text" id='jobEndDate' className='jobEndDate' placeholder='MM/YYYY'/>
        
        <label htmlFor="jobRole">Role</label>
        <input type="text" className='jobRole' id='jobRole' placeholder='Enter Role'/>

        <label htmlFor="jobLocation">Location</label>
        <input type="text" id='jobLocation' className='jobLocation' placeholder='city, country'/>

        <label htmlFor="jobDescription">Description</label>
        <input type="text" id='jobDescription' className='jobDescription' placeholder='Enter brief description (optional)'/>

        <button
        type='button'
        className='jobSumbitBtn'
        onClick={ () =>{
            handleNewJobSubmit();
            setNewJobToogle(!newJobToggle);

        }
            }
        >Submit</button>
        </form>

    </div>
    
    </div>)

}
