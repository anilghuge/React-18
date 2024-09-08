interface IProductABC {
  Name: string;
  Price: number;
}

function Print<T>(data: T): T {
  return data;
}

console.log(Print<string>("A"));
console.log(Print<number>(1));
console.log(Print<IProductABC>({ Name: "TV", Price: 30000.56 }));
console.log(Print<String[]>(["A", "B", "C"]));

interface IOracle {
  UserId: string;
  Password: string;
  Database: string;
}

interface IMongoDB {
  Url: string;
}

interface IMysql {
  User: string;
  Pwd: string;
  DbName: string;
}

class Database<T> {
  constructor(database: T) {
    for (var property in database) {
      console.log(`${property} :${database[property]}`);
    }
  }
}
console.log("------Connecting with Oracle-------");

let ora = new Database<IOracle>({
  UserId: "sys",
  Password: "root",
  Database: "orcl",
});

console.log("------Connecting with MongoDb -------");
let mongoClient = new Database<IMongoDB>({ Url: "mongodb://127.0.0.1:27017" });

class Databases {
  public Connect<T>(connectionString: T) {
    for (var property in connectionString) {
      console.log(`${property} :${connectionString[property]}`);
    }
  }
}

let oracle = new Databases();
oracle.Connect<IOracle>({ UserId: "sys", Password: "root", Database: "orcl" });
