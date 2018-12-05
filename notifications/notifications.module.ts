import { AccountingModule } from '../accounting/accounting.module';
import { NotificationsService } from './notifications.service';
import { NwModule } from '../core/module';

@NwModule({
  imports: [AccountingModule],
  providers: [NotificationsService],
})
export class NotificationsModule {
  load() {}
}
