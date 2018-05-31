import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Blog1SharedModule } from '../../shared';
import {
    EntryService,
    EntryPopupService,
    EntryComponent,
    EntryDetailComponent,
    EntryDialogComponent,
    EntryPopupComponent,
    EntryDeletePopupComponent,
    EntryDeleteDialogComponent,
    entryRoute,
    entryPopupRoute,
} from './';

const ENTITY_STATES = [
    ...entryRoute,
    ...entryPopupRoute,
];

@NgModule({
    imports: [
        Blog1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        EntryComponent,
        EntryDetailComponent,
        EntryDialogComponent,
        EntryDeleteDialogComponent,
        EntryPopupComponent,
        EntryDeletePopupComponent,
    ],
    entryComponents: [
        EntryComponent,
        EntryDialogComponent,
        EntryPopupComponent,
        EntryDeleteDialogComponent,
        EntryDeletePopupComponent,
    ],
    providers: [
        EntryService,
        EntryPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blog1EntryModule {}
