import Navbar from "./Navbar"
import "./Video.css";

const  Video=({videoData})=>{

    return(
        <section className="video-section">
            <video src={videoData.videoSrc} autoPlay loop muted></video>
            <div className="overlay"></div>

            <Navbar type="transparent" />
            <div className="text-content">
                <h3>{videoData.subHeading}</h3>
                <h1>{videoData.mainHeading}</h1>
                <button>{videoData.btnText}</button>
            </div>
        </section>
    )
}
export default Video