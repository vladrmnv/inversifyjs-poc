import { injectable, inject } from 'inversify';
import { AccountsService, IAccountsService } from './accounts.service';

@injectable()
export class ReportingService {
  accountsService: IAccountsService;
  constructor(@inject(AccountsService) accountsService: IAccountsService) {
    this.accountsService = accountsService;
  }
  public createAccountingReport() {
    const accounts = this.accountsService.getNewAccounts();
    return `New accounts: ${accounts}`;
  }
}
