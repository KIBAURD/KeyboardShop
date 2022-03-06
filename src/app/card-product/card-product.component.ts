import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.sass']
})
export class CardProductComponent implements OnInit {
  @Input() myProduct!:Product;

  constructor( private productsService :ProductsService) {

  }

  ngOnInit(): void {
    if (window.localStorage.getItem(this.myProduct.title)) {
      this.myProduct.isFavorite = true
    }
  }
  addToFavorite(){
    if(window.localStorage.getItem(this.myProduct.title)){
      window.localStorage.removeItem(this.myProduct.title)
      this.myProduct.isFavorite = false
    } else {
      window.localStorage.setItem(this.myProduct.title,"added")
      this.myProduct.isFavorite= true
     
    }
  }
  
}
