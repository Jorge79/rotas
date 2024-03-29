import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id!: number;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(
    private _route: ActivatedRoute,
    private _cursosService: CursosService,
    private _router: Router
  ) {
    // this.id = this._route.snapshot.params['id'];
    // console.log(this._route);
  }

  ngOnInit(): void {
    this.inscricao = this._route.params.subscribe((params: any) => {
      this.id = Number(params['id']);

      this.curso = this._cursosService.getCurso(this.id);

      if (this.curso == null) {
        this._router.navigate(['/cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
