import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importados
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';


const MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatRippleModule,
  MatPaginatorModule,
  MatButtonModule,
  MatListModule,
  MatNativeDateModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatTableModule,
  MatSortModule,
  MatSliderModule,
  MatMenuModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule,
  MatRadioModule,
  DragDropModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDialogModule,
  LayoutModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class TemaModule { }
