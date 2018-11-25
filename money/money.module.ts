import { ContainerModule } from 'inversify';
import { IModule, IModuleConstructor } from '../core/module';
import { IMoneyService, MoneyService } from './money.service';

export const TYPES = {
  MoneyService: Symbol.for('MoneyService'),
};

export class MoneyModule implements IModule {
  imports: IModuleConstructor[];
  load() {
    return new ContainerModule(bind => {
      bind<IMoneyService>(TYPES.MoneyService).to(MoneyService);
    });
  }
}
