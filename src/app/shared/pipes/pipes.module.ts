import { NgModule } from '@angular/core';
import { DateBrPipe } from './date-br.pipe';

@NgModule({
  declarations: [DateBrPipe],
  exports: [DateBrPipe],
})
export class PipesModule {}
