import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHeadlineColor]',
  standalone: true,
})
export class HeadlineColorDirective {
  @Input() appHeadlineColor: string | undefined;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = this.appHeadlineColor || 'blue';
  }
}
