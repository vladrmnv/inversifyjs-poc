import { MoneyService } from '../money.service';
import { expect } from 'chai';

describe('MoneyService', () => {
  describe('#display', () => {
      it('formats cents to dollars',() => {
          const service = new MoneyService();
          expect(service.display(1000)).to.eq('$10');
      })
  });
});
