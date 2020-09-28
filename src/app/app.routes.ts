import {Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';

export const rootRouterConfig: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

