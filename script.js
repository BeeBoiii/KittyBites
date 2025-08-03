const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
let choice = -1;

tabs.forEach((tab, index, arr) => {
    tab.index = index;
    tab.addEventListener('click', () => {
        tabClick(tab);
    })
})