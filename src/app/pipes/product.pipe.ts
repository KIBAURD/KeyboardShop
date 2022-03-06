import { Pipe,PipeTransform } from "@angular/core";
import { Product } from "../models/product.model";

@Pipe({name : 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
  transform(products : Product[], order? : any) {
      let desc = !(order && order === 'asc');
      return products.sort((a,b) => {
          if (desc) return b.creationdate.getTime() - a.creationdate.getTime()
        else return a.creationdate.getTime() - b.creationdate.getTime()});
  }
}

@Pipe({name : 'sortByName'})
export class SortByNamePipe implements PipeTransform {
  transform(products : Product[], order? : any) {
      let desc = !(order && order === 'asc');
      if (desc){
          return products.sort(sortByNameDesc)

      }
      return products.sort(sortByNameAsc)
  }
}

function sortByNameAsc(a: Product,b : Product) {
    if (a.title < b.title) {
        return -1
    }
    if (a.title> b.title ) {
        return 1
    }
    return 0 
}

function sortByNameDesc(a : Product,b : Product) {
    if (a.title < b.title) {
        return 1
    }
    if (a.title> b.title ) {
        return -1
    }
    return 0 
}

@Pipe({ name: 'filterByName' })
export class FilterByNamePipe implements PipeTransform {
    transform(products: Product[], term: string) {
        if(term) {
            return products.filter((p) =>p.title.toLowerCase().includes(term.toLowerCase()))
        } else return products;
        
    }
}