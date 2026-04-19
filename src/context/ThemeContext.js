import React, { createContext, useContext, useState, useEffect } from 'react';

// ============================================
// MYCO THEME SYSTEM
// 6 themes — all feminine, professional, girl-boss energy
// ============================================

export const themes = {
  blush: {
    name: 'Blush',
    bgGradient: 'linear-gradient(135deg, #F5F3F6 0%, #F0E8F2 100%)',
    cardBg: '#FFFFFF',
    primary: '#4A1FB8',
    primaryLight: '#7B4FD9',
    accentGradient: 'linear-gradient(135deg, #F5D5E8 0%, #D5B8E8 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #8B5FD6 0%, #E8A5C8 100%)',
    textPrimary: '#1A1033',
    textSecondary: '#6B5B7A',
    success: '#A8DCC0',
    successText: '#2D6B47',
    info: '#B8D4F0',
    infoText: '#1E5A96',
    borderSoft: '#E8DCEC',
  },
  roseGold: {
    name: 'Rose Gold',
    bgGradient: 'linear-gradient(135deg, #FAF2EF 0%, #F5E3DC 100%)',
    cardBg: '#FFFFFF',
    primary: '#B8336A',
    primaryLight: '#D66B95',
    accentGradient: 'linear-gradient(135deg, #F5D5CC 0%, #E8A896 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #C99B7B 0%, #E8A5A0 100%)',
    textPrimary: '#2A1518',
    textSecondary: '#7A5A60',
    success: '#D4C4A8',
    successText: '#6B5733',
    info: '#E8C8B8',
    infoText: '#8B4A2A',
    borderSoft: '#F0DCD4',
  },
  mauve: {
    name: 'Mauve',
    bgGradient: 'linear-gradient(135deg, #F2EFF2 0%, #E8DFE8 100%)',
    cardBg: '#FFFFFF',
    primary: '#6B4B7A',
    primaryLight: '#9B7AAA',
    accentGradient: 'linear-gradient(135deg, #D8C4D8 0%, #B89ACC 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #8B6B95 0%, #C4A5C8 100%)',
    textPrimary: '#2A1F2E',
    textSecondary: '#6B5B70',
    success: '#B8CCB8',
    successText: '#3D5C3D',
    info: '#B8C4D4',
    infoText: '#3D4F6B',
    borderSoft: '#DCD2DC',
  },
  lilacMist: {
    name: 'Lilac Mist',
    bgGradient: 'linear-gradient(135deg, #F0F0F5 0%, #E5E5F0 100%)',
    cardBg: '#FFFFFF',
    primary: '#5B4FB8',
    primaryLight: '#8B7FD9',
    accentGradient: 'linear-gradient(135deg, #DCD4F0 0%, #B8B0E8 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #7B6FD6 0%, #BCB5E8 100%)',
    textPrimary: '#1A1A33',
    textSecondary: '#5B5B7A',
    success: '#B8D4C8',
    successText: '#2D5C47',
    info: '#B8C4E8',
    infoText: '#2E4A8B',
    borderSoft: '#DCDCEC',
  },
  champagne: {
    name: 'Champagne',
    bgGradient: 'linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 100%)',
    cardBg: '#FFFFFF',
    primary: '#8B6B3D',
    primaryLight: '#B8955C',
    accentGradient: 'linear-gradient(135deg, #F0E0C8 0%, #D8B894 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #A88B5C 0%, #E0C8A8 100%)',
    textPrimary: '#2A2318',
    textSecondary: '#6B5C4A',
    success: '#C8D4B8',
    successText: '#4A5C2D',
    info: '#D4C8B8',
    infoText: '#6B5533',
    borderSoft: '#E8DCC8',
  },
  midnightRose: {
    name: 'Midnight Rose',
    bgGradient: 'linear-gradient(135deg, #1A0F26 0%, #2E1A33 100%)',
    cardBg: '#2A1F38',
    primary: '#D66B95',
    primaryLight: '#E899B5',
    accentGradient: 'linear-gradient(135deg, #8B3D6B 0%, #B85C85 100%)',
    cardEdgeGradient: 'linear-gradient(180deg, #D66B95 0%, #E0A5B8 100%)',
    textPrimary: '#F5E8F0',
    textSecondary: '#B89AB0',
    success: '#6B8B7A',
    successText: '#C8E0D4',
    info: '#6B7A9B',
    infoText: '#C8D4E8',
    borderSoft: '#4A3550',
  },
};

// ============================================
// ThemeContext — shares the active theme
// across every component in the app
// ============================================

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState(() => {
    const saved = localStorage.getItem('myco-theme');
    return saved && themes[saved] ? saved : 'blush';
  });

  const [backgroundImage, setBackgroundImage] = useState(() => {
    return localStorage.getItem('myco-bg-image') || null;
  });

  useEffect(() => {
    localStorage.setItem('myco-theme', themeKey);
  }, [themeKey]);

  useEffect(() => {
    if (backgroundImage) {
      localStorage.setItem('myco-bg-image', backgroundImage);
    } else {
      localStorage.removeItem('myco-bg-image');
    }
  }, [backgroundImage]);

  const theme = themes[themeKey];

  return (
    <ThemeContext.Provider value={{ theme, themeKey, setThemeKey, backgroundImage, setBackgroundImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
