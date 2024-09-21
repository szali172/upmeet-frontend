import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';

export const routes: Routes = [
    {path: '', component:MainPageComponent},
    {path: 'favorite=list', component:FavoriteListComponent}
];
