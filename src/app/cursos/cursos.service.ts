import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'React' },
      { id: 3, nome: 'Vue' },
      { id: 4, nome: 'Outro' },
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    // for (let i = 0; i < cursos.length; i++) {
    //   let curso = cursos[i];
    //   if (curso.id == id) {
    //     return curso;
    //   }
    // }

    return cursos.find((curso) => curso.id === id);
  }

  constructor() {}
}
