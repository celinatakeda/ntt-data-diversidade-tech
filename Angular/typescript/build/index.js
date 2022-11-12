"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "bruce wayne",
    vulgo: "batman"
});
function addHello(name) {
    return `Hello ${name}`;
}
console.log(addHello("Felipe"));
// funções Multi Tipos
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(11313133111));
// funções Async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot1 = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "megaman",
    sayHello() {
        return "Hello";
    }
};
//console.log(bot1);
//console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
