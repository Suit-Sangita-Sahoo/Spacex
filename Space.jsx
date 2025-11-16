                                    import SpaceChild from "./SpaceChild";
import Video from "./Video";
import "./Space.css";
import Footer from "./Footer";
const Space=()=>{
const videoData={
    subHeading: "Recent Launch",
    mainHeading: "Starship's Sixth Flight Test",
    btnText: "Rewatch",
    videoSrc: "https://spacex1-clone.netlify.app/assets/starshiplaunch-DGL85-4R.mp4",
}
const data = [
    {
      subHeading: "Recent Launch",
      mainHeading: "SXM-9 Mission",
      btnText: "Watch",
      imgSrc: "https://spacex1-clone.netlify.app/assets/rocket-fire-D5D81tSi.jpg",
    },
    {
      subHeading: "Recent Launch",
      mainHeading: "Starlink Mission",
      btnText: "Rewatch",
      imgSrc: "https://spacex1-clone.netlify.app/assets/stars-DYuU5mOz.jpg",
    },
    {
      subHeading: "Recent Launch",
      mainHeading: "Starlink Mission",
      btnText: "Rewatch",
      imgSrc: "https://spacex1-clone.netlify.app/assets/Starlink-Bruuxwb4.jpg",
    },
    {
      mainHeading: "Advancing Human Spaceflight",
      btnText: "Learn More",
      imgSrc: "https://spacex1-clone.netlify.app/assets/astronaut-PR2OUO69.jpg",
    },
    {
      mainHeading: "TO MAKE LIFE MULTIPLANETARY",
      btnText: "Learn More",
      imgSrc: "https://spacex1-clone.netlify.app/assets/launch-CIKREtYa.jpg",
    }
  ];
return(
    <div>   
      <Video videoData={videoData} />

      {data.map((value, index) => (
        <SpaceChild key={index} item={value} />
      ))}
      <Footer/>
    </div>
)
  
}
export default Space