import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Messages } from "../models";

@Injectable()
export class GetListMessagesInfra {
  getAll(): Observable<Messages> {
    const array: Messages = [
      { author: {id: 1, surname: 'Evan'}, content: 'coucou', date: new Date(), id: 1},
      { author: {id: 2, surname: 'Igor'}, content: 'ca va ?', date: new Date(), id: 2}
    ]

    return of(array).pipe(delay(1500))
  }
}
