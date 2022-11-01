import { useEffect, useState } from "react";
import styled from "styled-components";

import type { FC } from "react";

type Props = {
  value: number;
};

const CircleChart: FC<Props> = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, []);

  const radius = 120;
  const stroke = 14;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Wrapper>
      <svg height={radius * 2} width={radius * 2}>
        <BackgroundCircle
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          stroke-width={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <Circle
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          stroke-width={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <Label $size={radius * 2}>{progress}%</Label>
    </Wrapper>
  );
};

export default CircleChart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Circle = styled.circle`
  stroke: #49b05d;
  fill: transparent;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s ease-in;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const BackgroundCircle = styled.circle`
  stroke: #def0db;
  fill: transparent;
  stroke-linecap: round;
  stroke-dashoffset: 0;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const Label = styled.div<{ $size: number }>`
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$size && `width: ${props.$size}px; height: ${props.$size}px;`}
`;
