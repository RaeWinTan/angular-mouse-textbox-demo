import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-mouse-textbox-demo';
  strValue:string = "";
  down:number = 0;
  zindex:number = 0;

  @HostListener('document:mousedown',['$event'])
  mousedown(evt){
    this.down++;
  }

  @HostListener('document:mouseup',['$event'])
  mouseup(evt){
    this.down--;
  }

  @HostListener('document:mousemove',['$event'])
  mousemove(evt){
    this.strValue = " x : "+ evt.pageX+"y : "+evt.pageY;
  }
}
