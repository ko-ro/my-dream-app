import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, of, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LoginService} from './services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    user$ = this.loginService.watchStorage();
    // observable = of([1, 2, 5, 3, 4, 5, 6, 8, 8, 2, 2, 4, 6]) as Observable<number[]>;
    // observable1 = of(['Vasya', 'Katya']) as Observable<string[]>;
    // subscription: Subscription;

    constructor(
        private loginService: LoginService,
    ) {}

    logOut(): void {
        this.loginService.removeItem('user');
    }


    ngOnInit(): void {
        this.user$.subscribe(value => console.log(value));
        // this.loginService.watchStorage().subscribe(value => console.log(value));
        // this.subscription = combineLatest([this.observable, this.observable1])
        //     .pipe(
        //         tap(([num, name]) => console.log(num, name)),
        //         map(([num, name]) => {
        //             return [
        //                 {
        //                     name: name.filter((item) => item === 'Katya')[0],
        //                     value: num.filter((item) => !(item % 2))
        //                 },
        //                 {
        //                     name: name.filter((item) => item === 'Vasya')[0],
        //                     value: num.filter((item) => (item % 2))
        //                 }
        //             ];
        //         }),
        //         tap((value) => console.log(value)),
        //     )
        //     .subscribe();
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }
}
