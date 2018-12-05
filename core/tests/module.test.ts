import { expect } from 'chai';

import { NwModule, Class } from '../module';

describe('NwModule', () => {
  class TestProvider {}
  class TestModule {}
  class ImportedModule {}
  it('returns a class', () => {
    const result = NwModule({})(TestModule);
    expect(result).to.be.a('function');
    expect(result.name).to.eq(TestModule.name);
  });
  describe('decorated class module', () => {
    it('has the same name as original', () => {
      const result = NwModule({})(TestModule);
      console.log(result.name);
      expect(result.name).to.eq(TestModule.name);
    });
    it('gets imports assigned from options', () => {
      const DecoratedTestModule = NwModule({
        imports: [ImportedModule],
      })(TestModule);
      const testModule = new DecoratedTestModule();
      expect(testModule.imports).to.deep.eq([ImportedModule]);
    });
    it('gets providers assigned from options', () => {
      const providers: Class[] = [TestProvider];
      const DecoratedTestModule = NwModule({
        providers,
      })(TestModule);
      const testModule = new DecoratedTestModule();
      expect(testModule.providers).to.eq(providers);
    });
    it('gets an empty provider array if none are passed in options', () => {
      const DecoratedTestModule = NwModule({})(TestModule);
      const testModule = new DecoratedTestModule();
      expect(testModule.providers).to.deep.eq([]);
    });
  });
});
