import { Component, OnInit } from '@angular/core';
import { Order } from "../order";
import { GoordersService } from "../goorders.service"

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private goordersService: GoordersService) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.goordersService.all().subscribe(data => this.orders = data);
  }
}
