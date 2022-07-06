import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotarialRoutingModule } from './notarial-routing.module';
import { NotarialDetailsComponent } from './notarial-details/notarial-details.component';
import { NotarialComponent } from './notarial/notarial.component';

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

import { HeaderNotComponent } from '../components/header-not/header-not.component';
import { BaseNotComponent } from '../components/base-not/base-not.component';

@NgModule({
  declarations: [
    NotarialDetailsComponent,
    NotarialComponent,
    HeaderNotComponent,
    BaseNotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatTabsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  MatCommonModule,
  NotarialRoutingModule,
  ]
})
export class NotarialModule { }
