import { IFormInput } from '@/types';
import { ZodType, z } from 'zod';

export const exchangeSchema: ZodType<IFormInput> = z.object({
  inAmount: z.coerce.number({invalid_type_error: 'Required number field'}).gt(0, { message: 'Field must be more than 0.1' }),
  outAmount: z.coerce.number({invalid_type_error: 'Required number field'}).gte(0.1, { message: 'Field must be more than 0.1' }),
  date: z.string(),
  inCurrency: z.string(),

  outCurrency: z.string(),
});
