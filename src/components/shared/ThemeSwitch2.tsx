'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { Monitor, Moon, Sun } from 'lucide-react';

interface ThemeOption {
    name: string;
    value: string;
    icon: React.ElementType;
}

const THEME_OPTIONS: ThemeOption[] = [
    {
        name: 'System',
        value: 'system',
        icon: Monitor
    },
    {
        name: 'Light',
        value: 'light',
        icon: Sun
    },
    {
        name: 'Dark',
        value: 'dark',
        icon: Moon
    }
];

const ThemeSwitch2: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const currentTheme = THEME_OPTIONS.find((option) => option.value === theme) || THEME_OPTIONS[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className='size-10'>
                    <currentTheme.icon className='size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
                    <Moon className='absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {THEME_OPTIONS.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className='flex cursor-pointer items-center gap-2'>
                        <option.icon className='size-4' />
                        {option.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeSwitch2;
