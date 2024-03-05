import 'mocha';
import {expect} from 'chai';
import {Rational, Complex, ArithmeticableCollection}  from '../src/ejercicio-1-modi';

describe('Ejercicio-1-modi. Racionales', () => {
    it('operaciones con ellos', () => {
      const racional = new Rational('1/2', '2/1');


       
      expect(racional.add()).to.be.equal('5/2');
      expect(racional.substract()).to.be.equal('-3/2');
      expect(racional.multiply()).to.be.equal('1/1');
      expect(racional.divide()).to.be.equal('1/4');

    });
});



describe('Ejercicio-1-modi. Complejo', () => {
  it('Operaciones con ellos', () => {
    const complejo = new Complex('1 2', '2 1');
    
     
    expect(complejo.add()).to.be.equal('5 2i');
    expect(complejo.substract()).to.be.equal('-3 2i');
    expect(complejo.multiply()).to.be.equal('0 3i');
    expect(complejo.divide()).to.be.equal('0 3i');

  });
});

describe('Ejercicio-1-modi. Aritmethic Collection', () => {
  it('Operaciones con ellos', () => {
    const coleccion = new ArithmeticableCollection(['1', '1', '3']);
   // const racional = new Rational('1/2', '2/1');
   // coleccion.addArithmeticable(complejo1);
    
    
    expect(coleccion.getNumberOfArithmeticables()).to.be.equal(3);
    expect(coleccion.getItem(1)).to.be.equal('1');
    coleccion.addArithmeticable('1');
  });
});
