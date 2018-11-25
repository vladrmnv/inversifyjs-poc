import { Container, ContainerModule } from 'inversify';
import { AccountingModule } from '../accounting/accounting.module';
import {
  INotificationsService,
  NotificationsService,
} from './notifications.service';
import { IModuleConstructor, IModule, NwModule } from '../core/module';

export const TYPES = {
  NotificationsService: Symbol.for('NotificationsService'),
};

@NwModule({
  imports: [AccountingModule],
  providers: bind => {
    bind<INotificationsService>(TYPES.NotificationsService).to(
      NotificationsService
    );
  },
})
export class NotificationsModule {
  load(){}
}
