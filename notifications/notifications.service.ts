import { injectable, inject } from 'inversify';
import { IAccountsService } from '../accounting/accounts.service';
import { TYPES } from '../accounting/accounting.component';

export interface INotificationsService {
  getUpdates(): string;
}

@injectable()
export class NotificationsService implements INotificationsService {
  private accountsService: IAccountsService;
  constructor(
    @inject(TYPES.AccountsService) accountsService: IAccountsService
  ) {
    this.accountsService = accountsService;
  }
  public getUpdates() {
    const accounts = this.accountsService.getNewAccounts();
    return `Your updates: Accounts - ${accounts}`;
  }
}
