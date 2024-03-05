import 'mocha';
import {expect} from 'chai';
import {Box, Furniture, Clothing} from '../src/ejercicio-1';

describe('Ejercicio-1. Creacion de cajas', () => {
    it('Creación de cajas con muebles y ropas', () => {
      
        const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);
        expect(box.listItems()).to.be.deep.equal('Chair Kitchen\nShirt Nike\n');

    });
    it('Creación de cajas con muebles', () => {
        const box = new Box<Furniture>([new Furniture('Chair Kitchen', 180), new Furniture('Table Kitchen', 100)]);
        expect(box.listItems()).to.be.deep.equal('Chair Kitchen\nTable Kitchen\n');
    });
    it('Creación de cajas con ropas', () => {
        const box = new Box<Clothing>([new Clothing('Shirt Nike', 100), new Clothing('Pants Nike', 100)]);
        expect(box.listItems()).to.be.deep.equal('Shirt Nike\nPants Nike\n');
    });
});

describe('Ejercicio-1. Añadir y eliminar items', () => {
    it('Añadir y eliminar items', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike]);
        box.addItem(new Furniture('Table Kitchen', 100));
        expect(box.listItems()).to.be.deep.equal('Chair Kitchen\nShirt Nike\nTable Kitchen\n');
        box.removeItem(silla);    
        expect(box.listItems()).to.be.deep.equal('Shirt Nike\nTable Kitchen\n');
    });
    it('Añadir y eliminar items con muchos elementos dentro de las cajas', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 100);
        const pantalon_nike = new Clothing('Pants Nike', 100);
        const sillon = new Furniture('Sofa Kitchen', 180);
        const mesa = new Furniture('Table Kitchen', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike, pantalon_nike, sillon, mesa]);
        
        box.addItem(new Furniture('Table Room', 100));
        box.addItem(new Furniture('Chair Room', 120));
        expect(box.listItems()).to.be.deep.equal('Chair Kitchen\nShirt Nike\nPants Nike\nSofa Kitchen\nTable Kitchen\nTable Room\nChair Room\n');

        box.removeItem(mesa);
        box.removeItem(silla);
        box.removeItem(sillon);
        expect(box.listItems()).to.be.deep.equal('Shirt Nike\nPants Nike\nTable Room\nChair Room\n');
    });
});

describe('Ejercicio-1. Buscar items', () => {
    it('Buscar items', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike]);
        expect(box.findItem(new Furniture('Chair Kitchen', 180))).to.be.deep.equal(silla);
        expect(box.findItem(new Clothing('Shirt Nike', 100))).to.be.deep.equal(camisa_nike);
    });
    it('Buscar items con muchos elementos dentro de las cajas', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 100);
        const pantalon_nike = new Clothing('Pants Nike', 100);
        const sillon = new Furniture('Sofa Kitchen', 180);
        const mesa = new Furniture('Table Kitchen', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike, pantalon_nike, sillon, mesa]);
        expect(box.findItem(new Furniture('Chair Kitchen', 180))).to.be.deep.equal(silla);
        expect(box.findItem(new Clothing('Shirt Nike', 100))).to.be.deep.equal(camisa_nike);
        expect(box.findItem(new Furniture('Sofa Kitchen', 180))).to.be.deep.equal(sillon);
        expect(box.findItem(new Furniture('Table Kitchen', 100))).to.be.deep.equal(mesa);
    });
});

describe('Ejercicio-1. Ordenar items', () => {
    it('Ordenar items', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike]);
        box.sortItemsbyWeight();
        expect(box.listItems()).to.be.deep.equal('Shirt Nike\nChair Kitchen\n');
    });
    it('Ordenar items con muchos elementos dentro de las cajas', () => {
        const silla = new Furniture('Chair Kitchen', 180);
        const camisa_nike = new Clothing('Shirt Nike', 10);
        const pantalon_nike = new Clothing('Pants Nike', 6);
        const sillon = new Furniture('Sofa Kitchen', 180);
        const mesa = new Furniture('Table Kitchen', 100);
        const box = new Box<Furniture | Clothing>([silla, camisa_nike, pantalon_nike, sillon, mesa]);
        box.sortItemsbyWeight();
        expect(box.listItems()).to.be.deep.equal('Pants Nike\nShirt Nike\nTable Kitchen\nChair Kitchen\nSofa Kitchen\n');
    });
});

// // Crear nuevos muebles
// const chair = new Furniture('Chair Room', 120);
// const table = new Furniture('Table Room', 100);

// const box = new Box<Furniture | Clothing>([new Furniture('Chair Kitchen', 180), new Clothing('Shirt Nike', 100)]);

// box.listItems(); // Debería imprimir "Chair" y "Table"
// // Añadir los muebles a la caja
// box.addItem(chair);
// box.addItem(table);

// // Listar los items en la caja
// box.listItems(); // Debería imprimir "Chair" y "Table"

// // Buscar un item en la caja
// const foundItem = box.findItem(new Furniture('Chair Room', 20));
// console.log(foundItem); // Debería imprimir el objeto Furniture para la silla

// // Eliminar un item de la caja
// box.removeItem(chair);

// const foundItem2 = box.findItem(new Furniture('Chair Room', 20));
// console.log(foundItem2); // Debería imprimir el objeto Furniture para la silla

// // Listar los items en la caja de nuevo
// box.listItems(); // Ahora solo debería imprimir "Table"

// box.sortItemsbyWeight();

// box.listItems(); // Debería imprimir "Chair" y "Table"

