//See if javascript is working
//window.alert("This is an alert! JavaScript is running!");
//player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//opponent variables
var enemyName = "Roboto";
var enemyHealth = 50;
var enemyAttack = 12;

//System Variables
var isGameOver = new Boolean(false);
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

//Game functions
//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //remove player health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    //Check if player wants to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure that you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}

//Game Loop
console.log(playerName)
fight();