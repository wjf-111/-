let currentUser = null;
let currentPage = 'home';
let displayedActivities = [];
let currentActivity = null;
let selectedTicket = null;
let ticketQuantity = 1;
let currentDisplayCount = 10;
let balanceVisible = true; // 余额是否可见
let currentCategory = 'all'; // 当前选中的分类

document.addEventListener('DOMContentLoaded', function() {
    loadUserData();

    currentUser = null;
    localStorage.removeItem('currentUser');
    
    initLogin();
    initRegister();
    initNavigation();
    initSearch();
    initMyPage();

    document.getElementById('loginPage').classList.add('active');
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('appPage').classList.remove('active');
    document.getElementById('appPage').style.display = 'none';
});

window.addEventListener('beforeunload', function() {
    currentUser = null;
    localStorage.removeItem('currentUser');
});

window.addEventListener('unload', function() {
    currentUser = null;
    localStorage.removeItem('currentUser');
});

function loadUserData() {
    const savedData = localStorage.getItem('appData');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            if (parsed.users) {
                parsed.users.forEach(newUser => {
                    const exists = appData.users.find(u => u.User_id === newUser.User_id);
                    if (!exists) {
                        appData.users.push(newUser);
                    }
                });
            }
        } catch (e) {
            console.error('加载用户数据失败:', e);
        }
    }
}

function initLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const hashedPassword = await sha256(password);

        let user = appData.users.find(u => 
            u.Nickname === username && 
            u.Password === hashedPassword && 
            u.Status === 1
        );

        if (!user) {
            user = appData.users.find(u => 
                u.Phone === username && 
                u.Password === hashedPassword && 
                u.Status === 1
            );
        }
        
        if (user) {
            if (currentUser) {
                currentUser = null;
            }

            localStorage.removeItem('currentUser');
            

            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            

            showAppPage();
        } else {
            const userByNickname = appData.users.find(u => u.Nickname === username);
            const userByPhone = appData.users.find(u => u.Phone === username);
            
            if (userByNickname || userByPhone) {
                const userExists = userByNickname || userByPhone;
                if (userExists.Status !== 1) {
                    alert('账户已被禁用，无法登录');
                } else {
                    alert('密码错误，请重试\n\n提示：\n• 可以使用昵称或手机号登录\n• 测试账号密码: 123456 或 password');
                }
            } else {
                alert('用户不存在\n\n提示：\n• 可以使用昵称或手机号登录\n• 如果没有账号，请先注册\n• 测试账号密码: 123456 或 password');
            }
        }
    });
}

async function sha256(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function initRegister() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const phone = document.getElementById('regPhone').value;
        const password = document.getElementById('regPassword').value;
        const nickname = document.getElementById('regNickname').value;
        const realName = document.getElementById('regRealName').value || null;
        const idCard = document.getElementById('regIdCard').value || null;
        const gender = document.getElementById('regGender').value || '未知';
        const birthday = document.getElementById('regBirthday').value || null;

        if (!/^1[3-9]\d{9}$/.test(phone)) {
            alert('请输入正确的手机号格式（11位数字，以1开头）');
            return;
        }

        if (password.length < 6) {
            alert('密码长度至少为6位');
            return;
        }

        const existingUser = appData.users.find(u => u.Phone === phone);
        if (existingUser) {
            alert('该手机号已被注册，请使用其他手机号或直接登录');
            return;
        }

        const existingNickname = appData.users.find(u => u.Nickname === nickname);
        if (existingNickname) {
            alert('该昵称已被使用，请选择其他昵称');
            return;
        }

        const maxUserId = Math.max(...appData.users.map(u => u.User_id));
        const newUserId = maxUserId + 1;

        const hashedPassword = await sha256(password);

        let formattedBirthday = null;
        if (birthday) {
            const date = new Date(birthday);
            formattedBirthday = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        }

        const now = new Date();
        const registerTime = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

        const newUser = {
            User_id: newUserId,
            Phone: phone,
            Password: hashedPassword,
            Nickname: nickname,
            Real_name: realName,
            Id_card: idCard,
            Gender: gender,
            Birthday: formattedBirthday,
            Register_time: registerTime,
            Balance: 0,
            Member_level: 1,
            Status: 1
        };

        appData.users.push(newUser);

        localStorage.setItem('appData', JSON.stringify(appData));
        
        alert('注册成功！正在为您登录...');

        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        registerForm.reset();

        switchToLogin();

        showAppPage();
    });
}

