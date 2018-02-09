import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComunicatorService {

  private mySubject = new Subject<string>();

  constructor() { }

}
