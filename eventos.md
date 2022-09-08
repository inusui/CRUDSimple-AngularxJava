# Eventos

cuando usamos un componente externo y la funcionabilidad esta en este componente. Se pueden crear eventos para escuchar y ejecutar el componente externo como si fuese parte del componente en donde se exporto.

### Tenemos el componenteA al cual le damos el ComponenteB

El componenteB debe escuchar lo que hace el componenteA para escucharlo debemos emitir un evento que lo escuche.

## Dentro de Componente B

```
@Output() onEnter: EventEmitter<string> = new EventEmitter();

buscar(){
this.onEnter.emit( this.termino );
}
```

## El Componente A.

### tiene la funcionabilidad que requiere el Componente B. por ello debe habilitarsela.

```
<app-pais-input
(onEnter)="buscar( $event )">

</app-pais-input>
```

(onEnter) es una propiedad del componenteB “buscar()” es una propiedad del componenteA que envia el ($event) evento que ocurre dentro de buscar()

La funcion de Componente A Recibe ese $event que requiere el componente B y se ejecuta como si fuese de Componente B

```
buscar( termino: string ) {
//Code
}
```

el termino, es parte de componenteB
