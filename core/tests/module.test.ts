import { expect } from 'chai';
import { interfaces } from 'inversify';

import { NwModule } from '../module';


describe('NwModule', () => {
  class TestModule {}
  class ImportedModule {
    load() {}
  }
  it('returns a class', () => {
    const result = NwModule({})(TestModule);
    expect(result).to.be.a('function');
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
      const providerFn: interfaces.ContainerModuleCallBack = bind =>
        bind('test').toConstantValue('testString');
      const DecoratedTestModule = NwModule({
        providers: providerFn,
      })(TestModule);
      const testModule = new DecoratedTestModule();
      expect(testModule.providers).to.eq(providerFn);
    });
  });
});
