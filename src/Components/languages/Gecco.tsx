import React from 'react';
import { motion } from 'framer-motion';
import ExternalLinkIcon from '../ExternalLinkIcon';
import GeccoLogo from '../../assets/Gecco.svg';
import { CodeBlock } from '../util/CodeBlock';
import '../../Styles/Gecco.css';

const Gecco: React.FC = () => {
  const geccoExample = `// Did you know? Gecco was created out of frustrations with C, Rust, and Go
// It simplifies memory management and removes the need for static typing
scope main;

include std;

exp constant class Main {
    exp def func main(args: String[]) -> Void {
        var message: any = "Hello, Gecco!"; // Gecco is dynamically typed 
        print message;
    }
}

let runner = Main.main(null);`;

  return (
    <div className="gecco-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="gecco-hero"
      >
        <img src={GeccoLogo} alt="Gecco Programming Language" className="gecco-logo" />
        <h1>Gecco</h1>
        <p className="subtitle">A high-level, object-oriented programming language bridging performance and readability</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="gecco-features"
      >
        <div className="feature-card">
          <h3>Readable Syntax</h3>
          <p>Clean, intuitive code that enhances collaboration and long-term maintainability</p>
        </div>
        <div className="feature-card">
          <h3>Performance-Oriented</h3>
          <p>Compiles to optimized machine code for maximum efficiency</p>
        </div>
        <div className="feature-card">
          <h3>Safety Without Compromise</h3>
          <p>Strict typing and compile-time checks without sacrificing performance</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="gecco-code-example"
      >
        <h2>Example Code</h2>
        <CodeBlock
          code={geccoExample}
          language="gecco"
          canRun={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="gecco-cta"
      >
        <h2>Build the Future with Gecco</h2>
        <div className="cta-buttons">
          <a href="https://gecco.dev/download" className="cta-button primary">
            Download Gecco
          </a>
          <a href="https://gecco.dev" className="cta-button secondary">
            Documentation
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Gecco; 