# Session 24: JavaScript Control Structures Lab (Mario Theme)

Welcome to the **Mushroom Kingdom Logic Engine**! 

## The Task
In this mentoring lab, you will use **Control Structures (`if`, `else`, `switch`)** to repair the game's core logic. The game engine is fully operational, but it doesn't know how to handle collisions, award points, or defeat enemies!

### Why Control Structures?
Control structures act as the "brain" of your code. They look at data and decide *which path* the code should take. In a video game, you constantly need to make decisions:
- *If* the player touches a coin, *then* add score.
- *If* the player jumps on an enemy, *then* the enemy is defeated, *else* the player takes damage.

### Your Workspace
Open `starter-mario/core-logic.js`. You will find three broken functions:
1. `checkCollision(playerX, entityX)` - Use an `if/else` statement to determine if two things are colliding based on their horizontal distance.
2. `calculateItemScore(itemType)` - Use a `switch` statement to give different points based on the item type ('coin', 'mushroom', 'star').
3. `handleEnemyEncounter(isJumping, hasStarPower)` - Use `if/else` statements to decide whether Mario defeats the enemy or takes damage.

**Note:** Do not modify `engine.js`, `index.html`, or `style.css`. Your only goal is to complete `core-logic.js`. If you write the correct control structures, the game will come to life!

### How to Play
Once your logic is working, open `index.html` in your browser.
Click the "Start Engine" button and watch the simulation run based on your logic!
