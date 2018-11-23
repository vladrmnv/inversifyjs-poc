import { injectable, inject } from 'inversify';
import { IAccountsService } from '../accounting/accounts.service';
import { TYPES } from '../accounting/accounting.container';

@injectable()
export class ReportingService {
  private accountsService: IAccountsService;
  constructor(
    @inject(TYPES.AccountsService) accountsService: IAccountsService
  ) {
    this.accountsService = accountsService;
  }
  public createAccountingReport() {
    const accounts = this.accountsService.getNewAccounts();
    return `New accounts: ${accounts}`;
  }
}
