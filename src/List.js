class List {
    // Añadir elementos al final de la lista
    add (element){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

    // Metodo sirve para  obtener el elemento en la posicion index
    // 0(1)

    insert (element, index){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

    remove (element){
        throw new Error("Funcionalidad pendeiente de implementar");
    }
    // O(1)
    get (index){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

    size (){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

    isEmpty (){
        return this.size() === 0;
    }

    clear (){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

    [Symbol.iterator](){
        throw new Error("Funcionalidad pendeiente de implementar");
    }

}

module.exports = List;