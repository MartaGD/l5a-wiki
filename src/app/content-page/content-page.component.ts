import { Component, Input, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ContentPageService } from './content-page.service';
import { LoadJsonService } from '../load-json.service';
import { CardModule } from 'primeng/card'; 
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ScrollTopModule } from 'primeng/scrolltop';
import { NgFor, NgIf } from '@angular/common'; 
import { iSpell } from '../model/iSpell';
import { iClan } from '../model/iClan';
import { iAncestor } from '../model/iAncestors';
import { iArmor } from '../model/iArmor';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { renderApplication } from '@angular/platform-server';
import { ViewportScroller } from '@angular/common';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    TagModule,
    ChipModule,
    ButtonModule,
    ScrollTopModule,
    DataViewModule,
    NgFor,
    NgIf],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'

})
export class ContentPageComponent {
   
  @Input() bookSelectedIn: string | undefined; // decorate the property with @Input()
  @Input() chapterSelectedIn: string | undefined; // decorate the property with @Input()
  //CORE
  ancestors: iAncestor[] = [];
  armors: iArmor[] = [];
  clans: iClan[] = [];
  spells: iSpell[] = [];
  

  constructor( private loadJsonService: LoadJsonService, private routerLink: Router,private viewportScroller: ViewportScroller){

  }

  ngOnInit(){
    this.loadAllBooks();
  }

  ngOnChanges(changes: SimpleChanges): void{
  }

  scrollToAnchroingPosition(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    console.log("scrolling to: "+elementId);
  }

  loadAllBooks(){
    //CORE
    this.loadJsonService.getJSONProfile("books/Core/ancestors.json")
    .subscribe(data => this.ancestors = data); 
    this.loadJsonService.getJSONProfile("books/Core/armors.json")
    .subscribe(data => this.armors = data); 
    this.loadJsonService.getJSONProfile("books/Core/clans.json")
    .subscribe(data => this.clans = data); 
    /*this.loadJsonService.getJSONProfile("books/Core/katas.json")
    .subscribe(data => this.clans = data); */
    this.loadJsonService.getJSONProfile("books/EOE/eoe_spells.json")
    .subscribe(data => this.spells = data); 
  }
}


