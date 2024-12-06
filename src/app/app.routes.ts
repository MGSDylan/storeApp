import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [//VISTAS ANIDADAS
            { path: '', loadComponent: ()=> import('./domains/products/pages/list/list.component').then(m=>m.ListComponent) },//carga unicamente al llamar o visitar la interfaz
            { path: 'about', loadComponent: ()=> import ('./domains/info/pages/about/about.component')},//LAZYLoading
            { path: 'detalle-producto/:id', component: ProductDetailComponent },//:id el parametro a enviar
            { path: '**', component: NotFoundComponent },]
    }


];
