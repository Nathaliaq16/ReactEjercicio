import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist.js";
import localeEsMessages from "./locales/es.json";

const userLocale = window.navigator.language  

var m;

if (userLocale === 'es') {
  m = localeEsMessages;
} 


ReactDOM.render(
  <IntlProvider locale={userLocale} messages={m}>
    <JobsList />
  </IntlProvider>,
  document.getElementById('root')
);