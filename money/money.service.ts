
export interface IMoneyService {
  display(cashInteger: number): string;
}

export class MoneyService implements IMoneyService {
  public display(cash: number) {
    return `$${cash/100}`;
  }
}
