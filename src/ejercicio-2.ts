//Nombre del archivo: ejercicio-2.ts
//Descripción: El objetivo de este ejercicio es crear un sistema de facturación que genere facturas en distintos formatos.
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 23/02/2024;
import fs = require('fs');

/**
 * Descripción: La interfaz Format_voice define los métodos que deben implementar las clases que la implementen.
 * @param T Tipo de los items.
 * @param id Identificador de la factura.
 * @param customerName Nombre del cliente.
 * @param items Items de la factura.
 * @param totalAmount Montante total de la factura.
 * @param generate Genera la factura.
*/
export interface Format_voice<T> {  
  id: string;
  customerName: string;
  items: T[];
  totalAmount: number;
  generate(): void;
}

/**
 * Descripción: La clase Invoice define un objeto factura con los atributos id, customerName, items y totalAmount.
 * @param T Tipo de los items.
 * @param id Identificador de la factura.
 * @param customerName Nombre del cliente.
 * @param items Items de la factura.
 * @param totalAmount Montante total de la factura.
*/
export abstract class Invoice<T> implements Format_voice<T> {
  constructor(public id: string, public customerName: string, public items: T[], public totalAmount: number) {}
  abstract generate(): void;
}

/**
 * Descripción: La clase PdfInvoice define un objeto factura con los atributos id, customerName, items y totalAmount y genera la factura en formato pdf.
 * @param T Tipo de los items.
 * @param id Identificador de la factura.
 * @param customerName Nombre del cliente.
 * @param items Items de la factura.
 * @param totalAmount Montante total de la factura.
*/
export class PdfInvoice<T> extends Invoice<T> {
    generate(): void {
      const invoiceData = `Invoice ID: ${this.id}\nCustomer Name: ${this.customerName}\nItems: ${this.items.join(', ')}\nTotal Amount: ${this.totalAmount}`;
      fs.writeFileSync(`${this.id}.pdf`, invoiceData);
    }
  }

/**
 * Descripción: La clase HtmlInvoice define un objeto factura con los atributos id, customerName, items y totalAmount y genera la factura en formato html.
 * @param T Tipo de los items.
 * @param id Identificador de la factura.
 * @param customerName Nombre del cliente.
 * @param items Items de la factura.
 * @param totalAmount Montante total de la factura.
 * @param generate Genera la factura.
 * ```typescript
 * const htmlInvoice = new HtmlInvoice('INV-002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
 * billingSystem.generateInvoice(htmlInvoice);
 * ```
*/
export class HtmlInvoice<T> extends Invoice<T> {
  generate(): void {
    const invoiceData = `Invoice ID: ${this.id}<br>Customer Name: ${this.customerName}<br>Items: ${this.items.join(', ')}<br>Total Amount: ${this.totalAmount}`;
    fs.writeFileSync(`${this.id}.html`, invoiceData);
  }
}

/**
 * Descripción: La clase BillingSystem define un sistema de facturación que genera facturas en distintos formatos.
 * @param T Tipo de los items.
 * @param invoice Factura a generar.
 * @param generateInvoice Genera la factura.
 * ```typescript
 * const billingSystem = new BillingSystem();
 * const pdfInvoice = new PdfInvoice('INV-001', 'John Doe', ['Item 1', 'Item 2'], 100);
 * billingSystem.generateInvoice(pdfInvoice);
 * ```
*/
export class BillingSystem {
  generateInvoice<T>(invoice: Invoice<T>): void {
      invoice.generate();
  }
}

const billingSystem = new BillingSystem();
const pdfInvoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
billingSystem.generateInvoice(pdfInvoice); 


const htmlInvoice = new HtmlInvoice('002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
billingSystem.generateInvoice(htmlInvoice); 