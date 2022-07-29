import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FamiliaDbzModule } from './familia-dbz/familia-dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FamiliaDbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
