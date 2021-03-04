# POO-con-JavaScript
Organización semántica de clases y propiedades 

const _privado = new WeakMap; 
 
 class Libro {
  constructor(titulo, autor, precio) {

    const properties = {
      _titulo: titulo,
      _autor: autor,
      _precio: precio
    }
   
     _privado.set(this, {properties});      
     _privado.get()

  }

  get titulo() {
    return _privado.get(this).properties["_titulo"];
  }

  set titulo(newTitulo) {
    return _privado.get(this).properties["_titulo"] = newTitulo; 

  }  

  
  get autor() {
    return _privado.get(this).properties["_autor"];
  }

  set autor(newautor) {
    return _privado.get(this).properties["_autor"] = newauthor; 

  }  

  get precio() {
    return _privado.get(this).properties["_precio"];
  }

  set precio(newprecio) {
    return _privado.get(this).properties["_precio"] = newprecio; 

  }  
  getAllData() {
    console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio} `)
  }

  }
   
  //Herencia

  class Comic extends Libro {
      constructor(name, autor, precio,illustrator) {
     
        super(name, autor, precio,);
        this.illustrator = illustrator;
      }

      addillustrator(newillustrator = []) {
         this.illustrator.push(newillustrator);
       } 

       getAllData() {
         super.getAllData();
        console.log(`illustradores: ${this.illustrator}`);
      } 
    }


      class ShoppingCart {
        constructor()  {
          this.products = [];
        }
//arreglo dinamico
         
        addProduct(amount, precio) {
          // 2 * 150
          this.products.push(...Array(amount).fill(precio));   //los tres puntos concatenan los arreglos 
        }

          showProduct() {
              console.log( this.products );
          }

          calcTotal() {
            return this.products
                  .map( precio => precio )  // map ejecuta una funcion sobre cada uno de los productos
                  .reduce( (ac, precio) => ac + precio, 0 ); 
          }

          prinTicket( ) {
            console.log(`total a pagar ${this.calcTotal()}`)
          }
      }
        


 const Libro1 = new Libro('1984','george Orwell',350);
 const Libro2 = new Libro('El proceso','Fran Kafka',500);


 const Comic1 = new Comic ('Sin City', 'Frank Miller', 800, ['pi xiping']);

 Libro1.titulo = ('veinticinco pesos');  //valor agregado
 

console.log( Libro1);

 Comic1.addillustrator('JHONSONS'); 
 console.log(Comic1);

 const cart = new ShoppingCart();

 cart.addProduct(2, Comic1.precio);

 cart.addProduct(1, Libro1.precio);

 cart.showProduct();

 cart.prinTicket();

 Comic1.getAllData();
 Libro1.getAllData();
