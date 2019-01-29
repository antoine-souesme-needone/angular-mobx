import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NameStore } from './stores/name.store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

    constructor(
        public nameStore: NameStore
    ) { }

    async asyncCall() {
        await this.nameStore.asyncAction();
        console.log('Async action finished.');
    }


}
