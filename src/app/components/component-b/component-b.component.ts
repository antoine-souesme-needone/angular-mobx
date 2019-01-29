import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NameStore } from 'src/app/stores/name.store';

@Component({
    selector: 'app-component-b',
    templateUrl: './component-b.component.html',
    styleUrls: ['./component-b.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBComponent implements OnInit {

    constructor(
        public nameStore: NameStore
    ) { }

    ngOnInit() {
    }

    setNameToMarc(): void {
        this.nameStore.setCurrentName('Marc');
    }

}
