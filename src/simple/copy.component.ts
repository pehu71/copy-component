import {Component, Input} from '@angular/core';

@Component({
    selector: 'cmp-copy',
    template: `
        <span class="{{cssClass}}" (click)="copy()" >
            <button>Copy</button>
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
