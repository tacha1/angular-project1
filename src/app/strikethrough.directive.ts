import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(public elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="lightblue";
   }

}
