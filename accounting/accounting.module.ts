import { AccountsService } from './accounts.service';
import { NwModule } from '../core/module';

import { MoneyModule } from '../money/money.module';

export const TYPES = {
  AccountsService: Symbol.for('AccountsService'),
};

@NwModule({
  imports: [MoneyModule],
  providers: [AccountsService],
})
export class AccountingModule {}