window.switchToRegister = function() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginPage').scrollTop = 0;
};

window.switchToLogin = function() {
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('loginPage').scrollTop = 0;
};

function showAppPage() {
    const loginPage = document.getElementById('loginPage');
    loginPage.classList.remove('active');
    loginPage.style.display = 'none';
    const appPage = document.getElementById('appPage');
    appPage.classList.add('active');
    appPage.style.display = 'block';
    document.getElementById('loginForm').reset();
    
    loadHomePage();
    updateUserInfo();
}

window.logout = function() {
    if (confirm('确定要退出登录吗？')) {
        currentUser = null;
        localStorage.removeItem('currentUser');

        const appPage = document.getElementById('appPage');
        appPage.classList.remove('active');
        appPage.style.display = 'none';

        const loginPage = document.getElementById('loginPage');
        loginPage.classList.add('active');
        loginPage.style.display = 'flex';

        document.getElementById('loginForm').reset();
    }
};

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            switchPage(page);

            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchPage(page) {
    currentPage = page;

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    const pageTitle = document.getElementById('pageTitle');
    
    if (page === 'home') {
        document.getElementById('homeContent').classList.add('active');
        pageTitle.textContent = '首页';
        loadHomePage();
    } else if (page === 'my') {
        document.getElementById('myContent').classList.add('active');
        pageTitle.textContent = '我的';
        loadMyPage();
    }
}

function loadHomePage() {
    currentCategory = 'all';
    updateCategoryTabs();
    displayedActivities = appData.activities.filter(a => a.status !== 4); // 排除已取消的活动
    currentDisplayCount = 10;
    renderActivityList();
}

window.filterByCategory = function(category) {
    currentCategory = category;
    updateCategoryTabs();

    let filtered = appData.activities.filter(a => a.status !== 4);
    if (category !== 'all') {
        filtered = filtered.filter(a => a.activity_type === category);
    }
    

    const searchKeyword = document.getElementById('searchInput').value.toLowerCase();
    if (searchKeyword) {
        filtered = filtered.filter(activity => {
            const matchActivity = activity.activity_name.toLowerCase().includes(searchKeyword) ||
                                 activity.activity_type.toLowerCase().includes(searchKeyword);
            
            const venue = appData.venues.find(v => v.venue_id === activity.venue_id);
            const matchVenue = venue && (
                venue.venue_name.toLowerCase().includes(searchKeyword) ||
                venue.city.toLowerCase().includes(searchKeyword)
            );
            
            const merchant = appData.merchants.find(m => m.merchant_id === activity.sponsor_id);
            const matchMerchant = merchant && merchant.merchant_name.toLowerCase().includes(searchKeyword);
            
            return (matchActivity || matchVenue || matchMerchant);
        });
    }
    
    displayedActivities = filtered;
    currentDisplayCount = 10;
    renderActivityList();
};


function updateCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        if (tab.getAttribute('data-category') === currentCategory) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}


