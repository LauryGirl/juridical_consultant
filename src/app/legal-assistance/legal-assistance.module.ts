import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalAssistanceRoutingModule } from './legal-assistance-routing.module';
import { LegalAssistantComponent } from './legal-assistant/legal-assistant.component';
import { AssistanceDetailsComponent } from './assistance-details/assistance-details.component';

import { BaseModulesComponent } from '../components/base-modules/base-modules.component';
import { HeaderAssComponent } from '../components/header-ass/header-ass.component';
import { CorpusAssComponent } from '../components/corpus-ass/corpus-ass.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../home/home.module';
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

@NgModule({
  declarations: [
    LegalAssistantComponent,
    AssistanceDetailsComponent,
    BaseModulesComponent,
    HeaderAssComponent,
    CorpusAssComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatListModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
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
    LegalAssistanceRoutingModule
  ]
})

export class LegalAssistanceModule { }
