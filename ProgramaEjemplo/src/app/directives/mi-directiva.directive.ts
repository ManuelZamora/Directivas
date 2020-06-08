import { Directive, ElementRef , Input, Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(public el:ElementRef,
    public renderer:Renderer2
    ) { }
/*
@HostListener('mouseenter')onMouseEnter(){
  this.hover(true)
}
@HostListener('mouseleave')onMouseLeave(){
  this.hover(false)
}

hover(color:boolean):void{
  if(color){
    this.renderer.setStyle(this.el.nativeElement,'color',"red")
  }
  else{
    this.renderer.setStyle(this.el.nativeElement,'color',"")
  }
}*/

@Input()MiDirectiva:boolean
ngOnInit(){
if (this.MiDirectiva) this.renderer.setStyle(this.el.nativeElement,'color',"red")
}

}
