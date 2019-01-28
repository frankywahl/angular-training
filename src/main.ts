import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic() tells angular that it will run in the browser
// potentional future: platformAndroidDynamic (see nativescript.org)
platformBrowserDynamic().bootstrapModule(AppModule);
