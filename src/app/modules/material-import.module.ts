import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule, MatSliderModule,
  MatTableModule, MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

const modules = [
  CommonModule,
  MatListModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatSliderModule,
  MatTabsModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialImportModule { }
