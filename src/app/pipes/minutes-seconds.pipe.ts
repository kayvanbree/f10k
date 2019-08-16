import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minutesSeconds'
})
export class MinutesSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const seconds = value / 1000;
    const minutes: number = Math.floor(seconds / 60);
    return minutes + ':' + this.pad(Math.floor(seconds - minutes * 60), 2);
  }

  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
}
