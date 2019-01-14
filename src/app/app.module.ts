import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PostHttpRequestComponent } from './post-http-request/post-http-request.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    PostHttpRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
