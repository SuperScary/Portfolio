import React from 'react';
import '../Styles/About.css';
import { FaDev, FaGithub, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <h1><img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="wave" /></h1>
      <p>I'm SuperScary, a passionate full-stack engineer and programming language designer with a deep love for low-level systems, software architecture, and language development. I thrive on solving complex problems, optimizing performance, and building scalable, high-quality software solutions.</p>
      <h3>Tech Stack & Expertise</h3>
      <h4>🖥 Backend & Systems Engineering</h4>
      <p>I have extensive experience working with C, C++, Java, and Python, allowing me to build everything from high-performance backend services to low-level system utilities. I enjoy writing efficient, maintainable, and scalable code while leveraging multi-threading, concurrency, and optimization techniques.</p>
      <ul>
        <li>Low-level systems programming in C/C++</li>
        <li>Scalable backend development with Java, Python</li>
        <li>Building and optimizing databases, working with PostgreSQL, MySQL, Redis</li>
        <li>API development using REST, gRPC, and WebSockets</li>
        <li>Microservices architecture, distributed systems, and event-driven development</li>
      </ul>
      <h4>💻 Frontend Development</h4>
      <p>Though my focus leans towards backend and systems, I also work with modern frontend technologies to create seamless user experiences. I have experience with:</p>
      <ul>
        <li>React, Vue.js, and Svelte for dynamic web applications</li>
        <li>State management with Redux, Zustand, and Vuex</li>
        <li>Web performance optimizations and accessibility improvements</li>
        <li>Bridging low-level systems with modern UIs for intuitive user experiences</li>
      </ul>
      <h3>Programming Language Design & Compiler Development</h3>
      <h4>🦎 Gecco</h4>
      <p>A statically-typed, high-performance programming language designed for system-level development with a focus on safety and concurrency. Gecco emphasizes low-level control while providing a modern syntax and compile-time optimizations.</p>
      <h4>⚡ Servo</h4>
      <p>A lightweight, JIT-compiled scripting language inspired by Python and Lua but designed for embedded systems and game development. Servo is built for speed, extensibility, and seamless C/C++ interoperability.</p>
      <h4>My experience in compiler construction includes:</h4>
      <ul>
        <li>Lexer and parser design using recursive descent and PEG grammars</li>
        <li>Abstract Syntax Trees (AST) traversal and Intermediate Representation (IR) generation</li>
        <li>LLVM integration for Just-In-Time (JIT) compilation and performance optimization</li>
        <li>Garbage collection strategies, type inference, and memory management techniques</li>
      </ul>
      <h3>DevOps & Security</h3>
      <p>I'm deeply interested in secure software development and infrastructure. I integrate best practices across my projects, including:</p>
      <ul>
        <li>Containerization with Docker & Kubernetes</li>
        <li>CI/CD pipelines using GitHub Actions, Jenkins, and GitLab CI</li>
        <li>Security auditing, static/dynamic code analysis, and fuzz testing</li>
        <li>Reverse engineering, binary exploitation, and malware analysis</li>
      </ul>
      <p>🔍 Always open to collaborations on language development, compiler engineering, and performance tuning!</p>
      <p>🌍 I'm based in Arizona, United States</p>
      <p>🚀 I'm constantly refining Gecco and Servo, working on new language features, performance optimizations, and compiler improvements. I also contribute to low-level system utilities, backend optimizations, and security tools in my free time.</p>
      <h3>Skills</h3>
      <div className="skills-container">
        <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" /></a>
        <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" width="36" height="36" alt="C++" /></a>
        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" width="36" height="36" alt="C#" /></a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
        <a href="https://go.dev/doc/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg" width="36" height="36" alt="Go" /></a>
        <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" /></a>
        <a href="https://www.rust-lang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/rust-colored.svg" width="36" height="36" alt="Rust" /></a>
        <a href="https://developer.apple.com/swift/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/swift-colored.svg" width="36" height="36" alt="Swift" /></a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="36" height="36" alt="VS Code" /></a>
        <a href="https://www.xcode.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xcode.svg" width="36" height="36" alt="XCode" /></a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" /></a>
        <a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg" width="36" height="36" alt="Material UI" /></a>
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="36" height="36" alt="Vite" /></a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg" width="36" height="36" alt="Fast API" /></a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a>
        <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg" width="36" height="36" alt="Photoshop" /></a>
        <a href="https://solana.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/solana-colored.svg" width="36" height="36" alt="Solana" /></a>
        <a href="https://cloud.google.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" width="36" height="36" alt="Google Cloud" /></a>
        <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" width="36" height="36" alt="Amazon Web Services" /></a>
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" /></a>
        <a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" width="36" height="36" alt="Linux" /></a>
        <a href="https://apple.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/macos-colored.svg" width="36" height="36" alt="MacOS" /></a>
        <a href="https://www.raspberrypi.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/raspberrypi-colored.svg" width="36" height="36" alt="Raspberry Pi" /></a>
      </div>
      <h3>Socials</h3>
      <div className="socials-container">
        <a href="https://www.dev.to/superscary" target="_blank" rel="noreferrer" aria-label="Dev.to">
          <FaDev size={32} />
        </a>
        <a href="https://www.github.com/SuperScary" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub size={32} />
        </a>
        <a href="https://www.x.com/supscary" target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter size={32} />
        </a>
      </div>
      <h3>Support Me</h3>
      <ul className="support-container">
        <li><a href="https://www.buymeacoffee.com/superscary"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="150" alt="Buy Me A Coffee" /></a></li>
      </ul>
      <div className="badges-container">
        <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/made-with-out-pants.svg" alt="Made with out pants" /></a>
        <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/works-on-my-machine.svg" alt="Works on my machine" /></a>
        <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with love" /></a>
      </div>
    </div>
  );
};

export default About;
