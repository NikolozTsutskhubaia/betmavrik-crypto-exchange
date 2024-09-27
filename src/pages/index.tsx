import { useLanguage } from '@/contexts/LanguageContext';
import ExchangeRates from '../components/ExchangeRates';
import Header from '../components/Header';
import { translate } from '@/translations';
import Head from 'next/head';
import React from "react";

const Home: React.FC = () => {
    const { language } = useLanguage();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </Head>
            <div className={`min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">
                        {translate('title', language)}
                    </h1>
                    <ExchangeRates />
                </main>
            </div>
        </>
    );
};

export default Home;
