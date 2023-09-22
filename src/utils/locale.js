/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import {useIntl } from 'react-intl';

import enUSAnt from "antd/locale/en_US";
import deDEAnt from "antd/locale/de_DE";
import ptPTAnt from "antd/locale/pt_PT";
import frFRAnt from "antd/locale/fr_FR";
import caESAnt from "antd/locale/ca_ES";

import enUS from "@/locales/en-US";
import frFR from "@/locales/fr-FR";
import deDE from "@/locales/de-DE";
import ptPT from "@/locales/pt-PT";
import caES from "@/locales/ca-ES";

export function getAntLocaleData(locale) {
	switch (locale) {
		case "fr-FR":
			return frFRAnt;
		case "de-DE":
			return deDEAnt;
		case "pt-PT":
			return ptPTAnt;
		case "ca-ES":
			return caESAnt;
		default:
			return enUSAnt;
	}
}

export function getLocaleData(locale = "en-US") {
	switch (locale) {
		case "fr-FR":
			return frFR;
		case "de-DE":
			return deDE;
		case "pt-PT":
			return ptPT;
		case "ca-ES":
			return caES;
		default:
			return enUS;
	}
}


export function formatMessage({ id, defaultMessage },params={}) {
  return Locale({ id, defaultMessage },params);
}


export function Locale({ id, defaultMessage }, params={}) {
  const intl = useIntl();
  try {
    return intl.formatMessage({ id, defaultMessage },params);
  } catch (e) {
    return defaultMessage ? defaultMessage : enUS.default[id];
  }
}


export function jobTypeLocale(type) {
  let jobType = type;

  switch (type) {
    case 'Full Time':
      jobType = formatMessage({id:'jobdetails.full-time', defaultMessage:'Full Time'});
      break;
    case 'Part Time':
      jobType = formatMessage({id:'jobdetails.part-time', defaultMessage:'Part Time'});
      break;
    case 'Contract-to-Hire':
      jobType = formatMessage({id:'jobdetails.contract-to-hire', defaultMessage:'Contract to Hire'});
      break;
    case 'Contract Corp-to-Corp':
      jobType = Locale({
        id: 'jobdetails.contract-corp-to-corp',
        defaultMessage:'Contract corp-to-corp',
        });
      break;
    case 'Internship':
      jobType = formatMessage({id:'jobdetails.internship', defaultMessage:'Internship'});
      break;
    case 'Commission Based':
      jobType = formatMessage({id:'jobdetails.commission-based', defaultMessage:'Commission Based'});
      break;
    case 'Freelancer':
      jobType = formatMessage({id:'jobdetails.freelancer', defaultMessage:'Freelancer'});
      break;
    default:
      jobType= type;
  }
  return jobType;
}
