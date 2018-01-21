import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {HttpModule} from '@angular/http';
import {AuthService} from './shared/services/auth.service';
import {UserService} from './shared/services/user.service';
import {CustomMessageService} from './shared/services/custom-message.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {AdminModule} from './layout/admin/admin.module';
import {UserGuard} from './shared/guard/user.guard';
import {FieldsetModule, GrowlModule} from 'primeng/primeng';
import {RequestOptionsService} from './shared/services/request-options.service';
import {AdminGuard} from './shared/guard/admin.guard';
import {DonatorService} from './shared/services/donator.service';
import {NewsletterService} from './shared/services/newsletter.service';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        AdminModule,
        FieldsetModule,
        GrowlModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        AuthService,
        UserService,
        CustomMessageService,
        MessageService,
        UserGuard,
        DonatorService,
        AdminGuard,
        NewsletterService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestOptionsService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
