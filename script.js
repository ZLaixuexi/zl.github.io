document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取输入值
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 简单的验证逻辑
    if (username === 'zl_ym' && password === '1314520') {
        // 登录成功，跳转到 welcome.html
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('error-message').textContent = '用户名或密码错误！';
    }
});
