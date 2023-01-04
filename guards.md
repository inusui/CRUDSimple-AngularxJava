---
description: Servicio que implementa reglas de validacion en las rutas.
---

# Guards

### Generacion

```
ng g guard nombre
```

<figure><img src=".gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

## Canload

Se debe colocar el canload en la ruta del componente que se quiere proteger.&#x20;

<figure><img src=".gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Segun lo que el estado del canLoad podrá proteger la ruta, al ser una sentencia se puede jugar con ello.&#x20;

```typescript
 canLoad( 
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      console.log(`
        canLoad, ${true}\n
        ruta, ${route}\n
        segment, ${segments}
      `);

      if(this._authService.auth.id){ //si existe id, retorna true.
        return true;                 // por lo tanto carga el modulo.
      }
    
    return false;
  }
}
```

Solo previene que el módulo cargue. Si el modulo ya esta cargado nada puede detener al usuario.&#x20;



## canActivated

Se distingue porque este no toma el segmente de la ruta para bloquear, si no el "momento" en el que se esta accediento al componente.

Si este momento (snapshot) no es valido no podra ingresar a al componente aunque este se encuentre cargado.&#x20;

```typescript
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log(`Bloqueado por canActivated`);

      if(this._authService.auth.id){
        return true;
      }
    
    return false;
  }
```

Al igual que para el canload, el canActivated se debe agregar al routing.module

