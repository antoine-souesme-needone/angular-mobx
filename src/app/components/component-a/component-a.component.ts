import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NameStore } from 'src/app/stores/name.store';

@Component({
    selector: 'app-component-a',
    templateUrl: './component-a.component.html',
    styleUrls: ['./component-a.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentAComponent implements OnInit {

    constructor(
        public nameStore: NameStore
    ) { }

    ngOnInit() {
    }

    setNameToJohn(): void {
        this.nameStore.setCurrentName('John');
    }

}
