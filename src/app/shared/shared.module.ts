import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent, PlaceholderDirective, DropdownDirective],
  imports: [CommonModule],
  exports: [AlertComponent, SpinnerComponent, PlaceholderDirective, DropdownDirective, CommonModule],
  providers: [LoggingService],
})
export class SharedModule {}
