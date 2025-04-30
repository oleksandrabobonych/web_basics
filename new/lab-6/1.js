class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  
  const tree = new TreeNode(
    8,
    new TreeNode(3, new TreeNode(1), new TreeNode(6)),
    new TreeNode(12, null, new TreeNode(17))
  );
  

  function sumTreePreorder(node) {
    if (node === null) return 0;
    return node.value + sumTreePreorder(node.left) + sumTreePreorder(node.right);
  }
  

  function printLeavesPreorder(node) {
    if (node === null) return;
  
    if (node.left === null && node.right === null) {
      console.log("Лист:", node.value);
    }
  
    printLeavesPreorder(node.left);
    printLeavesPreorder(node.right);
  }
  

  const totalSum = sumTreePreorder(tree);
  console.log("Сума всіх елементів дерева:", totalSum);
  
  console.log("Листи дерева:");
  printLeavesPreorder(tree);
  