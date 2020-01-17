const checkboxes = document.querySelectorAll('.interest__check');
const checkParents = document.querySelectorAll('li.interest');
const checkParentsArr = Array.from(checkParents).filter(node => node.children.length > 1);

function checkClick() { //Часть функции для установки чеков вверх по древу
  let checkParent = this.closest('li');
  console.log(checkParent);
  let checkStatus = this.checked;
  let checkChilds = checkParent.querySelectorAll('ul .interest__check');
  console.log(checkChilds);
  if (checkChilds.length > 1){
    console.log(checkChilds.length);
    checkChilds.forEach(item => {
      item.checked = checkStatus;
      item.indeterminate = false;
    });
  }
  // Часть функции для установки неопределенных значений
  let checkLi = this.closest('.interest');
  let checkUl = this.closest('.interests_active');
  if (checkUl != null) {
    let checksInLi = checkLi.querySelectorAll('.interest__check');
    let checksInUl = checkUl.querySelectorAll('.interest__check');
    let closestLi = checkUl.closest('.interest');
    let closestLicheck = closestLi.querySelector('.interest__check');
    let closestMainChecks = document.querySelector('.interests_main ul').children;
    closestMainChecks = Array.from(closestMainChecks);
    if (checksInUl.length === checkUl.querySelectorAll('.interest__check:checked').length) {
      closestLicheck.indeterminate = false;
      closestLicheck.checked = true;
    } else if (checkUl.querySelectorAll('.interest__check:checked').length === 0) {
      closestLicheck.indeterminate = false;
      closestLicheck.checked = false;
    } else if ( checkUl.querySelectorAll('.interest__check:checked').length < checksInUl.length ) {
      closestLicheck.indeterminate = true;
      closestLicheck.checked = false;
    }
    closestMainChecks.forEach( item => {
      if (item.querySelectorAll('.interest__check:checked').length === item.querySelectorAll('.interest__check').length) {
        item.querySelector('.interest__check').checked = true;
        item.querySelector('.interest__check').indeterminate = false;
      } else if (item.querySelectorAll('.interest__check:checked').length === 0) {
        item.querySelector('.interest__check').checked = false;
        item.querySelector('.interest__check').indeterminate = false;
      } else if (item.querySelectorAll('.interest__check:checked').length != item.querySelectorAll('.interest__check').length) {
        item.querySelector('.interest__check').checked = false;
        item.querySelector('.interest__check').indeterminate = true;
      }
    });
  }
}
checkboxes.forEach(item => item.addEventListener('click', checkClick));
