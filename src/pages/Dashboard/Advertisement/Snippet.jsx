import React, { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {  dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism'

const Snippet = () => {
  const [code, setCode] = useState(`
    const fib = (n) => {
      if (n <= 1) {
        return n;
      }
      return fib(n - 1) + fib(n - 2);
    };
  `);

  const textareaRef = useRef(null);

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className="overflow-x-auto relative flex  h-full w-full z-[0]"
    >
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
       className="absolute inset-0 resize-none bg-transparent p-2 font-mono text-transparent caret-white outline-none"
      />
      <SyntaxHighlighter
        language="javascript"
        style={ dark }
        customStyle={{ flex: '1' }}
        
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Snippet;
