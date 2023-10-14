// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : 'A Saxon has died in combat';
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingSoldier) {
    this.vikingArmy.push(vikingSoldier);
  }
  addSaxon(saxonSoldier) {
    this.saxonArmy.push(saxonSoldier);
  }

  attackArmy(attackerArmy, defenderArmy) {
    if (attackerArmy.length === 0 || defenderArmy.length === 0)
      return 'War is over';

    let attackerRandomIndex = Math.floor(Math.random() * attackerArmy.length);
    let attackerSolider = attackerArmy[attackerRandomIndex];
    let defenderRandomIndex = Math.floor(Math.random() * defenderArmy.length);
    let defenderSolider = defenderArmy[defenderRandomIndex];
    let result = defenderSolider.receiveDamage(attackerSolider.strength);
    console.log(defenderSolider.health);
    if (defenderSolider.health <= 0) {
      console.log(`A ${defenderSolider.constructor.name} has been killed`);
      defenderArmy.splice(defenderRandomIndex, 1);
    }
    // defenderArmy.forEach((soldier, i) => {
    //   if (soldier.health <= 0) {
    //     defenderArmy.splice(i, 1);
    //   }
    // });

    return result;
  }
  vikingAttack() {
    return this.attackArmy(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.attackArmy(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else {
      return 'War is still in process...';
    }
  }
}

//  MANUAL WAR:
const myWar = new War();
const s1 = new Viking('1', 80, 50);
const s2 = new Viking('2', 80, 50);
const s3 = new Viking('3', 80, 50);
const s4 = new Viking('4', 100, 50);

const x1 = new Saxon(100, 20);
myWar.addViking(s1);
myWar.addViking(s2);
myWar.addViking(s3);
myWar.addViking(s4);

myWar.addSaxon(x1);

myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.vikingArmy, myWar.saxonArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.vikingArmy, myWar.saxonArmy);

console.log(myWar);
console.log(myWar.showStatus());
