import Toplevel from "./components/Top/Toplevel";
import Introduction from "./components/Intro/Introduction";
import Skill from "./components/Skillset/Skill";
import Project from "./components/Projects/Project";
import Contact from "./components/Contackpage/Contact";
import Customers from "./components/Customer/Customers";
import "./app.scss";
import { useState } from "react";
import Menubutton from "./components/Menubutton/Menubutton";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Toplevel menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menubutton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="maincontent">
        <Introduction />
        <Skill />
        <Project />
        <Customers />
        <Contact />
      </div>
    </div>
  );
}

export default App;
