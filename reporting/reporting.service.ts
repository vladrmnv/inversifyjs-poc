import { injectable } from 'inversify';
import { AccountsService } from '../accounting/accounts.service';

@injectable()
export class ReportingService {
  private accountsService: AccountsService;
  constructor(accountsService: AccountsService) {
    this.accountsService = accountsService;
  }
  public createAccountingReport() {
    const accounts = this.accountsService.getNewAccounts();
    return `New accounts: ${accounts}`;
  }
}
