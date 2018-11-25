import { ContainerModule, Container, interfaces } from 'inversify';
import { ReportingService, IReportingService } from './reporting.service';
import { IModule, IModuleConstructor, NwModule } from '../core/module';
import { AccountingModule } from '../accounting/accounting.module';

export const TYPES = {
  ReportingService: Symbol.for('ReportingService'),
};

@NwModule({
  imports: [AccountingModule],
  providers: bind => {
    bind<IReportingService>(TYPES.ReportingService).to(ReportingService);
  },
})
export class ReportingModule implements IModule {
  load() {}
}
