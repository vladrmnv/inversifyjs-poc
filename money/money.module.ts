import { ContainerModule } from 'inversify';
import { IModule, IModuleConstructor, NwModule } from '../core/module';
import { IMoneyService, MoneyService } from './money.service';

export const TYPES = {
  MoneyService: Symbol.for('MoneyService'),
};

@NwModule({
  providers: bind => {
    bind<IMoneyService>(TYPES.MoneyService).to(MoneyService);
  },
})
export class MoneyModule implements IModule {
  load() {}
}
