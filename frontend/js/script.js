// Help Center Data
const helpCenterData = [
    {
        id: 1,
        title: '忘记密码怎么办？',
        keywords: ['忘记密码', '密码找回', '重置密码', '密码忘了'],
        desc: '通过手机验证码或安全问题找回您的密码',
        content: `
            <p>如果您忘记了邮箱密码，可以通过以下方式找回：</p>
            <ul>
                <li><strong>手机验证码找回：</strong>点击登录页的"忘记密码"，输入绑定的手机号码，接收验证码后重置密码。</li>
                <li><strong>安全问题找回：</strong>如果您设置了安全问题，可以通过回答安全问题找回密码。</li>
                <li><strong>客服申诉找回：</strong>如果以上方式都无法找回，请联系客服进行人工申诉。</li>
            </ul>
            <p>温馨提示：建议定期更换密码，使用复杂密码以提高账户安全性。</p>
        `
    },
    {
        id: 2,
        title: '登录失败怎么办？',
        keywords: ['登录失败', '无法登录', '登录错误', '账号密码错误', '登陆不上去'],
        desc: '检查账号密码是否正确，或尝试找回密码',
        content: `
            <p>登录失败可能由以下原因导致：</p>
            <ul>
                <li><strong>账号或密码错误：</strong>请检查您输入的账号和密码是否正确，注意区分大小写。</li>
                <li><strong>账号被锁定：</strong>连续多次输入错误密码，账号可能被暂时锁定，请稍后再试。</li>
                <li><strong>网络问题：</strong>请检查您的网络连接是否正常。</li>
                <li><strong>浏览器问题：</strong>尝试清除浏览器缓存或更换浏览器重试。</li>
            </ul>
            <p>如仍无法解决，请点击下方"联系客服"获取帮助。</p>
        `
    },
    {
        id: 3,
        title: '收不到验证码怎么办？',
        keywords: ['收不到验证码', '验证码', '短信', '手机验证', '接收不到'],
        desc: '检查手机号是否正确，或尝试重新获取验证码',
        content: `
            <p>收不到短信验证码，请按以下步骤排查：</p>
            <ul>
                <li><strong>检查手机号：</strong>确认您输入的手机号码是否正确。</li>
                <li><strong>检查短信拦截：</strong>查看手机的拦截短信列表，验证码短信可能被误拦截。</li>
                <li><strong>等待60秒：</strong>短信可能存在延迟，请耐心等待60秒后再重新获取。</li>
                <li><strong>运营商问题：</strong>部分地区运营商可能存在短信延迟，请稍后再试。</li>
                <li><strong>手机号更换：</strong>如果手机号已更换，请联系客服更新绑定手机。</li>
            </ul>
            <p>温馨提示：每天获取验证码次数有限，请合理使用。</p>
        `
    },
    {
        id: 4,
        title: '二维码过期怎么办？',
        keywords: ['二维码过期', '扫码', '扫不上', '二维码失效', '刷新二维码'],
        desc: '点击刷新按钮重新获取二维码，或检查网络连接',
        content: `
            <p>扫码登录时二维码过期的处理方法：</p>
            <ul>
                <li><strong>点击刷新：</strong>点击二维码下方的"刷新"按钮重新获取新的二维码。</li>
                <li><strong>检查网络：</strong>确保您的手机和电脑都连接了正常的网络。</li>
                <li><strong>更新App：</strong>请确保您使用的是最新版本的网易邮箱App。</li>
                <li><strong>切换登录方式：</strong>如果扫码登录有问题，可以切换到账号密码登录。</li>
            </ul>
            <p>温馨提示：二维码有效期为120秒，请在有效期内完成扫码。</p>
        `
    },
    {
        id: 5,
        title: '如何注册网易邮箱？',
        keywords: ['注册', '新账号', '申请邮箱', '怎么注册'],
        desc: '点击注册链接，按提示填写信息即可完成注册',
        content: `
            <p>注册网易邮箱账号的步骤：</p>
            <ul>
                <li>点击登录页的"注册新账号"链接</li>
                <li>填写您想要的邮箱账号名称</li>
                <li>设置密码（建议使用字母+数字+符号组合）</li>
                <li>输入手机号码进行验证</li>
                <li>完成安全验证后即可注册成功</li>
            </ul>
            <p>目前网易邮箱提供163.com、126.com、yeah.net等多个后缀选择。</p>
        `
    },
    {
        id: 6,
        title: '账号被锁定怎么办？',
        keywords: ['账号锁定', '被锁定', '封号', '解冻', '解锁'],
        desc: '了解账号锁定原因，按指引申请解锁',
        content: `
            <p>账号被锁定的常见原因及解决方法：</p>
            <ul>
                <li><strong>多次登录失败：</strong>连续多次输入错误密码会导致账号临时锁定，24小时后自动解锁。</li>
                <li><strong>异常登录：</strong>系统检测到异常登录行为会临时锁定账号，请验证身份后解锁。</li>
                <li><strong>违规操作：</strong>发送垃圾邮件或违反服务条款可能导致账号封禁，请联系客服申诉。</li>
            </ul>
            <p>如需人工协助，请点击下方"联系客服"。</p>
        `
    },
    {
        id: 7,
        title: '如何修改密码？',
        keywords: ['修改密码', '改密码', '更换密码', '设置密码'],
        desc: '登录后进入设置页面修改密码',
        content: `
            <p>修改邮箱密码的步骤：</p>
            <ul>
                <li>登录您的邮箱账号</li>
                <li>点击右上角的设置图标</li>
                <li>选择"账户设置"或"安全设置"</li>
                <li>找到"修改密码"选项</li>
                <li>输入原密码，然后设置新密码</li>
                <li>确认新密码后保存修改</li>
            </ul>
            <p>安全建议：建议每3-6个月更换一次密码，使用高强度密码。</p>
        `
    },
    {
        id: 8,
        title: '手机如何登录邮箱？',
        keywords: ['手机登录', '移动端', '手机邮箱', 'App登录'],
        desc: '下载网易邮箱App或使用手机浏览器登录',
        content: `
            <p>您可以通过以下方式在手机上使用网易邮箱：</p>
            <ul>
                <li><strong>网易邮箱App（推荐）：</strong>在应用商店搜索"网易邮箱"下载安装，功能更全面。</li>
                <li><strong>手机浏览器：</strong>打开手机浏览器，访问mail.163.com进行网页版登录。</li>
                <li><strong>系统邮件：</strong>在手机系统邮件应用中添加网易邮箱账号。</li>
            </ul>
            <p>推荐使用官方App，获得更好的使用体验和安全保障。</p>
        `
    }
];

