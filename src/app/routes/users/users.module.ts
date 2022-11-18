import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  declarations: [ListComponent, CreateComponent, BreadcrumbComponent],
  imports: [
    RouterModule.forChild(routes),
    NgxMaskModule.forRoot(),
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
