import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitId(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }

}
