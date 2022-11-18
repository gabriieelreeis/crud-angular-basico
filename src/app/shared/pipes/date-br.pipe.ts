import { Pipe, PipeTransform } from '@angular/core';
import moment, { Moment } from 'moment';

@Pipe({ name: 'dateBr' })
export class DateBrPipe implements PipeTransform {
  transform(value: Date | Moment): string {
    return moment.utc(value).local().format('DD/MM/YYYY - HH:mm');
  }
}
