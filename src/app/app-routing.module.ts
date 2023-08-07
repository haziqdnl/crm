import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  Component: Staff
import { LoginComponent as MainLoginComponent } from './components/auth/main/login/login.component';
import { LayoutComponent as MainLayoutComponent } from './components/main/layout/layout.component';
import { IndexComponent as MainIndexComponent } from './components/main/index/index.component';

const routes: Routes = [
  /** ====================
   *  Components: Customer
   *  ====================
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }