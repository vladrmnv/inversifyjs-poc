import { injectable } from 'inversify';

export interface IAccountsService {
  getNewAccounts(): string[];
}

@injectable()
export class AccountsService {
  public getNewAccounts() {
    return ['account1', 'account2'];
  }
}
