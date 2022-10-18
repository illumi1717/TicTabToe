# TicTabToe

A web application for playing tic-tac-toe, where the field is implemented in the form of interconnected browser windows.

ℹ️ _It is not a solution for wide use, but rather collects a set of **challenges** that I was interested in solving._
## Demo🕹

Let's see a demo🔽

![](https://s1.gifyu.com/images/tictabtoe-demo.gif)


## How it works⚙️

Windows communicate with each other via `BroadcastChannel`. Each window has a set of listeners for the BroadcastChannel `onmessage` event. Also, when certain events are triggered, like clicking on the window, methods are called that send special messages to the general `BroadcastChannel`.

The application has two game modes. 
- The first one is **singleplayer**. Here the player plays with the computer. The computer game is implemented using the `tictactoe-ai` library, which is based on the Minimax algorithm. 
- **Multiplayer** involves two players playing on the same computer. When you click, the sign automatically changes depending on whose turn it is now.

__Sorry for my English, translated in a translator__