import { injectable, inject } from 'inversify';
import { TYPES } from '../money/money.module';
import { IMoneyService } from '../money/money.service';

export interface IAccountsService {
  getNewAccounts(): string[];
}

@injectable()
export class AccountsService implements IAccountsService {
  moneyService: IMoneyService;
  constructor(@inject(TYPES.MoneyService) moneyService: IMoneyService) {
    this.moneyService = moneyService;
  }
  public getNewAccounts() {
    const account1Sum = this.moneyService.display(13337);
    return [`account1: ${account1Sum}`, 'account2'];
  }
}
