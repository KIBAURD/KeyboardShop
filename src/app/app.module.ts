import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR)
import { FilterByNamePipe, SortByDatePipe,SortByNamePipe } from './pipes/product.pipe';
import { AppComponent } from './app.component';
import { CardProductComponent } from './card-product/card-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    HeaderComponent,
    FooterComponent,
    SortByDatePipe,
    SortByNamePipe,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
      provide : LOCALE_ID,
      useValue :'fr-FR'
    }],
  bootstrap: [AppComponent],
  exports :[
    SortByDatePipe
  ]


})
export class AppModule { }
