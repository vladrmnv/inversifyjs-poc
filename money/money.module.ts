import { NwModule } from '../core/module';
import { MoneyService } from './money.service';

@NwModule({
  providers: [MoneyService],
})
export class MoneyModule {}
