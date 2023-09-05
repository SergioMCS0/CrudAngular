
angular.module("Crud")
.factory("PostResource", function ($resource) {

    return $resource("https://webservices.mx/escolares/test/alumnos/:id", { id: "@id" }, {
        
        query: {
            method: "GET",
            url: "https://webservices.mx/escolares/test/alumnos/listar"
        },
        get: {
            method: "GET",
            url: "https://webservices.mx/escolares/test/alumnos/obtener?alumno_id=:id"
        },
        save: {
            method: "POST", 
            url: "https://webservices.mx/escolares/test/alumnos/agregar", 
        },
        update: {
            method: "PUT", 
            url: "https://webservices.mx/escolares/test/alumnos/guardar", 
        },
        delete: {
            method: "DELETE",
            url: "https://webservices.mx/escolares/test/alumnos/eliminar?alumno_id=:id"
        }

    });
});