let currentErrorKeyword = '';
let qrTimerInterval = null;
let qrCountdown = 120;

// Open Help Search Panel
function openHelpSearch(keyword = '') {
    const overlay = document.getElementById('helpOverlay');
    const searchInput = document.getElementById('helpSearchInput');
    
    overlay.classList.add('show');
    searchInput.value = keyword;
    
    if (keyword) {
        searchHelp();
    } else {
        showHelpEmpty();
    }
    
    setTimeout(() => {
        searchInput.focus();
    }, 300);
}

// Open Help Search from error message
function openHelpSearchFromError() {
    openHelpSearch(currentErrorKeyword || '登录失败');
}

// Close Help Search Panel
function closeHelpSearch(event) {
    if (event && event.target.id !== 'helpOverlay') {
        return;
    }
    const overlay = document.getElementById('helpOverlay');
    overlay.classList.remove('show');
    showHelpList();
}

// Show empty state
function showHelpEmpty() {
    document.getElementById('helpEmpty').style.display = 'flex';
    document.getElementById('helpList').style.display = 'none';
    document.getElementById('helpDetail').style.display = 'none';
}

// Search Help
function searchHelp() {
    const searchInput = document.getElementById('helpSearchInput');
    const keyword = searchInput.value.trim().toLowerCase();
    const helpList = document.getElementById('helpList');
    const helpEmpty = document.getElementById('helpEmpty');
    
    if (!keyword) {
        showHelpEmpty();
        return;
    }
    
    const results = helpCenterData.filter(item => {
        if (item.title.toLowerCase().includes(keyword)) return true;
        return item.keywords.some(kw => kw.toLowerCase().includes(keyword));
    });
    
    document.getElementById('helpResults').style.display = 'block';
    document.getElementById('helpDetail').style.display = 'none';
    
    if (results.length === 0) {
        helpEmpty.style.display = 'none';
        helpList.style.display = 'block';
        helpList.innerHTML = `
            <div class="help-no-result">
                未找到相关帮助内容
            </div>
        `;
        return;
    }
    
    helpEmpty.style.display = 'none';
    helpList.style.display = 'block';
    
    helpList.innerHTML = results.map(item => {
        const highlightedTitle = highlightKeyword(item.title, keyword);
        return `
            <div class="help-item" onclick="showHelpDetail(${item.id})">
                <div class="help-item-title">${highlightedTitle}</div>
                <div class="help-item-desc">${item.desc}</div>
            </div>
        `;
    }).join('');
}

// Highlight keyword in text
function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Show Help Detail
function showHelpDetail(id) {
    const item = helpCenterData.find(i => i.id === id);
    if (!item) return;
    
    document.getElementById('helpResults').style.display = 'none';
    document.getElementById('helpDetail').style.display = 'block';
    document.getElementById('helpDetailTitle').textContent = item.title;
    document.getElementById('helpDetailContent').innerHTML = item.content;
}

// Show Help List (go back)
function showHelpList() {
    document.getElementById('helpResults').style.display = 'block';
    document.getElementById('helpDetail').style.display = 'none';
}

// Contact Customer Service
function contactCustomerService() {
    showToast('正在跳转到客服中心...', 'info');
}

