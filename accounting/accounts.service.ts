import { IMoneyService, MoneyService } from '../money/money.service';
import { inject } from '@loopback/core';

export interface IAccountsService {
  getNewAccounts(): string[];
}

export class AccountsService implements IAccountsService {
  moneyService: IMoneyService;
  constructor(@inject(MoneyService.name) moneyService: IMoneyService) {
    this.moneyService = moneyService;
  }
  public getNewAccounts() {
    const account1Sum = this.moneyService.display(13337);
    return [`account1: ${account1Sum}`, 'account2'];
  }
}
