export const calculateValueForSelectedCurrency = (rates: Object, currency: string, amount: number): number => {
    let value = 0;

    for (const keys in rates) {
      if (keys === currency) {
        value = +rates[keys as keyof typeof rates] * amount;
      }
    }

    return value;
  };