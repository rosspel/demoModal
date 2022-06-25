import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabellaComponent } from '../tabella/tabella.component';
import { SearchComponent } from '../search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { TabsContainerComponent } from '../tabs-container/tabs-container.component';
import { TabComponent } from '../tab/tab.component';
import { AddComponent } from '../login/add.component';
import { EditComponent } from '../edit/edit.component';
import { InputComponent } from '../input/input.component';

const components = [
    TabellaComponent, SearchComponent, AuthModalComponent, ModalComponent, TabsContainerComponent, TabComponent, AddComponent, EditComponent,InputComponent
]

@NgModule({
    declarations:[...components],
    exports:[...components],
    imports:[CommonModule, ReactiveFormsModule, FormsModule,ReactiveFormsModule]
})
export class SharedModule {

}