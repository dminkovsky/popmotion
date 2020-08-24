import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { animate, inertia } from 'popmotion';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #09f;
  border-radius: 10px;
`;

export function Keyframes() {
  const ref = useRef();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const controls = animate({
      type: 'spring',
      damping: 25,
      stiffness: 120,
      from: opacity ? 0 : 1,
      to: opacity,
      onUpdate: v => {
        console.log(v);
        ref.current.style.opacity = v;
        if (v > 20) controls.stop();
      }
    });
    // animate({
    //   from: 0,
    //   to: 300,
    //   type: 'spring',
    //   repeat: Infinity,
    //   repeatType: 'mirror',
    //   onUpdate: v => {
    //     ref.current.style.transform = `translateX(${v}px)`;
    //   }
    // });
  }, [opacity]);

  return <Box ref={ref} onClick={() => setOpacity(opacity ? 0 : 1)} />;
}