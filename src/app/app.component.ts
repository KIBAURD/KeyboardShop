import { Component, OnInit} from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'KeyboardShop';
  products !: Product[];
  search =""
  sortdate ='desc'
  sortname ="asc"

  constructor(private productsService : ProductsService) {}

  ngOnInit()  {
    this.products = this.productsService.products;
  }

onClickSortDate(){
  this.sortdate === "desc" ? this.sortdate="asc" : this.sortdate="desc"
}

onClickSortName(){
  this.sortname === "desc" ? this.sortname="asc" : this.sortname="desc"
}
}
