import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); // emitir evento del formulario
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();
  @Input() placeholder: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300) // retrasar la llamada de los resultados
      )
      .subscribe((valor) => {
        this.onDebounce.emit(valor);
      });
  }

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
