const tabs = document.querySelector('.tabs');
const tabsArray = Array.from(tabs.children);
const tabsNaviArray = Array.from(tabs.children[0].children);
function handleClick() {
  let tabContentToRemoveClass = tabs.children[1].children[tabsNaviArray.findIndex((e)=> e.classList.contains('tab_active'))];
  let tabContentToAddClass = tabs.children[1].children[tabsNaviArray.findIndex((e)=> e === this)];
  tabContentToRemoveClass.classList.toggle('tab__content_active');
  tabsNaviArray.find((e)=>e.classList.contains('tab_active')).classList.remove('tab_active');
  this.classList.toggle('tab_active');
  tabContentToAddClass.classList.toggle('tab__content_active');
}
tabsNaviArray.forEach(item =>item.addEventListener('click', handleClick));
