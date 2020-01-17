import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;

    frase: any = {
        mensaje: 'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
        autor: 'Maesto Yoda'
    };

    pesonajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
