var ngApp = angular.module('myApp',[]);
ngApp.controller('myController', function($scope){
    $scope.greetingComputer = "The MS program in computer science imparts advanced knowledge in core Computer Science subjects and a"+
   " lso of different streams, e.g., semantic computing. At the same time, students get initial training on "
    +"how to conduct research through research thesis .The successful"
     +"graduate may develop careers in Research and Development, Industry, Academia  ,Defense Organizations etc.";

     $scope.greetingBa_Computer = "The BS program offered by the department focuses on producing high quality computer scientists" 
     +"with a broad vision and strong ethical values. The curriculum for BS CS program contains 5 elective"
     +"courses (15 SCH). The students are offered elective courses in different streams, so that they can "
        +" specialize in the area of their interest.";

        $scope.greetingBa_Software ="The world today is experiencing extensive use of software in every"
        +"aspect of life; from a simple handset to multi-billion dollars satellite,"
        +"everything is being backed by software.This degree will enable the students to begin"
          +"  a career in software development, project management, quality management, "
        +"enterprise application development, business & system analysis, architecture,"
          +"  design, testing etc.";

})