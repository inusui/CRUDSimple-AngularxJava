---
description: Carga una vez al iniciar la pagina.
---

# Ng OnInit

### Ejemplo en archivo .ts

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```
