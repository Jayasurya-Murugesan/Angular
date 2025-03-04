import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({ selector: '[setBackround]' })
export class SetBackground {
    //private element: ElementRef;
    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
    }
    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = 'red';
        // this.element.nativeElement.style.color = '#000';
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'gray');
    }

}