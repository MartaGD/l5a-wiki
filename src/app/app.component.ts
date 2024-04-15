import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 
import { NgFor } from '@angular/common'; 
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BookChaptersComponent } from './book-chapters/book-chapters.component';
import { BookViewerComponent } from './book-viewer/book-viewer.component';
import { iClan } from './model/iClan';
import { CardModule } from 'primeng/card'; 
import { LoadJsonService } from './load-json.service';
import { MenuItemContent } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,CardModule,NgFor,
    RouterOutlet,TabMenuModule, ButtonModule,
    BookChaptersComponent,
    BookViewerComponent,
    FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'l5a-wiki';
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  clans0: iClan[] | undefined;
  sections0 : [] |undefined;


  constructor( private loadJsonService: LoadJsonService){

  }
  ngOnInit() {
    this.items = [
        { label: 'Core Book', icon: 'pi pi-fw pi-home', id:"core"},
        { label: 'Enemies of the', icon: 'pi pi-fw pi-calendar', id:"eoe"},
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
    this.activeItem = this.items[0];
  }
  
onActiveItemChange(event: MenuItem) {
  this.activeItem = event;
  console.log(event.id)
}


}
