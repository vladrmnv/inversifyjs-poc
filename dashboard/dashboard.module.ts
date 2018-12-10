import { NwModule } from "../core/module";
import { DashboardService } from "./dashboard.service";
import { AccountingModule } from "../accounting/accounting.module";

@NwModule({
    providers: [
        DashboardService
    ],
    imports: [
        AccountingModule
    ]
})
export class DashboardModule{}