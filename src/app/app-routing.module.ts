import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  Components: Error Modules
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
//  Component: Staff
import { LoginComponent as MainLoginComponent } from './components/auth/main/login/login.component';
import { LayoutComponent as MainLayoutComponent } from './components/main/layout/layout.component';
import { IndexComponent as MainIndexComponent } from './components/main/index/index.component';

const routes: Routes = [
  /** ================
   *  Components: Main
   *  ================
   */
  { 
    path: 'login', 
    component: MainLoginComponent, 
    title: "CRM | Login",
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainIndexComponent,
        title: "CRM | Dashboard"
      },
    ]
  },
  /** =======================
   *  Components: Misc/Others
   *  =======================
   */
  {
    path: 'error/401',
    component: UnauthorizedComponent,
    title: 'CRM | Unauthorized'
  },
  {
    path: 'error/404',
    component: NotFoundComponent,
    title: 'CRM | Not Found'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
    title: 'CRM | Not Found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }