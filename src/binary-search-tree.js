const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = { data, left: null, right: null };
    if (!this._root) {
      this._root = newNode;
    } else {
      this._insert(this._root, newNode);
    }
  }

  _insert(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insert(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insert(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._search(this._root, data);
  }

  _search(node, data) {
    if (!node) {
      return false;
    }

    if (data < node.data) {
      return this._search(node.left, data);
    } else if (data > node.data) {
      return this._search(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this._find(this._root, data);
  }

  _find(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      return this._find(node.left, data);
    } else if (data > node.data) {
      return this._find(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this._remove(this._root, data);
  }

  _remove(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._remove(node.left, data);
    } else if (data > node.data) {
      node.right = this._remove(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const minValue = this._findMinValue(node.right);
        node.data = minValue;
        node.right = this._remove(node.right, minValue);
      }
    }

    return node;
  }

  _findMinValue(node) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  min() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};