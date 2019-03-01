// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solutionBoard = new Board({n:n});
  var boardLength = n;
  var addSafeRook = function(r,c) {
    var bigArray = this;
    solutionBoard.togglePiece(r, c);
    if ( solutionBoard.hasRowConflictAt(c) || solutionBoard.hasColConflictAt(c) ) {
      solutionBoard.togglePiece(r, c);
      if (c < boardLength) {
        addSafeRook( r, c + 1 );
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
    var boardRow = solutionBoard.attributes[r];  
    addSafeRook.call(solutionBoard.attributes, r, 0);
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutionBoard));
  
  //Convert {'0':[], '1':[], ... 'n':4} to [[],[],...]
  var solutionBoardArray = [];
  for (var ii = 0; ii < n; ii++) {
    solutionBoardArray.push(solutionBoard.get(ii)); //board.get(ii) is the same as board.attributes[ii]
  }
  return solutionBoardArray; // assign solution to board
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
console.log('///////////////////////////////////////////////////////////////////////////////////')
  var solutionCount = 0; 
  var solutionBoard = new Board({n:n});
  var boardLength = n;

debugger;
  var addSafeRook = function(r, c) {

    var bigArray = this;
    solutionBoard.togglePiece(r, c);
  };


  
  /////////////////////////////for reference only, branches are discareded //////////////////////////////////
  //   if ( solutionBoard.hasRowConflictAt(c) || solutionBoard.hasColConflictAt(c) ) {
  //     solutionBoard.togglePiece(r, c);
  //     if (c < boardLength) {
  //       addSafeRook( r, c + 1 );
  //     } else {
  //       console.log('no solutions, go back up the tree');
  //       return;
  //     }
  //   } else {
  //     console.log('row: ' + r + ', Set a safe rook at position ' + r + ',' + c);
  //     //one row's rook was added and confirmed as safe
  //     if (r + 1 === n) { // we've went through all the rows
  //       solutionCount++;
  //       //n safe rooks were added
  //     }
  //     return;
  //   }
  // };
////////////////////////////////////////////////////////////////////////////////////////////////////////



  for (var r = 0; r < boardLength; r++) {
    var boardRow = solutionBoard.attributes[r];  
    addSafeRook.call(solutionBoard.attributes, r, 0);
  }



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
