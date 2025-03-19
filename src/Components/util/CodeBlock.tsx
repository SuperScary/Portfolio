import { useEffect, useState } from "react";
import { CopyIcon, CheckIcon, PlayIcon } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Change theme if needed
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import './prism-languages/gecco';
import '../../Styles/CodeBlock.css';
import '../../Styles/theme.css';
import '../../Styles/lang/gecco-syntax.css';

interface CodeBlockProps {
    title?: string;
    code: string;
    language?: string; // Optional
    width?: number;
    canCopy?: boolean;
    canRun?: boolean;
}

// Language Detection Function
const detectLanguage = (code: string): string => {
    if (/^#!/.test(code)) return "bash"; // Shebang line
    if (/^\s*import\s|^\s*export\s|function\s*\w*\(/.test(code))
        return "javascript"; // JS/TS
    if (/^\s*(class|def)\s+\w+\(/.test(code)) return "python"; // Python
    if (/^\s*#include\s+["<][a-zA-Z0-9_.]+[">]/.test(code)) return "cpp"; // C++
    if (/^\s*public\s+class\s+\w+\s*\{/.test(code)) return "java"; // Java
    if (/^\s*(package|use|fn\s+\w+)/.test(code)) return "rust"; // Rust
    if (/^\s*<!DOCTYPE\s+html>/.test(code)) return "html"; // HTML
    if (/^\s*body\s*\{|^\s*\.?\w+\s*\{/.test(code)) return "css"; // CSS
    if (/^\s*\$/.test(code)) return "bash"; // Shell/Bash
    if (/^\s*(let|const|var)\s+\w+\s*=/.test(code)) return "gecco"; // Gecco
    return "plaintext"; // Default
};

const capFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

export function CodeBlock({
    title = "Code",
    code,
    language,
    width = 750,
    canCopy = true,
    canRun = true,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const [outputCopied, setOutputCopied] = useState(false);
    const [output, setOutput] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [highlightedCode, setHighlightedCode] = useState("");

    // Automatically detect language if not provided
    const finalLanguage = language || detectLanguage(code);
    
    // Split code into lines for rendering
    const codeLines = code.split('\n');

    useEffect(() => {
        try {
            require(`prismjs/components/prism-${finalLanguage}`);
        } catch (err) {
            console.warn(
                `PrismJS: Language '${finalLanguage}' is not recognized. Falling back to plaintext.`
            );
        }

        // Highlight each line separately
        const highlightedLines = codeLines.map(line => 
            Prism.highlight(
                line,
                Prism.languages[finalLanguage] || Prism.languages["plaintext"],
                finalLanguage
            )
        );
        
        setHighlightedCode(highlightedLines.join('\n'));

    }, [code, finalLanguage, codeLines]);

    // Copy function for code
    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    // Copy function for output
    const handleCopyOutput = () => {
        if (!output && !error) return;
        navigator.clipboard.writeText(error || output || "");
        setOutputCopied(true);
        setTimeout(() => setOutputCopied(false), 1500);
    };

    // Run function for JavaScript
    const handleRun = () => {
        if (finalLanguage !== "javascript") return; // Only allow JS execution

        setError(null);
        setOutput(null);

        try {
            let capturedOutput = "";
            const originalConsoleLog = console.log;

            // Capture console.log output
            console.log = (...args) => {
                capturedOutput += args.join(" ") + "\n";
            };

            // Execute code
            const result = new Function(code)(); // Executes JavaScript code

            // Restore console.log
            console.log = originalConsoleLog;

            // Update output
            setOutput(
                capturedOutput ||
                    (result !== undefined ? String(result) : "No output")
            );
        } catch (err) {
            setError(`Error: ${err}`);
        }
    };

    return (
        <div className="code-block-container" style={{ width: `${width}px` }}>
            {/* Header */}
            <div className="code-block-header">
                <span className="code-block-title">
                    {title !== "Code" ? title : ""}{" "}
                    <span className="code-block-language">
                        {capFirstLetter(finalLanguage)}
                    </span>
                </span>
                <div className="code-block-buttons">
                    {finalLanguage === "javascript" && canRun && (
                        <button
                            onClick={handleRun}
                            className="code-block-run-button"
                        >
                            <PlayIcon size={16} />
                            Run
                        </button>
                    )}
                    {canCopy && (
                        <button
                            onClick={handleCopyCode}
                            className="code-block-copy-button"
                        >
                            {copied ? (
                                <CheckIcon size={16} />
                            ) : (
                                <CopyIcon size={16} />
                            )}
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    )}
                </div>
            </div>

            {/* Code Block */}
            <div className="code-block-content">
                {/* Line Numbers and Code Section side by side */}
                <table className="code-block-table">
                    <tbody>
                        {highlightedCode.split('\n').map((line, i) => (
                            <tr key={i} className="code-block-row">
                                <td className="code-block-line-number">{i + 1}</td>
                                <td className="code-block-line-code">
                                    <div dangerouslySetInnerHTML={{ __html: line || ' ' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Output Section */}
            {output !== null || error !== null ? (
                <div className="code-block-output">
                    <div className="code-block-output-header">
                        <strong>Output:</strong>
                        <button
                            onClick={handleCopyOutput}
                            className="code-block-copy-button"
                        >
                            {outputCopied ? (
                                <CheckIcon size={16} />
                            ) : (
                                <CopyIcon size={16} />
                            )}
                            {outputCopied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <pre className={`code-block-output-content ${
                        error ? "code-block-output-error" : "code-block-output-success"
                    }`}>
                        {error || output}
                    </pre>
                </div>
            ) : null}
        </div>
    );
}
