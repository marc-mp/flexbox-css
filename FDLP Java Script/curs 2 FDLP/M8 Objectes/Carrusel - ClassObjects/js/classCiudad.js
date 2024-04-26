class Ciudad{
    constructor(imagen, nombre, title, descripcion){
        this._imagen = imagen
        this._nombre = nombre
        this._title = title
        this._descripcion = descripcion
    }

    get imagen(){
        return this._imagen
    }

    get nombre(){
        return this._nombre
    }

    get title(){
        return this._title
    }

    get descripcion(){
        return this._descripcion
    }

    set imagen(nuevaimagen){
        this._imagen = nuevaimagen
    }

    set nombre(nuevonombre){
        this._nombre = nuevonombre
    }

    set title(nuevotitle){
        this._title = nuevotitle
    }

    set descripcion(nuevadescripcion){
        this._descripcion = nuevadescripcion
    }


}


