import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';

@Injectable()
export class NameStore {
    @observable
    currentName = 'John';

    @observable
    availableNames = ['A', 'B', 'C'];

    @action
    setCurrentName(newName: string) {
        this.currentName = newName;
    }

    @action
    async asyncAction() {
        console.log('starting ...');

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        console.log('A');

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        console.log('B');

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        console.log('C');

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        console.log('done.');
    }
}
