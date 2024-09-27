import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLanguage } from '@/contexts/LanguageContext';
import { translate, TranslationKey } from '@/translations';
import BtcIcon from 'cryptocurrency-icons/svg/color/btc.svg';
import EthIcon from 'cryptocurrency-icons/svg/color/eth.svg';
import LtcIcon from 'cryptocurrency-icons/svg/color/ltc.svg';
import DogeIcon from 'cryptocurrency-icons/svg/color/doge.svg';

interface ExchangeRates {
    [key: string]: string;
}

const cryptoList = [
    { symbol: 'BTC', Icon: BtcIcon },
    { symbol: 'ETH', Icon: EthIcon },
    { symbol: 'LTC', Icon: LtcIcon },
    { symbol: 'DOGE', Icon: DogeIcon },
];

const ExchangeRates: React.FC = () => {
    const [rates, setRates] = useState<ExchangeRates>({});
    const [error, setError] = useState<string | null>(null);
    const { language } = useLanguage();

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('https://api.coinbase.com/v2/exchange-rates?currency=EUR');
                if (response.data && response.data.data && response.data.data.rates) {
                    setRates(response.data.data.rates);
                } else {
                    throw new Error('Invalid API response structure');
                }
            } catch (err) {
                setError(translate('error' as TranslationKey, language));
            }
        };
        fetchRates();
    }, [language]);

    if (error) {
        return (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
                <p className="font-bold">{translate('error' as TranslationKey, language)}</p>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoList.map(({ symbol, Icon }) => (
                <div key={symbol} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                    <div className="bg-indigo-100 p-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Icon className="w-8 h-8" />
                            <span className="font-bold text-lg text-indigo-800 ml-2">{symbol}</span>
                        </div>
                        <span className="text-sm font-semibold text-indigo-600">EUR</span>
                    </div>
                    <div className="p-4">
                        <div className="text-2xl font-bold text-gray-800">
                            {rates[symbol] ?
                                (parseFloat(rates[symbol]) !== 0 ?
                                    (1 / parseFloat(rates[symbol])).toFixed(2) :
                                    'N/A') :
                                'Loading...'}
                        </div>
                        <div className="text-sm text-gray-500">{translate('exchangeRate' as TranslationKey, language)}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExchangeRates;
