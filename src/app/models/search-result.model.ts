/**
 * SearchResult is a data-structure that holds an individual
 * record from a YouTube video search
 */

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {

    // Both && and || result in the value of (exactly) one of their operands:
    // A && B returns the value A if A can be coerced into false; otherwise, it returns B.
    // A || B returns the value A if A can be coerced into true; otherwise, it returns B.
    // for details : https://blog.mariusschulz.com/2016/05/25/the-and-and-or-operators-in-javascript
    // thus, the code below simulates key word arguments enabling a passed object to contain just
    // the keys we want to specify
    
    this.id              = obj && obj.id             || null;
    this.title           = obj && obj.title          || null;
    this.description     = obj && obj.description    || null;
    this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
    this.videoUrl        = obj && obj.videoUrl       || `https://www.youtube.com/watch?v=${this.id}`;
  }
}