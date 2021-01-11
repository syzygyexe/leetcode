const deleteNode = (node) => {
  // Change the value of the node we want to delete, to the value of the next node
  node.val = node.next.val;
  // Change the next reference. Basically, skip one node.
  node.next = node.next.next;
};
