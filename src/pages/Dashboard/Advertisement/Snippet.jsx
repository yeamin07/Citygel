// import React, { useState, useRef } from 'react';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import {  dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// //import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism'

// const Snippet = () => {
//   const [code, setCode] = useState(`
//     const fib = (n) => {
//       if (n <= 1) {
//         return n;
//       }
//       return fib(n - 1) + fib(n - 2);
//     };
//   `);

//   const textareaRef = useRef(null);

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onKeyDown={() => textareaRef.current?.focus()}
//       onClick={() => textareaRef.current?.focus()}
//       className="overflow-x-auto relative flex  h-full w-full z-[0] cursor-pointer"
//     >

//       <SyntaxHighlighter
//         language="javascript"
//         style={ dark }
//         customStyle={{ flex: '1' }}
//         >
//         {code}
//         <textarea
//         ref={textareaRef}
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//        className="p-2 text-[15px]"
//       />

//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default Snippet;

import React, { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    <div className="relative flex h-full w-full">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => textareaRef.current?.focus()}
        onClick={() => textareaRef.current?.focus()}
        className="overflow-x-auto cursor-pointer"
        style={{ flex: '1' }}
      >
        <SyntaxHighlighter language="javascript" style={dark}>
          {code}
        </SyntaxHighlighter>
      </div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="absolute top-0 left-0 w-full h-full p-2 text-[15px] text-transparent bg-transparent border-none"
        style={{ zIndex: '-1' }} // Ensure textarea is behind the code
      />
    </div>
  );
};

export default Snippet
