import { expect } from 'chai';
import { NotificationsService } from '../notifications.service';
import { IAccountsService } from '../../accounting/accounts.service';

const newAccounts = ['account1'];
const moneyServiceMock: IAccountsService = {
  getNewAccounts: () => newAccounts
};

describe('NotificationsService', () => {
  describe('#getUpdates', () => {
    it('creates an update', () => {
      const service = new NotificationsService(moneyServiceMock);
      const result = service.getUpdates();
      const expected = 'Your updates: Accounts - account1';
      expect(result).to.eq(expected);
    });
  });
});
