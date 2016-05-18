import {Component, Input} from '@angular/core';
import {MdIconRegistry, MdIcon} from '@angular2-material/icon'; // you don't need this line when not using @angular2-material MdIcon inside

@Component({
    selector: 'cmp-copy',
    providers: [MdIconRegistry],
    directives: [MdIcon],
    template: `
        <span class="{{cssClass}}" (click)="copy()" >
            <md-icon class="md-24">content_copy</md-icon>
        </span>
        `
})

export class CopyComponent {

    @Input() text:string[];
    @Input() cssClass:string;

    constructor() {}

    copy() {

        let selBox = document.createElement('textarea');

        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.text.join('\r\n');

        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();

        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

}
