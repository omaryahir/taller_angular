function StudentController($scope){
    $scope.alumnos=[
        {nombre:"Omar", telefono:"324234182", nivel:"Tercero" },
        {nombre:"Cuatemoc", telefono:"9717136182", nivel:"Primero" },
        {nombre:"Raúl", telefono:"4234324182", nivel:"Segundo" },
        {nombre:"Mario", telefono:"2342346182", nivel:"Primero" },
        {nombre:"Edgar", telefono:"23432471723", nivel:"Primero" },
        {nombre:"Luis", telefono:"23432471723", nivel:"Primero" }
    ];

    $scope.formVisibility=false;

    $scope.Save=function(){
        $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, nivel:$scope.nuevoAlumno.nivel}); 
        $scope.formVisibility=false;
        console.log($scope.formVisibility);
    }

    $scope.ShowForm=function(){
        $scope.formVisibility=true;
        console.log($scope.formVisibility);
    }

}
