# Enviar argumentos RouterLink

{% tabs %}
{% tab title="Component Remitente" %}
## HTML

```html
<button mat-button color="warn" 
        [routerLink]="['/heroes', item.id]">
Leer Mas...
</button>
```

Check que la ruta sea la correcta, de otro modo coloca una ruta predeterminada de error.
{% endtab %}

{% tab title="Component Receptor" %}
## TS

<pre class="language-typescript"><code class="lang-typescript"><strong>import {ActivedRoute} from '@angular/router';
</strong><strong>/*
</strong><strong>.
</strong><strong>.
</strong><strong>.
</strong><strong>*/
</strong><strong>constructor( private activatedRoute: ActivetedRoute ){}
</strong><strong>/*
</strong><strong>.
</strong><strong>.
</strong><strong>.
</strong><strong>*/
</strong><strong>ngOninit() {
</strong><strong>
</strong>this.activatedRoute.params
          .subscribe( {{id}} => console.log ); 
<strong>}
</strong></code></pre>


{% endtab %}
{% endtabs %}

Otra forma de asignar el Routerlink

```typescript
// ArchivoTs
this.sendHeroe = this.activatedRoute.snapshot.paramMap.get('id')!;
```

