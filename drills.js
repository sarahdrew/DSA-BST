// DRAW A BST
//           3
//         /  \
//       1      4
//        \       \
//         2        6
//                 /  \
//               5     9
//                     /  
//                   7

//REMOVE THE ROOT
// 
//           E
//        /     \
//       A        S
//         \     /  \
//          E   Q     Y 
//             /  \      
//            I    \
//             \    \
//              O   U       
//            /   /   
//           N   S 
//              \
//               T      


//Create a BST class
// alpha - numbers, bravo- easyquestion
const BST = require('./BinarySearchTree');

const inspectOptions = {
    depth: Infinity,
    colors: true,
};

const alpha = new BST();

alpha.insert(3, 'three');
alpha.insert(1, 'one');

alpha.insert(4, 'four');
alpha.insert(6, 'six');
alpha.insert(9, 'nine');
alpha.insert(2, 'two');
alpha.insert(5, 'five');
alpha.insert(7, 'seven');

const bravo = new BST();

bravo.insert('E', 'e');
bravo.insert('A', 'a');
bravo.insert('S', 's');

bravo.insert('Y', 'y');
bravo.insert('Q', 'q');
bravo.insert('U', 'u');
bravo.insert('E', 'e');
bravo.insert('S', 's');

bravo.insert('T', 't');

bravo.insert('I', 'i');
bravo.insert('O', 'o');
bravo.insert('N', 'n');

//What does this program do?
function tree(t) {
    if (!t) {
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
//The tree function sums up all the nodes of t.
// O(log n)

//Height of a BST
//write an algo to find the height of binary search tree
function treeHeight(t) {

    if (t.right === null && t.left === null) {
        return 1;
    }
    if (t.right !== null && t.left === null) {
        return 1 + treeHeight(t.right);
    }

    if (t.left !== null && t.right === null) {
        return 1 + treeHeight(t.left);
    }
}