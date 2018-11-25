import { injectable } from 'inversify';

export interface IMoneyService {
  display(cashInteger: number): string;
}

@injectable()
export class MoneyService implements IMoneyService {
  public display(cash: number) {
    return `$${cash/100}`;
  }
}
