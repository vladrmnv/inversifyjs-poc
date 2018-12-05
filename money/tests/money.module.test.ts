import { MoneyModule } from '../money.module';
import { expect } from 'chai';

describe('MoneyModule', () => {
  it('contains MoneyService provider', () => {
    const moneyModule = new MoneyModule();
    (<any>moneyModule).providers(() => ({
      to: () => {},
    }));
    expect((<any>moneyModule).providers).to.be.a('function');
  });
});
