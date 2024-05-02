export enum FORM_FIELDS {
  IN_AMOUNT = 'inAmount',
  OUT_AMOUNT = 'outAmount',
  DATE = 'date',
  IN_CURRENCY = 'inCurrency',
  OUT_CURRENCY = 'outCurrency',
}

export interface IFormInput {
  inAmount: number;
  outAmount: number;
  date: string;
  inCurrency: string;
  outCurrency: string;
}

export enum FORM_MODE {
  ON_CHANGE = 'onChange',
  ON_SUBMIT = 'onSubmit',
}

export enum CHANGED_INPUT {
  LEFT = 'left',
  RIGHT = 'right',
}
