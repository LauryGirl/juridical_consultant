import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';
import { CountingComponent } from '../components/counting/counting.component';
import { OnlineServiceComponent } from '../components/online-service/online-service.component';
import { BranchsInfoComponent } from '../components/branchs-info/branchs-info.component';
import { FrecQuestionsComponent } from '../components/frec-questions/frec-questions.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { BaseComponent } from '../components/base/base.component';
import { HeaderModulesComponent } from '../components/header-modules/header-modules.component';
import { StatusProceedingComponent } from '../components/status-proceeding/status-proceeding.component';
import { SubheaderComponent } from '../components/subheader/subheader.component';
import { InfoServicesComponent } from '../components/info-services/info-services.component';
import { InfoNewsComponent } from '../components/info-news/info-news.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';

import { NewsModule } from '../news/news.module';
import { MigrantProceedingModule } from '../migrant-proceeding/migrant-proceeding.module';
import { NotarialModule } from '../notarial/notarial.module';
import { LegalAssistanceModule } from '../legal-assistance/legal-assistance.module';
import { AboutUsModule } from '../aboutUs/about-us.module';
import { FindModule } from '../find/find.module';

import { MatCommonModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs'

import { RegisterModule } from '../register/register.module';
import { LoginModule } from '../login/login.module';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    HomeFeaturesComponent,
    FeatureDetailsComponent,
    HeaderComponent,
    HeaderModulesComponent,
    StatusProceedingComponent,
    SubheaderComponent,
    InfoServicesComponent,
    InfoNewsComponent,
    CountingComponent,
    AboutUsComponent,
    OnlineServiceComponent,
    BranchsInfoComponent,
    FrecQuestionsComponent,
    ContactUsComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCommonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    NewsModule,
    AboutUsModule,
    FindModule,
    MigrantProceedingModule,
    LegalAssistanceModule,
    NotarialModule,
    LoginModule,
    RegisterModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    HomeRoutingModule
  ],
  providers: [CookieService]
})
export class HomeModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}