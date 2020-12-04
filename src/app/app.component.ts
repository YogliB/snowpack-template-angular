import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
	count: number = 0;
	interval = setInterval(() => this.count++, 1000);

	ngOnDestroy() {
		clearInterval(this.interval);
	}
}
