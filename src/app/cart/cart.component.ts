import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../models/book.model';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  orders = [] as Book[];
  orderGenerated = false;
  searchBookCtrl = new FormControl();
  books = [] as Book[];
  total = 0;
  getBooks() {
    return this.cartService.getBooks();
  }

  ngOnInit(): void {
    this.getBooks().subscribe((response) => this.books = response.data);
  }

  searchBook(){
    let value = this.searchBookCtrl.value;
    this.books.filter(book=>{
      if(value===book.sku || book.name.toLocaleLowerCase().includes(value)===true) {
        this.orders.push(book)
      }
      this.total = this.orders.reduce((acc,cur)=>{return acc+cur.price},0)
    })
    this.searchBookCtrl.setValue("")
  }

  generarOrden(){
    this.orderGenerated = true;
  }

  onBookDeleted(book: any) {
    let index = this.orders.indexOf(book);
    this.orders.splice(index, 1);
    this.total = this.orders.reduce((acc,cur)=>{return acc+cur.price},0)
  }


}
