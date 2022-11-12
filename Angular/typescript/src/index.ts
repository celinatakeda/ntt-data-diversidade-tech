type heroi = {
  name: string;
  vulgo: string;
}

function printaObjeto(pessoa: heroi) {
  console.log(pessoa)
}

printaObjeto ({
  name: "bruce wayne",
  vulgo: "batman"
})

function addHello(name: string): string {
  return `Hello ${name}`
}

console.log(addHello("Felipe"));

// funções Multi Tipos
function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone(11313133111));

// funções Async
async function getDatabase(id: number): Promise<string> {
  return "felipe";
}

// interfaces (type x interface)
// type => usado para tipar objetos
// interface => usado para classes (contrato)
type robot = {
  readonly id: number | string; //somente leitura
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot1: robot = {
  id: "1",
  name: "megaman",
};


const bot2: robot2 = {
  id: "1",
  name: "megaman",
  sayHello(): string {
    return "Hello";
  }
};

//console.log(bot1);
//console.log(bot2);

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello I'm ${this.name}`;
  }
}

const p = new Pessoa(1, "gutsman")
console.log(p.sayHello());

// classes
/* 
  data modifiers => podem ser aplicados nos métodos e propriedades
  public => todo mundo consegue acessar
  private => somente a classe pode acessar
  protected => a classe e as subclasses (classe que herda de outra classe) podem acessar
 */

class Character {
  protected name?: string;
  readonly stregth: number;
  skill: number;

  constructor(name: string,stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  protected attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

const p1 = new Character("Ryu", 10, 98);
console.log(p1);
//p1.attack();

// Character: superclass
// Magician : subclass
class Magician extends Character {
  magicPoints: number;
  constructor(name: string,stregth: number, skill: number, magicPoints: number) {
    super(name, stregth, skill)
    this.magicPoints = magicPoints;
  }
}

const p2 = new Magician("Mago", 09, 30, 100);
console.log(p2);

//generics
function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["felipe", "goku"], ["vegeta"]);

console.log(numArray);
console.log(stgArray);