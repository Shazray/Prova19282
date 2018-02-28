import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aToFour'
})
export class AToFourPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace('a', '4');
  }

}
