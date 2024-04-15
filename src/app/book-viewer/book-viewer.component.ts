import { Component, Input, Output } from '@angular/core';
import { LoadJsonService } from '../load-json.service';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SplitterModule } from 'primeng/splitter';
import { ContentPageComponent } from '../content-page/content-page.component';
import { BookChaptersComponent } from '../book-chapters/book-chapters.component';
import { iBook } from '../model/iBook';
import { NgFor } from '@angular/common';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-book-viewer',
  standalone: true,
  imports: [NgFor,
    SplitterModule,
    TieredMenuModule,ScrollTopModule,
    MenuModule,
    ContentPageComponent,
    BookChaptersComponent
  ],
  templateUrl: './book-viewer.component.html',
  styleUrl: './book-viewer.component.css'
})
export class BookViewerComponent {
  @Input() bookSelectedIn: string | undefined; // decorate the property with @Input()
  @Input() chapterSelectedIn: string | undefined; // decorate the property with @Input()
  //@Output() chapterSelectedOut: string = ""; // decorate the property with @Input()
  //@Output() bookSelectedOut: MenuItem | undefined; // decorate the property with @Input()
  //@Input() sections: [] | undefined; // decorate the property with @Input()
  books: iBook[] | undefined;
  prueba : string = "No Funciona";
  
  constructor( private loadJsonService: LoadJsonService){

  }

  ngOnInit(){


   }

   getSelectedChapter(event: string){
    this.prueba = event;
    //console.log(this.chapterSelectedIn);
    console.log("bookviever:::"+this.prueba);
   }
     

}


