import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProceedingDetailsComponent } from './proceeding-details/proceeding-details.component';
import { MigrantProceedingRoutingModule } from './migrant-proceeding-routing.module';
import { MigrantProceedingComponent } from './migrant-proceeding/migrant-proceeding.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../home/home.module';

import { HeaderMigComponent } from '../components/header-mig/header-mig.component';
import { BaseMigComponent } from '../components/base-mig/base-mig.component';

@NgModule({
  declarations: [
    MigrantProceedingComponent,
    ProceedingDetailsComponent,
    HeaderMigComponent,
    BaseMigComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MigrantProceedingRoutingModule
  ]
})
export class MigrantProceedingModule { }
