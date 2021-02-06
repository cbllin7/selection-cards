import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../Shared/Products';

@Component({
  selector: 'selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent implements OnInit {

  @Input() products: Array<Products>;
  constructor() { }

  ngOnInit(): void {
  }

}
