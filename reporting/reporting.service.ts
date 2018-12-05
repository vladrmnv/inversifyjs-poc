import { injectable } from 'inversify';
import {
  IAccountsService,
  AccountsService,
} from '../accounting/accounts.service';

export interface IReportingService {
  createAccountingReport(): string;
}

@injectable()
export class ReportingService {
  private accountsService: IAccountsService;
  constructor(accountsService: AccountsService) {
    this.accountsService = accountsService;
  }
  public createAccountingReport() {
    const accounts = this.accountsService.getNewAccounts();
    return `New accounts: ${accounts}`;
  }
}
