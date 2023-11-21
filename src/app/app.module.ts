import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeCh from '@angular/common/locales/de-CH';

import { AppComponent } from './app.component';
import {NglModule} from 'ng-lightning';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FamilySituationComponent } from './family-situation/family-situation.component';
import { RelationshipTableComponent } from './family-situation/relationship-table/relationship-table.component';
import { MigrationComponent } from './migration/migration.component';
import { LegacyDataComponent } from './legacy-data/legacy-data.component';
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import { ProfessionalBackgroundComponent } from './professional-background/professional-background.component';
import { EducationTableComponent } from './professional-background/education-table/education-table.component';
import { EmploymentTableComponent } from './professional-background/employment-table/employment-table.component';
import { SelfEmploymentTableComponent } from './professional-background/self-employment-table/self-employment-table.component';
import { UnemploymentTableComponent } from './professional-background/unemployment-table/unemployment-table.component';
import { CreateEmbeddingsComponent } from './create-embeddings/create-embeddings.component';
import { AssetsAndLiabilitiesComponent } from './assets-and-liabilities/assets-and-liabilities.component';
import { LiquidityTableComponent } from './assets-and-liabilities/liquidity-table/liquidity-table.component';

registerLocaleData(localeCh);

@NgModule({
  declarations: [
    AppComponent,
    FamilySituationComponent,
    RelationshipTableComponent,
    MigrationComponent,
    LegacyDataComponent,
    ProfessionalBackgroundComponent,
    EducationTableComponent,
    EmploymentTableComponent,
    SelfEmploymentTableComponent,
    UnemploymentTableComponent,
    CreateEmbeddingsComponent,
    AssetsAndLiabilitiesComponent,
    LiquidityTableComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NglModule,
        NgOptimizedImage
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-CH' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
