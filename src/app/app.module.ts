import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR)
import { AppComponent } from './app.component';
import { CardProductComponent } from './card-product/card-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
      provide : LOCALE_ID,
      useValue :'fr-FR'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
