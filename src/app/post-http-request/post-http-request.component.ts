import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'app-post-http-requests',
  templateUrl: './post-http-request.component.html'
})
export class PostHttpRequestComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  makePost(): void {
    this.loading = true;
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({        // convert to JSON
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeHeaders(): void {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'RKC-Test'
    });

    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        headers: headers
      }
    );

    this.http.request(req).subscribe(data => {
      this.data = data['body'];
    });
  }
}