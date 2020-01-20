const tooltipLinks = document.querySelectorAll('.has-tooltip');
let tooltipTemp;

function clickTooltip(e) {
  e.preventDefault();
  let tooltips = document.querySelectorAll('.tooltip');
  if ( tooltipTemp === this.nextElementSibling ) {
    this.nextElementSibling.remove();
  } else {
      if (tooltipTemp != null) {
        tooltipTemp.remove();
      }
    let div = `<div class="tooltip" style="display: block;left: ${e.x}px; top: ${e.y}px">${this.title}</div>`;
    this.insertAdjacentHTML('afterEnd', div);
    tooltipTemp = this.nextElementSibling;
  }
}
tooltipLinks.forEach( item => { item.addEventListener('click', clickTooltip) });
