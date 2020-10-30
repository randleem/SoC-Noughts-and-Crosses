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
-Renders 9 squares  (dumb component)
-For each state in the array (use .map), make a square where index of the button = index of array
-Value of array = innertext of button
-set state to XisNext which will be a boolean toggle. This decides which player is next. 
-In onclick, we will call function to change array and also toggle between which player is next.
-If statement if XisNext = true, return X. Else return 0.


Behaviour - 
Return Square
Set this prop called value
HandleClick function that will set state and use splice method to splice at certain index that we want to change.



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
[null[0], null[1], null[2],
null[3], null[4], null[5], 
null[6], null[7], null[8]]

Behaviour
-calculateWinner function that takes in squares array
-assign a variable (lines) to possible winning lines

Props -
Change state function onClick (event listener needed)

Our state will have to say if a square is picked, change from null to either noughts or cross

