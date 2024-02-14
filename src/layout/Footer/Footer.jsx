import React from 'react';
import classes from './Footer.module.css';
import AdressBlock from './../../components/AdressBlock/AdressBlock';
import Links from './../../components/Links/Links';
import HelpBlock from './../../components/HelpBlock/HelpBlock';
import Newsletter from './../../components/Newsletter/Newsletter';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className={classes.wrap}>
        <AdressBlock />
        <Links />
        <HelpBlock />
        <Newsletter />
      </div>
      <div className={classes.line}></div>
      <div className={classes.sign}>{year} furino. All rights reverved</div>
    </div>
  );
};

export default Footer;
