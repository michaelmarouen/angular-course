import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  {
  
  @Input() rating : number;  
  @Output() ratingChanged : EventEmitter<number> = new EventEmitter<number>();

  clickIt(value : number) :void{ 
      this.rating = value 
      this.ratingChanged.emit(value)
  }
 
}
