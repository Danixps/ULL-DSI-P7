// //Nombre del archivo: ejercicio-1-modi.ts
// //Descripción: 
// //Autor: Daniel Bensa Expósito Paz
// //Github: https://github.com/Danixps
// //Correo Institucional: alu0101481876@ull.edu.es
// //Fecha: 21/02/2024

type numeros = string;

/**
 * Arithmeticable es una interfaz recibe un número entero y un array de números y devuelve la suma de los múltiplos de los números del array hasta el número entero
 * @param T[]
 * * ```typescript
 * ```
 */
interface Arithmeticable<T> {
  add(valor1: T, valor2: T): string;
  substract(valor1: T, valor2: T): string;
  multiply(valor1: T, valor2: T): string;
  divide(valor1: T, valor2: T): string;

}


/**
 * ArithmeticableCollection recibe un número entero y un array de números y devuelve la suma de los múltiplos de los números del array hasta el número entero
 * @param T[]
 * * ```typescript
 * ```
 */
export class ArithmeticableCollection<T extends string> implements Arithmeticable<T> {
  constructor(private arithmetica: T[]) {
  }

  add(valor2: T, valor3: T) {
    return valor2 + valor3;
  }

  multiply(valor2: T, valor3: T) {
    return valor2 + valor3;
  }
  
  substract(valor2: T, valor3: T) {
    return valor2 + valor3;
  }

  divide(valor2: T, valor3: T) {
    return valor2 + valor3;
  }

  addArithmeticable(newAritmetic: T){
    this.arithmetica.push(newAritmetic);
    
  }
  getItem(index: number) {
    return this.arithmetica[index];
  }

  getNumberOfArithmeticables(){
    return this.arithmetica.length
  }
}



/**
 * Rational recibe un número entero y un array de números y devuelve la suma de los múltiplos de los números del array hasta el número entero
 * @param racional1
 * @param racional2
 * 
 * * ```typescript
 * ```
 */
export class Rational<T extends numeros> implements Arithmeticable<T> {
  constructor(protected racional1: T , protected racional2: T) {
  }

  mcd(numerador: number, denominador: number): number {
    let a = Math.abs(numerador);
    let b = Math.abs(denominador);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  getNumerador_Denominador(racional: T): number[] {
    const numerador = parseInt(racional.split('/')[0]);
    const denominador = parseInt(racional.split('/')[1]);
    return [numerador, denominador];
 }

  add(){

    let [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
    let [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
    const denominador_comun = denominador1 * denominador2;
     numerador1 = numerador1 * denominador2;
     numerador2 = numerador2 * denominador1;
     const numerador = numerador1 + numerador2;
     const minimo_comun_divisor = this.mcd(numerador, denominador_comun);
    return numerador / minimo_comun_divisor + '/' + denominador_comun / minimo_comun_divisor;

  }

  substract() {
       let [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
       let [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
       const denominador_comun = denominador1 * denominador2;
       numerador1 = numerador1 * denominador2;
       numerador2 = numerador2 * denominador1;
       const numerador = numerador1 - numerador2;
       const minimo_comun_divisor = this.mcd(numerador, denominador_comun);
       return numerador / minimo_comun_divisor + '/' + denominador_comun / minimo_comun_divisor;
  }

  multiply() {
      const [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
      const [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
      const numerador = numerador1 * numerador2;
      const denominador = denominador1 * denominador2;
      const minimo_comun_divisor = this.mcd(numerador, denominador);
      return numerador / minimo_comun_divisor + '/' + denominador / minimo_comun_divisor;
    }

  divide() {
        const [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
        const [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
        const numerador = numerador1 * denominador2;
        const denominador = denominador1 * numerador2;
        const minimo_comun_divisor = this.mcd(numerador, denominador);
        return numerador / minimo_comun_divisor + '/' + denominador / minimo_comun_divisor;
      }

}

/**
 * Complex recibe un número entero y un array de números y devuelve la suma de los múltiplos de los números del array hasta el número entero
 * @param complejo1
 * @param complejo2
 * 
 * * ```typescript
 * ```
 */
export class Complex<T extends numeros> implements Arithmeticable<T> {
  constructor(protected racional1: T , protected racional2: T) {
  }

  mcd(numerador: number, denominador: number): number {
    let a = Math.abs(numerador);
    let b = Math.abs(denominador);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  getNumerador_Denominador(racional: T): number[] {
    const numerador = parseInt(racional.split(' ')[0]);
    const denominador = parseInt(racional.split(' ')[1]);
    return [numerador, denominador];
 }

  add(){

    let [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
    let [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
    const denominador_comun = denominador1 * denominador2;
     numerador1 = numerador1 * denominador2;
     numerador2 = numerador2 * denominador1;
     const numerador = numerador1 + numerador2;
     const minimo_comun_divisor = this.mcd(numerador, denominador_comun);
    return numerador / minimo_comun_divisor + ' ' + denominador_comun / minimo_comun_divisor + 'i' ;

  }

  substract() {
       let [numerador1, denominador1] = this.getNumerador_Denominador(this.racional1);
       let [numerador2, denominador2] = this.getNumerador_Denominador(this.racional2);
       const denominador_comun = denominador1 * denominador2;
       numerador1 = numerador1 * denominador2;
       numerador2 = numerador2 * denominador1;
       const numerador = numerador1 - numerador2;
       const minimo_comun_divisor = this.mcd(numerador, denominador_comun);
       return numerador / minimo_comun_divisor + ' ' + denominador_comun / minimo_comun_divisor + 'i' ;
  }

  multiply() {
      const [r1, im1] = this.getNumerador_Denominador(this.racional1);
      const [r2, im2] = this.getNumerador_Denominador(this.racional2);
      const real = r1 * r2
      const imaginaria = im1 * im2;
      const parte_real = real - imaginaria;
      const real2 = r1 * im2;
      const imaginaria2 = im1 * im2;
      const parte_imaginaria = real2 + imaginaria2;

      return parte_real + ' ' +  parte_imaginaria + 'i';
    }

  divide() {
    const [r1, im1] = this.getNumerador_Denominador(this.racional1);
    const [r2, im2] = this.getNumerador_Denominador(this.racional2);
    const real = r1 * r2
    const imaginaria = im1 * im2;
    const parte_real = real - imaginaria;
    const real2 = r1 * im2;
    const imaginaria2 = im1 * im2;
    const parte_imaginaria = real2 + imaginaria2;

    return parte_real + ' ' +  parte_imaginaria + 'i';
    }

}
const racional = new Rational('1/2', '2/1');
const complejo = new Complex('1 2', '2 1');

console.log(racional.add());
console.log(racional.multiply());
console.log(racional.divide());
console.log(racional.substract());
console.log(complejo.add());
 
const coleccion = new ArithmeticableCollection(['1', '1', '3']);
// const dato: T = '2';
console.log(coleccion.getNumberOfArithmeticables());
console.log(coleccion.getItem(1));

