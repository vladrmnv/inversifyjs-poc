import { expect } from 'chai';
import { IAccountsService } from '../../accounting/accounts.service';
import { ReportingService } from '../reporting.service';

const newAccounts = ['account1'];
const moneyServiceMock: IAccountsService = {
  getNewAccounts: () => newAccounts
};

describe('ReportingService', () => {
  describe('#createAccountingReport', () => {
    it('creates a report', () => {
      const service = new ReportingService(moneyServiceMock);
      const result = service.createAccountingReport();
      const expected = 'New accounts: account1';
      expect(result).to.eq(expected);
    });
  });
});