function renderActivityList() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';
    
    const activitiesToShow = displayedActivities.slice(0, currentDisplayCount);
    
    activitiesToShow.forEach(activity => {
        const venue = appData.venues.find(v => v.venue_id === activity.venue_id);
        const merchant = appData.merchants.find(m => m.merchant_id === activity.sponsor_id);
        
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <img src="${getActivityImage(activity.activity_name)}" alt="${activity.activity_name}" class="activity-item-image" onerror="this.src='图片/f3cffd44b03464c560b2a534bb6999d7.jpg'">
            <div class="activity-item-info">
                <div class="activity-item-title">${activity.activity_name}</div>
                <div class="activity-item-meta">${activity.activity_type} | ${venue ? venue.city : ''} | ${venue ? venue.venue_name : ''}</div>
                <div class="activity-item-price">${activity.price_range}</div>
            </div>
        `;
        
        activityItem.addEventListener('click', () => {
            showActivityDetail(activity);
        });
        
        activityList.appendChild(activityItem);
    });
    

    const loadMore = document.getElementById('loadMore');
    if (currentDisplayCount < displayedActivities.length) {
        loadMore.style.display = 'block';
        loadMore.onclick = function() {
            currentDisplayCount += 10;
            renderActivityList();
        };
    } else {
        loadMore.style.display = 'none';
    }
}


function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    

    let filtered = appData.activities.filter(a => a.status !== 4);
    if (currentCategory !== 'all') {
        filtered = filtered.filter(a => a.activity_type === currentCategory);
    }
    

    if (keyword) {
        filtered = filtered.filter(activity => {

            const matchActivity = activity.activity_name.toLowerCase().includes(keyword) ||
                                 activity.activity_type.toLowerCase().includes(keyword);
            

            const venue = appData.venues.find(v => v.venue_id === activity.venue_id);
            const matchVenue = venue && (
                venue.venue_name.toLowerCase().includes(keyword) ||
                venue.city.toLowerCase().includes(keyword)
            );
            

            const merchant = appData.merchants.find(m => m.merchant_id === activity.sponsor_id);
            const matchMerchant = merchant && merchant.merchant_name.toLowerCase().includes(keyword);
            
            return (matchActivity || matchVenue || matchMerchant);
        });
    }
    
    displayedActivities = filtered;
    currentDisplayCount = 10;
    renderActivityList();
}


function showActivityDetail(activity) {
    currentActivity = activity;
    const venue = appData.venues.find(v => v.venue_id === activity.venue_id);
    const merchant = appData.merchants.find(m => m.merchant_id === activity.sponsor_id);
    

    const availableTickets = appData.tickets.filter(t => 
        t.activity_id === activity.activity_id && 
        t.ticket_status === 0
    );
    

    const ticketGroups = {};
    availableTickets.forEach(ticket => {
        const key = `${ticket.seat_area}_${ticket.price}`;
        if (!ticketGroups[key]) {
            ticketGroups[key] = {
                seat_area: ticket.seat_area,
                price: ticket.price,
                row_num: ticket.row_num,
                seat_num: ticket.seat_num,
                count: 0
            };
        }
        ticketGroups[key].count++;
    });
    
    const detailContent = document.getElementById('activityDetail');
    detailContent.innerHTML = `
        <img src="${getActivityImage(activity.activity_name)}" alt="${activity.activity_name}" class="detail-image" onerror="this.src='图片/f3cffd44b03464c560b2a534bb6999d7.jpg'">
        <div class="detail-content">
            <h2 class="detail-title">${activity.activity_name}</h2>
            <div class="detail-info">
                <p><strong>活动类型：</strong>${activity.activity_type}</p>
                <p><strong>活动时间：</strong>${activity.start_time} - ${activity.end_time}</p>
                <p><strong>场馆：</strong>${venue ? venue.venue_name : ''}（${venue ? venue.city : ''}）</p>
                <p><strong>主办方：</strong>${merchant ? merchant.merchant_name : ''}</p>
                <p><strong>价格范围：</strong>${activity.price_range}</p>
                <p><strong>剩余票数：</strong>${activity.remaining_tickets}</p>
            </div>
            <div class="detail-intro">
                <h3>活动介绍</h3>
                <p>${activity.intro}</p>
            </div>
            <div class="ticket-selection">
                <h3>选择票务</h3>
                ${Object.keys(ticketGroups).length > 0 ? 
                    Object.values(ticketGroups).map(group => `
                        <div class="ticket-option" data-price="${group.price}" data-area="${group.seat_area}">
                            <div class="ticket-info">
                                <div><strong>${group.seat_area}</strong></div>
                                <div>${group.row_num !== '无' ? group.row_num + ' ' + group.seat_num : '无固定座位'}</div>
                                <div>剩余：${group.count} 张</div>
                            </div>
                            <div class="ticket-price">¥${group.price}</div>
                        </div>
                    `).join('') :
                    '<p>暂无可用票务</p>'
                }
                ${Object.keys(ticketGroups).length > 0 ? `
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <span class="quantity-display" id="quantityDisplay">1</span>
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                    <div id="totalPrice" style="margin-top: 15px; font-size: 18px; font-weight: 600; color: #ff6b6b;">
                        总计：¥${selectedTicket ? selectedTicket.price : 0}
                    </div>
                    <button class="buy-btn" id="buyBtn" onclick="purchaseTicket()">立即购票</button>
                ` : ''}
            </div>
        </div>
    `;
    

    document.getElementById('homeContent').classList.remove('active');
    document.getElementById('activityDetailContent').classList.add('active');
    document.getElementById('pageTitle').textContent = '活动详情';
    

    if (!document.querySelector('.back-btn')) {
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = '←';
        backBtn.onclick = function() {
            document.getElementById('activityDetailContent').classList.remove('active');
            document.getElementById('homeContent').classList.add('active');
            document.getElementById('pageTitle').textContent = '首页';
            this.remove();
        };
        document.querySelector('.app-header').appendChild(backBtn);
    }
    

    document.querySelectorAll('.ticket-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.ticket-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedTicket = {
                price: parseFloat(this.getAttribute('data-price')),
                seat_area: this.getAttribute('data-area')
            };
            ticketQuantity = 1;
            updateTotalPrice();
        });
    });
}


window.changeQuantity = function(delta) {
    if (!selectedTicket) {
        alert('请先选择票务');
        return;
    }
    
    const newQuantity = ticketQuantity + delta;
    if (newQuantity < 1) return;
    
    ticketQuantity = newQuantity;
    document.getElementById('quantityDisplay').textContent = ticketQuantity;
    updateTotalPrice();
};


function updateTotalPrice() {
    if (selectedTicket) {
        const total = selectedTicket.price * ticketQuantity;
        document.getElementById('totalPrice').textContent = `总计：¥${total.toFixed(2)}`;
    }
}

window.purchaseTicket = function() {
    if (!currentUser) {
        alert('请先登录');
        return;
    }
    
    if (!selectedTicket) {
        alert('请选择票务');
        return;
    }
    
    if (!currentActivity) {
        alert('活动信息错误');
        return;
    }
    
    const totalPrice = selectedTicket.price * ticketQuantity;
    
    if (currentUser.Balance < totalPrice) {
        alert('余额不足，请先充值');
        return;
    }
    

    const availableTickets = appData.tickets.filter(t => 
        t.activity_id === currentActivity.activity_id && 
        t.ticket_status === 0 &&
        t.seat_area === selectedTicket.seat_area &&
        t.price === selectedTicket.price
    );
    
    if (availableTickets.length < ticketQuantity) {
        alert('可用票数不足');
        return;
    }

    if (!confirm(`确认购买 ${ticketQuantity} 张票，总计 ¥${totalPrice.toFixed(2)}？`)) {
        return;
    }

    currentUser.Balance -= totalPrice;

    const orderId = 'ORDER' + new Date().getTime();
    const now = new Date();
    const timeStr = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
    
    const order = {
        order_id: orderId,
        user_id: currentUser.User_id,
        total_amount: totalPrice,
        pay_amount: totalPrice,
        discount_amount: 0,
        pay_method: '余额支付',
        order_status: 4, // 已支付
        create_time: timeStr,
        pay_time: timeStr,
        cancel_time: null,
        refund_time: null,
        remark: `${currentActivity.activity_name} ${ticketQuantity} 张票`
    };
    
    appData.orders.push(order);

    const selectedTickets = availableTickets.slice(0, ticketQuantity);
    selectedTickets.forEach(ticket => {
        ticket.ticket_status = 1;

        appData.orderTickets.push({
            relation_id: appData.orderTickets.length + 1,
            order_id: orderId,
            ticket_id: ticket.ticket_id
        });
    });

    currentActivity.remaining_tickets -= ticketQuantity;

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    alert('购票成功！');

    document.getElementById('activityDetailContent').classList.remove('active');
    document.getElementById('homeContent').classList.add('active');
    document.getElementById('pageTitle').textContent = '首页';
    document.querySelector('.back-btn')?.remove();

    updateUserInfo();

    selectedTicket = null;
    ticketQuantity = 1;
};

function initMyPage() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            showMySection(section);
        });
    });
}

function loadMyPage() {
    updateUserInfo();
    showMySection('orders');
}

function showMySection(section) {
    document.querySelectorAll('.section-content').forEach(sec => {
        sec.style.display = 'none';
    });
    if (section === 'orders') {
        document.getElementById('ordersSection').style.display = 'block';
        renderOrders();
    } else if (section === 'comments') {
        document.getElementById('commentsSection').style.display = 'block';
        renderComments();
    } else if (section === 'coupons') {
        document.getElementById('couponsSection').style.display = 'block';
        renderCoupons();
    } else if (section === 'profile') {
        document.getElementById('profileSection').style.display = 'block';
        renderProfile();
    }
}

function updateUserInfo() {
    if (!currentUser) return;
    
    document.getElementById('userNickname').textContent = currentUser.Nickname;
    document.getElementById('userPhone').textContent = currentUser.Phone;

    const savedBalanceVisible = localStorage.getItem('balanceVisible');
    if (savedBalanceVisible !== null) {
        balanceVisible = savedBalanceVisible === 'true';
    }
    updateBalanceDisplay();
}

function updateBalanceDisplay() {
    const balanceElement = document.getElementById('userBalance');
    const balanceIcon = document.getElementById('balanceIcon');
    
    if (!currentUser) return;
    
    if (balanceVisible) {
        balanceElement.textContent = `¥${currentUser.Balance.toFixed(2)}`;
        balanceIcon.textContent = '👁️';
        balanceIcon.title = '点击隐藏余额';
    } else {
        balanceElement.textContent = '****';
        balanceIcon.textContent = '👁️‍🗨️';
        balanceIcon.title = '点击显示余额';
    }
}

window.toggleBalance = function() {
    balanceVisible = !balanceVisible;
    localStorage.setItem('balanceVisible', balanceVisible);
    updateBalanceDisplay();
};

function renderOrders() {
    if (!currentUser) return;
    
    const orders = appData.orders.filter(o => o.user_id === currentUser.User_id)
                                 .sort((a, b) => new Date(b.create_time) - new Date(a.create_time));
    
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">暂无订单</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        const orderTickets = appData.orderTickets.filter(ot => ot.order_id === order.order_id);
        let activityName = '未知活动';
        if (orderTickets.length > 0) {
            const ticket = appData.tickets.find(t => t.ticket_id === orderTickets[0].ticket_id);
            if (ticket) {
                const activity = appData.activities.find(a => a.activity_id === ticket.activity_id);
                if (activity) {
                    activityName = activity.activity_name;
                }
            }
        }
        
        let statusText = '';
        let statusClass = '';
        if (order.order_status === 0) {
            statusText = '待支付';
            statusClass = 'status-pending';
        } else if (order.order_status === 2) {
            statusText = '已取消';
            statusClass = 'status-cancelled';
        } else if (order.order_status === 3) {
            statusText = '已退款';
            statusClass = 'status-cancelled';
        } else if (order.order_status === 4) {
            statusText = '已支付';
            statusClass = 'status-paid';
        }
        
        orderItem.innerHTML = `
            <div class="order-header">
                <div>
                    <div style="font-weight: 600; margin-bottom: 5px;">${activityName}</div>
                    <div class="order-id">${order.order_id}</div>
                </div>
                <div class="order-status ${statusClass}">${statusText}</div>
            </div>
            <div style="margin-top: 10px;">
                <div style="font-size: 12px; color: #999; margin-bottom: 5px;">${order.create_time}</div>
                <div class="order-amount">¥${order.pay_amount.toFixed(2)}</div>
            </div>
            ${order.order_status === 4 ? `
                <div style="margin-top: 15px; text-align: right;">
                    <button class="refund-btn" onclick="refundOrder('${order.order_id}')">申请退款</button>
                </div>
            ` : ''}
        `;
        
        ordersList.appendChild(orderItem);
    });
}

function renderComments() {
    if (!currentUser) return;
    
    const comments = appData.comments.filter(c => c.user_id === currentUser.User_id)
                                     .sort((a, b) => new Date(b.comment_time) - new Date(a.comment_time));
    
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">暂无评论</p>';
        return;
    }
    
    comments.forEach(comment => {
        const activity = appData.activities.find(a => a.activity_id === comment.activity_id);
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        
        commentItem.innerHTML = `
            <div class="comment-activity">${activity ? activity.activity_name : '未知活动'}</div>
            <div class="comment-content">${comment.content}</div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                <div class="comment-score">${'★'.repeat(comment.score)}${'☆'.repeat(5 - comment.score)}</div>
                <div style="font-size: 12px; color: #999;">${comment.comment_time}</div>
            </div>
            ${comment.reply_content ? `
                <div style="margin-top: 10px; padding: 10px; background: #f0f0f0; border-radius: 5px; font-size: 12px;">
                    <div style="color: #667eea; margin-bottom: 5px;">商家回复：</div>
                    <div>${comment.reply_content}</div>
                </div>
            ` : ''}
        `;
        
        commentsList.appendChild(commentItem);
    });
}

function renderCoupons() {
    if (!currentUser) return;
    
    const userCoupons = appData.userCoupons.filter(uc => uc.user_id === currentUser.User_id);
    const couponsList = document.getElementById('couponsList');
    couponsList.innerHTML = '';
    
    if (userCoupons.length === 0) {
        couponsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">暂无优惠券</p>';
        return;
    }
    
    userCoupons.forEach(userCoupon => {
        const coupon = appData.coupons.find(c => c.coupon_id === userCoupon.coupon_id);
        if (!coupon) return;
        
        let useStatusText = '';
        if (userCoupon.use_status === 0) {
            useStatusText = '未使用';
        } else if (userCoupon.use_status === 1) {
            useStatusText = '已使用';
        } else if (userCoupon.use_status === 2) {
            useStatusText = '已过期';
        }
        
        const couponItem = document.createElement('div');
        couponItem.className = 'coupon-item';
        
        let discountText = '';
        if (coupon.coupon_type === 0) {
            discountText = `满${coupon.min_amount}减${coupon.discount_amount}`;
        } else if (coupon.coupon_type === 1) {
            discountText = `满${coupon.min_amount}打${(coupon.discount_rate * 10).toFixed(1)}折`;
        } else {
            discountText = `无门槛减${coupon.discount_amount}`;
        }
        
        couponItem.innerHTML = `
            <div class="coupon-name">${coupon.coupon_name}</div>
            <div class="coupon-desc">${discountText} | ${coupon.apply_type} | ${useStatusText}</div>
            <div class="coupon-desc" style="margin-top: 5px;">有效期至：${coupon.expire_time}</div>
        `;
        
        couponsList.appendChild(couponItem);
    });
}

function renderProfile() {
    if (!currentUser) return;
    
    const profileInfo = document.getElementById('profileInfo');
    
    const memberLevelMap = {
        1: '银卡会员',
        2: '金卡会员',
        3: '白金会员',
        4: '钻石会员'
    };
    
    profileInfo.innerHTML = `
        <div class="profile-item">
            <span class="profile-label">昵称</span>
            <span class="profile-value">${currentUser.Nickname}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">手机号</span>
            <span class="profile-value">${currentUser.Phone}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">真实姓名</span>
            <span class="profile-value">${currentUser.Real_name}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">身份证号</span>
            <span class="profile-value">${currentUser.Id_card || '未认证'}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">性别</span>
            <span class="profile-value">${currentUser.Gender}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">生日</span>
            <span class="profile-value">${currentUser.Birthday}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">注册时间</span>
            <span class="profile-value">${currentUser.Register_time}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">会员等级</span>
            <span class="profile-value">${memberLevelMap[currentUser.Member_level] || '普通会员'}</span>
        </div>
        <div class="profile-item">
            <span class="profile-label">账户状态</span>
            <span class="profile-value">${currentUser.Status === 1 ? '正常' : '已禁用'}</span>
        </div>
    `;
}

let selectedRechargeAmount = 0;

window.showRechargeModal = function() {
    const modal = document.getElementById('rechargeModal');
    modal.style.display = 'flex';
    selectedRechargeAmount = 0;
    updateRechargeDisplay();
    document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('customAmountInput').value = '';
};

window.closeRechargeModal = function() {
    const modal = document.getElementById('rechargeModal');
    modal.style.display = 'none';
    selectedRechargeAmount = 0;
    document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('customAmountInput').value = '';
};

window.selectAmount = function(amount) {
    selectedRechargeAmount = amount;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (parseFloat(btn.getAttribute('data-amount')) === amount) {
            btn.classList.add('selected');
        }
    });
    document.getElementById('customAmountInput').value = '';
    updateRechargeDisplay();
};

window.selectCustomAmount = function() {
    const input = document.getElementById('customAmountInput');
    const amount = parseFloat(input.value) || 0;
    if (amount > 0) {
        selectedRechargeAmount = amount;
        document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('selected'));
        updateRechargeDisplay();
    } else {
        selectedRechargeAmount = 0;
        updateRechargeDisplay();
    }
};
function updateRechargeDisplay() {
    const display = document.getElementById('selectedAmount');
    display.textContent = `¥${selectedRechargeAmount.toFixed(2)}`;
    const confirmBtn = document.querySelector('.confirm-recharge-btn');
    if (selectedRechargeAmount > 0) {
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = '1';
    } else {
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = '0.5';
    }
}
window.confirmRecharge = function() {
    if (!currentUser) {
        alert('请先登录');
        return;
    }
    
    if (selectedRechargeAmount <= 0) {
        alert('请选择充值金额');
        return;
    }
    
    if (selectedRechargeAmount < 1) {
        alert('充值金额不能少于1元');
        return;
    }
    
    if (selectedRechargeAmount > 100000) {
        alert('单次充值金额不能超过100,000元');
        return;
    }

    if (confirm(`确认充值 ¥${selectedRechargeAmount.toFixed(2)}？`)) {
        currentUser.Balance += selectedRechargeAmount;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserInfo();
        closeRechargeModal();
        
        alert(`充值成功！当前余额：¥${currentUser.Balance.toFixed(2)}`);
    }
};

document.addEventListener('click', function(event) {
    const modal = document.getElementById('rechargeModal');
    if (event.target === modal) {
        closeRechargeModal();
    }
});

window.refundOrder = function(orderId) {
    if (!currentUser) {
        alert('请先登录');
        return;
    }
    const order = appData.orders.find(o => o.order_id === orderId);
    if (!order) {
        alert('订单不存在');
        return;
    }
    if (order.order_status !== 4) {
        alert('只有已支付的订单才能申请退款');
        return;
    }
    if (!confirm(`确认要退款订单 ${orderId} 吗？\n退款金额：¥${order.pay_amount.toFixed(2)}`)) {
        return;
    }

    order.order_status = 3;
    const now = new Date();
    order.refund_time = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    currentUser.Balance += order.pay_amount;
    const orderTickets = appData.orderTickets.filter(ot => ot.order_id === orderId);
    let activityId = null;
    orderTickets.forEach(orderTicket => {
        const ticket = appData.tickets.find(t => t.ticket_id === orderTicket.ticket_id);
        if (ticket) {
            ticket.ticket_status = 0;
            activityId = ticket.activity_id;
        }
    });
    if (activityId) {
        const activity = appData.activities.find(a => a.activity_id === activityId);
        if (activity) {
            activity.remaining_tickets += orderTickets.length;
        }
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    renderOrders();
    updateUserInfo();
    
    alert(`退款成功！\n退款金额：¥${order.pay_amount.toFixed(2)}\n当前余额：¥${currentUser.Balance.toFixed(2)}`);
};

