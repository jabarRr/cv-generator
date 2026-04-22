import { useState } from 'react'
import './index.css'
import './cvLayout.css'
export default function CvLayout ({fullName, email, phoneNumber, address, educationInfo, jobInfo}) {
    return (
        <CvCanvas fullName={fullName} email={email} phoneNumber={phoneNumber} address={address} educationInfo={educationInfo} jobInfo={jobInfo}/>
    )
}

function CvCanvas({fullName, email, phoneNumber, address, educationInfo, jobInfo}){

    function renderEducationList (){
        
        if (jobInfo.length > 0){
            return (
            
            
            educationInfo.map( (education, index) =>
            <div
            key={index}
            className= "educationSectionLs"
            >
                <div className="eduSubSecDiv">
                    <div className="eduDates">
                        {education.startDate} - {education.endDate}
                    </div>
                    <div className="eduLocationDiv">
                        {education.location}
                    </div>
                </div>

                <div className="eduMainSecDiv">
                    <div className="eduNameDiv">
                        {education.name}
                    </div>
                    <div className="eduDegreeDiv">
                        {education.degree}
                    </div>
                    <div className="eduDescriptionDiv">
                        {education.description}
                    </div>
                </div>

            
            </div>
        ))

        }


        
    }

    function renderJobList () {
        return (jobInfo.map( (job, index) =>
            <div
            key={index}
            className= "jobSectionLs"
            >
                <div className="jobSubSecDiv">
                    <div className="jobDates">
                        {job.startDate} - {job.endDate}
                    </div>
                    <div className="jobLocationDiv">
                        {job.location}
                    </div>
                </div>

                <div className="jobMainSecDiv">
                    <div className="jobNameDiv">
                        {job.name}
                    </div>
                    <div className="jobRoleDiv">
                        {job.role}
                    </div>
                    <div className="jobDescriptionDiv">
                        {job.description}
                    </div>
                </div>

            
            </div>
        ))

    }



    return (
        <div className="cvPage">
            <div className="headerSection">
                <div className="headerInfoSection">
                    <div className="headerTitleSection">
                        <div className="nameSection">
                            {fullName}
                        </div>
                    </div>
                    <div className="restOfTheHeader">
                          <div className="emailSection">
                            {email}
                          </div>
                        <div className="phoneNumSection">
                            {phoneNumber}
                        </div>
                        <div className="address">
                            {address}
                        </div>

                    </div>
                  
                
                
                </div>
                <div className="educationSection">
                    <div className="educationHeader">
                        {educationInfo.length > 0 && <h2>Education</h2>}
                    </div>
                    <div className="eduList">
                        {renderEducationList()}
                    </div>

                </div>

                <div className="jobSection">
                    <div className="jobHeader">
                        <h2>Work Experience</h2>
                    </div>
                    <div className="jobList">
                        {renderJobList ()}
                    </div>
                </div>



            </div>
            
        </div>
    )
}

