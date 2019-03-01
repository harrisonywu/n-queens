// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  var boardLength = n; //board.get('n');
  //board.attributes[0][0] = board.set('1');
  var addSafeRook = function(c) {
    var bigArray = this;
    solution.togglePiece(r, c);
    debugger;
    if ( solution.hasRowConflictAt(c) || solution.hasColConflictAt(c) ) {
      debugger;
      solution.togglePiece(r, c);
      if (c < boardLength) {
        addSafeRook( c + 1 );
      }
      else {
        console.log('no solutions, go back up the tree');
        return;
      }
      //recursively call addSafeRook? if (all positions have conflicts) exit recursion console log 'no soln in htis row' / else addSafeRook(n+1)
      //var index=0; do { addSafeRook(index+1); } while(colIndex<n)
    } else {
      console.log('Set a safe rook at position ' + r + ',' + c);
      return;
    }
};
  
  for (var r = 0; r < boardLength; r++) {
    var boardRow = solution.attributes[r];  
    addSafeRook.call(solution.attributes,r);
  }
  
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution; // assign solution to board
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
