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
  constructor(private complejo: Interface_complex = {
        re: 0, im: 0}) {
  }
   getDataComplex(): Interface_complex {
     return { re: this.complejo.im, im: this.complejo.re};
   }
   getDataComplex_im(): number {
    return this.complejo.im;
  }
  getDataComplex_real(): number {
    return this.complejo.re;
  }
   
   add(c1: Complex) : Complex {

    return new Complex({im: c1.getDataComplex_im() + this.getDataComplex_im(), re: c1.getDataComplex_real() +  this.getDataComplex_real()});
  }
  sub(c1: Complex) : Complex {
    return new Complex({im: c1.getDataComplex_im() - this.getDataComplex_im(), re: c1.getDataComplex_real() -  this.getDataComplex_real()});
  }
  mult(c1: Complex) : Complex {
    const real = this.getDataComplex_real() * c1.getDataComplex_real() - this.getDataComplex_im() * c1.getDataComplex_im();
    const imagi = this.getDataComplex_real() * c1.getDataComplex_im() + this.getDataComplex_im() * c1.getDataComplex_real();
    return new Complex({im:real, re: imagi});
  }

  div(c1: Complex) : Complex {
    const denominator = c1.getDataComplex_real() * c1.getDataComplex_real() + c1.getDataComplex_im() * c1.getDataComplex_im();
    const real = (this.getDataComplex_real() * c1.getDataComplex_real() + this.getDataComplex_im() * c1.getDataComplex_im() )/ denominator;
    const imagi = (this.getDataComplex_im()* c1.getDataComplex_real()- this.getDataComplex_real() * c1.getDataComplex_im()) / denominator;
    return new Complex({im: real, re: imagi});
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
  getSpecificComplexi(): number {
    return 0;
  }
  getSpecificComplexr(): number {
    return this.num/this.deno;
  }
  
}

/**
 * Descripción: La clase Adapter, adapta un rational a un complejo
 * @param services es un atributo de tipo complejo
 */
export class Adapter extends Complex {
  constructor(private service: Rational) {
    super({im: service.getSpecificComplexi(), re: service.getSpecificComplexr()});
  }
   /**
  * Descripción: La funcion getData devuelve la forma de un complejo
  * @returns devolvemos la forma de un complejo
  */

  getData(): Interface_complex {
    return {im: this.getDataComplex_im(), re: this.getDataComplex_real()}
  }
  
 
}


const systemA_Rational = new Rational(1, 2);

const systemB_Complex = new Complex({im: 1, re: 2});




/**
 * Descripción: La funcion clientcode, adapta un rational a un complejo
 * @param data es un array de dos numeros donde recibe un complejo o lo que tenga forma de complejo
 */
export function clientCode(data: Complex) {
  console.log(data);
}



 const adapter = new Adapter(systemA_Rational);

 //racional adaptado
 console.log('Racional adaptado');
 console.log(adapter.getData())
 console.log('Complejo');
 console.log(systemB_Complex);

 console.log('Suma');
 clientCode(adapter.add(systemB_Complex));

 console.log('Resta');
 clientCode(adapter.sub(systemB_Complex));

 console.log('Multiplicacion');
 clientCode(adapter.mult(systemB_Complex));

 console.log('División');
 clientCode(adapter.div(systemB_Complex));