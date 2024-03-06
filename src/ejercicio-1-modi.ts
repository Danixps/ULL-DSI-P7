// //Nombre del archivo: ejercicio-1-modi.ts
// //Descripción: 
// //Autor: Daniel Bensa Expósito Paz
// //Github: https://github.com/Danixps
// //Correo Institucional: alu0101481876@ull.edu.es
// //Fecha: 21/02/2024

/**
 * Descripción: El typo interface complex define un compplejo
 * @param re definde la part real
 * @param im definde la part imaginaria
 */
type Interface_complex = {
  re:number;
  im:number;
}
/**
 * Descripción: La clase Complex define un imaginario y real
 * @param complex_number definde un atriburto de una interfaz formada por imaginario y real
 */
export class Complex {
  constructor(private num: number = 0, private deno :number = 0) {
  }
  getDataComplex(): Complex{
    return new Complex(this.num, this.deno);
  }
  getDataim(): number{
    return this.num;
  }
  getDatare(): number{
    return this.deno;
  }
}


/**
 * Descripción: La clase Rational define un array de items de tipo T y métodos para añadir, eliminar, listar, buscar y ordenar los items.
 * @param num define el numerador
 * @param dem define el denomindador
 */
export class Rational {
  constructor(private num: number, private deno :number ) {
  }

  getSpecificComplex(): Rational {
    return new Rational(this.num/this.deno, 0);
  }
  getSpecificComplexreal(): number {
    return (this.num/this.deno);
  }
  getSpecificComplexima(): number {
    return (0);
  }
  
}

/**
 * Descripción: La clase Adapter, adapta un rational a un complejo
 * @param services es un atributo de tipo complejo
 */
export class Adapter extends Complex {
  constructor(private service: Rational) {
    super();
  }
   /**
  * Descripción: La funcion getData devuelve la forma de un complejo
  * @returns devolvemos la forma de un complejo
  */
  getData(): Complex {
    return this.getData().getDataComplex();
  }
  add(c1: Complex) : Complex {
    return new Complex(c1.getDatare() + this.service.getSpecificComplexreal(), c1.getDataim());
  }
  sub(c1: Complex) : Complex {
    return new Complex(c1.getDatare() - this.service.getSpecificComplexreal(), c1.getDataim());
  }
  mult(c1: Complex) : Complex {
    return new Complex(c1.getDatare() * this.service.getSpecificComplexreal(), c1.getDataim());
  }
  div(c1: Complex) : Complex {
    return new Complex(c1.getDatare() / this.service.getSpecificComplexreal(), c1.getDataim());
  }
}


const systemA_Rational = new Rational(3, 2);

const systemB_Complex = new Complex(1,2);

/**
 * Descripción: La funcion clientcode, adapta un rational a un complejo
 * @param data es un array de dos numeros donde recibe un complejo o lo que tenga forma de complejo
 */
function clientCode(data: Complex) {
  console.log(data);
}

//clientCode(systemA_Rational.getSpecificComplex());
console.log(systemB_Complex.getDataComplex());

// console.log(systemA_Rational.add(systemB_Complex));
// console.log(systemA_Rational.sub(systemB_Complex));
// console.log(systemA_Rational.mult(systemB_Complex));
// console.log(systemA_Rational.div(systemB_Complex));



const adapter = new Adapter(systemA_Rational);
clientCode(adapter.add(systemB_Complex));
clientCode(adapter.sub(systemB_Complex));
clientCode(adapter.mult(systemB_Complex));
