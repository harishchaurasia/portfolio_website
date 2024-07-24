// src/components/Fade.tsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface FadeProps {
  in: boolean;
  children: React.ReactNode;
  timeout?: number;
}

const Fade: React.FC<FadeProps> = ({ in: inProp, children, timeout = 1000 }) => {
  return (
    <CSSTransition in={inProp} timeout={timeout} classNames="fade" unmountOnExit>
      <div>{children}</div>
    </CSSTransition>
  );
};

export default Fade;
