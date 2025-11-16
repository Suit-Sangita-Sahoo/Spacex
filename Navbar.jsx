import "./Navbar.css"

const Navbar = ({ type }) => {
  return (
    <div>
      <nav className={`navbar ${type}`}>
        <div className="logo"><path class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z">SPACEX</path>
</div>
        <div id="list">
        <ul>
          <li>FALCON9</li>
          <li>FALCONHEAVY</li>
          <li>DRAGON</li>
          <li>STARSHIP</li>
          <li>HUMANSPACELIGHT</li>
          <li>STARSHIELD</li>
          <li>STARLINK</li>
        </ul>
        </div>
        <div id="shop"><p id="text">SHOP </p><p><b><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></b></p></div>
      </nav>
    </div>
  );
};

export default Navbar;
