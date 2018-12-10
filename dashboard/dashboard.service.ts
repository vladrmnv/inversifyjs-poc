import { IDashboardInfoDto } from './dashboard-data';
import {
  AccountsService,
  IAccountsService,
} from '../accounting/accounts.service';
import { injectable } from 'inversify';

export interface IDashboardService {
  getInfo(): IDashboardInfoDto;
}

@injectable()
export class DashboardService implements IDashboardService {
  private accountsService: IAccountsService;
  constructor(accountsService: AccountsService) {
    this.accountsService = accountsService;
  }
  getInfo(): IDashboardInfoDto {
    return {
      newAccounts: this.accountsService.getNewAccounts(),
    };
  }
}
