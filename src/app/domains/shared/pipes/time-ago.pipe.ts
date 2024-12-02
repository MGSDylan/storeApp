import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance} from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  //fechas pies uso libreria npm i date-fns
  transform(value: string ): string {
    const date=new Date(value);
    const today=new Date;
    return formatDistance(today,date);//compara las fechas retorna el tiempo
  }

}
