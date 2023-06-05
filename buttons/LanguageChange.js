import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import setLanguage from 'next-translate/setLanguage'
import Cookies from 'js-cookie'

import styles from './LanguageChange.module.css';

const LanguageChange = () => {
  const { lang } = useTranslation('common')

  const changeLang = async(lng) => {
    console.log(`Changing language to ${lng}`);
    await setLanguage(lng)

    // Save Cookies
    const date = new Date()
    const expireMs = 100 * 24 * 60 * 60 * 1000 // 100 days
    date.setTime(date.getTime() + expireMs)
    Cookies.set('NEXT_LOCALE', lng, { expires: 30, secure: true })
    console.log(`Set cookie NEXT_LOCALE to ${lng}`);

  }

  return (
    <Menu offset={[-2, 0]}>
      <MenuButton
        as={Button}
        aria-label="language"
        rightIcon={<ChevronDownIcon />}
        backgroundColor="transparent"
        color="white"
        ml="1em"
        p={{ base: 0, md: "1em" }}
        _hover={{ bg: '#1C538A', color: 'gray.200' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
        className={styles.languageButton}
      // isDisabled
      >
        {lang ? lang.toUpperCase() : 'LANG'}
      </MenuButton>
      <MenuList style={{ minWidth: "fit-content" }}>
        {lang !== "en" && <MenuItem onClick={() => changeLang('en')}>EN</MenuItem>}
        {lang !== "es" && <MenuItem onClick={() => changeLang('es')}>ES</MenuItem>}
      </MenuList>
    </Menu>
  );
};

export default LanguageChange;
