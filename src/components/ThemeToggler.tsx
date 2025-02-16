'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Sun onClick={() => setTheme('dark')} className='h-[1.2rem] w-[1.2rem] dark:hidden mt-0.5' />
      <Moon onClick={() => setTheme('light')} className='h-[1.2rem] w-[1.2rem] hidden dark:flex mt-0.5' />
    </div>
  );
}

export default ThemeToggler;