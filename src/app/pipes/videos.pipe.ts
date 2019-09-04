import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Pipe({
  name: 'videos'
})
export class VideosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
  }

}
