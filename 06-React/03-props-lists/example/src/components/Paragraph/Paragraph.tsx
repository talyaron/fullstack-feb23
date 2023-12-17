import React, { FC } from "react";

interface ParagraphProps {
  color?: string;
  children?: React.ReactNode;
}

const Paragraph:FC<ParagraphProps> = ({color, children}) => {
  return (
    <p style={{color}}>
      {children ? children : <p>no children</p>}
    </p>
  );
};

export default Paragraph;
