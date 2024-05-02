import { IFormInput } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface IStore {
  history: IFormInput[];
  addHistoryItem: (newHistoryItem: IFormInput) => void;
  resetHistory: () => void;
}
export const todayDate = new Date().toISOString().split('T')[0];

export const useHistoryStore = create<IStore>()(
	persist( 
		(set) => ({
  			history: [],
  			addHistoryItem: (newHistoryItem: IFormInput) => set((state) => ({ history: [newHistoryItem, ...state.history ].slice(0, 10) })),
  			resetHistory: () => set(({ history: [] })),
		}), 
		{
			name: 'exchange-history'
		}
	) 
)
