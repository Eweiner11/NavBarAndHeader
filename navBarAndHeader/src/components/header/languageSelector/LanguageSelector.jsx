import React from 'react';
import { languageSelectorData} from "./languageSelectorData.js";
import HeaderItem from '../headerItem/HeaderItem.jsx'
function LanguageSelector() {
  return   <div className="language-selector">
  {languageSelectorData.map((item) => {
    return <HeaderItem src={item.src} str={item.str} />;
  })}
</div>;
}

export default LanguageSelector;
