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

