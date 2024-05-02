'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { buttonType } from '@/types/buttonTypes';
import { Input } from '../Input/Input';
import { Icon } from '../Icon/Icon';
import { DateInput } from '../DateInput/DateInput';
import { CustomButton } from '../CustomButton/CustomButton';
import { CHANGED_INPUT, FORM_FIELDS, FORM_MODE } from '@/types';
import { SelectInput } from '../SelectInput/SelectInput';
import { getCurrencies, getExchangeByDate, getExchangeToday } from '@/app/actions';
import { exchangeSchema } from '@/constants';
import { useHistoryStore } from '@/store/history';
import { calculateValueForSelectedCurrency } from '@/utils';


const todayDate = new Date().toISOString().split('T')[0];

export const ConverterBlock = () => {
  const addHistoryItem = useHistoryStore((state) => state.addHistoryItem);

  const [currencies, setCurrencies] = useState<string[] | undefined>();
  const [changedInput, setChangedInput] = useState<CHANGED_INPUT.LEFT | CHANGED_INPUT.RIGHT>(CHANGED_INPUT.LEFT);

  const isLeftChanged = changedInput === CHANGED_INPUT.LEFT;

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inAmount: 1,
      date: todayDate,
      inCurrency: '',
      outCurrency: '',
      outAmount: 0,
    },
    mode: FORM_MODE.ON_CHANGE,
    resolver: zodResolver(exchangeSchema),
  });

  const getAllValues = useCallback(() => {
    const inAmount = getValues(FORM_FIELDS.IN_AMOUNT);
    const outAmount = getValues(FORM_FIELDS.OUT_AMOUNT);
    const inCurrency = getValues(FORM_FIELDS.IN_CURRENCY);
    const outCurrency = getValues(FORM_FIELDS.OUT_CURRENCY);
    const date = getValues(FORM_FIELDS.DATE);

    const isButtonDisabled = !inAmount && !outAmount;
    return { inAmount, outAmount, inCurrency, outCurrency, date, isButtonDisabled };
  }, [getValues]);

  useEffect(() => {
    const fetchData = async () => {
      const currencies = await getCurrencies();
	  setCurrencies(currencies);

      if (currencies) {

        const todayRate = await getExchangeToday(currencies[0]);
        const value = calculateValueForSelectedCurrency(todayRate, currencies[1], 1);
        reset({ inCurrency: currencies[0], outCurrency: currencies[1], inAmount: 1, outAmount: +value.toFixed(3) });
      }
    };

    fetchData();
  }, []);

  const handleSaveHistory = useCallback(() => {
    const { inAmount, inCurrency, outAmount, outCurrency, date } = getAllValues();
    if (isLeftChanged) {
      addHistoryItem({ inAmount, inCurrency, outAmount, outCurrency, date });
    } else {
      addHistoryItem({
        inAmount: outAmount,
        inCurrency: outCurrency,
        outAmount: inAmount,
        outCurrency: inCurrency,
        date,
      });
    }
  }, [getAllValues, isLeftChanged, addHistoryItem]);

  const calculate = useCallback(
    async (
      amount: number,
      inCurrency: string,
      outCurrency: string,
      date: string,
      field: FORM_FIELDS.IN_AMOUNT | FORM_FIELDS.OUT_AMOUNT,
    ) => {
      let value: Object;

      if (date === todayDate) {
        value = await getExchangeToday(inCurrency);
        const result = (+value[outCurrency as keyof typeof value] * amount).toFixed(3);

        setValue(field, result as never);
      } else {
        const rates = await getExchangeByDate(date, inCurrency);

        value = Object.values(rates)[0] as Object;
        const result = calculateValueForSelectedCurrency(value, outCurrency, amount);

        setValue(field, result.toFixed(3) as never);
      }
    },
    [setValue, getExchangeByDate, todayDate, calculateValueForSelectedCurrency],
  );

  const calculateFrom = useCallback(() => {
    const { inAmount, inCurrency, outCurrency, date } = getAllValues();
    setChangedInput(CHANGED_INPUT.LEFT);

    if (Object.keys(errors).length === 0 && !isNaN(inAmount)) {
      calculate(inAmount, inCurrency, outCurrency, date, FORM_FIELDS.OUT_AMOUNT);
    } else {
      setValue(FORM_FIELDS.OUT_AMOUNT, null as never);
    }
  }, [calculate, setValue, errors, setChangedInput, getAllValues]);

  const calculateTo = useCallback(() => {
    const { inCurrency, outAmount, outCurrency, date } = getAllValues();
    setChangedInput(CHANGED_INPUT.RIGHT);

    if (Object.keys(errors).length === 0 && !isNaN(outAmount)) {
      calculate(outAmount, outCurrency, inCurrency, date, FORM_FIELDS.IN_AMOUNT);
    } else {
      setValue(FORM_FIELDS.IN_AMOUNT, null as never);
    }
  }, [calculate, setValue, errors, setChangedInput, calculate]);

  const { isButtonDisabled } = getAllValues();
 
  return (
    <div className='flex items-center justify-center bg-_F6F7FF py-[80px]'>
      <div className=' w-[962px] bg-white pt-[53px] pb-[55px] px-[48px] rounded-[4px]'>
        <p className='title'>Конвертер валют</p>

        <form className='flex items-flex-start bg-white pt-[53px] pb-[55px] px-[17px] rounded-[4px]'>
          <fieldset>
            <legend className='flex flex-col text-xl font-500 text-_707C87 mb-[30px]'>В мене є:</legend>

            <div className='flex items-center gap-[15px] mb-[24px]'>
              <Input
                register={register}
                error={errors.inAmount}
                name={FORM_FIELDS.IN_AMOUNT}
                valueAsNumber
                onChange={calculateFrom}
              />
              {currencies && (
                <SelectInput
                  register={register}
                  name={FORM_FIELDS.IN_CURRENCY}
                  currencies={currencies}
                  onChange={isLeftChanged ? calculateFrom : calculateTo}
                />
              )}
            </div>
            <DateInput register={register} onChange={calculateFrom} />
          </fieldset>

          <div className='translate-y-[100%] h-[60px] flex  px-[48px]'>
            <Icon name='icons/exchange-arrows' className='h-[22px] w-[22px]' />
          </div>

          <fieldset className='flex flex-col items-end'>
            <legend className='flex flex-col text-xl font-500 text-_707C87 mb-[30px]'>Хочу придбати:</legend>
            <div className='flex items-center gap-[15px] mb-[24px]'>
              <Input
                register={register}
                error={errors.outAmount}
                name={FORM_FIELDS.OUT_AMOUNT}
                valueAsNumber
                onChange={calculateTo}
              />
              {currencies && (
                <SelectInput
                  register={register}
                  name={FORM_FIELDS.OUT_CURRENCY}
                  currencies={currencies}
                  onChange={isLeftChanged ? calculateFrom : calculateTo}
                />
              )}
            </div>
            <CustomButton disabled={isButtonDisabled} theme={buttonType.secondary} onClick={handleSaveHistory}>
              Зберегти результат
            </CustomButton>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
