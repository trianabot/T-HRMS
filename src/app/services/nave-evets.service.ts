import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaveEvetsService {

  private naveAction = new Subject<boolean>();

  actionSourceObjservable = this.naveAction.asObservable();

  constructor() { }

  closeNaveAction(actionData){
    this.naveAction.next(actionData);
  }
}
