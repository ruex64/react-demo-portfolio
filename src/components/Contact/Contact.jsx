import './Contact.css'

function Contact() {
    const ve='>';
  return (
    <div>
        <section id="contact">
    <div className="cont">
        <nav className="nb">
            <ul className="nav">
            <li className="nli"><a href="#about">About</a></li>
            <li className="nli"><a href="#skills">Skills</a></li>
                <li className="nli"><a href="#projects">Project</a></li>
                <li className="nli"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="concont">
            <h1 className="chead">{ve}Contact</h1>
            <h1 className="chead">Hi! 👋🏻 Lets Connect</h1>
            <div className="logo">
                <a href="https://www.linkedin.com/in/ruex64"><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/ruex64/"><i className='bx bxl-github' ></i></a>
                <a href="https://www.instagram.com/ruex64/"><i className='bx bxl-instagram' ></i></a>
            </div>
            
            <p>This site is built by @ruex64</p>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact