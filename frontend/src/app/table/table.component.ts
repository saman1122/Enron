import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public cars: Car[] = [];
  constructor() { }

  ngOnInit() {
    this.cars.push(new Car('Porsche', 'Cayenne'));
    this.cars.push(new Car('Bmw', 'X6'));
  }

}

class Car {
  constructor(
    public brand: string = '',
    public model: string = ''
  ) { }
}



