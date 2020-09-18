import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface Posts {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(
        private http: HttpClient,
    ) { }

    getPostsList(): Observable<Posts[] | any> {
        return this.http.get('http://jsonplaceholder.typicode.com/posts');
    }

    getPostsListById(id) {
        return this.http.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
    }
}
