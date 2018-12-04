import { expect } from 'chai';

import { NwModule } from '../module';

describe('NwModule', () => {
  class TestModule {}
  it('returns a class', () => {
    const result = NwModule({})(TestModule);
    console.log(result.name);
    expect(result).to.be.a('function');
  });
  describe('decorated class module', () => {
    it('has the same name as original', () => {
      const result = NwModule({})(TestModule);
      console.log(result.name);
      expect(result.name).to.eq(TestModule.name);
    });
  });
});
