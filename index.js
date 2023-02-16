class Team {
    constructor(teamName) {
        this.teamName = teamName;
    }
}

class Starship extends Team{
    constructor(teamName, shipName, numTorpedos, energyPerTorpedos, phaserBankCapacity, shieldEnergy) {
        super(teamName);
        this.shipName = shipName;
        this.numTorpedos = numTorpedos;
        this.energyPerTorpedos = energyPerTorpedos;
        this.phaserBankCapacity = phaserBankCapacity;
        this.shieldEnergy = shieldEnergy;
    }
}
// Battle logic
class Battle {

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  attack(attacker, defender) {
    // Calculate the damage
    const damage = Math.floor(Math.random() * attacker.energyPerTorpedos);
    // Apply the damage to the defender's health
    defender.shieldEnergy -= damage;

    // Log the attack
    console.log(` DAMAGE : ${attacker.shipName} attacked ${defender.shipName} for ${damage} damage.`);

    // Check if the defender is still alive
    if (defender.shieldEnergy <= 0) {
      console.log("Game Finished");
      console.log(`${defender.shipName} has been defeated!`);

      // if defeated ship belongs to Team Romulan remove defeated ship from the array 
      for (let i = 0; i < teamRomulan.length; i++) { 
          
          if (teamRomulan[i].shipName == defender.shipName) {
              // get index of defeated ship
              const index = teamRomulan.indexOf(defender);
              const x = teamRomulan.splice(index, 1);
          }
      }

      // if defeated ship belongs to Team Earth remove defeated ship from the array 
      for (let i = 0; i < teamEarth.length; i++) { 
          
          if (teamEarth[i].shipName == defender.shipName) {
              // get index of defeated ship
              const index = teamEarth.indexOf(defender);
              const x = teamEarth.splice(index, 1);
          }
      }

    }

  }
  
  start() {
    console.log("Game Started");
    // Loop until one of the players is defeated
    while (this.player1.shieldEnergy > 0 && this.player2.shieldEnergy > 0) {
      // Player 1 attacks Player 2
      this.attack(this.player1, this.player2);

      // Check if Player 2 is still alive
      if (this.player2.shieldEnergy > 0) {
        // Player 2 attacks Player 1
        this.attack(this.player2, this.player1);
      }
    }

    // Log the winner
    if (this.player1.shieldEnergy > 0) {
          console.log(` RESULT  : ${this.player1.shipName} wins!`);
      } else {
          console.log(` RESULT  : ${this.player2.shipName} wins!`);
      }

      console.log(`Team Earth has ${teamEarth.length} ships remaining.`);
      console.log(`Team Romulan has ${teamRomulan.length} ships remaining.`);

    }
    
  }

// Ships of Team Team Earth
let earth_ship_1 = new Starship('Team Earth','Team Earth 1', 30, 150, 100, 140);
let earth_ship_2 = new Starship('Team Earth','Team Earth 2', 30, 150, 100, 140);
let earth_ship_3 = new Starship('Team Earth','Team Earth 3', 30, 150, 100, 140);
let earth_ship_4 = new Starship('Team Earth','Team Earth 4', 30, 150, 100, 140);
let earth_ship_5 = new Starship('Team Earth','Team Earth 5', 30, 150, 100, 140);
let earth_ship_6 = new Starship('Team Earth','Team Earth 6', 30, 150, 100, 140);
let earth_ship_7 = new Starship('Team Earth','Team Earth 7', 30, 150, 100, 140);
let earth_ship_8 = new Starship('Team Earth','Team Earth 8', 30, 150, 100, 140);
let earth_ship_9 = new Starship('Team Earth','Team Earth 9', 30, 150, 100, 140);
let earth_ship_10 = new Starship('Team Earth','Team Earth 10', 30, 150, 100, 140);

// Ships of Team Team Romulan
let romulan_ship_1 = new Starship('Team Romulan', 'Team Romulan 1', 50, 100, 60, 200);
let romulan_ship_2 = new Starship('Team Romulan', 'Team Romulan 2', 50, 100, 60, 200);
let romulan_ship_3 = new Starship('Team Romulan', 'Team Romulan 3', 50, 100, 60, 200);
let romulan_ship_4 = new Starship('Team Romulan', 'Team Romulan 4', 50, 100, 60, 200);
let romulan_ship_5 = new Starship('Team Romulan', 'Team Romulan 5', 50, 100, 60, 200);
let romulan_ship_6 = new Starship('Team Romulan', 'Team Romulan 6', 50, 100, 60, 200);
let romulan_ship_7 = new Starship('Team Romulan', 'Team Romulan 7', 50, 100, 60, 200);
let romulan_ship_8 = new Starship('Team Romulan', 'Team Romulan 8', 50, 100, 60, 200);
let romulan_ship_9 = new Starship('Team Romulan', 'Team Romulan 9', 50, 100, 60, 200);
let romulan_ship_10 = new Starship('Team Romulan', 'Team Romulan 10', 50, 100, 60, 200);


// put ships in the Array
let teamEarth = [earth_ship_1, earth_ship_2, earth_ship_3, earth_ship_4, earth_ship_5, earth_ship_6, earth_ship_7, earth_ship_8, earth_ship_9, earth_ship_10];
let teamRomulan = [romulan_ship_1, romulan_ship_2, romulan_ship_3, romulan_ship_4, romulan_ship_5, romulan_ship_6, romulan_ship_7, romulan_ship_8, romulan_ship_9, romulan_ship_10];


// Continue Battle untill all ship from one team has been distroyed...
while (teamEarth.length > 0 && teamRomulan.length > 0) {
    console.log("Getting Random Ship from both teams:");
    let playerFromteamEarth  = teamEarth[Math.floor(Math.random()*teamEarth.length)];
    console.log("From Team Earth => "+ playerFromteamEarth.shipName);
    let playerFromteamRomulan  = teamRomulan[Math.floor(Math.random()*teamRomulan.length)];
    console.log("From Team Romulan => "+ playerFromteamRomulan.shipName);
    
    const battle = new Battle(playerFromteamEarth, playerFromteamRomulan);
    battle.start();
    
}