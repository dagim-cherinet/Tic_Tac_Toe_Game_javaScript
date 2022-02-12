# Tic Tac Toe Game javaScript
This game is build using HTML, CSS, javaScript
The Application decide the winner from the two players after tracking every moves of each players.
## The algorithm is as follows:
1. I used 2D array represent every square in the tic tac toe game 
   let dataSet = [[], [], [], [], [], [], [], [], []];
   dataset     [ 
                 [] [] []
                 [] [] []   
                 [] [] []
                          ]
2. everytime players make a move the app stores inside the inner array according the correct coordinates [x][y]
3. and everytime a player make a move the app check the array to decide if that particular player wins or not
