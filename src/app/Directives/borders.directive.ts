import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorders]'
})

export class BordersDirective implements OnInit {
  @Input() appBorders
  date: Date
  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.date = new Date()
    let date2 = new Date(this.appBorders.endTime)
    if (this.date > date2 && this.appBorders.completed == false) {
      this.el.nativeElement.style.borderColor = 'red'
      this.el.nativeElement.firstChild.style.borderColor = 'red'
      let node = document.createElement('span')
      let text = document.createTextNode('Times Out')
      node.style.color = 'red'
      node.style.fontWeight = 'bold'
      node.appendChild(text)
      this.el.nativeElement.firstChild.appendChild(node)
    }
  }
}
