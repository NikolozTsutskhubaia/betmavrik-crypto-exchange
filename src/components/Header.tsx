import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import betMaverickLogo from '../assets/betmavrik-logo.png';

const Header: React.FC = () => {
    return (
        <header className="bg-indigo-800 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={betMaverickLogo}
                        alt="Bet Maverick Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;
