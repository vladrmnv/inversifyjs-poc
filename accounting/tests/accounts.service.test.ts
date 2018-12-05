import { expect } from 'chai';
import { AccountsService } from '../../accounting/accounts.service';
import { IMoneyService } from '../../money/money.service';

const moneyServiceMock: IMoneyService = {
  display: () => '$100'
};

describe('AccountsService', () => {
  describe('#getNewAccounts', () => {
    it('returns a list of new accounts', () => {
      const service = new AccountsService(moneyServiceMock);
      const result = service.getNewAccounts();
      const expected = ['account1: $100', 'account2'];
      expect(result).to.deep.eq(expected);
    });
  });
});
