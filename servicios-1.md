# Servicios

* Solo se ejecuta un solo servicio, osea que si se importan a otros sitios de los componentes solo se ejecutara 1.&#x20;

Son componentes que se inyectan en otros.&#x20;

![](<.gitbook/assets/image (1) (1) (1).png>)



Inyeccion de servicios en los componentes.&#x20;

se hace en el constructor.&#x20;

constructor( private DbzService: DbzService){} //inyeccion de dependencias.



### module.ts

se debe importar el modulo de servicios para utilizarlo.&#x20;

![](<.gitbook/assets/image (2) (1) (1).png>)

