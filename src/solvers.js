// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; 

  // input n for the nxn board size, and n number of rook pieces
  // output solution is a matrix that is an object with row arrays, board[0][0]
  // constraints, edge cases; only need one possible arrangement of rooks
  // Justification/Explanation: we want to return a possible board state where the rooks don't threaten each other
  //
  // Pseudocode
  // first build an empty nxn board (see Board.js), all 0s, pseudoclassical. This empty board s is solution. 
  // iterate through each row in order to cover the board. One rook piece per one row is assigned.
  //    at every position in this row, check if there are conflicts (only row and col conflicts)
  //    if either conflict true, do nothing
  //    if conflict is false, reassign position square from 0 to 1

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
