import { Component } from '@angular/core';
import {Gato} from '../shared/model/gato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animais';
  gatos: Array<Gato>;

  constructor() {
    this.gatos = new Array<Gato>();
  }
  
  inserirGato(raca: string, idade: number, desc: string): void {
    const gato = new Gato(raca, idade, desc);
    this.gatos.push(gato)

  }

  botaoInserir(): void {
    const dialog = document.createElement('div');
    dialog.id = 'insertionDialog';
    dialog.innerHTML = `
    <form id = "insertion">
    <label for="racaInput">Raça:</label>
    <input type="text" id ="racaInput" required>
    <br>
    <label for="idadeInput">Idade:</label>
    <input type="text" id ="idadeInput" required>
    <br>
    <label for="desc">Descrição:</label>
    <input type="text" id ="desc" required>
    </form>
    `;
    
    const appRoot = document.body.querySelector('app-root')
    document.body.appendChild(dialog);
    const button = document.createElement('button');
    button.id = 'insertButton'
    button.innerHTML = `Inserir`
    dialog.appendChild(button);
    const inserir = document.querySelector("#insertButton")
    const form = document.querySelector("#insertion") as HTMLFormElement;
    const raca = form.querySelector("#racaInput") as HTMLInputElement;
    const idade = form.querySelector("#idadeInput") as HTMLInputElement;
    const desc = form.querySelector("#desc") as HTMLInputElement;
    if (raca && idade && desc) {
      button.addEventListener('click', () => {
        this.inserirGato(raca.value, parseInt(idade.value), desc.value)
        document.body.removeChild(dialog);
      })
    }

    }

    apagarGato(gato: Gato) {
      const idx = this.gatos.indexOf(gato);
      this.gatos.splice(idx, 1);
    }
  }
