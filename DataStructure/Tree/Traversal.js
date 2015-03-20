// In-order traversal (ascending order of node key values)
var inOrderList = [];

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    inOrderList.push(node.show());
    inOrder(node.right);
  }
  return inOrderList;
}

// Test Case for inOrder
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

// Pre-order traversal (root node 1st, then left to right)
var preOrderList = [];

function preOrder(node) {
  if (!(node == null)) {
    preOrderList.push(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
  return preOrderList;
}

// Post-order traversal (child nodes first, left to right)
function postOrder(node) {
  //sth
}