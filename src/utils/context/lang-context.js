import { createContext, useState } from 'react';

export const LangContext = createContext({
	language: 'en',
	setLanguage: () => {},
});

export const LangProvider = ({ children }) => {
	const [language, setLanguage] = useState('en');
	const value = { language, setLanguage };

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
