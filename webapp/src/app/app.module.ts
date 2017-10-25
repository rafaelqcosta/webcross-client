import { AppBootstrapModule } from './app.bootstrap.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ManterBoxComponent } from './views/manter-box/manter-box.component';
import { ManterDiaComponent } from './views/manter-dia/manter-dia.component';
import { ManterHoraComponent } from './views/manter-hora/manter-hora.component';

@NgModule({
  declarations: [
    AppComponent,
    ManterBoxComponent,
    ManterDiaComponent,
    ManterHoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
