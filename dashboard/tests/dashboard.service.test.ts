import { expect } from 'chai';
import { IDashboardInfoDto } from '../dashboard-data';
import { DashboardService } from '../dashboard.service';

describe('DashboardService', () => {
  describe('#getInfo', () => {
    it('returns dashboard info', () => {
      const service = new DashboardService();
      const result = service.getInfo();
      const expected: IDashboardInfoDto = {
        newAccounts: 'some accounts',
      };
      expect(result).to.deep.eq(expected);
    });
  });
});
