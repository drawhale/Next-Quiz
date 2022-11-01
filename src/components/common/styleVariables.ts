import { css } from "styled-components";

export const slideIn = css`
  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    from {
      transform: translate3d(100vw, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const scaleUp = css`
  animation: scaleUp 0.1s ease-in-out;

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;
