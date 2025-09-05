const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
let selectedIndex = -1;

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        handleTabClick(index);
    })
});

function handleTabClick (index) {
    if (index === selectedIndex) return;

    // 取消选择现在的标签
    if (selectedIndex >= 0) {
        panels[selectedIndex].classList.remove('enable');
    }

    // 选择标签
    let panel = panels[index];
    panel.classList.add('enable');
    selectedIndex = index;
};

handleTabClick(0);