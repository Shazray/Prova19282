import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const heroesRoutes: Routes = [
    // { path: 'heroes', component: HeroListComponent },


    //   { path: 'hero/:id', component: HeroDetailComponent }
];
@NgModule({
    imports:
        [
            RouterModule.forChild(heroesRoutes)
        ],

    exports:
        [
            RouterModule
        ]


})


export class DemoRoutingModule { }