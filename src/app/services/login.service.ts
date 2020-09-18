import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    storageSub = new Subject<any>();

    constructor(
        private router: Router,
    ) { }

    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
    }

    getItem(key): object {
        return JSON.parse(localStorage.getItem(key));
    }

    setItem(key: string, data: any): void {
        localStorage.setItem(key, data);
        this.storageSub.next(this.getItem(key));
        this.router.navigateByUrl('/catalog');
    }

    removeItem(key): void {
        localStorage.removeItem(key);
        this.storageSub.next(0);
        this.router.navigateByUrl('/login');
    }
}
