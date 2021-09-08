import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'iframepipe'
})
export class IframepipePipe implements PipeTransform {
constructor(private dom: DomSanitizer){

}
  transform(value: string) {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
