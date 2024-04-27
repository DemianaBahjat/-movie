import React, { useContext } from 'react'
import { languageContext } from '../../Contexts/LanguageContext';

export default function Test() {
       const {lang, setLang}  =useContext(languageContext)
  return (
    <>    
         <h1>{lang === 'en' ? 'Demiana Bahjat' : 'دميانة بهجت'}</h1>
    </>
  )
}
