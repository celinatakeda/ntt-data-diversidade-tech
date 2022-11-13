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
  