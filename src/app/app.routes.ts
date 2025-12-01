import { Routes } from '@angular/router';
import { Loginpage } from './auth/loginpage/loginpage';
import { Homepage } from './auth/homepage/homepage';
import { PokemonHomePage } from './pokemon/pages/pokemon-home-page/pokemon-home-page';
import { PokemonDetailPage } from './pokemon/pages/pokemon-detail-page/pokemon-detail-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Loginpage
  },

  {
    path: 'home',
    component: Homepage  
  },

  {
    path: 'pokemon',
    component: PokemonHomePage
  },

  {
    path: 'pokemon/:id',
    component: PokemonDetailPage
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
