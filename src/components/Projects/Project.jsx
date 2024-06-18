import './Project.css'

function Project() {
    const ve='>';
  return (
    <div>
        <section id="projects">
    <div className="pro">
        <nav className="nb">
            <ul className="nav">
                <li className="nli"><a href="#about">About</a></li>
                <li className="nli"><a href="#skills">Skills</a></li>
                <li className="nli"><a href="#projects">Project</a></li>
                <li className="nli"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="procont">
        <h1 className="phead">{ve}Projects</h1>
        <div className="pcont">
            <div className="project">
                <h3>Node forum/blog backend</h3>
                <p>A simple backend made using node and javascript for a community forum/blog website. The whole project is build using javascript and the database for it is mongodb. The project can be run using PostMan</p>
                <a href="https://github.com/ruex64/node-blog-community"><i className='bx bxl-github' ></i></a>
            </div>
            <div className="project">
                <h3>Js-Recipie App</h3>
                <p>A simple Js based recipie searching app. The whole app is a catalogue of multiple dishes and recipie from world wide. The data is fetched using an API called TheMealDb API.</p>
                <a href="https://github.com/ruex64/JsRecipieApp"><i className='bx bxl-github' ></i></a>
                <a href="https://ruex64.github.io/JsRecipieApp/"><i className='bx bx-link-alt'></i></a>
            </div>
        </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default Project