import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})
export class DownComponent implements OnInit {
  private count: number;

  constructor(private sharedDataService: ShareddataService) {
    this.sharedDataService.getData(SHARED_KEYS.COUNT)
    .subscribe(count => this.count = count);
  }
  ngOnInit() {
  }

  handleDown() {
    this.sharedDataService.setData(SHARED_KEYS.COUNT, this.count--);
  }
}
