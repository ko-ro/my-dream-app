import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.formBuilder.group({
        login: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService,
    ) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.loginForm.controls.login.value === 'doe@example.com' && this.loginForm.controls.password.value === 'qwerty') {
            const user = {
                name: 'John Doe',
                access: 'admin',
                icon: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'
            };
            this.loginService.setItem('user', JSON.stringify(user));
        }
    }
}
