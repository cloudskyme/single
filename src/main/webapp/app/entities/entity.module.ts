import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SingleRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { SingleCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { SingleLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { SingleDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { SingleTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { SingleEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { SingleJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { SingleJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SingleRegionMySuffixModule,
        SingleCountryMySuffixModule,
        SingleLocationMySuffixModule,
        SingleDepartmentMySuffixModule,
        SingleTaskMySuffixModule,
        SingleEmployeeMySuffixModule,
        SingleJobMySuffixModule,
        SingleJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SingleEntityModule {}
