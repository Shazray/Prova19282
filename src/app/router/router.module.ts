import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListComponent } from '../listComponent/list.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "list", component: ListComponent},
    {path: "detail/:id", component: DetailComponent},
    {path: "", redirectTo: "home", pathMatch: "full"}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }