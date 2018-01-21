import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DonatorsRoutingModule} from './donators-routing.module';
import {DonatorsComponent} from './donators.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DonatorsRoutingModule,
        FormsModule
    ],
    declarations: [DonatorsComponent]
})
export class DonatorsModule {
}
