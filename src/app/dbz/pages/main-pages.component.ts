import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPagesComponent {

    constructor(private dbzService: DbzService) {}

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    deleteById(id: string): void {
        this.dbzService.deleteById(id);
    }

    save(character: Character): void {
        this.dbzService.save(character);
    }
}