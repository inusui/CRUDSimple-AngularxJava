# Leer Ruta

Se agrega al constructor el servicio de ruta activa

```typescript
private activatedRoute : ActivatedRoute 
```

ya con esto, en el ng on init tenemos los parametros que le llegan al componente.&#x20;

```typescript
ngOnInit(): void {
   this.activatedRoute.params.pipe(
    switchMap( ({id}) => this.servicio.getHeroePorId(id) )
   ).subscribe( heroe => this.heroe = heroe );
  }
```
