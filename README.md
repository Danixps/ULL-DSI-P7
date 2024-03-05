# PRÁCTICA 6 : Clases e interfaces genéricas. Principios SOLID

*Nombre y apellidos: [Daniel Bensa Expósito Paz](https://github.com/Danixps?tab=repositories, "Enlace Github")*

*Correo Institucional: alu0101481876@ull.edu.es*

*Asignatura: Desarrollo de Sistemas Informáticos (DSI)*

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Danixps/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Danixps?branch=main)


## Índice

<div id='id1' />

## 1. [Introducción](#id1)
Para poder realizar la práctica es necesario tener en cuanta varios conceptos y aspectos:

1. **Clases abstractas**: Las clases abstractas son clases que no pueden ser instanciadas directamente. En su lugar, actúan como "plantillas" de las que otras clases pueden heredar. Las clases abstractas pueden definir métodos abstractos, que son métodos sin implementación que las clases derivadas deben implementar.

2. **Plantillas genéricas**: Las plantillas genéricas son una forma de reutilizar código para diferentes tipos de datos. En lugar de escribir el mismo código para diferentes tipos de datos, puedes escribir una "plantilla" que puede ser utilizada con cualquier tipo de dato.

3. **Principios SOLID**: Los principios SOLID son un conjunto de principios de diseño en la programación orientada a objetos que ayudan a hacer el código más comprensible, flexible y mantenible. Los principios son: Principio de Responsabilidad Única (Single Responsibility Principle), Principio de Abierto/Cerrado (Open/Closed Principle), Principio de Sustitución de Liskov (Liskov Substitution Principle), Principio de Segregación de Interfaces (Interface Segregation Principle) y Principio de Inversión de Dependencias (Dependency Inversion Principle).



<div id='id2' />

## 2. [Ejercicios de Tarea](#id2)

### 1. Ejercicio 1 - La mudanza 
Para el ejercicio 1 primero, se define una interfaz `Item<T>`, que establece los métodos que deben implementar las clases que la implementen. Los métodos incluyen obtener el nombre de un item, buscar un item, obtener el peso de un item y obtener un item por su nombre. Luego, se define una clase `Box<T extends Item<T>>` que representa una caja que puede contener items de cualquier tipo que implemente la interfaz `Item`. La caja tiene métodos para obtener el nombre de un item, agregar y eliminar items, listar los items, buscar un item y ordenar los items por peso. Después, se definen dos clases que implementan la interfaz `Item`: `Clothing` y `Furniture`. `Clothing` representa una prenda de vestir con un nombre, peso y talla. `Furniture` representa un mueble con un nombre, peso y número de piezas. Ambas clases implementan los métodos definidos en la interfaz `Item`.

### 2. Ejercicio 2 - Facturas en diferentes formatos
Para el ejercicio 2, creo una interfaz `Format_voice` que establece los métodos y propiedades que deben implementar las clases que la implementen. Los métodos y propiedades incluyen un identificador de factura, el nombre del cliente, los items de la factura, el monto total de la factura y un método para generar la factura. También defino una clase abstracta `Invoice` que implementa la interfaz `Format_voice`. Esta clase define un objeto factura con los atributos id, customerName, items y totalAmount. También tiene un método abstracto `generate` que debe ser implementado por las subclases. Después, se implementan dos clases que extienden la clase `Invoice`: `PdfInvoice` y `HtmlInvoice`. `PdfInvoice` genera la factura en formato PDF y `HtmlInvoice` genera la factura en formato HTML. Ambas clases implementan el método `generate` de la clase `Invoice`. Por último se define una clase `BillingSystem` que tiene un método `generateInvoice` que toma una factura y la genera.

### 3. Ejercicio 3 - Gestor de ficheros

El ejercicio-3 no cumple el Principio S,  de Responsabilidad Única de SOLID. La clase `FileManager` está manejando tanto la lectura como la escritura de archivos, lo que son dos responsabilidades diferentes. Podemos mejorar el diseño dividiendo la clase `FileManager` en dos clases separadas: `FileReader` y `FileWriter`. Cada una de estas clases tendrá una única responsabilidad de escribir y leer un archivo.

### 4. Ejercicio 4 - Impresoras y escáneres

El ejercicio-4 no cumple el Principio I, de Segregación de Interfaces de SOLID. Este principio establece que ninguna clase debería ser forzada a implementar interfaces que no usa. En este caso, la clase `Printer` está siendo forzada a implementar el método `scan()` que no necesita, y la clase `Scanner` está siendo forzada a implementar el método `print()` que no necesita. Podemos mejorar el diseño dividiendo la interfaz compleja `PrintableScannable` en dos interfaces simples separadas: `Printable` y `Scannable`. Luego, cada clase implementará solo las interfaces que necesita.

### 5. Ejercicio 5 - Servicio de mensajería

El ejercicio-5 no cumple el Principio D, de Inversión de Dependencias de SOLID. Este principio establece que las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones. En este caso, la clase `Notifier` depende directamente de las clases concretas `EmailService` y `ShortMessageService`, en lugar de depender de una abstracción. Podemos mejorar el diseño introduciendo una interfaz `NotificationService` que todas las clases de servicio de notificación deben implementar. Luego, la clase `Notifier` dependerá de esta interfaz, en lugar de las clases concretas.


<div id='id3' />

### 3. [Ejercicio de Modificación](#id2)

Creé una interfaz `Arithmeticable` que define los métodos para las operaciones aritméticas básicas: suma, resta, multiplicación y división.
Después implementé una clase `ArithmeticableCollection` que implementa la interfaz `Arithmeticable`. Esta clase tiene un array de elementos que son del tipo `T`. Los métodos de esta clase realizan operaciones aritméticas en dos valores de tipo `T`. Para crear la clase `Rational` que también implementa la interfaz `Arithmeticable`, aprovecho las funciones de prácticas anteriores. Esta clase está diseñada para trabajar con números racionales (números que se pueden expresar como el cociente de dos enteros). Los métodos de esta clase realizan operaciones aritméticas en dos números racionales.

Por último, para crear la clase `Complex` que también implementa la interfaz `Arithmeticable`, aprovecho las funciones de prácticas anteriores. Esta clase está diseñada para trabajar con números complejos (números que tienen una parte real y una parte imaginaria). Los métodos de esta clase realizan operaciones aritméticas en dos números complejos.


<div id='id4' />

### 4. [Bibliografía](#id4)

[Guión de la Práctica 6](https://ull-esit-inf-dsi-2324.github.io/prct06-generics-solid/)