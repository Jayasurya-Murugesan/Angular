import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({ selector: '[disableProduct]' })
export class DisableProduct {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @Input() set disableProduct(disable: boolean) {
        if (disable) {
            this.renderer.addClass(this.element.nativeElement, 'disable-prod')
        }
    }
}