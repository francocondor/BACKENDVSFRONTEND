import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'technologies', component: TechnologiesComponent
  },
  {
    path:'technology/:id', component: TechnologyComponent
  },
  {
    path: 'search/:query', component: SearchComponent
  },
  {
    path: "**", pathMatch: "full", redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
