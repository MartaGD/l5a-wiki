import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadJsonService } from '../load-json.service';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { NgFor } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { ContentPageComponent } from '../content-page/content-page.component';
import { iBook } from '../model/iBook';

@Component({
  selector: 'app-book-chapters',
  standalone: true,
  imports: [NgFor,
    SplitterModule,
    ContentPageComponent],
  templateUrl: './book-chapters.component.html',
  styleUrl: './book-chapters.component.css'
})

export class BookChaptersComponent {
  @Input() bookSelectedIn: string | undefined; // decorate the property with @Input()
  @Input() sections: [] | undefined; // decorate the property with @Input()
  @Output() chapterSelectedOut = new EventEmitter<any>();

  chapters: iBook[] | undefined;

  constructor( private loadJsonService: LoadJsonService){}

  ngOnInit(){
    console.log(this.bookSelectedIn);
    switch(this.bookSelectedIn){
      case "core":
         this.loadJsonService.getJSONProfile("books/Core/core_books.json")
        .subscribe(data => this.chapters = data);
        break;

    }
    
    
   }

  chapterEmiter(item : iBook){
    this.chapterSelectedOut.emit(item._id);
    console.log("in: loadData:::" +item._name);
  }
}
 