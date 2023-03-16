import React from 'react';
import styled from 'styled-components';

const LanguageSelectorButton = ({ currentLanguage, onLanguageChange }) => {
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    
  ];

  const handleChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <StyledSelect value={currentLanguage} onChange={handleChange}>
      {languageOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  background-color: #fff;
  color: #333;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default LanguageSelectorButton;
