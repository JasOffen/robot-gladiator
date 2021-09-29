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

//Game functions
function fight() {
    window.alert("Welcome to Robot Gladiators!");
    //window.alert("the fight has begun | " + playerName + " vs " + enemyName);

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //Check health if player health is below 0
    if (playerHealth > 0) {
        console.log("Your Robot is still alive!");
    } else {
        window.alert(playerName + " has died!")
    }
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
}

//Game Loop
console.log(playerName)
fight();