(() => {
  // 二叉树
  function Tree({ left = null, right = null, text = '' }) {
    this.left = left
    this.right = right
    this.text = text
  }
  Tree.prototype = {
    addChilod(tree, type = 'left') {
      type === 'left' ? this.left = tree : this.right = tree
    },
    traverse(fn) {
      this.preOrder(this, fn)
    },
    preOrder(node, fn) {
      if(node) {
        this.preOrder(node.left, fn)
        node.text && fn(node.text)
        this.preOrder(node.right, fn)
      }
    }
  }

  var tree = new Tree({
    text: 'A',
    left: {
      text: 'B',
      left: {
        text: 'D',
        left: {
          text: 'H'
        },
        right: {
          text: 'I'
        }
      },
      right: {
        text: 'E',
        left: {
          text: 'J'
        }
      }
    },
    right: {
      text: 'C',
      left: {
        text: 'F',
        left: {
          text: 'K'
        }
      },
      right: {
        text: 'G'
      }
    }
  })
  var res = []
  tree.traverse(function (each) {
    res.push(each)
  })
  console.log(res.join()) // H,D,I,B,J,E,A,K,F,C,G

})()
