import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
const url = 'https://kiranpadwaltestconnecsi.pythonanywhere.com/api/User/login';

@Injectable()
export class AuthService {
	constructor(private http: Http) {}

	login(user): Promise<any> {
		return new Promise((resolve, reject) => {
			console.log('user', user);
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.http.post(url, JSON.stringify(user), { headers: headers }).subscribe(
				(res) => {
					let data = res.json();
					console.log('data', data);
					resolve(data);
				},
				(error) => {
					let err = error.json();
					console.log('err', err);
					console.log(err);
					reject(err);
				}
			);
		});
	}
}
