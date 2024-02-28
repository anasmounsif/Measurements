import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {}
}
