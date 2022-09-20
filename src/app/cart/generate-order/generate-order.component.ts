import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-generate-order',
  templateUrl: './generate-order.component.html',
  styleUrls: ['./generate-order.component.scss']
})
export class GenerateOrderComponent implements OnInit {
  form!: FormGroup;
  @Input() order: Book[] = [];
  @Input() total = 0;
  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl()
    });

  }
  send() {
    let details = this.order.map(e => ({
      product_id: e.id,
      price: e.price,
      quantity: 1
    }))
    const sendObject = {
      client: this.form.value['name'],
      detail: details
    }
    this.cartService.sendOrder(sendObject).subscribe(response => console.log("response", response))
  }

}
