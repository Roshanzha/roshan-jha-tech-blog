
import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="rounded-md overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-xs font-medium">{language}</span>
        <button 
          className="text-xs text-gray-400 hover:text-white transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(code);
            // In a real app, you'd add a toast notification here
          }}
        >
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
