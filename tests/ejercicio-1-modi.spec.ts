import 'mocha';
import {expect} from 'chai';
import {Rational, Complex, Adapter}  from '../src/ejercicio-1-modi';


describe('Pruebas sobre adaptador', () => {
  it('operaciones con ellos', () => {

const systemA_Rational = new Rational(1, 2);

const systemB_Complex = new Complex({im: 1, re: 2});






 const adapter = new Adapter(systemA_Rational);

 //racional adaptado
 console.log('Racional adaptado');
 expect(adapter.getData()).to.be.eql({im:0, re:0.5});

//complejo
 expect(systemB_Complex).to.be.eql(new Complex({im:1, re:2}));

 expect(adapter.add(systemB_Complex)).to.be.eql(new Complex({im:1, re:2.5}));
 expect(adapter.sub(systemB_Complex)).to.be.eql(new Complex({im:1, re:1.5}));
 expect(adapter.mult(systemB_Complex)).to.be.eql(new Complex({im:1, re:0.5}));
 expect(adapter.div(systemB_Complex)).to.be.eql(new Complex({im:0.2, re:-0.1}));
  });

});
