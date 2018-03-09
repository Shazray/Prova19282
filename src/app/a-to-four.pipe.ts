import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'aToLetter'
})
export class AToLetterPipe implements PipeTransform {

  transform(value: string, arg: string): any {
    return value.replace('a', arg?arg:'4');
  }

}
