import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {CatalogComponent} from './catalog.component';

@NgModule({
    declarations: [CatalogComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MatCardModule,
        RouterModule,
    ]
})
export class CatalogModule {}
