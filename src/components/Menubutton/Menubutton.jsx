import "./menubutton.scss";
const Menubutton = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menubar " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro"> Intro</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skill"> Our Services</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#project"> Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#customer"> Costomer Reviews</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact"> Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Menubutton;
