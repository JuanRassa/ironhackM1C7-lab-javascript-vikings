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
    let attackerRandomIndex = Math.floor(Math.random() * attackerArmy.length);
    let attackerSolider = attackerArmy[attackerRandomIndex];
    let defenderRandomIndex = Math.floor(Math.random() * defenderArmy.length);
    let defenderSolider = defenderArmy[defenderRandomIndex];

    let result = defenderSolider.receiveDamage(attackerSolider.strength);
    if (defenderSolider.health <= 0) defenderArmy.splice(defenderArmy, 1);

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
    }
  }
}
