const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}

let filtrar = (tarea, estado) => {
        return tarea.estado == estado;
}

let filtrarPorEstado = () => {
    return tareasFiltradas = archivoTareas.leerArchivo().filter( tarea => tarea.estado == process.argv[3]);
}

let crearTareas = (titulo) => {
    tareas = archivoTareas.leerArchivo();
    let nuevaTarea = {
        titulo: titulo,
        estado: 'pendiente'
    }
    tareas.push(nuevaTarea);
    fs.writeFileSync('tareas.json', JSON.stringify(tareas))
}

module.exports = { archivoTareas, filtrarPorEstado , crearTareas };