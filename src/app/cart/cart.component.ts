import { Component, OnInit } from '@angular/core';
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
  searchBookCtrl = new FormControl();
  books = [] as Book[];

  getBooks() {
    return this.cartService.getBooks();
  }

  ngOnInit(): void {
    this.getBooks().subscribe((response) => this.books = response.data)
  }

  searchBook(){
    let value = this.searchBookCtrl.value;
    console.log("hello",this.books)
    this.books.filter(book=>{
      if(value===book.sku || book.name.includes(value)===true) {
        this.orders.push(book)
      }
    })
  }


}
