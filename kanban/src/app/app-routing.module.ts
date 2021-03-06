import { AuthGuard } from './user/auth.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
gaurd returns true or false, depending on it access to path is decided
however , gaurd can also show error msg like our authgaurd here
*/


/*
     where do non matching paths go?
     ans:
*/

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule ) },
  { path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule ), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
