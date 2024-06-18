import './Hero.css'

function Hero() {
  const ve='>';
  return (
    <section id='hero'>
        <div className="land">
            <nav className="nb">
                <ul className="nav">
                <li className="nli"><a href="#about">About</a></li>
                <li className="nli"><a href="#skills">Skills</a></li>
                <li className="nli"><a href="#projects">Project</a></li>
                <li className="nli"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="lintro">
            <h1 className="lhead">{ve}Hello World!</h1>
            <h1 className="lhead">{ve}Rudraksh Mahajan</h1>
        </div>
        </div>
    </section>
  )
}

export default Hero