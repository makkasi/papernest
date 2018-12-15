import { Injectable } from '@angular/core';
import { BehaviorSUbject } from 'rxjs';

import { SHARED_KEYS } from '../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  private sharedData: Map<SHARED_KEYS, BehaviorSubject<any>> = new Map();
  constructor() {

  }

  public setData(key: SHARED_KEYS, data: any) {
    if (!this.sharedData.get(key)) {
      this.sharedData.set(key, new BehaviorSubject());
    }
    this.sharedData.get(key).next(data);
  }

  public getData(key: SHARED_KEYS): BehaviorSubject {
    this.sharedData.get(key);
  }
}
