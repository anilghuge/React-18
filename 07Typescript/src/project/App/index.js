var Project;
(function (Project) {
    var TeamA;
    (function (TeamA) {
        var Demo = /** @class */ (function () {
            function Demo() {
            }
            Demo.prototype.Print = function () {
                console.log("Team A Print Method");
            };
            return Demo;
        }());
        TeamA.Demo = Demo;
    })(TeamA = Project.TeamA || (Project.TeamA = {}));
})(Project || (Project = {}));
var Project;
(function (Project) {
    var TeamB;
    (function (TeamB) {
        var Demo = /** @class */ (function () {
            function Demo() {
            }
            Demo.prototype.Print = function () {
                console.log("Team B Print Method");
            };
            return Demo;
        }());
        TeamB.Demo = Demo;
    })(TeamB = Project.TeamB || (Project.TeamB = {}));
})(Project || (Project = {}));
/// <reference path="../Team-A/TeamAComponets.ts"/>
/// <reference path="../Team-B/TeamBComponents.ts"/>
var objA1 = new Project.TeamA.Demo();
var objB2 = new Project.TeamB.Demo();
objA1.Print();
objB2.Print();
