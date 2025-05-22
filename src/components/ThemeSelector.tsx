import React from 'react';
import { Sun, Moon, Palette, Zap, Minimize } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'high-contrast', icon: Zap, label: 'High Contrast' },
    { name: 'colorful', icon: Palette, label: 'Colorful' },
    { name: 'minimal', icon: Minimize, label: 'Minimal' },
  ] as const;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 flex flex-col gap-2">
        {themes.map(({ name, icon: Icon, label }) => (
          <button
            key={name}
            onClick={() => setTheme(name)}
            className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${
              theme === name
                ? 'bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100'
                : 'hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
            title={label}
          >
            <Icon size={20} />
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;