import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './views/catalog/catalog.component';
import {HomeComponent} from './views/home/home.component';
import {LoginComponent} from './views/login/login.component';
import {PageComponent} from './views/page/page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'catalog',
        component: CatalogComponent,
    },
    {
        path: 'catalog/:id',
        component: PageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
