import { injectable } from 'inversify';

export interface IAccountsService {
  getNewAccounts(): string[];
}

@injectable()
export class AccountsService implements IAccountsService {
  public getNewAccounts() {
    return ['account1', 'account2'];
  }
}
