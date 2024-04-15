import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentPageComponent } from './content-page/content-page.component';


export const routes: Routes = [
    {
      path: '',
      component: ContentPageComponent,
    },
    {
      path: '**',
      redirectTo: '',
    }
  ];