import "./styles.css";

const projects = [
  {
    title: "Neon Spotify Player",
    tech: ["React", "Hooks", "State"],
    description:
      "Audience-based UI with timed updates using React Hooks. Input size → dynamic message, emoji, and background.",
    demoUrl: "https://YOUR-VIOLIN-APP-URL", // 後で差し替え
    codeUrl: "https://github.com/YOUR_GH/violin-app", // 後で差し替え
  },
];

export default function App() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Reiko — Front-End Developer</h1>
        <p>
          React / JavaScript / UI with vibes. Based in Japan, shipping to the
          world.
        </p>
        <a className="btn" href="#projects">
          View Projects
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="actions">
                <a
                  className="link"
                  href="https://neon-spotify-player.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="link"
                  href="https://github.com/reikonoto/neon-spotify-player"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About</h2>
        <p>
          Hi, I'm Reiko — a front-end developer based in Japan. I love creating
          smooth, vibrant interfaces and playful user experiences with React &
          JavaScript. Currently exploring UI animation, web audio, and creative
          coding.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>
          DM me on{" "}
          <a
            className="link"
            href="https://github.com/reikonoto"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          or 📩email: <span className="mono">hello.reikonoto@gmail.com</span>
        </p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Reiko</footer>
    </main>
  );
}
