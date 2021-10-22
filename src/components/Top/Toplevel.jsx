import "./toplevel.scss";

const Toplevel = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"toplevel " + (menuOpen && "active")}>
      <div className="topcontainer">
        <div className="leftside">
          <div className="leftname">
            <a href="#intro">Art.</a>
          </div>
          <div className="leftitems">
            <div className="email">
              <i class="bi bi-envelope-fill"></i>
              <span className="mailspace">ramesh@gmail.com</span>
            </div>
            <div className="phone">
              <i class="bi bi-telephone-fill"></i>
              <span className="phonenumber">+91-8976245760</span>
            </div>
          </div>
        </div>
        <div className="rightside">
          <div className="contactcontainer">
            <i class="bi bi-person-lines-fill"></i>
            <span className="contactspace">
              <a href="#contact">Contact Me.</a>
            </span>
          </div>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Toplevel;
