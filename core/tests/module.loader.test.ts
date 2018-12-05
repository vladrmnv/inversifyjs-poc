import { ModuleLoader } from '../module-loader';
import { NwModule } from '../module';
import { expect } from 'chai';
import { ContainerModule } from 'inversify';

describe('ModuleLoader', () => {
  @NwModule()
  class LowLevelModule {}

  @NwModule({
    imports: [LowLevelModule],
  })
  class FeatureModule {}

  describe('#load', () => {
    it('returns an array of container modules', () => {
      const loader = new ModuleLoader();
      const result = loader.load(FeatureModule).shift();
      expect(result instanceof ContainerModule).to.be.true;
    });

    it('only loads unique modules', () => {
      const loader = new ModuleLoader();
      const result = loader.load(LowLevelModule, LowLevelModule);
      expect(result.length).to.eq(1);
    });
  });
});
