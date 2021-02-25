import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
	constructor(private injector: Injector) {
		const el = createCustomElement(AppComponent, {
			injector: this.injector,
		});
		customElements.define('app-root', el);
	}

	public ngDoBootstrap(appRef: ApplicationRef) {
		if (document.querySelector('app-root')) {
			appRef.bootstrap(AppComponent);
		}
	}
}
