import { useState } from 'react'
const sideBarSection = document.querySelector(".sideBarSection");



export default function DetailsLayout () {
    return (
        <PersonalDetailsCard/>
    )

}

function PersonalDetailsCard () {
    
    const [fullName, fullNameSet] = useState("");
    const [email, emailSet] = useState("");
    const [phoneNumber, phoneNumberSet] = useState("");
    const [address, addressSet] = useState("");
    
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

    }


    return (
        <>

        <h1>Hey</h1>
        <form name="detailsForm" className='detailsForm' action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input type='text' id="fullName" name="fullName"></input>

            <label htmlFor="email">Email: </label>
            <input type='text' id="email" name="email"></input>

            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type='text' id="phoneNumber" name="phoneNumber"></input>

            <label htmlFor="address">Address: </label>
            <input type='text' id="address" name="address"></input>

            <button type="submit">Add To Cv</button>
        </form>
        
       
        </>
    )




}

function ReusableExperienceCard () { // Will be used for both work and eduction experience || WIll Be Expandable


}