import profile from '../assets/profile.png'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


function Home() {
  const navigate = useNavigate()

  return (
    <>
      <p id="welcome-message-mobile">Bienvenue dans mon site personnel</p>
      <section className="hero">
        <div className="hero-text">
          <p id="welcome-message">Bienvenue dans mon site personnel</p>
          <h1>Je suis Reda Yaou, étudiant <span style={{ color: "hsl(28, 62%, 49%)" }}>ingénieur généraliste</span>.</h1>
          <p id="description">
            Étant passionné par la programmation et le développement web, je me spécialise actuellement dans l'ingénierie logicielle.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btnA">
              → Voir mes projets
            </Link>
            <a href="/cv.pdf" target="_blank" download className="btnB">
              📄 Télécharger mon CV
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/redayaou/" target="_blank">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/yaoureda" target="_blank">
              💻 GitHub
            </a>
            <a href="mailto:yaoureda24@gmail.com">
              ✉️ Email
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Photo de moi" />
        </div>
      
      </section>
    </>
  )
}

export default Home