import Footer from "./Footer";
import Navbar from "./Navbar"
import "./SpaceChild.css";

const SpaceChild=({item})=>{
  return(
    <section className="image-section">
        <img src={item.imgSrc} alt={item.mainHeading} />
        <div className="overlay"></div>

        {/* <Navbar  type="solid"/> */}
        <div className="text-content">
            <h3>{item.subHeading}</h3>
            <h1>{item.mainHeading}</h1>
            <button>{item.btnText}</button>
        </div>
        <Footer/>
    </section>
  )  
}

export default SpaceChild