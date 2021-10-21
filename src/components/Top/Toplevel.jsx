import "./toplevel.scss";

const Toplevel = () => {
  return (
    <div className="toplevel">
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
          <i class="bi bi-person-lines-fill"></i>
          <span className="contactspace">
            <a href="#contact">Contact Me.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toplevel;