// Show Login Error
function showLoginError(message, keyword) {
    const errorDiv = document.getElementById('loginErrorMessage');
    const errorText = errorDiv.querySelector('.error-text');
    
    currentErrorKeyword = keyword || message;
    errorText.textContent = message;
    errorDiv.style.display = 'flex';
}

// Hide Login Error
function hideLoginError() {
    const errorDiv = document.getElementById('loginErrorMessage');
    errorDiv.style.display = 'none';
    currentErrorKeyword = '';
}

// Refresh QR Code
function refreshQrCode() {
    document.getElementById('qrExpiredTip').style.display = 'none';
    document.getElementById('qrTimer').style.display = 'block';
    qrCountdown = 120;
    document.getElementById('qrCountdown').textContent = qrCountdown;
    startQrTimer();
    showToast('二维码已刷新', 'success');
}

// Start QR Timer
function startQrTimer() {
    if (qrTimerInterval) {
        clearInterval(qrTimerInterval);
    }
    
    qrTimerInterval = setInterval(() => {
        qrCountdown--;
        document.getElementById('qrCountdown').textContent = qrCountdown;
        
        if (qrCountdown <= 0) {
            clearInterval(qrTimerInterval);
            document.getElementById('qrExpiredTip').style.display = 'flex';
            document.getElementById('qrTimer').style.display = 'none';
        }
    }, 1000);
}

// Stop QR Timer
function stopQrTimer() {
    if (qrTimerInterval) {
        clearInterval(qrTimerInterval);
        qrTimerInterval = null;
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIconSvg = document.getElementById('eyeIconSvg');
    
    // Check current type
    const isPassword = passwordInput.getAttribute('type') === 'password';
    
    // Toggle input type
    const type = isPassword ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon path
    if (isPassword) {
        // Switch to Open Eye (Show Password)
        eyeIconSvg.innerHTML = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
    } else {
        // Switch to Closed Eye (Hide Password)
        eyeIconSvg.innerHTML = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>';
    }
}

// Toggle Login Mode (Password <-> QR)
function toggleLoginMode() {
    const passwordView = document.getElementById('password-login-view');
    const qrView = document.getElementById('qr-login-view');
    const qrToggleIcon = document.getElementById('qrToggleIcon');
    const qrTooltip = document.getElementById('qrTooltip');

    // Check if currently in Password mode (if password view is visible)
    const isPasswordMode = passwordView.style.display !== 'none';

    if (isPasswordMode) {
        // Switch to QR Mode
        passwordView.style.display = 'none';
        qrView.style.display = 'block';
        
        // Start QR timer
        refreshQrCode();
        
        // Update Icon to PC (Monitor) - indicating "Click to go back to PC Login"
        // Using SVG for PC icon
        qrToggleIcon.innerHTML = `
            <svg viewBox="0 0 24 24" class="pc-icon-svg" fill="#999">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/>
            </svg>
        `;
        
        // Update Tooltip Text
        qrTooltip.innerHTML = `
            账号密码登录
            <div class="tooltip-arrow"></div>
        `;
    } else {
        // Switch back to Password Mode
        passwordView.style.display = 'block';
        qrView.style.display = 'none';
        
        // Stop QR timer
        stopQrTimer();
        
        // Update Icon to QR Code - indicating "Click to Scan Login"
        qrToggleIcon.innerHTML = '<img src="images/qr_icon.png" alt="切换登录模式" class="corner-img">';
        
        // Update Tooltip Text
        qrTooltip.innerHTML = `
            扫码登录
            <div class="tooltip-arrow"></div>
        `;
    }
}

// Toast Functionality
function showToast(message, type = 'info') {
    // Create container if not exists
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Add icon based on type
    let icon = '';
    if (type === 'success') icon = '✓';
    else if (type === 'error') icon = '✕';
    else icon = 'ℹ';

    toast.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
    
    // Add to container
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Validation Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const helpSearchInput = document.getElementById('helpSearchInput');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!username) {
                showToast('请输入邮箱账号或手机号码', 'error');
                usernameInput.focus();
                return;
            }

            if (!password) {
                showToast('请输入密码', 'error');
                passwordInput.focus();
                return;
            }

            // Simulate login failure for demo purposes
            // In real scenario, this would be an API call
            if (password.length < 6) {
                showLoginError('账号或密码错误，请重新输入', '登录失败');
                passwordInput.focus();
                return;
            }

            // If both valid
            showToast('登录成功', 'success');
            hideLoginError();
        });
    }

    if (helpSearchInput) {
        helpSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchHelp();
            }
        });
    }

    if (usernameInput) {
        usernameInput.addEventListener('input', () => {
            hideLoginError();
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('input', () => {
            hideLoginError();
        });
    }

    // Close help panel on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('helpOverlay');
            if (overlay.classList.contains('show')) {
                closeHelpSearch();
            }
        }
    });
});
