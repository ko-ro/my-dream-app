import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {exhaustMap, map} from 'rxjs/operators';
import {PostsService} from '../../services/posts.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    pageId$ = this.route.paramMap.pipe(
        map(value => value.get('id'))
    );

    page$ = this.pageId$.pipe(
        exhaustMap((id) => this.postsService.getPostsListById(id))
    );

    // page$ = this.postsService.getPostsListById()
    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
    ) { }

    ngOnInit(): void {
    }

}
