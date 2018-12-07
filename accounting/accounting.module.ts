import { AccountsService } from './accounts.service';
import { NwModule } from '../core/module';

import { MoneyModule } from '../money/money.module';

@NwModule({
  imports: [MoneyModule],
  providers: [AccountsService]
})
export class AccountingModule {}
