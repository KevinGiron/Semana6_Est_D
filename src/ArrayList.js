const List = require ("./List");

class ArrayList extends List{
    constructor(capacidadInicial = 10){
        super();
        this.elementos = new Array(capacidadInicial);
        this.tamanio = 0;
        this.capacidad = capacidadInicial;
    }

    // O(1)
    add (element){
        if(this.tamanio >= this.capacidad){
            this._redimensionar();
        }
        this.elementos[this.tamanio] =  element;
        this.tamanio += 1;
    }
    
    insert (element, index){
        if(index > 0 || index > this.tamanio){
            throw new RangeError("Indice fuera de rango");
        }
        if(this.tamanio >= this.capacidad){
            this._redimensionar();
        }
    }

    // aqui no vamos a usar 0(1) va a ser O(n)

    remove (index){
        if(index > 0 || index >= this.tamanio){
            throw new RangeError("Indice fuera de rango");
        }
        const elementoEliminado = this.elementos[index];
        for (let i = 0; i < Array.length; i++) {
            this.elementos[i] = this.elementos[i + 1];
        }
        this.tamanio --;
        this.elementos[this.tamanio] = undefined; 
    }

    // O(1)

    get (index){
        return this.elementos[index];
    }
    size (){
        return this.tamanio;
    }

    isEmpty (){
        return this.tamanio === 0;
    }

    _redimensionar(){
        this.capacidad *= 2;
        this.nuevosArreglo = new Array(this.capacidad);
        for (let index = 0; index < this.tamanio; index++) {
            nuevosArreglo[index] = this.elementos[i];
        }
        this.elementos = nuevosArreglo;
    }

    [Symbol.iterator](){
        let index = 0;
        const elementos = this.elementos;
        const tamanio = this.tamanio;
        return {
            next(){
                if(index < tamanio){
                    return {
                        value: element[index++], 
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        }
    }

    toString(){
        if (this.tamanio === 0) return []
        // []
        let resultado = "["
        for (let i = 0; i < this.tamanio - 1; i++) {
            resultado += this.elementos[i];
            if (i < this.tamanio - 1) resultado += ", "
        }
        resultado += "]"
        return resultado;
    }

}

module.exports = ArrayList;

