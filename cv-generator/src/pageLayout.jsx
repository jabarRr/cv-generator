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
    const [educationInfo, setEducationInfo] = useState([{
        id: 0,
        name: "University Of West London",
        startDate: "01/2021",
        endDate: "01/2024",
        degree: "Comp Scie",
        location: "London",
        description: "Completed A Three year degree that greatly helped increase my skillset"
    }]);
    const [jobInfo, setJobInfo] = useState([]);


    return (
        <div className="pageContent">
            <div className="sideBarSection">
                <h1>Details</h1>
                <div className="detailsBtnSection">
                    <button className="clearCvBtn">Clear Cv</button>
                    <button className="populateCv">Load Example</button>
                </div>
                <DetailsLayout 
                fullNameSet={fullNameSet} emailSet={emailSet} 
                phoneNumberSet={phoneNumberSet} addressSet={addressSet} 
                setEduToggle={setEduToggle} eduToggle={eduToggle}
                setEducationInfo={setEducationInfo} educationInfo={educationInfo}
                jobInfo={jobInfo} setJobInfo={setJobInfo}
                jobToggle={jobToggle} setJobToggle={setJobToggle} />
            </div>
            <div className="cvSection">
                
                <CvLayout fullName={fullName} email={email} phoneNumber={phoneNumber} address={address} educationInfo={educationInfo} jobInfo={jobInfo}/>
            </div>
        </div>
    )
}