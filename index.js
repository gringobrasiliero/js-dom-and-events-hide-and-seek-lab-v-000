function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('body #nested .target')
  };

  function increaseRankBy(n){
    const lis = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    }
  }

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')

  function findChild(parentNode) {
    if (parentNode.firstElementChild) {
      return findChild(parentNode.firstElementChild)
    } else {
      return parentNode;
    }
  }

  return findChild(grandNode);
}