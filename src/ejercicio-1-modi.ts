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
  constructor(private complex_number: Interface_complex) {
  }
  getDataComplex(): Interface_complex{
    return this.complex_number;
  }
}


/**
 * Descripción: La clase Rational define un array de items de tipo T y métodos para añadir, eliminar, listar, buscar y ordenar los items.
 * @param num define el numerador
 * @param dem define el denomindador
 */
export class Rational {
  constructor(private num: number = 0, private deno :number = 0) {
  }

  getSpecificComplex(): number[] {
    return [this.num/this.deno, 0];
  }

  /**
  * Descripción: La funcion add suma dos objertos con formas de complejo
  * @param c1 que va a ser el complejo que pasemos por parametro
  * @returns devolvemos la forma de un complejo
  */
  add(c1: Complex) : number[] {

    return [c1.getDataComplex().re + this.num/this.deno, c1.getDataComplex().im]
  }
  /**
  * Descripción: La funcion add suma dos objertos con formas de complejo
  * @param c1 que va a ser el complejo que pasemos por parametro
  * @returns devolvemos la forma de un complejo
  */
  sub(c1: Complex) : number[] {

    return [c1.getDataComplex().re - this.num/this.deno, c1.getDataComplex().im]
  }
  /**
  * Descripción: La funcion add suma dos objertos con formas de complejo
  * @param c1 que va a ser el complejo que pasemos por parametro
  * @returns devolvemos la forma de un complejo
  */
  mult(c1: Complex) : number[] {

    return [c1.getDataComplex().re * this.num/this.deno, c1.getDataComplex().im * this.num/this.deno]
  }
  /**
  * Descripción: La funcion add suma dos objertos con formas de complejo
  * @param c1 que va a ser el complejo que pasemos por parametro
  * @returns devolvemos la forma de un complejo
  */
  div(c1: Complex) : number[] {

    return [c1.getDataComplex().re / (this.num/this.deno), c1.getDataComplex().im / this.num/this.deno]
  }
  
}

/**
 * Descripción: La clase Adapter, adapta un rational a un complejo
 * @param services es un atributo de tipo complejo
 */
export class Adapter extends Rational {
  constructor(private service: Complex) {
    super();
  }
   /**
  * Descripción: La funcion getData devuelve la forma de un complejo
  * @returns devolvemos la forma de un complejo
  */
  getData(): number[]{
    return [this.service.getDataComplex().re, this.service.getDataComplex().im];
  }
}


const systemA_Rational = new Rational(1, 2);
const systemB_Complex = new Complex({
  re: 2,
  im: 1,

});


/**
 * Descripción: La funcion clientcode, adapta un rational a un complejo
 * @param data es un array de dos numeros donde recibe un complejo o lo que tenga forma de complejo
 */
function clientCode(data: number[]) {
  console.log(data);
}

clientCode(systemA_Rational.getSpecificComplex());
console.log(systemB_Complex.getDataComplex());

console.log(systemA_Rational.add(systemB_Complex));
console.log(systemA_Rational.sub(systemB_Complex));
console.log(systemA_Rational.mult(systemB_Complex));
console.log(systemA_Rational.div(systemB_Complex));



const adapter = new Adapter(systemB_Complex);
clientCode(adapter.getData());
