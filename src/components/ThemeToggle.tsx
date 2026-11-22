import type { Theme } from '../types';
export function ThemeToggle({theme,toggleTheme}:{theme:Theme,toggleTheme:()=>void}) {
  return <button className="theme-toggle icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
    <span aria-hidden="true">{theme === 'dark' ? '☀' : '◐'}</span>
  </button>;
}
