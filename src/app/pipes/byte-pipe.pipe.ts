import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytePipe'
})
export class BytePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 1073741824) {
      value = (value / 1073741824).toFixed(2) + ' ГБ';
    } else if (value >= 1048576) {
      value = (value / 1048576).toFixed(2) + ' МБ';
    } else if (value >= 1024) {
      value = (value / 1024).toFixed(2) + ' КБ';
    } else if (value > 1) {
      value = value + ' value';
    } else if (value === 1) {
      value = value + ' byte';
    } else {
      value = '';
    }
    return value;

  }

}
