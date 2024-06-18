import './Skills.css'

function Skills() {
  const ve='>';
  return (
    <div><section id="skills">
    <div className="abt">
        <nav className="nb">
            <ul className="nav">
                <li className="nli"><a href="#about">About</a></li>
                <li className="nli"><a href="#skills">Skills</a></li>
                <li className="nli"><a href="#projects">Project</a></li>
                <li className="nli"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
            <div className="abtcont">
            <h1 className="ahead">{ve}Skills</h1>
            <div className="skl">
            <i className='bx bxl-mongodb'></i>
            <i className='bx bxl-react' ></i>
            <i className='bx bxl-html5' ></i>
            <i className='bx bxl-css3' ></i>
            <i className='bx bxl-bootstrap' ></i>
            <i className='bx bxl-figma'></i>
            <i className='bx bxl-java'></i>
            <i className='bx bxl-tailwind-css' ></i>
            <i className='bx bxl-python' ></i>
            </div>
            </div>
            </div>
</section></div>
  )
}

export default Skills