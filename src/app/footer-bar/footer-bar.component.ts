import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [ToolbarModule],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {

}
