import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudLasMascotas';

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"]); // el "listar" es lo que esta en app-routing modules.ts
  }
  Nuevo(){
    this.router.navigate(["add"]); // el "listar" es lo que esta en app-routing modules.ts
  }
}
