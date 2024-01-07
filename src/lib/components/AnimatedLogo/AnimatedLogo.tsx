import classNames from 'classnames';
import styles from './AnimatedLogo.module.css';

export interface Props {
  radius?: string;
  time?: string;
  displacement?: string;
  shadow?: string;
  shadowed?: boolean;
  active?: boolean;
}

export function AnimatedLogo({
  time = '10s',
  radius = '50vmin',
  displacement = '2.5%',
  shadow = '10vh',
  shadowed = false,
  active = false,
}: Props) {
  return (
    <>
      <div
        className={classNames(styles.circles, {
          [styles.circles_shadowed]: shadowed,
          [styles.circles_active]: active,
        })}
        style={
          {
            '--spin-time': time,
            '--circle-size': radius,
            '--circle-stroke': `calc(${radius} * 0.085)`,
            '--circle-stroke-hover': `calc(${radius} * 0.105)`,
            '--circle-stroke-active': `calc(${radius} * 0.5)`,
            '--displacement': displacement,
            '--shadow-size': shadow,
            '--shadow-opacity': 0.35,
            '--transition-duration': '0.2s',
            '--transition-timing-function': 'ease-in-out',
          } as React.CSSProperties
        }
      >
        <div className={classNames(styles.circle, styles.first)}></div>
        <div className={classNames(styles.circle, styles.second)}></div>
        <div className={classNames(styles.circle, styles.third)}></div>
      </div>
    </>
  );
}
