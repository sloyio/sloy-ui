import styled from 'styled-components';
import DarkMode from '../Icon/DarkMode';
import LightMode from '../Icon/LightMode';

interface Props {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

const Button = styled.button`
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(10, 13, 22, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.15s ease-out;

  @media (hover) {
    &:hover {
      background-color: rgba(96, 131, 255, 0.2);
    }
  }
`;

export default function ThemeSwitcher({ theme, setTheme }: Props) {
  return (
    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <DarkMode /> : <LightMode />}
    </Button>
  );
}
