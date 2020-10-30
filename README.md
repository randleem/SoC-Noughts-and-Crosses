# React Hackathon

For todays hackathon we are going to practice extracting relevant information from resources that are solving the same problem but in a different way.

We will be making noughts and crosses - react style!

To have stateful components in react before hooks were invented you had to write a class component.

Your task today is to apply what you've learnt about react whilst following [this tutorial](https://reactjs.org/tutorial/tutorial.html). Extract what you need and use your knowledge of modern react to inform how you write your components.

Happy hacking!


PLAN :/
- Set up component files
- Set up react in smart component files where we know we're gonna use it.


Components

- Board
-Renders 9 squares (dumb component)

Behaviour - 
Return Square
Set this prop called value



- Squares
-Renders a single button (smart component)
-Expected props from Board
-Possible onClick state to change state from null to X

Behaviour -
Return Button
Give className of Square
Inner text of square will be value which is prop that we've handed down from board
OnClick will lead our button to change from null to nought or cross (fat arrow needed)



- Game
-State = boardState
-This is where our onClick changes from null to nought or cross
-Renders board with placeholder values
-We need a null array state that will change with noughts and crosses in
-Keep player moves stored in game state
[[null, null, null]
[null, null, null]
[null, null, null]]

Props -
Change state function onClick (event listener needed)

Our state will have to say if a square is picked, change from null to either noughts or cross

