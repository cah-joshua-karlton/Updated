import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Used for the Top and Side Nav bar
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components 
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Expansion } from '@angular/compiler';
import { SideNavSubitemComponent } from './side-nav-subitem/side-nav-subitem.component';
import { ReimbursementSubItemComponent } from './reimbursement-sub-item/reimbursement-sub-item.component';
import { VariancesSubitemComponent } from './variances-subitem/variances-subitem.component';
import { DenialsComponent } from './denials/denials.component';
import { MarginSubitemComponent } from './margin-subitem/margin-subitem.component';
import { ExplorationItemComponent } from './exploration-item/exploration-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    DashboardComponent,
    SideNavSubitemComponent,
    ReimbursementSubItemComponent,
    VariancesSubitemComponent,
    DenialsComponent,
    MarginSubitemComponent,
    ExplorationItemComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
