'use client';

import React, { memo, useCallback, useEffect } from 'react';

import { buttonType } from '@/types/buttonTypes';
import { CustomButton } from '../CustomButton/CustomButton';
import { HistoryItem } from '../HistoryItem/HistoryItem';
import { useHistoryStore } from '@/store/history';

export const HistoryBlock = memo(() => {
  useEffect(() => {
    useHistoryStore.persist.rehydrate();
  }, []);

  const [history, resetHistory] = useHistoryStore((state) => [state.history, state.resetHistory]);

  const handleClearHistory = useCallback(() => {
    resetHistory();
  }, [resetHistory]);

  return (
    <div className='h-full flex flex-col items-center justify-center bg-white py-[80px]'>
      <div className='pr-[66px] mb-[32px] w-[962px] bg-_F6F7FF py-[40px] pl-[66px] rounded-[4px]'>
        <div className='flex justify-between mb-[32px]'>
          <p className='title text-[28px] font-[500]'>Історія конвертації</p>

          <CustomButton disabled={history.length === 0} theme={buttonType.secondary} onClick={handleClearHistory}>
            Очистити історію
          </CustomButton>
        </div>

        <div className='w-full flex justify-between gap-y-[16px] flex-wrap'>
          {history.length > 0 ? (
            history?.map((item, ind) => (
              <HistoryItem
                date={item.date}
                inAmount={item.inAmount}
                inCurrency={item.outCurrency}
                outAmount={item.outAmount}
                outCurrency={item.outCurrency}
                key={ind}
              />
            ))
          ) : (
            <p className='default-text'>Немає записів в історії транзакцій</p>
          )}
        </div>
      </div>
    </div>
  );
});
