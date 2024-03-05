import 'mocha';
import {expect} from 'chai';
import * as fs from 'fs';
import { Invoice, PdfInvoice, HtmlInvoice, BillingSystem } from '../src/ejercicio-2';

describe('Ejercicio-2. Invoice', () => {
  it('Crear una instancia de factura', () => {
    const invoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    expect(invoice).to.be.instanceOf(Invoice);
  });
});

describe('Ejercicio-2. PdfInvoice', () => {
  it('Crea una factura en pdf', () => {
    const pdfInvoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    pdfInvoice.generate();
    expect(fs.existsSync('001.pdf')).to.equal(true);
  });
});

describe('Ejercicio-2. HtmlInvoice', () => {
  it('Crea una factura en HTML', () => {
    const htmlInvoice = new HtmlInvoice('002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
    htmlInvoice.generate();
    expect(fs.existsSync('002.html')).to.equal(true);
  });
});

describe('Ejercicio-2. BillingSystem', () => {
  it('Genera una factura en pdf', () => {
    const billingSystem = new BillingSystem();
    const pdfInvoice = new PdfInvoice('001', 'Daniel Exposito', ['Objeto 1', 'Objeto 2'], 100);
    billingSystem.generateInvoice(pdfInvoice);
    expect(fs.existsSync('001.pdf')).to.equal(true);
  });

  it('Genera una factura en HTML', () => {
    const billingSystem = new BillingSystem();
    const htmlInvoice = new HtmlInvoice('002', 'Jane Doe', ['Item 3', 'Item 4'], 200);
    billingSystem.generateInvoice(htmlInvoice);
    expect(fs.existsSync('002.html')).to.equal(true);
  });
});