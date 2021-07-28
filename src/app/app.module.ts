import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrackingComponent } from './componentes/tracking/tracking.component';
import { EnvioComponent } from './componentes/envio/envio.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'

@NgModule({
  declarations: [
    AppComponent,
    TrackingComponent,
    EnvioComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
