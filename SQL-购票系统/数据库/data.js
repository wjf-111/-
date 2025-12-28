// 数据文件 - 从CSV转换而来
const appData = {
    users: [
        // 测试账号 - 密码: 123456
        {User_id: 999, Phone: '13800000000', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: 'test', Real_name: '测试用户', Id_card: '110101199001010000', Gender: '男', Birthday: '1990/1/1', Register_time: '2025/1/1 0:00', Balance: 10000, Member_level: 4, Status: 1},
        // 测试账号 - 密码: password
        {User_id: 998, Phone: '13900000000', Password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', Nickname: 'demo', Real_name: '演示用户', Id_card: '110101199001010001', Gender: '女', Birthday: '1995/1/1', Register_time: '2025/1/1 0:00', Balance: 5000, Member_level: 3, Status: 1},
        // 原始数据
        {User_id: 1, Phone: '13856927410', Password: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', Nickname: 'freedom', Real_name: '王涵之', Id_card: '11010119900101****', Gender: '男', Birthday: '1990/1/1', Register_time: '2025/1/10 9:23', Balance: 1289.5, Member_level: 3, Status: 1},
        // 密码: 123456
        {User_id: 2, Phone: '13972458136', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: 'StarryNight', Real_name: '李梦琪', Id_card: '31010119950520****', Gender: '女', Birthday: '1995/5/20', Register_time: '2025/2/15 14:10', Balance: 867.3, Member_level: 2, Status: 1},
        // 密码: 123456
        {User_id: 3, Phone: '15639827541', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '清风徐来', Real_name: '张伟', Id_card: '44010119851015****', Gender: '男', Birthday: '1985/10/15', Register_time: '2025/3/8 10:05', Balance: 5200.8, Member_level: 4, Status: 1},
        // 密码: 123456
        {User_id: 4, Phone: '18065429738', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '小太阳', Real_name: '刘悦', Id_card: '21010120000808****', Gender: '女', Birthday: '2000/8/8', Register_time: '2025/4/20 16:30', Balance: 350.2, Member_level: 1, Status: 1},
        {User_id: 5, Phone: '17782564930', Password: 'd8578edf8458ce06fbc5bb76a58c5ca4c03ddf9399210f7a3ed039515d45f0af', Nickname: '老炮儿', Real_name: '陈刚', Id_card: '51010119781225****', Gender: '男', Birthday: '1978/12/25', Register_time: '2025/1/25 8:15', Balance: 0, Member_level: 1, Status: 0},
        // 密码: 123456
        {User_id: 6, Phone: '19138572649', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '喵星人', Real_name: '杨紫涵', Id_card: '33010119920312****', Gender: '女', Birthday: '1992/3/12', Register_time: '2025/5/5 11:20', Balance: 1560.9, Member_level: 3, Status: 1},
        {User_id: 7, Phone: '18857392641', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '行者无疆', Real_name: '赵磊', Id_card: '61010119880707****', Gender: '男', Birthday: '1988/7/7', Register_time: '2025/2/18 19:40', Balance: 2890.4, Member_level: 4, Status: 1},
        // 密码: 123456
        {User_id: 8, Phone: '13682547931', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '甜茶', Real_name: '孙雨桐', Id_card: '42010119981130****', Gender: '女', Birthday: '1998/11/30', Register_time: '2025/4/12 13:05', Balance: 680.7, Member_level: 2, Status: 1},
        // 密码: 123456
        {User_id: 9, Phone: '15274938625', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '低调的大佬', Real_name: '黄志强', Id_card: '45010119820618****', Gender: '男', Birthday: '1982/6/18', Register_time: '2025/3/25 7:50', Balance: 8900.2, Member_level: 4, Status: 1},
        // 密码: 123456
        {User_id: 10, Phone: '17863259471', Password: '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', Nickname: '小透明', Real_name: '周琳', Id_card: null, Gender: '未知', Birthday: '1996/9/9', Register_time: '2025/5/18 20:18', Balance: 120.5, Member_level: 1, Status: 1}
    ],
    
    activities: [
        {activity_id: 1, activity_name: '周杰伦 2025 世界巡回演唱会 - 北京鸟巢站', activity_type: '演唱会', sponsor_id: 101, venue_id: 201, poster_url: 'https://pic.example.com/jay2025_bj.jpg', intro: '周杰伦携全新专辑曲目开唱，包含经典老歌串烧、舞台特效沉浸式体验', start_time: '2025/8/15 19:30', end_time: '2025/8/17 22:00', on_sale_time: '2025/6/20 10:00', sold_out_time: null, price_range: '380-1980 元', remaining_tickets: 1256, status: 1},
        {activity_id: 2, activity_name: '《如梦之梦》话剧巡演 - 上海大剧院站', activity_type: '话剧', sponsor_id: 102, venue_id: 202, poster_url: 'https://pic.example.com/drama_smh.jpg', intro: '赖声川经典话剧，胡歌、许晴领衔主演，8 小时沉浸式戏剧体验', start_time: '2025/7/20 19:00', end_time: '2025/7/27 21:30', on_sale_time: '2025/5/10 14:00', sold_out_time: '2025/5/12 9:15', price_range: '580-2880 元', remaining_tickets: 0, status: 2},
        {activity_id: 3, activity_name: '2025 中超联赛北京国安 VS 广州恒大', activity_type: '体育赛事', sponsor_id: 103, venue_id: 203, poster_url: 'https://pic.example.com/football_bjgz.jpg', intro: '中超焦点战，国安主场迎战恒大，角逐联赛积分榜前列', start_time: '2025/6/28 19:35', end_time: '2025/6/28 21:45', on_sale_time: '2025/6/1 9:00', sold_out_time: null, price_range: '180-1280 元', remaining_tickets: 890, status: 1},
        {activity_id: 4, activity_name: '「笑果脱口秀」年度巡演 - 深圳站', activity_type: '脱口秀', sponsor_id: 104, venue_id: 204, poster_url: 'https://pic.example.com/talk_sz.jpg', intro: '李诞、王建国等笑果卡司齐聚，带来爆笑现场，主打职场、生活趣味话题', start_time: '2025/7/5 20:00', end_time: '2025/7/6 21:30', on_sale_time: '2025/6/10 12:00', sold_out_time: null, price_range: '120-580 元', remaining_tickets: 320, status: 1},
        {activity_id: 5, activity_name: '「梵高星空」沉浸式艺术展览 - 成都站', activity_type: '展览', sponsor_id: 105, venue_id: 205, poster_url: 'https://pic.example.com/exhibition_cd.jpg', intro: '采用 3D 投影技术还原梵高经典画作，沉浸式体验印象派艺术魅力', start_time: '2025/5/1 10:00', end_time: '2025/8/31 21:00', on_sale_time: '2025/4/15 9:00', sold_out_time: null, price_range: '80-220 元', remaining_tickets: 5000, status: 1},
        {activity_id: 6, activity_name: '2025 草莓音乐节 - 杭州站', activity_type: '音乐节', sponsor_id: 106, venue_id: 206, poster_url: 'https://pic.example.com/music_hz.jpg', intro: '新裤子、万能青年旅店等乐队加盟，涵盖摇滚、民谣、电子等多种曲风', start_time: '2025/9/13 13:00', end_time: '2025/9/14 22:00', on_sale_time: '2025/7/15 10:00', sold_out_time: null, price_range: '280-680 元', remaining_tickets: 1860, status: 0},
        {activity_id: 7, activity_name: '《冰雪奇缘》儿童剧 - 广州少年宫站', activity_type: '儿童剧', sponsor_id: 107, venue_id: 207, poster_url: 'https://pic.example.com/kid_gz.jpg', intro: '迪士尼经典 IP 改编，真人舞台演绎，搭配冰雪特效，适合亲子观看', start_time: '2025/6/1 10:00', end_time: '2025/6/3 18:00', on_sale_time: '2025/4/20 9:00', sold_out_time: '2025/5/20 16:30', price_range: '160-480 元', remaining_tickets: 0, status: 2},
        {activity_id: 8, activity_name: '2025 黄山风景区深度游套票 - 暑期专场', activity_type: '景区门票', sponsor_id: 108, venue_id: 208, poster_url: 'https://pic.example.com/scenic_hs.jpg', intro: '含黄山门票 + 索道 + 讲解服务，暑期专属优惠，适合家庭、户外爱好者', start_time: '2025/7/1 8:00', end_time: '2025/8/31 18:00', on_sale_time: '2025/6/5 9:00', sold_out_time: null, price_range: '298-598 元', remaining_tickets: 2100, status: 1},
        {activity_id: 9, activity_name: '2025 商业领袖峰会 - 上海国际会议中心站', activity_type: '商务演出', sponsor_id: 109, venue_id: 209, poster_url: 'https://pic.example.com/business_sh.jpg', intro: '汇聚国内外知名企业家，探讨数字经济与企业转型，含高端晚宴与交流环节', start_time: '2025/5/20 9:00', end_time: '2025/5/21 18:00', on_sale_time: '2025/4/1 10:00', sold_out_time: null, price_range: '1980-9800 元', remaining_tickets: 150, status: 3},
        {activity_id: 10, activity_name: '「漫威宇宙」电影展映周 - 北京万达影城', activity_type: '电影展映', sponsor_id: 110, venue_id: 210, poster_url: 'https://pic.example.com/movie_bj.jpg', intro: '漫威经典电影连映，含《复仇者联盟》系列、《蜘蛛侠》全季，IMAX 厅专属场次', start_time: '2025/6/10 9:00', end_time: '2025/6/16 22:00', on_sale_time: '2025/6/1 12:00', sold_out_time: null, price_range: '35-88 元', remaining_tickets: 420, status: 1},
        {activity_id: 11, activity_name: '2025 乒乓球世界杯决赛 - 深圳湾体育中心', activity_type: '体育赛事', sponsor_id: 103, venue_id: 211, poster_url: 'https://pic.example.com/tabletennis_sz.jpg', intro: '世界顶尖乒乓选手角逐冠军，国乒主力参赛，现场观赛含互动环节', start_time: '2025/10/1 14:00', end_time: '2025/10/7 20:00', on_sale_time: '2025/8/1 10:00', sold_out_time: null, price_range: '280-1680 元', remaining_tickets: 3200, status: 0},
        {activity_id: 12, activity_name: '「李健」民谣演唱会 - 南京奥体中心站', activity_type: '演唱会', sponsor_id: 101, venue_id: 212, poster_url: 'https://pic.example.com/lijian_nj.jpg', intro: '李健携《贝加尔湖畔》等经典曲目开唱，民谣与古典音乐结合的沉浸式演出', start_time: '2025/7/8 19:30', end_time: '2025/7/8 22:00', on_sale_time: '2025/5/5 10:00', sold_out_time: null, price_range: '280-1580 元', remaining_tickets: 0, status: 4}
    ],
    
    tickets: [
        {ticket_id: 1, activity_id: 1, seat_area: '内场 A 区', row_num: '3 排', seat_num: '12 座', price: 1980, ticket_status: 1, create_time: '2025/6/20 10:05'},
        {ticket_id: 2, activity_id: 1, seat_area: '内场 A 区', row_num: '3 排', seat_num: '13 座', price: 1980, ticket_status: 1, create_time: '2025/6/20 10:05'},
        {ticket_id: 3, activity_id: 1, seat_area: '看台 B 区', row_num: '15 排', seat_num: '28 座', price: 780, ticket_status: 0, create_time: '2025/6/20 10:00'},
        {ticket_id: 4, activity_id: 1, seat_area: '看台 C 区', row_num: '30 排', seat_num: '5 座', price: 380, ticket_status: 0, create_time: '2025/6/20 10:00'},
        {ticket_id: 5, activity_id: 2, seat_area: '一楼 VIP 区', row_num: '2 排', seat_num: '8 座', price: 2880, ticket_status: 3, create_time: '2025/5/10 14:10'},
        {ticket_id: 6, activity_id: 2, seat_area: '二楼中区', row_num: '8 排', seat_num: '16 座', price: 1280, ticket_status: 3, create_time: '2025/5/10 14:15'},
        {ticket_id: 7, activity_id: 2, seat_area: '三楼边区', row_num: '15 排', seat_num: '3 座', price: 580, ticket_status: 3, create_time: '2025/5/10 14:20'},
        {ticket_id: 8, activity_id: 3, seat_area: '主队球迷区', row_num: '8 排', seat_num: '10 座', price: 1280, ticket_status: 1, create_time: '2025/6/1 9:10'},
        {ticket_id: 9, activity_id: 3, seat_area: '客队球迷区', row_num: '20 排', seat_num: '15 座', price: 580, ticket_status: 0, create_time: '2025/6/1 9:00'},
        {ticket_id: 10, activity_id: 3, seat_area: '主席台', row_num: '3 排', seat_num: '6 座', price: 880, ticket_status: 1, create_time: '2025/6/1 9:15'},
        {ticket_id: 11, activity_id: 4, seat_area: '前排区', row_num: '5 排', seat_num: '9 座', price: 580, ticket_status: 1, create_time: '2025/6/10 12:05'},
        {ticket_id: 12, activity_id: 4, seat_area: '中排区', row_num: '12 排', seat_num: '22 座', price: 380, ticket_status: 0, create_time: '2025/6/10 12:00'},
        {ticket_id: 13, activity_id: 4, seat_area: '后排区', row_num: '20 排', seat_num: '18 座', price: 120, ticket_status: 1, create_time: '2025/6/10 12:10'},
        {ticket_id: 14, activity_id: 5, seat_area: '普通展区', row_num: '无', seat_num: '无', price: 80, ticket_status: 0, create_time: '2025/4/15 9:00'},
        {ticket_id: 15, activity_id: 5, seat_area: 'VIP 展区', row_num: '无', seat_num: '无', price: 220, ticket_status: 1, create_time: '2025/4/15 9:05'},
        {ticket_id: 16, activity_id: 6, seat_area: '摇滚区', row_num: '2 排', seat_num: '30 座', price: 680, ticket_status: 0, create_time: '2025/7/15 10:00'},
        {ticket_id: 17, activity_id: 6, seat_area: '民谣区', row_num: '10 排', seat_num: '15 座', price: 480, ticket_status: 0, create_time: '2025/7/15 10:00'},
        {ticket_id: 18, activity_id: 7, seat_area: '前排亲子区', row_num: '3 排', seat_num: '6 座', price: 480, ticket_status: 3, create_time: '2025/4/20 9:10'},
        {ticket_id: 19, activity_id: 7, seat_area: '中排区', row_num: '8 排', seat_num: '12 座', price: 280, ticket_status: 3, create_time: '2025/4/20 9:15'},
        {ticket_id: 20, activity_id: 7, seat_area: '后排区', row_num: '15 排', seat_num: '8 座', price: 160, ticket_status: 3, create_time: '2025/4/20 9:20'},
        {ticket_id: 21, activity_id: 8, seat_area: '成人套票区', row_num: '无', seat_num: '无', price: 598, ticket_status: 1, create_time: '2025/6/5 9:05'},
        {ticket_id: 22, activity_id: 8, seat_area: '亲子套票区', row_num: '无', seat_num: '无', price: 498, ticket_status: 0, create_time: '2025/6/5 9:00'},
        {ticket_id: 23, activity_id: 9, seat_area: '贵宾区', row_num: '1 排', seat_num: '5 座', price: 9800, ticket_status: 3, create_time: '2025/4/1 10:10'},
        {ticket_id: 24, activity_id: 9, seat_area: '普通嘉宾区', row_num: '8 排', seat_num: '20 座', price: 3980, ticket_status: 3, create_time: '2025/4/1 10:15'},
        {ticket_id: 25, activity_id: 10, seat_area: 'IMAX 厅', row_num: '5 排', seat_num: '10 座', price: 88, ticket_status: 1, create_time: '2025/6/1 12:05'},
        {ticket_id: 26, activity_id: 10, seat_area: '普通厅', row_num: '12 排', seat_num: '18 座', price: 35, ticket_status: 1, create_time: '2025/6/1 12:10'},
        {ticket_id: 27, activity_id: 11, seat_area: '决赛区 A 区', row_num: '5 排', seat_num: '8 座', price: 1680, ticket_status: 0, create_time: '2025/8/1 10:00'},
        {ticket_id: 28, activity_id: 11, seat_area: '半决赛区', row_num: '15 排', seat_num: '25 座', price: 680, ticket_status: 0, create_time: '2025/8/1 10:00'},
        {ticket_id: 29, activity_id: 12, seat_area: '内场区', row_num: '6 排', seat_num: '18 座', price: 1580, ticket_status: 2, create_time: '2025/5/5 10:05'},
        {ticket_id: 30, activity_id: 12, seat_area: '看台区', row_num: '20 排', seat_num: '30 座', price: 280, ticket_status: 2, create_time: '2025/5/5 10:10'}
    ],
    
    orders: [
        {order_id: 'ORDER20250620100520123', user_id: 1, total_amount: 3960, pay_amount: 3762, discount_amount: 198, pay_method: '余额支付', order_status: 4, create_time: '2025/6/20 10:05', pay_time: '2025/6/20 10:06', cancel_time: null, refund_time: null, remark: '周杰伦演唱会 2 张内场票，金卡会员 95 折'},
        {order_id: 'ORDER20250510141015456', user_id: 2, total_amount: 4160, pay_amount: 4160, discount_amount: 0, pay_method: '微信支付', order_status: 4, create_time: '2025/5/10 14:10', pay_time: '2025/5/10 14:12', cancel_time: null, refund_time: null, remark: '如梦之梦话剧 2 张票，凭二维码入场'},
        {order_id: 'ORDER20250601091020789', user_id: 3, total_amount: 1280, pay_amount: 1152, discount_amount: 128, pay_method: '支付宝支付', order_status: 4, create_time: '2025/6/1 9:10', pay_time: '2025/6/1 9:11', cancel_time: null, refund_time: null, remark: '中超联赛 1 张主队球迷票，钻石会员 9 折'},
        {order_id: 'ORDER20250610120510101', user_id: 4, total_amount: 580, pay_amount: 580, discount_amount: 0, pay_method: '余额支付', order_status: 4, create_time: '2025/6/10 12:05', pay_time: '2025/6/10 12:06', cancel_time: null, refund_time: null, remark: '笑果脱口秀 1 张前排票，凭身份证入场'},
        {order_id: 'ORDER20250601121030112', user_id: 10, total_amount: 120, pay_amount: 120, discount_amount: 0, pay_method: '微信支付', order_status: 4, create_time: '2025/6/1 12:10', pay_time: '2025/6/1 12:11', cancel_time: null, refund_time: null, remark: '笑果脱口秀 1 张后排票，未实名认证需补录'},
        {order_id: 'ORDER20250415090525134', user_id: 7, total_amount: 220, pay_amount: 220, discount_amount: 0, pay_method: '支付宝支付', order_status: 4, create_time: '2025/4/15 9:05', pay_time: '2025/4/15 9:06', cancel_time: null, refund_time: null, remark: '梵高展览 1 张 VIP 票，含专业讲解服务'},
        {order_id: 'ORDER20250420091015156', user_id: 6, total_amount: 760, pay_amount: 760, discount_amount: 0, pay_method: '余额支付', order_status: 4, create_time: '2025/4/20 9:10', pay_time: '2025/4/20 9:11', cancel_time: null, refund_time: null, remark: '冰雪奇缘儿童剧 2 张票，亲子套票无折扣'},
        {order_id: 'ORDER20250605090520178', user_id: 7, total_amount: 598, pay_amount: 538.2, discount_amount: 59.8, pay_method: '余额支付', order_status: 4, create_time: '2025/6/5 9:05', pay_time: '2025/6/5 9:06', cancel_time: null, refund_time: null, remark: '黄山旅游 1 张成人套票，钻石会员 9 折'},
        {order_id: 'ORDER20250401101015190', user_id: 9, total_amount: 13780, pay_amount: 13780, discount_amount: 0, pay_method: '企业转账', order_status: 4, create_time: '2025/4/1 10:10', pay_time: '2025/4/1 10:30', cancel_time: null, refund_time: null, remark: '商业领袖峰会 2 张票，企业购票无优惠'},
        {order_id: 'ORDER20250601120520212', user_id: 4, total_amount: 88, pay_amount: 88, discount_amount: 0, pay_method: '微信支付', order_status: 4, create_time: '2025/6/1 12:05', pay_time: '2025/6/1 12:06', cancel_time: null, refund_time: null, remark: '漫威电影展映 1 张 IMAX 厅票'},
        {order_id: 'ORDER20250601121030234', user_id: 10, total_amount: 35, pay_amount: 35, discount_amount: 0, pay_method: '支付宝支付', order_status: 4, create_time: '2025/6/1 12:10', pay_time: '2025/6/1 12:11', cancel_time: null, refund_time: null, remark: '漫威电影展映 1 张普通厅票'},
        {order_id: 'ORDER20250505100520256', user_id: 1, total_amount: 1580, pay_amount: 1580, discount_amount: 0, pay_method: '余额支付', order_status: 3, create_time: '2025/5/5 10:05', pay_time: '2025/5/5 10:06', cancel_time: null, refund_time: '2025/6/10 9:00', remark: '李健演唱会 1 张内场票，活动取消已退票'},
        {order_id: 'ORDER20250505101030278', user_id: 3, total_amount: 280, pay_amount: 280, discount_amount: 0, pay_method: '微信支付', order_status: 3, create_time: '2025/5/5 10:10', pay_time: '2025/5/5 10:11', cancel_time: null, refund_time: '2025/6/10 9:05', remark: '李健演唱会 1 张看台票，活动取消已退票'},
        {order_id: 'ORDER20250620101020290', user_id: 2, total_amount: 780, pay_amount: 0, discount_amount: 0, pay_method: '支付宝支付', order_status: 0, create_time: '2025/6/20 10:10', pay_time: null, cancel_time: null, refund_time: null, remark: '周杰伦演唱会 1 张看台票，待支付（15 分钟内）'},
        {order_id: 'ORDER20250601091540312', user_id: 9, total_amount: 880, pay_amount: 880, discount_amount: 0, pay_method: '余额支付', order_status: 4, create_time: '2025/6/1 9:15', pay_time: '2025/6/1 9:16', cancel_time: null, refund_time: null, remark: '中超联赛 1 张主席台票，企业招待使用'},
        {order_id: 'ORDER20250715100520334', user_id: 8, total_amount: 680, pay_amount: 0, discount_amount: 0, pay_method: '微信支付', order_status: 2, create_time: '2025/7/15 10:05', pay_time: null, cancel_time: '2025/7/15 10:20', refund_time: null, remark: '草莓音乐节 1 张摇滚区票，超时未支付已取消'},
        {order_id: 'ORDER20250801101020356', user_id: 3, total_amount: 1680, pay_amount: 0, discount_amount: 0, pay_method: '支付宝支付', order_status: 0, create_time: '2025/8/1 10:10', pay_time: null, cancel_time: null, refund_time: null, remark: '乒乓球世界杯 1 张决赛票，待支付'},
        {order_id: 'ORDER20250420092005378', user_id: 6, total_amount: 160, pay_amount: 160, discount_amount: 0, pay_method: '微信支付', order_status: 4, create_time: '2025/4/20 9:20', pay_time: '2025/4/20 9:21', cancel_time: null, refund_time: null, remark: '冰雪奇缘儿童剧 1 张后排票，亲友购票'},
        {order_id: 'ORDER20250605091020390', user_id: 2, total_amount: 498, pay_amount: 0, discount_amount: 0, pay_method: '余额支付', order_status: 2, create_time: '2025/6/5 9:10', pay_time: null, cancel_time: '2025/6/5 9:25', refund_time: null, remark: '黄山旅游 1 张亲子套票，临时改期已取消'},
        {order_id: 'ORDER20250510142005412', user_id: 5, total_amount: 580, pay_amount: 0, discount_amount: 0, pay_method: '微信支付', order_status: 2, create_time: '2025/5/10 14:20', pay_time: null, cancel_time: '2025/5/10 14:30', refund_time: null, remark: '如梦之梦话剧 1 张票，账户禁用已取消'}
    ],
    
    comments: [
        {comment_id: 1, user_id: 1, activity_id: 1, order_id: 'ORDER20250620100520123', content: '周杰伦演唱会现场音效超棒，内场视野无敌，全程跟唱太嗨了！', score: 5, comment_time: '2025/8/18 10:00', like_count: 128, reply_content: '感谢您的支持，星耀音乐将持续为您带来优质演出～', reply_time: '2025/8/18 15:00'},
        {comment_id: 2, user_id: 2, activity_id: 2, order_id: 'ORDER20250510141015456', content: '《如梦之梦》的舞台设计太惊艳了，胡歌的演技全程在线，8 小时的演出完全不枯燥！', score: 5, comment_time: '2025/7/28 9:30', like_count: 95, reply_content: '感谢您的认可，艺境话剧会继续打磨经典剧目～', reply_time: '2025/7/28 14:00'},
        {comment_id: 3, user_id: 3, activity_id: 3, order_id: 'ORDER20250601091020789', content: '国安主场氛围拉满，就是裁判判罚有点争议，整体观赛体验不错！', score: 4, comment_time: '2025/6/29 11:20', like_count: 67, reply_content: '感谢您的反馈，我们会持续优化赛事服务～', reply_time: '2025/6/29 16:00'},
        {comment_id: 4, user_id: 4, activity_id: 4, order_id: 'ORDER20250610120510101', content: '笑果脱口秀的段子很接地气，李诞的现场比综艺里更搞笑，就是场地有点小有点挤。', score: 4, comment_time: '2025/7/7 10:15', like_count: 42, reply_content: '感谢您的建议，我们会优先选择宽敞场馆～', reply_time: '2025/7/7 13:30'},
        {comment_id: 5, user_id: 10, activity_id: 4, order_id: 'ORDER20250601121030112', content: '第一次看脱口秀现场，全程笑到肚子疼，就是后排音效有点差，听不太清。', score: 3, comment_time: '2025/7/7 11:00', like_count: 23, reply_content: '抱歉给您带来不佳体验，我们会调整音响设备～', reply_time: '2025/7/7 14:00'},
        {comment_id: 6, user_id: 7, activity_id: 5, order_id: 'ORDER20250415090525134', content: '梵高沉浸式展览太震撼了，3D 投影还原得很逼真，就是人有点多，体验感打了点折扣。', score: 4, comment_time: '2025/5/2 8:40', like_count: 58, reply_content: '感谢您的反馈，我们会限流保障观展体验～', reply_time: '2025/5/2 12:00'},
        {comment_id: 7, user_id: 6, activity_id: 7, order_id: 'ORDER20250420091015156', content: '《冰雪奇缘》儿童剧太适合带娃看了，女儿全程超兴奋，舞台特效也很精美！', score: 5, comment_time: '2025/6/4 9:10', like_count: 76, reply_content: '感谢您的喜爱，童梦亲子会持续引进优质儿童剧～', reply_time: '2025/6/4 13:00'},
        {comment_id: 8, user_id: 6, activity_id: 7, order_id: 'ORDER20250420092005378', content: '儿童剧的互动环节设计得很好，就是演员台词有点小声，孩子听不太清楚。', score: 3, comment_time: '2025/6/4 10:00', like_count: 18, reply_content: '抱歉给您带来不便，我们会调整麦克风音量～', reply_time: '2025/6/4 14:00'},
        {comment_id: 9, user_id: 7, activity_id: 8, order_id: 'ORDER20250605090520178', content: '黄山旅游套票很划算，包含索道和讲解，导游小姐姐讲解得很专业，值得推荐！', score: 5, comment_time: '2025/7/2 11:30', like_count: 89, reply_content: '感谢您的支持，山水旅游会继续优化景区服务～', reply_time: '2025/7/2 15:00'},
        {comment_id: 10, user_id: 9, activity_id: 9, order_id: 'ORDER20250401101015190', content: '商业领袖峰会的嘉宾阵容很强大，分享的内容很有价值，就是会场餐饮有点一般。', score: 4, comment_time: '2025/5/22 9:20', like_count: 35, reply_content: '感谢您的反馈，我们会升级餐饮服务～', reply_time: '2025/5/22 12:00'},
        {comment_id: 11, user_id: 4, activity_id: 10, order_id: 'ORDER20250601120520212', content: '漫威电影 IMAX 厅的观影效果绝了，画面超清晰，音效也很震撼，值回票价！', score: 5, comment_time: '2025/6/17 10:00', like_count: 47, reply_content: '感谢您的认可，万达影城会持续提升观影体验～', reply_time: '2025/6/17 14:00'},
        {comment_id: 12, user_id: 10, activity_id: 10, order_id: 'ORDER20250601121030234', content: '普通厅的电影画质还可以，就是座椅有点旧，坐着不太舒服。', score: 3, comment_time: '2025/6/17 11:00', like_count: 12, reply_content: '抱歉给您带来不佳体验，我们会更换座椅～', reply_time: '2025/6/17 15:00'},
        {comment_id: 13, user_id: 1, activity_id: 12, order_id: 'ORDER20250505100520256', content: '李健演唱会突然取消，太让人失望了，退票流程也很繁琐，体验感极差！', score: 1, comment_time: '2025/6/11 9:00', like_count: 78, reply_content: '非常抱歉给您带来不便，因艺人行程问题取消，退票款项已加急处理～', reply_time: '2025/6/11 12:00'},
        {comment_id: 14, user_id: 3, activity_id: 12, order_id: 'ORDER20250505101030278', content: '期待了很久的李健演唱会被取消，平台就发了个通知，没有任何补偿，很不满意！', score: 2, comment_time: '2025/6/11 10:00', like_count: 62, reply_content: '抱歉让您失望，我们会为您发放 30 元无门槛券作为补偿～', reply_time: '2025/6/11 13:00'}
    ],
    
    venues: [
        {venue_id: 201, venue_name: '北京鸟巢国家体育场', city: '北京市', address: '朝阳区国家体育场南路 1 号', capacity: 91000, contact_phone: '010-84373000', intro: '2008 年北京奥运会主体育场，可举办大型演唱会、体育赛事，配备顶级音响与舞台设备，交通便利（地铁 8 号线奥体中心站）'},
        {venue_id: 202, venue_name: '上海大剧院', city: '上海市', address: '黄浦区人民大道 300 号', capacity: 2000, contact_phone: '021-63868686', intro: '上海地标性文化建筑，以话剧、歌剧、音乐会演出为主，内部设大剧场、中剧场、小剧场，声学效果一流'},
        {venue_id: 203, venue_name: '北京工人体育场', city: '北京市', address: '朝阳区工人体育场北路', capacity: 66000, contact_phone: '010-65016655', intro: '专业足球场，中超北京国安主场，可举办足球赛事、大型演唱会，看台视野开阔，配套餐饮设施完善'},
        {venue_id: 204, venue_name: '深圳保利剧院', city: '深圳市', address: '南山区文心五路 33 号', capacity: 1500, contact_phone: '0755-86371698', intro: '以话剧、脱口秀、小型音乐会为主的专业剧院，座椅舒适，舞台设备先进，周边商圈发达'},
        {venue_id: 205, venue_name: '成都当代美术馆', city: '成都市', address: '锦江区滨江东路 9 号', capacity: 5000, contact_phone: '028-86726500', intro: '现代化艺术展览场馆，主打沉浸式展览、艺术展映，配备恒温恒湿展柜，适合各类美术、科技展览'},
        {venue_id: 206, venue_name: '杭州奥体中心体育场', city: '杭州市', address: '萧山区钱江世纪城奥体街 199 号', capacity: 80000, contact_phone: '0571-82876666', intro: '杭州亚运会主体育场，昵称 "大莲花"，可举办音乐节、体育赛事，户外场地配套超大 LED 屏'},
        {venue_id: 207, venue_name: '广州少年宫剧场', city: '广州市', address: '越秀区东风西路 167 号', capacity: 800, contact_phone: '020-81361766', intro: '专注亲子、儿童剧演出的小型剧场，座椅高度适配儿童，场内设互动舞台，周边有亲子游乐设施'},
        {venue_id: 208, venue_name: '黄山风景区南大门游客中心', city: '黄山市', address: '黄山区汤口镇汤泉路 1 号', capacity: null, contact_phone: '0559-5561111', intro: '黄山风景区核心票务与接待中心，提供景区门票、索道票办理，配套停车场、导游服务，是黄山旅游的起点'},
        {venue_id: 209, venue_name: '上海国际会议中心', city: '上海市', address: '浦东新区滨江大道 2727 号', capacity: 3000, contact_phone: '021-50370000', intro: '高端商务会议、峰会举办场馆，设多个国际会议厅，配套五星级酒店、商务餐饮，江景视野极佳'},
        {venue_id: 210, venue_name: '北京万达影城 CBD 店 IMAX 厅', city: '北京市', address: '朝阳区建国路 93 号万达广场 B 座 5 层', capacity: 300, contact_phone: '010-59603399', intro: '北京知名影城，IMAX 厅配备超大银幕与杜比全景声，主打电影展映、首映礼，购票便捷，小吃部品类丰富'},
        {venue_id: 211, venue_name: '深圳湾体育中心', city: '深圳市', address: '南山区滨海大道 3001 号', capacity: 13000, contact_phone: '0755-85088888', intro: '专业体育场馆，主打乒乓球、篮球赛事，也可举办小型演唱会，场馆内设训练馆、体育用品店'},
        {venue_id: 212, venue_name: '南京奥林匹克体育中心体育馆', city: '南京市', address: '建邺区奥体大街 1 号', capacity: 13000, contact_phone: '025-86690500', intro: '南京奥体核心场馆，可举办演唱会、体育赛事，舞台搭建灵活，看台分为内场与看台，音响效果出色'}
    ],
    
    merchants: [
        {merchant_id: 101, merchant_name: '星耀音乐文化传播有限公司', merchant_type: '主办方', credit_code: '91110105MA00XXXXXX', contact_person: '张明', contact_phone: '13812345678', email: 'zhangming@xingyao.com', register_time: '2020/5/10 9:00', status: 1},
        {merchant_id: 102, merchant_name: '艺境话剧演出有限公司', merchant_type: '主办方', credit_code: '91310101MA01XXXXXX', contact_person: '李雪', contact_phone: '13987654321', email: 'lixue@artscape.com', register_time: '2018/8/15 14:00', status: 1},
        {merchant_id: 103, merchant_name: '巅峰体育赛事运营有限公司', merchant_type: '承办方', credit_code: '91440106MA02XXXXXX', contact_person: '王刚', contact_phone: '13722334455', email: 'wanggang@peaksports.com', register_time: '2019/3/20 10:00', status: 1},
        {merchant_id: 104, merchant_name: '笑果文化创意有限公司', merchant_type: '主办方', credit_code: '91440300MA03XXXXXX', contact_person: '王思', contact_phone: '13699887766', email: 'wangsi@xiaoguo.com', register_time: '2021/1/5 16:00', status: 1},
        {merchant_id: 105, merchant_name: '艺览天下展览策划有限公司', merchant_type: '承办方', credit_code: '91510107MA04XXXXXX', contact_person: '刘佳', contact_phone: '13566778899', email: 'liujia@artshow.com', register_time: '2017/12/10 8:00', status: 1},
        {merchant_id: 106, merchant_name: '草莓音乐节运营管理有限公司', merchant_type: '主办方', credit_code: '91330106MA05XXXXXX', contact_person: '陈宇', contact_phone: '13455667788', email: 'chenyu@strawberry.com', register_time: '2022/6/30 11:00', status: 1},
        {merchant_id: 107, merchant_name: '童梦亲子文化发展有限公司', merchant_type: '代理商', credit_code: '91440105MA06XXXXXX', contact_person: '赵琳', contact_phone: '13388990011', email: 'zhaolin@tongmeng.com', register_time: '2020/9/25 15:00', status: 1},
        {merchant_id: 108, merchant_name: '山水旅游景区管理有限公司', merchant_type: '代理商', credit_code: '91341000MA07XXXXXX', contact_person: '黄涛', contact_phone: '13277889900', email: 'huangtao@shanshui.com', register_time: '2016/7/18 9:00', status: 1},
        {merchant_id: 109, merchant_name: '商聚天下会议服务有限公司', merchant_type: '承办方', credit_code: '91310115MA08XXXXXX', contact_person: '周明', contact_phone: '13166778899', email: 'zhouming@shangju.com', register_time: '2019/11/8 13:00', status: 1},
        {merchant_id: 110, merchant_name: '万达电影股份有限公司', merchant_type: '代理商', credit_code: '91110000MA09XXXXXX', contact_person: '吴迪', contact_phone: '13055667788', email: 'wudi@wanda.com', register_time: '2015/4/22 10:00', status: 0}
    ],
    
    coupons: [
        {coupon_id: 1, coupon_name: '演唱会满 300 减 50 券', coupon_type: 0, discount_amount: 50, discount_rate: null, min_amount: 300, apply_type: '演唱会', issue_time: '2025/6/1 10:00', expire_time: '2025/8/31 23:59', total_quantity: 5000, remaining_quantity: 1280, status: 1},
        {coupon_id: 2, coupon_name: '体育赛事 9 折券', coupon_type: 1, discount_amount: null, discount_rate: 0.9, min_amount: 200, apply_type: '体育赛事', issue_time: '2025/5/15 9:00', expire_time: '2025/9/30 23:59', total_quantity: 3000, remaining_quantity: 850, status: 1},
        {coupon_id: 3, coupon_name: '脱口秀无门槛减 20 券', coupon_type: 2, discount_amount: 20, discount_rate: null, min_amount: 0, apply_type: '脱口秀', issue_time: '2025/6/10 12:00', expire_time: '2025/7/10 23:59', total_quantity: 2000, remaining_quantity: 0, status: 0},
        {coupon_id: 4, coupon_name: '话剧满 500 减 100 券', coupon_type: 0, discount_amount: 100, discount_rate: null, min_amount: 500, apply_type: '话剧', issue_time: '2025/4/20 8:00', expire_time: '2025/7/20 23:59', total_quantity: 1500, remaining_quantity: 320, status: 1},
        {coupon_id: 5, coupon_name: '音乐节 85 折券', coupon_type: 1, discount_amount: null, discount_rate: 0.85, min_amount: 300, apply_type: '音乐节', issue_time: '2025/7/1 10:00', expire_time: '2025/9/15 23:59', total_quantity: 2500, remaining_quantity: 1620, status: 1},
        {coupon_id: 6, coupon_name: '展览无门槛减 10 券', coupon_type: 2, discount_amount: 10, discount_rate: null, min_amount: 0, apply_type: '展览', issue_time: '2025/5/1 9:00', expire_time: '2025/8/31 23:59', total_quantity: 4000, remaining_quantity: 2150, status: 1},
        {coupon_id: 7, coupon_name: '亲子剧满 200 减 30 券', coupon_type: 0, discount_amount: 30, discount_rate: null, min_amount: 200, apply_type: '儿童剧', issue_time: '2025/4/10 10:00', expire_time: '2025/6/30 23:59', total_quantity: 1000, remaining_quantity: 0, status: 0},
        {coupon_id: 8, coupon_name: '景区门票 95 折券', coupon_type: 1, discount_amount: null, discount_rate: 0.95, min_amount: 100, apply_type: '景区门票', issue_time: '2025/6/5 8:00', expire_time: '2025/8/31 23:59', total_quantity: 3500, remaining_quantity: 1980, status: 1},
        {coupon_id: 9, coupon_name: '商务演出满 1000 减 200 券', coupon_type: 0, discount_amount: 200, discount_rate: null, min_amount: 1000, apply_type: '商务演出', issue_time: '2025/4/1 9:00', expire_time: '2025/5/31 23:59', total_quantity: 500, remaining_quantity: 120, status: 0},
        {coupon_id: 10, coupon_name: '电影票无门槛减 5 券', coupon_type: 2, discount_amount: 5, discount_rate: null, min_amount: 0, apply_type: '电影展映', issue_time: '2025/6/1 12:00', expire_time: '2025/6/30 23:59', total_quantity: 6000, remaining_quantity: 890, status: 1},
        {coupon_id: 11, coupon_name: '全品类满 1000 减 150 券', coupon_type: 0, discount_amount: 150, discount_rate: null, min_amount: 1000, apply_type: '演唱会，体育赛事，商务演出', issue_time: '2025/5/20 10:00', expire_time: '2025/9/30 23:59', total_quantity: 2000, remaining_quantity: 450, status: 1},
        {coupon_id: 12, coupon_name: '钻石会员专属 8 折券', coupon_type: 1, discount_amount: null, discount_rate: 0.8, min_amount: 500, apply_type: '全品类', issue_time: '2025/1/1 9:00', expire_time: '2025/12/31 23:59', total_quantity: 1000, remaining_quantity: 320, status: 1},
        {coupon_id: 13, coupon_name: '金卡会员满 500 减 80 券', coupon_type: 0, discount_amount: 80, discount_rate: null, min_amount: 500, apply_type: '演唱会，话剧，音乐节', issue_time: '2025/2/15 10:00', expire_time: '2025/12/31 23:59', total_quantity: 1500, remaining_quantity: 680, status: 1},
        {coupon_id: 14, coupon_name: '银卡会员 95 折券', coupon_type: 1, discount_amount: null, discount_rate: 0.95, min_amount: 200, apply_type: '脱口秀，展览，电影展映', issue_time: '2025/3/1 9:00', expire_time: '2025/12/31 23:59', total_quantity: 2000, remaining_quantity: 920, status: 1},
        {coupon_id: 15, coupon_name: '新用户无门槛减 30 券', coupon_type: 2, discount_amount: 30, discount_rate: null, min_amount: 0, apply_type: '全品类', issue_time: '2025/1/1 10:00', expire_time: '2025/6/30 23:59', total_quantity: 8000, remaining_quantity: 0, status: 0}
    ],
    
    userCoupons: [
        {relation_id: 1, user_id: 1, coupon_id: 1, receive_time: '2025/6/1 10:05', use_status: 1, order_id: 'ORDER20250620100520123'},
        {relation_id: 2, user_id: 1, coupon_id: 12, receive_time: '2025/1/2 9:10', use_status: 0, order_id: null},
        {relation_id: 3, user_id: 1, coupon_id: 13, receive_time: '2025/2/16 10:20', use_status: 1, order_id: 'ORDER20250620100520123'},
        {relation_id: 4, user_id: 1, coupon_id: 12, receive_time: '2025/5/6 10:00', use_status: 2, order_id: null},
        {relation_id: 5, user_id: 2, coupon_id: 4, receive_time: '2025/4/20 8:10', use_status: 1, order_id: 'ORDER20250510141015456'},
        {relation_id: 6, user_id: 2, coupon_id: 14, receive_time: '2025/3/2 9:30', use_status: 0, order_id: null},
        {relation_id: 7, user_id: 2, coupon_id: 3, receive_time: '2025/6/10 12:05', use_status: 2, order_id: null},
        {relation_id: 8, user_id: 2, coupon_id: 1, receive_time: '2025/6/20 9:00', use_status: 0, order_id: null},
        {relation_id: 9, user_id: 3, coupon_id: 2, receive_time: '2025/5/15 9:05', use_status: 1, order_id: 'ORDER20250601091020789'},
        {relation_id: 10, user_id: 3, coupon_id: 12, receive_time: '2025/1/5 10:15', use_status: 1, order_id: 'ORDER20250601091020789'},
        {relation_id: 11, user_id: 3, coupon_id: 11, receive_time: '2025/5/20 10:10', use_status: 0, order_id: null},
        {relation_id: 12, user_id: 3, coupon_id: 15, receive_time: '2025/1/1 11:00', use_status: 2, order_id: null},
        {relation_id: 13, user_id: 4, coupon_id: 3, receive_time: '2025/6/10 12:05', use_status: 1, order_id: 'ORDER20250610120510101'},
        {relation_id: 14, user_id: 4, coupon_id: 10, receive_time: '2025/6/1 12:05', use_status: 1, order_id: 'ORDER20250601120520212'},
        {relation_id: 15, user_id: 4, coupon_id: 14, receive_time: '2025/3/5 9:20', use_status: 0, order_id: null},
        {relation_id: 16, user_id: 4, coupon_id: 6, receive_time: '2025/5/1 9:10', use_status: 0, order_id: null},
        {relation_id: 17, user_id: 5, coupon_id: 15, receive_time: '2025/1/2 10:00', use_status: 2, order_id: null},
        {relation_id: 18, user_id: 5, coupon_id: 3, receive_time: '2025/6/10 12:10', use_status: 2, order_id: null},
        {relation_id: 19, user_id: 6, coupon_id: 7, receive_time: '2025/4/10 10:05', use_status: 1, order_id: 'ORDER20250420091015156'},
        {relation_id: 20, user_id: 6, coupon_id: 13, receive_time: '2025/2/18 10:30', use_status: 0, order_id: null},
        {relation_id: 21, user_id: 6, coupon_id: 6, receive_time: '2025/5/1 9:15', use_status: 0, order_id: null},
        {relation_id: 22, user_id: 6, coupon_id: 10, receive_time: '2025/6/1 12:10', use_status: 0, order_id: null},
        {relation_id: 23, user_id: 7, coupon_id: 8, receive_time: '2025/6/5 8:05', use_status: 1, order_id: 'ORDER20250605090520178'},
        {relation_id: 24, user_id: 7, coupon_id: 12, receive_time: '2025/1/3 10:20', use_status: 1, order_id: 'ORDER20250605090520178'},
        {relation_id: 25, user_id: 7, coupon_id: 6, receive_time: '2025/5/1 9:20', use_status: 1, order_id: 'ORDER20250415090525134'},
        {relation_id: 26, user_id: 7, coupon_id: 11, receive_time: '2025/5/20 10:15', use_status: 0, order_id: null},
        {relation_id: 27, user_id: 8, coupon_id: 5, receive_time: '2025/7/1 10:05', use_status: 0, order_id: null},
        {relation_id: 28, user_id: 8, coupon_id: 14, receive_time: '2025/3/5 9:35', use_status: 0, order_id: null},
        {relation_id: 29, user_id: 8, coupon_id: 1, receive_time: '2025/6/1 10:10', use_status: 0, order_id: null},
        {relation_id: 30, user_id: 8, coupon_id: 3, receive_time: '2025/6/10 12:10', use_status: 2, order_id: null},
        {relation_id: 31, user_id: 9, coupon_id: 9, receive_time: '2025/4/1 9:05', use_status: 1, order_id: 'ORDER20250401101015190'},
        {relation_id: 32, user_id: 9, coupon_id: 12, receive_time: '2025/1/10 10:25', use_status: 1, order_id: 'ORDER20250401101015190'},
        {relation_id: 33, user_id: 9, coupon_id: 2, receive_time: '2025/5/15 9:10', use_status: 1, order_id: 'ORDER20250601091540312'},
        {relation_id: 34, user_id: 9, coupon_id: 11, receive_time: '2025/5/20 10:20', use_status: 0, order_id: null},
        {relation_id: 35, user_id: 10, coupon_id: 10, receive_time: '2025/6/1 12:05', use_status: 1, order_id: 'ORDER20250601121030234'},
        {relation_id: 36, user_id: 10, coupon_id: 3, receive_time: '2025/6/10 12:10', use_status: 1, order_id: 'ORDER20250601121030112'},
        {relation_id: 37, user_id: 10, coupon_id: 15, receive_time: '2025/1/1 11:05', use_status: 2, order_id: null},
        {relation_id: 38, user_id: 10, coupon_id: 6, receive_time: '2025/5/1 9:25', use_status: 0, order_id: null}
    ],
    
    orderTickets: [
        {relation_id: 1, order_id: 'ORDER20250620100520123', ticket_id: 1},
        {relation_id: 2, order_id: 'ORDER20250620100520123', ticket_id: 2},
        {relation_id: 3, order_id: 'ORDER20250510141015456', ticket_id: 5},
        {relation_id: 4, order_id: 'ORDER20250510141015456', ticket_id: 6},
        {relation_id: 5, order_id: 'ORDER20250601091020789', ticket_id: 8},
        {relation_id: 6, order_id: 'ORDER20250610120510101', ticket_id: 11},
        {relation_id: 7, order_id: 'ORDER20250601121030112', ticket_id: 13},
        {relation_id: 8, order_id: 'ORDER20250415090525134', ticket_id: 15},
        {relation_id: 9, order_id: 'ORDER20250420091015156', ticket_id: 18},
        {relation_id: 10, order_id: 'ORDER20250420091015156', ticket_id: 19},
        {relation_id: 11, order_id: 'ORDER20250605090520178', ticket_id: 21},
        {relation_id: 12, order_id: 'ORDER20250401101015190', ticket_id: 23},
        {relation_id: 13, order_id: 'ORDER20250401101015190', ticket_id: 24},
        {relation_id: 14, order_id: 'ORDER20250601120520212', ticket_id: 25},
        {relation_id: 15, order_id: 'ORDER20250601121030234', ticket_id: 26},
        {relation_id: 16, order_id: 'ORDER20250505100520256', ticket_id: 29},
        {relation_id: 17, order_id: 'ORDER20250505101030278', ticket_id: 30},
        {relation_id: 18, order_id: 'ORDER20250620101020290', ticket_id: 3},
        {relation_id: 19, order_id: 'ORDER20250601091540312', ticket_id: 10},
        {relation_id: 20, order_id: 'ORDER20250715100520334', ticket_id: 16},
        {relation_id: 21, order_id: 'ORDER20250801101020356', ticket_id: 27},
        {relation_id: 22, order_id: 'ORDER20250420092005378', ticket_id: 20},
        {relation_id: 23, order_id: 'ORDER20250605091020390', ticket_id: 22},
        {relation_id: 24, order_id: 'ORDER20250510142005412', ticket_id: 7}
    ]
};

// 图片映射 - 活动名称到图片文件名
const activityImageMap = {
    '周杰伦 2025 世界巡回演唱会 - 北京鸟巢站': '周杰伦 2025 世界巡回演唱会 - 北京鸟巢站.jpg',
    '《如梦之梦》话剧巡演 - 上海大剧院站': '《如梦之梦》话剧巡演 - 上海大剧院站.jpg',
    '2025 中超联赛北京国安 VS 广州恒大': '2025 中超联赛北京国安 VS 广州恒大.jpg',
    '「笑果脱口秀」年度巡演 - 深圳站': '「笑果脱口秀」年度巡演 - 深圳站.jpg',
    '「梵高星空」沉浸式艺术展览 - 成都站': '「梵高星空」沉浸式艺术展览 - 成都站.jpg',
    '2025 草莓音乐节 - 杭州站': '2025 草莓音乐节 - 杭州站.jpg',
    '《冰雪奇缘》儿童剧 - 广州少年宫站': '《冰雪奇缘》儿童剧 - 广州少年宫站.jpg',
    '2025 黄山风景区深度游套票 - 暑期专场': '2025 黄山风景区深度游套票 - 暑期专场.jpg',
    '2025 商业领袖峰会 - 上海国际会议中心站': '2025 商业领袖峰会 - 上海国际会议中心站.jpg',
    '「漫威宇宙」电影展映周 - 北京万达影城': '「漫威宇宙」电影展映周 - 北京万达影城.jpg',
    '2025 乒乓球世界杯决赛 - 深圳湾体育中心': 'f3cffd44b03464c560b2a534bb6999d7.jpg',
    '「李健」民谣演唱会 - 南京奥体中心站': '「李健」民谣演唱会 - 南京奥体中心站.jpg'
};

// 获取活动图片路径
function getActivityImage(activityName) {
    const imageName = activityImageMap[activityName] || 'f3cffd44b03464c560b2a534bb6999d7.jpg';
    return `图片/${imageName}`;
}

