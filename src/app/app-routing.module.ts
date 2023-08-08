import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  Components: Error Modules
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
//  Component: Main Modules
import { LayoutComponent } from './components/layout/layout.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  /** ================
   *  Components: Main
   *  ================
   */
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
        title: "CRM | Dashboard"
      },
    ]
  },
  /** =======================
   *  Components: Misc/Others
   *  =======================
   */
  { path: '**', redirectTo: '/error/404', pathMatch: 'full' },
  {
    path: 'error/404',
    component: NotFoundComponent,
    title: 'CRM | Not Found'
  },
  {
    path: 'error/401',
    component: UnauthorizedComponent,
    title: 'CRM | Unauthorized'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }