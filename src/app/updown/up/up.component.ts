import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent implements OnInit {
  private count: number;

  constructor(private sharedDataService: ShareddataService) {
    this.sharedDataService.getData(SHARED_KEYS.COUNT)
    .subscribe(count => this.count = count);
  }
  ngOnInit() {
  }

  handleUp() {
    this.sharedDataService.setData(SHARED_KEYS.COUNT, this.count++);
  }
}
