import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, Renderer2 } from "@angular/core";

@Directive({ selector: '[appHover]' })
export class Apphover {
    constructor(private element: ElementRef, private renderer: Renderer2) { }
    @HostBinding('style.backgroundColor') backgroundColor: string = 'pink';
}