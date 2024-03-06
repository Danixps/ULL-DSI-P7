import 'mocha';
import {expect} from 'chai';
import {Rational, Complex}  from '../src/ejercicio-1-modi';


describe('Pruebas sobre adaptador', () => {
  it('Conversion de un racional a un complejo', () => {
  const systemA_Rational = new Rational(1, 2);
     
  expect(systemA_Rational.getSpecificComplex()).to.be.eql([0.5, 0]);


    });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Comparar un racional y un complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 0.5,
  im: 0,

  });
  
  expect(systemA_Rational.getSpecificComplex()).to.be.eql([systemB_Complex.getDataComplex().re, systemB_Complex.getDataComplex().im]);


    });
});


describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
    it('Suma de racional adaptado a complejo y otro complejo ', () => {
    const systemA_Rational = new Rational(1, 2);
    const systemB_Complex = new Complex({
    re: 2,
    im: 1,

    });

       
    expect(systemA_Rational.add(systemB_Complex)).to.be.eql([2.5, 1]);


      });
    it('Suma 2 de racional adaptado a complejo y otro complejo ', () => {
        const systemA_Rational = new Rational(2, 2);
        const systemB_Complex = new Complex({
        re: 2,
        im: 1,
    
        });
    
           
        expect(systemA_Rational.add(systemB_Complex)).to.be.eql([3, 1]);
    
    
    });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Resta de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });

  expect(systemA_Rational.sub(systemB_Complex)).to.be.eql([1.5, 1]);


  });

  it('Resta 2 de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(4, 4);
  const systemB_Complex = new Complex({
  re: 2,
  im: 6,

  });

  expect(systemA_Rational.sub(systemB_Complex)).to.be.eql([1, 6]);


  });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Multiplicación de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });


     
  expect(systemA_Rational.mult(systemB_Complex)).to.be.eql([1, 0.5]);


    });

it('Multiplicación 2 de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(10, 5);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  })
     
  expect(systemA_Rational.mult(systemB_Complex)).to.be.eql([4, 2]);

    });
});

describe('Ejercicio-1-modi. Adaptar racional a complejo', () => {
  it('Division de racional adaptado a complejo y otro complejo ', () => {
  const systemA_Rational = new Rational(1, 2);
  const systemB_Complex = new Complex({
  re: 2,
  im: 1,

  });
     
  expect(systemA_Rational.div(systemB_Complex)).to.be.eql([4, 0.5]);


    });
    it('Division 2 de racional adaptado a complejo y otro complejo ', () => {
      const systemA_Rational = new Rational(4, 1);
      const systemB_Complex = new Complex({
      re: 2,
      im: 1,
    
      });
         
      expect(systemA_Rational.div(systemB_Complex)).to.be.eql([0.5, 0.25]);
    
    
        });
});


