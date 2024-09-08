function Print(data) {
    return data;
}
console.log(Print("A"));
console.log(Print(1));
console.log(Print({ Name: "TV", Price: 30000.56 }));
console.log(Print(["A", "B", "C"]));
var Database = /** @class */ (function () {
    function Database(database) {
        for (var property in database) {
            console.log("".concat(property, " :").concat(database[property]));
        }
    }
    return Database;
}());
console.log("------Connecting with Oracle-------");
var ora = new Database({
    UserId: "sys",
    Password: "root",
    Database: "orcl",
});
console.log("------Connecting with MongoDb -------");
var mongoClient = new Database({ Url: "mongodb://127.0.0.1:27017" });
var Databases = /** @class */ (function () {
    function Databases() {
    }
    Databases.prototype.Connect = function (connectionString) {
        for (var property in connectionString) {
            console.log("".concat(property, " :").concat(connectionString[property]));
        }
    };
    return Databases;
}());
var oracle = new Databases();
oracle.Connect({ UserId: "sys", Password: "root", Database: "orcl" });
