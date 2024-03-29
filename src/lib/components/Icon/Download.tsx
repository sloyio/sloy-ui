import { IconBaseProps } from './Icon.types';

export function Download({ color }: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M8 6.667v4m0 0 2-1.334m-2 1.333L6 9.333M2 4v7.2c0 .747 0 1.12.145 1.405.128.251.332.455.583.583.285.145.658.145 1.403.145h7.738c.745 0 1.118 0 1.402-.145.252-.128.456-.332.584-.583C14 12.32 14 11.946 14 11.2V6.133c0-.747 0-1.12-.145-1.405a1.334 1.334 0 0 0-.583-.583C12.987 4 12.613 4 11.867 4H8M2 4h6M2 4a1.333 1.333 0 0 1 1.333-1.333h2.45c.326 0 .49 0 .643.036.136.034.266.087.385.16.135.083.25.198.48.429L8 4"
      />
    </svg>
  );
}
