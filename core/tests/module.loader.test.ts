import { ModuleLoader } from '../module-loader';
import { NwModule } from '../module';
import sinon from 'sinon';
import { expect } from 'chai';
import { ContainerModule } from 'inversify';

describe('ModuleLoader', () => {
  @NwModule()
  class LowLevelModule {}

  @NwModule({
    imports: [LowLevelModule],
  })
  class FeatureModule {}

  afterEach(() => {
    sinon.restore();
  });
  describe('#load', () => {
    it('returns an array of container modules', () => {
      const loader = new ModuleLoader();
      const result = loader.load(LowLevelModule).shift();
      expect(result instanceof ContainerModule).to.be.true;
    });
  });
});
