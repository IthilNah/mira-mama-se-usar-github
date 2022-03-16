const { fstat } = require('fs');
let { archivoTareas, filtrarPorEstado, crearTareas } = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];
estados = ['pendiente', 'en progreso', 'terminada']

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(tarea => {
            console.log(tarea.titulo + ' - ' + tarea.estado);
        });
        break;

    case 'filter':
        let estado = process.argv[3];
        if (estados.includes(estado)) {
            console.log('Listado de tareas ' + estado + 's');
            console.log('------------------');
            let tareasFiltradas = filtrarPorEstado();
            tareasFiltradas.forEach(tarea => {
                console.log(tarea.titulo + ' - ' + tarea.estado);
            });          
        } else {
            console.log('Atención - Tienes que pasarme un estado');
            console.log('Los estados posibles son: terminada, pendiente, en progreso');
        }
        break;

    case 'crear':
        console.log('Creando tarea');
        console.log('------------------');
        crearTareas(process.argv[3]);
        console.log('Tarea "' + process.argv[3] + '" creada con estado "pendiente"')
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}