import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
    posts = this.postService.getPostsList();

    constructor(
        private postService: PostsService,
    ) { }

    ngOnInit(): void {
    }
}
