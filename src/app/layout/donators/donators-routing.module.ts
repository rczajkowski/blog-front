import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {DonatorsComponent} from './donators.component';


const routes: Routes = [
    {
        path: '', component: DonatorsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DonatorsRoutingModule { }
