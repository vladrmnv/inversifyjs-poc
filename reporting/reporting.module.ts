import { ReportingService } from './reporting.service';
import { NwModule } from '../core/module';
import { AccountingModule } from '../accounting/accounting.module';

@NwModule({
  imports: [AccountingModule],
  providers: [ReportingService],
})
export class ReportingModule {}
