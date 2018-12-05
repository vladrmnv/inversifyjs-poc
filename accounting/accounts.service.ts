import { injectable } from 'inversify';
import { IMoneyService } from '../money/money.service';

export interface IAccountsService {
  getNewAccounts(): string[];
}

@injectable()
export class AccountsService implements IAccountsService {
  private moneyService: IMoneyService;
  constructor(moneyService: IMoneyService) {
    this.moneyService = moneyService;
  }
  public getNewAccounts() {
    const account1Sum = this.moneyService.display(13337);
    return [`account1: ${account1Sum}`, 'account2'];
  }
}
