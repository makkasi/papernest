import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'updown-app';
  count: Observable<number>;

  constructor(private sharedDataService: ShareddataService) {
    this.count = this.sharedDataService.get(SHARED_KEYS.COUNT);
  }
}
