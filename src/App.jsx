import React, { useState } from 'react';

function App() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const commands = [
    { cmd: "docker pull node:18-alpine", desc: "1. Pull the official lightweight Node image" },
    { cmd: "docker build -t hello-docker-react .", desc: "2. Build an image using the Dockerfile" },
    { cmd: "docker run -p 3000:80 hello-docker-react", desc: "3. Run your new containerized React app" }
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="container">
      <div className="hero-glass">
        <div className="glow"></div>
        <div className="content">
          <div className="logo-container">
            <svg 
              className="docker-logo" 
              viewBox="0 0 24 24" 
              fill="var(--primary-color)" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.029 9.94a1.88 1.88 0 0 0-.29-.68 1.83 1.83 0 0 0-.58-.5 1.95 1.95 0 0 0-1.42-.23c-.31.06-.59.18-.83.35-.11-.2-.25-.37-.41-.5a1.86 1.86 0 0 0-1.3-.4c-.31.05-.6.18-.84.36-.12-.2-.26-.37-.42-.5a1.86 1.86 0 0 0-1.3-.4c-.32.06-.61.18-.85.36-.12-.21-.26-.39-.43-.52a1.86 1.86 0 0 0-2.18-.08c-.28.16-.5.39-.63.66a5.53 5.53 0 0 0-2.31-1.3 5.17 5.17 0 0 0-2.45-.15A5.8 5.8 0 0 0 .58 9.94c-.06.27-.08.56-.04.83a5.5 5.5 0 0 0 2.45 3.93 7.85 7.85 0 0 0 4.14 1.15h.06c1.3.02 2.58-.23 3.77-.73a7.84 7.84 0 0 0 4.2-3.17c.56-.46 1.05-1.02 1.44-1.63a3.57 3.57 0 0 0 .86.53 4 4 0 0 0 1.25.2h.06c.4-.01.78-.1 1.14-.27.35-.18.65-.43.89-.74.2-.28.34-.6.4-.94zM16.48 3.5v2h-2v-2h2zm-2.5 0v2h-2v-2h2zm-2.5 0v2h-2v-2h2zm-2.5 0v2h-2v-2h2zM3.48 5.5v2h-2v-2h2zm13 2.5v2h-2v-2h2zm-2.5 0v2h-2v-2h2zm-2.5 0v2h-2v-2h2zm-2.5 0v2h-2v-2h2z" />
            </svg>
          </div>
          <h1>Hello, Docker!</h1>
          <p className="subtitle">
            Welcome to the containerized side. You've successfully built a beautiful React app and deployed it using Docker. Look how fast and lightweight it is!
          </p>

          <div className="commands-container">
            {commands.map((c, i) => (
              <div 
                className="command-card" 
                key={i}
                onClick={() => handleCopy(c.cmd, i)}
              >
                <div>
                  <div className="cmd-text">{c.cmd}</div>
                  <div className="cmd-desc">{c.desc}</div>
                </div>
                <button className="copy-btn" aria-label="Copy command">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {copiedIndex === i ? (
                      <path d="M20 6L9 17l-5-5" color="#10b981"/>
                    ) : (
                      <>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Explore Docker Docs
          </a>
        </div>
      </div>

      <div className="features">
        <div className="feature-box">
          <h3>📦 Isolated</h3>
          <p>Runs perfectly on any machine without worrying about local dependencies or version mismatches.</p>
        </div>
        <div className="feature-box">
          <h3>⚡️ Lightning Fast</h3>
          <p>Instantly spin up containers and iteration loops using Docker's powerful build cache.</p>
        </div>
        <div className="feature-box">
          <h3>🚢 Deploy anywhere</h3>
          <p>Once your image is built, you can run it securely on AWS, GCP, Azure, or your own server.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
