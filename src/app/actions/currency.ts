'use server';

const API_KEY = 'fca_live_w4XwSh4U7CSSaej3WUbZk9nhDW73kIb6ydgJvdvc';
const URL = 'https://api.freecurrencyapi.com/v1/';

export const getCurrencies = async () => {
  try {
    const response = await fetch(`${URL}crrencies?apikey=${API_KEY}`);
    const res = await response.json();
    const currencies = Object.keys(res.data);
    return currencies;
  } catch (error) {
    console.log(error);
	throw new Error('Failed to Get Currencies');
  }
};

export const getExchangeByDate = async (date: string, baseCurrency: string) => {
  let results;

  try {
    const response = await fetch(`${URL}historical?apikey=${API_KEY}&date=${date}&base_currency=${baseCurrency}`);
    const res = await response.json();
    results = res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to Get Rate');
  }
  return results;
};

export const getExchangeToday = async (baseCurrency: string) => {
  let results;

  try {
    const response = await fetch(`${URL}latest?apikey=${API_KEY}&base_currency=${baseCurrency}`, { cache: 'no-store' });
    const res = await response.json();
    results = res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to Get Currencies');
  }
  return results;
};
