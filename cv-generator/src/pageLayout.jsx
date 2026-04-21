import DetailsLayout from './detailsLayout.jsx'


export default function PageLayout () {
    return (
        <div className="pageContent">
            <div className="sideBarSection">
                <h1>Details</h1>
                <div className="detailsBtnSection">
                    <button className="clearCvBtn">Clear Cv</button>
                    <button className="populateCv">Load Example</button>
                </div>
                <DetailsLayout/>
            </div>
            <div className="cvSection">
                <h1>CV</h1>
            </div>
        </div>
    )
}