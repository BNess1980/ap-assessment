import { NgModule } from '@angular/core';
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoService } from './photo-service.service';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SafeurlPipe } from '../pipes/safeurl.pipe';

@NgModule({
  declarations: [PhotoRoutingModule.components, SafeurlPipe],
  imports: [PhotoRoutingModule, CommonModule, ScrollingModule],
  exports: [PhotoRoutingModule.components, SafeurlPipe],
  providers: [PhotoService],
})
export class PhotoModule {}
