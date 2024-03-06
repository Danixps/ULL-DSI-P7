// //Nombre del archivo: ejercicio-2.ts
// //Descripción: El objetivo de este ejercicio es crear un sistema de facturación que genere facturas en distintos formatos.
// //Autor: Daniel Bensa Expósito Paz
// //Github: https://github.com/Danixps
// //Correo Institucional: alu0101481876@ull.edu.es
// //Fecha: 23/02/2024;
// // Client code is able to work properly with the interface of SystemA
// class SystemA {
//   constructor(private csvData: string = '') {
//   }
//   getData(): string {
//     return this.csvData;
//   }
// }

// type JSONData = {
//   name: string;
//   surname: string;
//   username: string;
// }

// // Client code wants to use SystemB, but its interface is not compatible with
// // the current client code
// class SystemB {
//   constructor(private jsonData: JSONData = {
//     name: '', surname: '', username: ''}) {
//   }
//   getSpecificData(): JSONData {
//     return this.jsonData;
//   }
// }

// // Adapter class that makes SystemA to understand the interface of SystemB
// class Adaptera extends SystemA {
//   constructor(private service: SystemB) {
//     super();
//   }
//   getData(): string {
//     return `${this.service.getSpecificData().name},` +
//            `${this.service.getSpecificData().surname},` +
//            `${this.service.getSpecificData().username}`;
//   }
// }

// // Initialization of systems A and B
// const systemA = new SystemA('Eduardo,Segredo,esegredo');
// const systemB = new SystemB({
//   name: 'Eduardo',
//   surname: 'Segredo',
//   username: 'esegredo',
// });

// // Client code
// function clientCodea(data: string) {
//   console.log(data);
// }

// clientCode(systemA.getData());
// console.log(systemB.getSpecificData());

// // Now, the client code understands the interface provided by SystemB
// // through the adapter
// const adapterA = new Adapter(systemB);
// clientCode(adapter.getData());
