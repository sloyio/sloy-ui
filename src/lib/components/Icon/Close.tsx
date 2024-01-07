import { IconBaseProps } from './Icon.types';

export function Close({ color }: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 17.12 17.12"
    >
      <path
        d="M1.06,1.06l15,15m0-15-15,15"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={3}
      />
    </svg>
  );
}
