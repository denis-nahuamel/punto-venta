import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss']
})
export class BookCartComponent implements OnInit {

  constructor() { }
  @Input() books: Book[] = [];
  @Output()
  bookDeleted: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
  }
  deleteBook(book: any){
    this.bookDeleted.emit(book);
  }


}
