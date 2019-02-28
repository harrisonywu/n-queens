// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; 
  var board = makeEmptyMatrix(n);
  var boardLength = board.get('n');

  board.attributes[0][0] = board.set('1');

  for (var r = 0; r < boardLength; r++) {
    var boardRow = board.attributes[r];
      addSafeRook(r);
  
  }
  
var addSafeRook = function (colIndex) {
  // Pseudocode: 
  // helper function will check the rows. 
  // storage var positionSquare = boardRow[colIndex];
  // add r row rook in a particular square. 
  // and check if there are conflicts 
  // then return rook position. 
  
};

  // input n for the nxn board size, and n number of rook pieces
  // output solution is a matrix that is an object with row arrays, board[0][0] would specify each square
  // constraints, edge cases; only need one possible arrangement of rooks
  // Justification/Explanation: we want to return a possible board state where the rooks don't threaten each other
  // note: we will implement our solution with step by step checking through the board

  // Pseudocode
  // first build an empty nxn board (see Board.js), all 0s, pseudoclassical. This empty board s is solution. 
  // Assign your row1 rook. choose coordinates 0,0 to be 1. 
  // iterate through each row, index r, in order to cover the board. One rook piece per one row is assigned.
  //    at every position in this row (new loop thru index in row, i), check if there are conflicts (only row and col conflicts)
  //    if either conflict true, do nothing
  //    if conflict is false, reassign position square from 0 to 1
  // close the loop


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
