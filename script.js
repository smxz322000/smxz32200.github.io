// 获取表单和字符串列表的元素
const stringForm = document.getElementById('stringForm');
const stringList = document.getElementById('stringList');

// 监听表单的提交事件
stringForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取输入的字符串
    const stringInput = document.getElementById('stringInput');
    const newString = stringInput.value;

    // 创建一个新的字符串元素，并添加到字符串列表中
    const newStringElement = document.createElement('p');
    newStringElement.textContent = newString;
    stringList.appendChild(newStringElement);

    // 清空输入框
    stringInput.value = '';

    // 3分钟后自动删除字符串元素
    setTimeout(function() {
        stringList.removeChild(newStringElement);
    }, 180000); // 3分钟 = 180000毫秒
});