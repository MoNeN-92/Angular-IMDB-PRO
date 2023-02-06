import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBornToday'
})
export class FilterBornTodayPipe implements PipeTransform {

  transform(stars: any[]): any[] {
    let today = new Date();
    return stars.filter(star => {
      let birth_date = new Date(star.birth_date);
      return birth_date.getDate() === today.getDate() &&
             birth_date.getMonth() === today.getMonth() &&
             birth_date.getFullYear() === today.getFullYear();
    });
  }
}
