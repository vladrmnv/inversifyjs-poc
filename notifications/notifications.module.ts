import { Container, ContainerModule } from 'inversify';
import { AccountingModule } from '../accounting/accounting.module';
import {
  INotificationsService,
  NotificationsService,
} from './notifications.service';
import { IModuleConstructor, IModule } from '../core/module';

export const TYPES = {
  NotificationsService: Symbol.for('NotificationsService'),
};

export class NotificationsModule implements IModule {
  public readonly imports: IModuleConstructor[] = [AccountingModule];

  load() {
    return new ContainerModule(bind => {
      bind<INotificationsService>(TYPES.NotificationsService).to(
        NotificationsService
      );
    });
  }
}
