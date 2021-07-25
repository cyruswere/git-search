import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReposComponent } from './search/repos/repos.component';
import { from  } from 'rxjs';
import { AppComponent  } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
  {path:'', component: UserProfileComponent},
  {path:'profile', component: UserProfileComponent},
  {path:'repo', component: ReposComponent},
  {path:'* *', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
