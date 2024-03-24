import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathComponentProps {
  formula: string;
}

const MathComponent: React.FC<MathComponentProps> = ({ formula }) => {
  const html = katex.renderToString(formula, {
    throwOnError: false
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MathComponent;
