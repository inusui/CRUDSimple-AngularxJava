---
description: Segun lo que reciba cambia lo que muestra.
---

# i18nSelect

```
        {{ keyDelObjetoSeleccionada | i18nSelect : Objeto }}
```

Trata de un objeto, al cual se envia la key del objeto, la cual va a retornar su valor.

```typescript
 invitacionObj = {
    'F':'invitarla',
    'M':'invitarlo'
  }
```



```
        {{ 'F' | i18nSelect : invitacionObj}}
```

Output

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption><p>invitarla es el value del objeto</p></figcaption></figure>

