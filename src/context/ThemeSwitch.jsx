import React from 'react';
import { useTheme } from './ThemeContext';
import day from '../assets/dayMode.png';
import night from '../assets/nightMode.png';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='fixed top-8 right-8 cursor-pointer z-50'>
            <div onClick={toggleTheme}>
                {theme === "light" ? (
                    <img src={day} alt="Day Mode" className='w-8 h-auto' />
                ) : (
                    <img src={night} alt="Night Mode" className='w-8 h-auto' />
                )}
            </div>
        </div>
    );
};

export default ThemeSwitch;
