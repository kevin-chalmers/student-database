"use strict";

// Definition of Student type
class Student {
    // ID of the student
    id;
    // Name of the student
    name;

    // Creates a new Student object
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

// Get's the mainApp section of the HTML document
var mainApp = angular.module("mainApp", []);

// Creates the controller for the main application.
mainApp.controller("studentController", function($scope) {
  	// Sets a new model value -- student.
    $scope.student = new Student("001", "Kevin Chalmers");
    // Sets the update() function for the scope. Used by the button.
    $scope.update = function() {
        // Update the student value in the scope
        $scope.student.id = "002";
        $scope.student.name = "Lisa Haskel";
    }
});