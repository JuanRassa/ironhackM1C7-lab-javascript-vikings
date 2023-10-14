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
    if (defenderSolider.health <= 0) {
      console.log(
        `Attack fatal report! -> A ${defenderSolider.constructor.name} soldier has been killed :(`
      );
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
      console.log('Vikings have won the war of the century!');
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      console.log(
        'RESULT: Saxons have fought for their lives and survived another day...'
      );
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
      console.log(
        'RESULT: Vikings and Saxons are still in the thick of battle.'
      );
      return 'Vikings and Saxons are still in the thick of battle.';
    } else {
      console.log(
        'RESULT: Vikings and Saxons are still in the thick of battle.'
      );
      return 'War is still in process...';
    }
  }
}

//  MANUAL WAR:
console.log('*** *** MY WAR HAS STARTED *** ***');
const myWar = new War();
const s1 = new Viking('1', 80, 50);
const s2 = new Viking('2', 80, 50);
const s3 = new Viking('3', 80, 50);
const s4 = new Viking('4', 100, 50);
myWar.addViking(s1);
myWar.addViking(s2);
myWar.addViking(s3);
myWar.addViking(s4);

const x1 = new Saxon(100, 20);
const x2 = new Saxon(100, 20);
myWar.addSaxon(x1);
myWar.addSaxon(x2);

console.log('Armies BEFORE war:');
console.log('Viking Army:', myWar.vikingArmy);
console.log('Saxon Army:', myWar.saxonArmy);
console.log('******');
console.log('Battle loses reports begins:');
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
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.vikingArmy, myWar.saxonArmy);
myWar.attackArmy(myWar.saxonArmy, myWar.vikingArmy);
myWar.attackArmy(myWar.vikingArmy, myWar.saxonArmy);
console.log('Battle loses reports ends');
console.log('******');
myWar.showStatus();
console.log('Armies AFTER war:');
console.log('Viking Army:', myWar.vikingArmy);
console.log('Saxon Army:', myWar.saxonArmy);
console.log('*** *** MY WAR HAS ENDED *** ***');
