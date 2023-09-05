
angular.module("Crud")
.controller("MainController", function($scope,$routeParams, PostResource,$location){

    $scope.idAlumno = "";

    // Listar alumnos en tabla
    listarAlumnos = () => {
        PostResource.query( data => {
            console.log(data.response)
            $scope.Alumnos = data.response;
        });
    }
    
    //Consultar Alumnos
    $scope.buscarAlumno = () => {
        PostResource.get({ id: $scope.idAlumno }, data => {
            var index = $scope.Alumnos.findIndex(Alumno => {
                return Alumno.id === data.response.id;
            });
            if (index !== -1) {
                $scope.Alumnos = [data.response];
            }
        }, error => {
            console.error("Error al obtener datos", error);
        });
    };

    //Eliminar Alumnos
    $scope.eliminarAlumno = Alumno => {
        PostResource.delete({ id: Alumno.id }, data => {
            console.log(data)
            listarAlumnos();
            $scope.Alumnos = $scope.Alumnos.filter(element => {
                return element.id !== Alumno.id;
            });
        });
    };

                //Formato JSON
            var config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            };


                //Guardar alumnos
    $scope.Alumno = {};
    $scope.GuardarAlumnos = () => {
        PostResource.save($scope.Alumno, {}, config, data =>{
            $location.path("templates/Alumnos.html");
        });
    };


        //Mostrar datos en los inputs
    $scope.getStudent = idAlumno => {
        console.log(idAlumno)
        $scope.Alumno = PostResource.get({id: idAlumno}, response => {
            console.log(response)
            $scope.Alumno = response.response;
        });
    }
    

        // Editar Alumnos
    $scope.EditarAlumnos = () => {
        var updateFields = {
            alumno_id: $scope.Alumno.id,
            clave: $scope.Alumno.clave,
            matricula: $scope.Alumno.matricula,
            paterno: $scope.Alumno.paterno,
            materno: $scope.Alumno.materno,
            nombre: $scope.Alumno.nombre
        };

        PostResource.update(updateFields ,{}, config, data =>{
            console.log($scope.Alumno.id)
            $location.path("templates/Alumnos.html");
        });
    };

    //llamar función listar
    listarAlumnos();

})