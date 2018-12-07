import { expect } from 'chai';
import { IDashboardInfoDto } from '../dashboard-data';
import { DashboardService } from '../dashboard.service';
import { IAccountsService, AccountsService } from '../../accounting/accounts.service';

describe('DashboardService', () => {
  describe('#getInfo', () => {
    it('returns dashboard info', () => {
      const accountsService: IAccountsService = {
        getNewAccounts: () => ['account1: $133.37', 'account2'],
      };
      const service = new DashboardService(<AccountsService>accountsService);
      const result = service.getInfo();
      const expected: IDashboardInfoDto = {
        newAccounts: ['account1: $133.37', 'account2'],
      };
      expect(result).to.deep.eq(expected);
    });
  });
});
