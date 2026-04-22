import DetailsLayout from './detailsLayout.jsx'
import CvLayout from './cvLayout.jsx'
import { useState } from 'react'

export default function PageLayout () {
    
    
    const [fullName, fullNameSet] = useState("");
    const [email, emailSet] = useState("");
    const [phoneNumber, phoneNumberSet] = useState("");
    const [address, addressSet] = useState("");

    const [jobToggle, setJobToggle] = useState(false);
    const [eduToggle, setEduToggle] = useState(false);
    // Job / Education Use States
    const [educationInfo, setEducationInfo] = useState([]);
    const [jobInfo, setJobInfo] = useState([]);

   function renderExampleCv(){
    fullNameSet("John Doe");
    emailSet("johndoe@hotmail.com");
    phoneNumberSet("123456789");
    addressSet("64 Zoo Lane");

    setEducationInfo([ 
        {
            name : "University of West London",
            startDate : "01/2022",
            endDate : "01/2025",
            degree : "Computer Science",
            location : "London",
            description : "Completed a three year long cs degree in which learned a lot of valuable skills"
        },
        {
            name : "Queen Mary university",
            startDate : "01/2026",
            endDate : "01/2027",
            degree : "Advance Computer Science",
            location : "London",
            description : "Completed a one year long cs degree in which learned a lot of valuable skills"

        }]
    )
    setJobInfo([
        {
            name : "Amazon",
            startDate : "01/2030",
            endDate : "01/2032",
            role : "Software Enginner",
            location : "London",
            description : "Made it to Faaaaaaaaaaaaaaaaaang"
        },
        {
            name : "Google",
            startDate : "01/2032",
            endDate : "01/2034",
            role : "Software Enginner",
            location : "London",
            description : "A hardworking Google Employee"
        }
    ]
    )

   }

   function clearCv () {
    fullNameSet("");
    emailSet("");
    phoneNumberSet("");
    addressSet("");
    setJobInfo([]);
    setEducationInfo([]);
   }




    return (
        <div className="pageContent">
            <div className="sideBarSection">
                
                <div className="detailsBtnSection">
                    <button 
                    className="clearCvBtn"
                    onClick={clearCv}>Clear Cv</button>
                    <button 
                    className="populateCv"
                    onClick={renderExampleCv}>Load Example</button>
                </div>
                <DetailsLayout 
                fullNameSet={fullNameSet} emailSet={emailSet} 
                phoneNumberSet={phoneNumberSet} addressSet={addressSet} 
                setEduToggle={setEduToggle} eduToggle={eduToggle}
                setEducationInfo={setEducationInfo} educationInfo={educationInfo}
                jobInfo={jobInfo} setJobInfo={setJobInfo}
                jobToggle={jobToggle} setJobToggle={setJobToggle}
                 />
            </div>
            <div className="cvSection">
                
                <CvLayout fullName={fullName} email={email} phoneNumber={phoneNumber} address={address} educationInfo={educationInfo} jobInfo={jobInfo} />
            </div>
        </div>
    )
}