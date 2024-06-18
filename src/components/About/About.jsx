import './About.css';
function About() {
  const ve='>';
  return (
    <div><section id="about">
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
            <h1 className="ahead">{ve}WhoAmI?</h1>
            <p className="acont">Hey there! Im Rudraksh Mahajan, a B.Tech student in Computer Science and Engineering with a knack for full stack development. From Java and C++ to HTML, CSS, JavaScript, Node.js, and MongoDB, I love crafting sleek, efficient web applications. My tech journey started with a simple curiosity and has evolved into a passion for exploring new languages and technologies. When Im not coding, youll find me behind a camera, capturing the world through my lens and adding a creative flair to my projects. Im all about continuous learning and self-improvement, aiming to be a better developer every day. Based in [Your Location], Im excited to collaborate on innovative projects and connect with fellow tech enthusiasts. Lets build something amazing together!
            </p>
        </div>
        </div>
</section></div>
  )
}

export default About