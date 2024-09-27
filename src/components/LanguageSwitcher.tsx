import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-indigo-800 p-2 rounded border"
        >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="ar">العربية</option>
        </select>
    );
};

export default LanguageSwitcher;