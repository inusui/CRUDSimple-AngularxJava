# PopUp confirmar

Se puede emplear angular material, el componente de dialog

{% embed url="https://material.angular.io/components/dialog/overview" %}

Es necesario crearle al dialog un componente

Dicho componente va a recibir la data del componente "padre"

### IMPl

{% tabs %}
{% tab title="Modulo" %}
```typescript
import {MatDialogModule} from '@angular/material/dialog';
```
{% endtab %}

{% tab title="Enviar a Dialog" %}
```typescript
//En el constructor se importa la dependencia
private _dialog : MatDialog

//... Al usarse, es recomendable asignarlo a una variable
const dialog = this._dialog.open( 
        ConfirmarComponent, { width:'40%', data: {...this.heroe} } 
        ); //Se le envia el tamaño y la data que va a recibir. 
```
{% endtab %}

{% tab title="Dialog Component" %}
En el constructor se importa la referencia, que se refiere a si misma.&#x20;

```typescript
constructor( private dialogRef : MatDialogRef<ConfirmarComponent>,
             @Inject(MAT_DIALOG_DATA) public data: HeroeDTO 
             ) { }
```

Se inyecta lo que va a recibir este componente `data`  puede ser any o para mejor práctica una interface.&#x20;

```typescript
 borrar(){
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close(true);
  }
```

Se devuelve la referencia cerra con un true o false. para que ejecute lo que sigue.&#x20;
{% endtab %}
{% endtabs %}

