import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {FormsModule} from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormsModule,
        GrowlModule

    ],
    declarations: [SignupComponent]
})
export class SignupModule {
}
