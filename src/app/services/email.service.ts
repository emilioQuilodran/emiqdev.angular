import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/emiqdev"
  constructor(private http: HttpClient) { }

  SendEmail(input: any) {
    return this.http.post(this.url, input, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if (response) {
            return response
          }
        },
        (error: any) => {
            if (error) {
              return error
            }
        }
      ))
  }
}
