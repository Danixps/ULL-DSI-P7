import 'mocha';
import {expect} from 'chai';
import {Rational, Complex, Adapter}  from '../src/ejercicio-1-modi';

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
    it('Suma de racional adaptado a complejo y otro complejo ', () => {
    const systemA_Rational = new Rational(1, 2);
    const systemB_Complex = new Complex({
    re: 2,
    im: 1,

    });
    function clientCode(data: number[]) {
      console.log(data);
    }

    clientCode(systemA_Rational.getSpecificComplex());


    const adapter = new Adapter(systemB_Complex);
    clientCode(adapter.getData());

       
    expect(systemA_Rational.add(systemB_Complex)).to.be.eql([2.5, 1]);


      });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Resta de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });
  function clientCode(data: number[]) {
    console.log(data);
  }

  clientCode(systemA_Rational.getSpecificComplex());


  const adapter = new Adapter(systemB_Complex);
  clientCode(adapter.getData());

     
  expect(systemA_Rational.sub(systemB_Complex)).to.be.eql([1.5, 1]);


    });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Suma de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });
  function clientCode(data: number[]) {
    console.log(data);
  }

  clientCode(systemA_Rational.getSpecificComplex());


  const adapter = new Adapter(systemB_Complex);
  clientCode(adapter.getData());

     
  expect(systemA_Rational.mult(systemB_Complex)).to.be.eql([1, 0.5]);


    });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Suma de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });
  function clientCode(data: number[]) {
    console.log(data);
  }

  clientCode(systemA_Rational.getSpecificComplex());


  const adapter = new Adapter(systemB_Complex);
  clientCode(adapter.getData());

     
  expect(systemA_Rational.div(systemB_Complex)).to.be.eql([4, 0.5]);


    });
});
