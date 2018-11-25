import { ContainerModule, Container, interfaces } from 'inversify';
import { ReportingService, IReportingService } from './reporting.service';
import { IModule, IModuleConstructor } from '../core/module';
import { AccountingModule } from '../accounting/accounting.module';

export const TYPES = {
  ReportingService: Symbol.for('ReportingService'),
};

export class ReportingModule implements IModule {
  public readonly imports: IModuleConstructor[] = [AccountingModule];

  load() {
    return new ContainerModule(bind => {
      bind<IReportingService>(TYPES.ReportingService).to(ReportingService);
    });
  }
}
