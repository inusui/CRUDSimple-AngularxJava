# Switchmap

Recibe los params de un observable y retorna un observable.&#x20;

lo use en 05-paisesApp, 07-heroesApp

```typescript
 this.activatedRoute.params
              .pipe(switchMap( ({id}) => this.servicio.getHeroePorId(id) ))
              .subscribe( heroe => this.heroe = heroe );
```

Toma el por desestructuracion de los `params` toma el `{id}` para enviarselo al `this.servicio.getHeroePorId(id)` con ello se puede subscribe a los cambios para asignarlos a una variable.
