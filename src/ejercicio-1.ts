//Nombre del archivo: ejercicio-1.ts
//Descripción: El objetivo de este ejercicio es crear un sistema de mudanzas que permita crear cajas con distintos tipos de items.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 03/02/2024

/**
 * Descripción: La interfaz Item define los métodos que deben implementar las clases que la implementen.
 */
abstract class Item {
    constructor(protected name: string, protected weight: number) {
    }
  
    getName() {
      return this.name;
    }
    
  
    abstract print(): void;
  }

/**
 * Descripción: La clase Box define un array de items de tipo T y métodos para añadir, eliminar, listar, buscar y ordenar los items.
 * @param item_collection Colección de items.
 */
export class Box<T extends Item> implements Iterable<T> {
    private item_collection: Map<string, T>;

  constructor(item_collection: T[]) {
        this.item_collection = new Map<string, T>();
        item_collection.forEach((item) => this.addItem(item));
  }



    addItem(item: T): void {
        this.item_collection.set(item.getName(), item);
    }
    removeItem(item: T): void {
        this.item_collection.delete(item.getName());
    }
   

    print() {
    for (const [figureName, Item] of this.item_collection) {
        console.log(figureName);
        Item.print();
      }
 
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.item_collection.values();
      }

}







export class Clothing extends Item {
    constructor( name: string, weight: number, private size: string = 'M') {
        super(name, weight);
    }
    getArea(): number {
        return 1;
    }
    print(): void {
        console.log('Name: ' + this.name + ' Weight: ' + this.weight + ' Size: ' + this.size);
    }
  
	/**
	 * Descripción: Devuelve el nombre del item.
	 * @returns Nombre del item.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getName(); // Debería imprimir "Shirt Nike"
	 * ```
	 */
    getName(): string {
        return this.name;
    }
    
	/**
	 * Descripción: Devuelve el peso del item.
	 * @param Item Item del que se quiere obtener el peso.
	 * @returns Peso del item.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getWeight(camisa_nike); // Debería imprimir 100
	 * ```
	 */
    getWeight(Item: Clothing): number {
        return Item.weight;
    }
    
	/**
	 * Descripción: Comprueba si el item es igual al item pasado como parámetro.
	 * @param Item Item con el que se quiere comparar.
	 * @returns true si el item es igual al item pasado como parámetro, false en caso contrario.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.searchItem(new Clothing('Shirt Nike', 100)); // Debería imprimir true
	 * ```
	 */
    searchItem(Item: Clothing): boolean {
        if (Item.name === this.name && Item.weight === this.weight && Item.size === this.size) {
            return true;
        } else {
            return false;
        }
    }
    
	/**
	 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
	 * @param name Nombre del item.
	 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
	 * ```typescript
	 * const camisa_nike = new Clothing('Shirt Nike', 100);
	 * camisa_nike.getItem('Shirt Nike'); // Debería imprimir el objeto Clothing
	 * ```
	 */
    getItem(name: string): Clothing | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
		
		/**
		 * Descripción: Devuelve el item si el nombre del item es igual al nombre pasado como parámetro.
		 * @param name Nombre del item.
		 * @returns Item si el nombre del item es igual al nombre pasado como parámetro, undefined en caso contrario.
		 * ```typescript
		 * const camisa_nike = new Clothing('Shirt Nike', 100);
		 * camisa_nike.getItembyname('Shirt Nike'); // Debería imprimir el objeto Clothing
		 * ```
		 */
    getItembyname(name: string): Clothing | undefined {
        if (this.name === name) {
            return this;
        }
        else {
            return undefined;
        }
    }
}


const box = new Box<Clothing>([new Clothing('Shirt Nike', 100), new Clothing('Pants Adidas', 200)]);


for (const figure of box) {
  figure.print();
  if (figure.getName() === 'Shirt Nike') {
    console.log('Found it!');
  }
}