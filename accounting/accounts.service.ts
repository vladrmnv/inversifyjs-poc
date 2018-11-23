import { injectable } from 'inversify';
import { ReportingService } from '../reporting/reporting.service';

export interface IAccountsService {
  getNewAccounts(): string[];
}

@injectable()
export class AccountsService {
  public getNewAccounts() {
    return ['account1', 'account2'];
  }
}
