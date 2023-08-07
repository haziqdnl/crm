//  Configurations & Services
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './services/loader/loader.component';
import { LoaderInterceptor } from './services/loader/loader.interceptor';
//  Component: Main
import { LoginComponent as MainLoginComponent } from './components/auth/main/login/login.component';
import { LayoutComponent as MainLayoutComponent } from './components/main/layout/layout.component';
import { IndexComponent as MainIndexComponent } from './components/main/index/index.component';
//  Packages
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent as MainSidebarComponent } from './components/main/shared/sidebar/sidebar.component';
import { NavbarComponent as MainNavbarComponent } from './components/main//shared/navbar/navbar.component';
import { FooterComponent as MainFooterComponent } from './components/main//shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLoginComponent,
    LoaderComponent,
    MainLayoutComponent,
    MainSidebarComponent,
    MainNavbarComponent,
    MainFooterComponent,
    MainIndexComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faIcon: FaIconLibrary) 
  {
    faIcon.addIconPacks(fas);
  }
}