import {Component, Input} from '@angular/core';
import {MdIconRegistry, MdIcon} from '@angular2-material/icon'; // you don't need this line when not using @angular2-material MdIcon inside

@Component({
    selector: 'cmp-copy',
    providers: [MdIconRegistry],
    directives: [MdIcon],
    template: `
        <span class="{{cssClass}}" (click)="copy()" >
            <!--you can use any button, anchor or material icon like me-->
            <md-icon class="md-24">content_copy</md-icon>
        </span>
        `
})

export class CopyComponent {

    @Input() text:string[];
    @Input() cssClass:string;

    constructor() {}

    copy() {

        let selSpan = document.createElement('textarea');

        selSpan.style.position = 'fixed';
        selSpan.style.left = '0';
        selSpan.style.top = '0';
        selSpan.style.opacity = '0';
        selSpan.value = this.text.join('\r\n');

        document.body.appendChild(selSpan);
        selSpan.focus();
        selSpan.select();

        document.execCommand('copy');
        document.body.removeChild(selSpan);
    }

}
