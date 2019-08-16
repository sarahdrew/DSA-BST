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

//Is it a BST?
//write an algo to check whether an arbittrary binary tree is BST assuming tree has no duplicates

function isItBST(t) {
    if (t.right === null && t.left === null) {
        return true;
    }

    if (t.left !== null && t.right === null) {
        return isItBST(t.left);
    }
    if (t.right !== null && t.left === null) {
        return isItBST(t.right);

    }

    if (t.left !== null && t.right !== null) {
        //left less than right
        if (t.left.value < t.right.value) {
            return isItBST(t.left) && isItBST(t.right);
        } else {
            //false
            return false;
        }
    }
}

//third largest node
//write an algo to find the third largest node in a binary search tree
function thirdLargestNode(t, num = []) {

    if (!t.left && !t.right) {
        num.push(t.value);

        const sorted = sortArray(num);
        //less than 3
        return sorted[2] ? sorted[2] : 'The tree has less than 3 nodes.';
    }
    if (t.left !== null && t.right === null) {
        num.push(t.value);

        return thirdLargest(t.left, num);
    }
    //right not null, left null
    if (t.right !== null && t.left === null) {
        num.push(t.value);

        return thirdLargest(t.right, num);
    }
    //right and left aren't null
    if (t.right !== null && t.left !== null) {
        num.push(t.value);
        return thirdLargest(t.right, num);
    }

}

//Balanced BST
//write an algo that checks if a BST is balance (tree where no 2 leaves differ in distance from the root by more than 1)

function balanceBST(t) {
    //t is null
    if (t === null) {
        return true;
    }


    let rightSide = helperHeight(t.right);
    let leftSide = helperHeight(t.left);

    //Math.abs returns absolute value
    const diff = Math.abs(rightSide - leftSide)
    if (diff > 1) {
        return false;
    }
    else {
        //left and right
        return balanceBST(t.left) && balanceBST(t.right);
    }
}