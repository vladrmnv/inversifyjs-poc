import { injectable } from 'inversify';
import {
  IAccountsService,
  AccountsService,
} from '../accounting/accounts.service';

export interface INotificationsService {
  getUpdates(): string;
}

@injectable()
export class NotificationsService implements INotificationsService {
  private accountsService: IAccountsService;
  constructor(accountsService: AccountsService) {
    this.accountsService = accountsService;
  }
  public getUpdates() {
    const accounts = this.accountsService.getNewAccounts();
    return `Your updates: Accounts - ${accounts}`;
  }
}
