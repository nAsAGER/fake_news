const BLOG_SETUP = {
  siteTitle: "矿脉侧写",
  tagline: "面向采动现场的安全与调度日志",
  footer: {
    name: "PitWatch Ops",
    tagline: "面向采场的安全与智能调度档案",
  },
  email: "ops@pitwatch.example.com",
  social: {
    label: "@PitWatchOps",
    url: "https://example.com/pitwatch",
  },
  author: {
    name: "赵弋",
    role: "矿山智能化工程师",
    avatar: "images/头像.png",
  },
  hero: {
    title: "OTW 驾驶辅助预警系统上线纪要",
    summary:
      "OTW 车载终端、4G/北斗定位与监控平台完成联调，调度台得以实时收敛速度、身份、地形三条安全底线。这份记录整理了系统架构与一线场景。",
    date: "2025-09-30",
    dateLabel: "2025 年 9 月 30 日",
  },
  heroHighlight: {
    label: "系统档案",
    title: "OTW 驾驶辅助预警系统",
    body: "车载终端、4G 边缘网络与监控平台组成闭环，覆盖速度、身份与排土场三条底线。",
    timestamp: "9 月 30 日 21:30",
    target: "白音华蒙东",
    linkLabel: "查看部署记录 →",
    linkHref: "article.html",
  },
  about: {
    intro:
      "过去十年，我负责露天煤矿调度系统改造——把散落在车队、排土场、边坡监测站的感知链路重新接入，确保任何一条异常都能在调度台点亮。",
    focus: [
      "露天矿车辆调度与驾驶辅助一体化",
      "排土场电子围栏与姿态监测",
      "驾驶行为识别与疲劳预警",
    ],
    timeline: [
      { when: "2025.09", text: "OTW V3.2 在白音华蒙东露天矿上线，全部调度屏实时联动。" },
      { when: "2025.07", text: "排土场电子围栏与侧撞预警模块完成二次迭代。" },
      { when: "2025.05", text: "完成边坡位移监测数据接入调度平台的验证。" },
    ],
  },
};

const FEATURED_POSTS = [
  {
    title: "OTW 车辆驾驶辅助预警系统落地记",
    date: "2025-09-30",
    dateLabel: "2025.09.30",
    summary: "记录 OTW 系统在矿卡车队的硬件部署、十项联动功能与人员定位协同。",
    link: "article2.html",
    tag: "系统部署",
    metricLabel: "监控终端",
    metricValue: "148 台",
  },
  {
    title: "露天矿车辆驾驶辅助预警系统：为矿山安全装上“智慧之眼”",
    date: "2025-09-20",
    dateLabel: "2025.09.20",
    summary: "聚焦白音华蒙东露天矿的夜班调度案例，梳理 OTW 系统的十项预警功能。",
    link: "article.html",
    tag: "案例更新",
    metricLabel: "告警字段",
    metricValue: "10 项",
  },
  {
    title: "排土场防侧撞策略复盘",
    date: "2025-08-10",
    dateLabel: "2025.08.10",
    summary: "自卸车进入排土场即触发电子围栏，叠加坡面雷达回传的姿态数据，避免高位侧翻。",
    link: "article.html",
    tag: "防护策略",
    metricLabel: "触发预警",
    metricValue: "8 次",
  },
];

const NOTES = [
  "22:17 | 43# 车队在西帮边坡 3km 处触发超速，电子围栏自动降级巡航。",
  "22:21 | 人车验证拒绝 1 次，驾驶员未通过面部识别，车辆保持锁止。",
  "22:33 | 调度请求回放 7 号自卸车 15 分钟轨迹，数据在 3 秒内到达。",
  "22:41 | 排土场防侧撞策略开启，提示当前坡面湿滑，建议限速 18km/h。",
];

const SAMPLE_ARTICLE = {
  title: "露天煤矿车辆驾驶辅助预警系统：为矿山安全装上“智慧之眼”",
  excerpt:
    "在白音华蒙东露天煤矿的夜班调度台，我们将 OTW 驾驶辅助预警系统接入车载终端和 4G 边缘网络，尝试把“速度、身份、地形”三条底线收束到一块屏幕上。",
  date: "2025-09-20",
  dateLabel: "2025 年 9 月 20 日",
  cover: "images/2.png",
  coverCaption: "四屏联动界面把车辆状态、司机行为与排土场姿态并列呈现。",
  blocks: [
    {
      type: "text",
      content:
        "露天煤矿的作业窗口跨越昼夜，重型车辆穿梭在 40 多公里的运输线路上，传统的人工巡检无法同时盯住速度、身份和排土场边界。",
    },
    { type: "heading", content: "系统架构：三位一体的智能联动" },
    {
      type: "image",
      src: "images/1.png",
      alt: "系统架构示意图",
      caption: "OTW 架构由车载终端、边缘网络与调度平台构成闭环。",
    },
    {
      type: "text",
      content:
        "系统由车载终端、4G 边缘网络和监控平台三部分组成，实现车载屏、大数据平台、APP 与 PC 四屏联动。车辆状态在车载主机采集，经 4G 网络传输到服务器，并在调度平台与移动端实时可视化，管理者随时掌握现场动态。",
    },
    {
      type: "image",
      src: "images/2.png",
      alt: "调度屏联动界面",
      caption: "调度人员可跨端查看实时数据、轨迹与报警回执。",
    },
    { type: "heading", content: "十大功能：全方位守护矿山作业安全" },
    {
      type: "text",
      content:
        "围绕矿山车辆的全场景作业，系统打造了 10 项预警功能，逐一解决参数失控、身份不明、越界失察等痛点。",
    },
    {
      type: "image",
      src: "images/3.png",
      alt: "功能看板",
      caption: "十项功能覆盖行驶、作业、调度三条链路。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "01",
          title: "超速报警",
          body: "当速度超过 40km/h，系统立即告警并上传位置、状态，自动打印超速票据，确保行驶始终落在受控区间。",
        },
        {
          label: "02",
          title: "人车验证",
          body: "车辆启动前完成面部识别，若驾驶员不在合格名单中则立刻锁止，实现“驾驶身份关”前移到点火之前。",
        },
      ],
    },
    {
      type: "image",
      src: "images/4.png",
      alt: "人车验证界面",
      caption: "驾驶员刷脸通过后才会解锁车辆控制权限。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "03",
          title: "前车碰撞预警",
          body: "系统实时计算两车安全距离，一旦预测到碰撞风险便提前给出声光提示，为驾驶员争取反应时间。",
        },
        {
          label: "04",
          title: "疲劳驾驶识别",
          body: "AI 摄像头分析眼帘与打哈欠等表情，当车速超过 10km/h 出现疲劳迹象时，立刻上报并在驾驶室提示休整。",
        },
      ],
    },
    {
      type: "image",
      src: "images/5.png",
      alt: "疲劳驾驶提示",
      caption: "疲劳行为被捕捉并同步至监管平台。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "05",
          title: "接打电话检测",
          body: "监测驾驶员接打电话的分心行为，发现后立即报警并上传记录，减少注意力被占用导致的误操作。",
        },
        {
          label: "06",
          title: "在线设备数量",
          body: "统计运输车、采掘设备及辅助装备实时在线情况，为调度与维保提供精确的基线数据。",
        },
      ],
    },
    {
      type: "image",
      src: "images/6.png",
      alt: "在线设备看板",
      caption: "在线数量面板提供各类设备的动态清单。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "07",
          title: "车辆定位",
          body: "依托 GPS 在矿区电子地图上落点，管理人员可以随时查看车辆分布，调整行车路线与装卸点。",
        },
        {
          label: "08",
          title: "轨迹回放",
          body: "记录每一段行驶轨迹，随时回放车辆的历史路线，为事故分析和作业优化提供依据。",
        },
      ],
    },
    {
      type: "image",
      src: "images/7.png",
      alt: "轨迹回放界面",
      caption: "轨迹回放帮助调度方复核驾驶路径。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "09",
          title: "电子围栏",
          body: "在模拟电子地图上划定虚拟边界，车辆进入非授权区域即刻报警，防止误入危险地带。",
        },
        {
          label: "10",
          title: "排土场防侧撞",
          body: "自卸车进入排土场后自动开启防侧撞策略，与坡面数据联动，避免大吨位车辆在边缘失稳。",
        },
      ],
    },
    {
      type: "image",
      src: "images/8.png",
      alt: "排土场防侧撞",
      caption: "排土场区域启用专属的防侧撞控制策略。",
    },
    { type: "heading", content: "应用价值：从安全到管理的全面升级" },
    {
      type: "text",
      content:
        "在内蒙古白音华蒙东等露天矿区的实战中，系统不仅守住安全底线，也让调度数据从“经验驱动”转向“数据驱动”。",
    },
    {
      type: "attachment",
      title: "安全层面",
      content:
        "多维度的预警使超速、碰撞、疲劳驾驶等事故概率显著下降，驾驶员与矿山资产都得到了更主动的保护。",
      src: "images/附件1.jpg",
      alt: "安全层面的应用场景",
      caption: "驾驶端即时收到超速、疲劳等预警。",
    },
    {
      type: "attachment",
      title: "管理层面",
      content:
        "实时监控、轨迹回放、设备统计让调度人员对产能心中有数，协同维修、安监等部门快速响应。",
      src: "images/附件2.jpg",
      alt: "管理层数据看板",
      caption: "调度大屏与移动端同步呈现监管数据。",
    },
    {
      type: "attachment",
      title: "未来展望",
      content:
        "随着更多智能装备接入，系统还将融合边坡监测和无人驾驶数据，为露天煤矿的智慧化转型持续赋能。",
      src: "images/附件3.jpg",
      alt: "未来扩展示意",
      caption: "OTW 将继续与新的感知设备对接，扩展预警维度。",
    },
    {
      type: "text",
      content:
        "露天煤矿车辆驾驶辅助预警系统正在让现场管理从零散经验跃升为可追溯的数据体系，这就是我们记录它的理由。",
    },
  ],
  suggestions: [
    {
      title: "OTW 车辆驾驶辅助预警系统落地记",
      description: "拆解全部十项功能与人员定位模块，覆盖硬件到软件的全链路。",
      link: "article2.html",
    },
    {
      title: "边坡位移监测闭环",
      description: "将 GNSS 与激光雷达接入调度台，形成边坡健康度评分。",
      link: "article.html",
    },
  ],
};

const ARTICLE_TWO = {
  title: "OTW 车辆驾驶辅助预警系统：矿卡调度的全域感知底座",
  excerpt:
    "这一次，我们把 OTW 系统的硬件终端、4G/北斗定位与监控平台做成可组合积木，目标是在矿山驾驶决策里同步“速度、身份、地形”三类关键量。",
  date: "2025-09-30",
  dateLabel: "2025 年 9 月 30 日",
  cover: "images/2-1.png",
  coverCaption: "OTW 车载终端与监管平台的联动界面。",
  blocks: [
    {
      type: "text",
      content:
        "OTW 系统由车载终端、4G 网络与监控平台三部分组成，内置高速处理器、嵌入式系统与 H.265/H.264 编解码技术，配合 GPS/北斗定位与抗震结构，让硬件可以稳定安放在重载矿卡上。",
    },
    {
      type: "image",
      src: "images/2-2.png",
      alt: "系统组件示意",
      caption: "终端、监管平台与“矿安助手”APP 构成前后端闭环。",
    },
    { type: "heading", content: "十项功能：用数据守住驾驶底线" },
    {
      type: "text",
      content:
        "十项功能围绕速度、人车身份、车辆分布与排土场安全展开，我们把它拆成“大数据六项 + 电子地图四项”，调度员可以在一个界面里查看所有态势。",
    },
    {
      type: "feature-grid",
      items: [
        {
          label: "01",
          title: "超速报警",
          body: "实时测速，超过 38km/h 即语音提示，40km/h 且持续 10s 会上传调度室并打印罚单。",
        },
        {
          label: "02",
          title: "前车碰撞预警",
          body: "分析相对碰撞时间，低于 1.7s 时语音提醒，避免追尾。",
        },
        {
          label: "03",
          title: "疲劳驾驶识别",
          body: "当车速高于 10km/h 且出现闭眼/打哈欠 3s 以上，抓拍 10s 视频上报。",
        },
        {
          label: "04",
          title: "接打电话检测",
          body: "识别驾驶员接打手机动作并语音提示“请勿拨打手机”。",
        },
        {
          label: "05",
          title: "人车验证",
          body: "车辆点火即刷脸，比对培训合格名单，不匹配直接报警锁车。",
        },
        {
          label: "06",
          title: "在线设备数量",
          body: "实时统计运输车、采掘设备、辅助车等五大类装备在线数。",
        },
      ],
    },
    {
      type: "image",
      src: "images/2-3.png",
      alt: "超速报警界面",
      caption: "调度平台实时显示超速字段与打印记录。",
    },
    {
      type: "image",
      src: "images/2-4.png",
      alt: "前车碰撞提醒",
      caption: "基于视频分析的前车碰撞时间预测。",
    },
    {
      type: "image",
      src: "images/2-5.png",
      alt: "疲劳识别界面",
      caption: "疲劳驾驶抓拍 10 秒视频与截图，自动上传后台。",
    },
    {
      type: "image",
      src: "images/2-6.png",
      alt: "驾驶状态细节",
      caption: "结合眼帘、打哈欠等特征判定疲劳级别。",
    },
    {
      type: "image",
      src: "images/2-7.png",
      alt: "接打电话检测",
      caption: "检测到驾驶员持机动作后立即语音提示。",
    },
    {
      type: "image",
      src: "images/2-8.png",
      alt: "人车验证界面",
      caption: "刷脸通过后才允许车辆离开发车线。",
    },
    {
      type: "text",
      content:
        "在线设备统计部分把五大类装备打包成可视化清单：公司层可查看子单位评级及违规总数，现场单位则掌握自己车队的在线量，为调度与检修提供事实依据。",
    },
    {
      type: "image",
      src: "images/2-9.png",
      alt: "在线设备统计图",
      caption: "调度端查看五大类设备的实时在线数量与违规分布。",
    },
    {
      type: "image",
      src: "images/2-10.png",
      alt: "设备评级面板",
      caption: "按单位输出评级状态与累计违规次数。",
    },
    {
      type: "text",
      content:
        "手机端“矿安助手”同步在线清单与告警，管理者可以脱离值班室快速巡查。动态报表将实时数据以表格方式呈现，支持按标段、车辆类型自定义查询。",
    },
    {
      type: "image",
      src: "images/2-11.png",
      alt: "手机端界面",
      caption: "移动端查看实时车辆数与关键提醒。",
    },
    {
      type: "image",
      src: "images/2-12.png",
      alt: "动态报表查询栏",
      caption: "按标段或车辆类型过滤在线作业车辆。",
    },
    {
      type: "image",
      src: "images/2-13.png",
      alt: "车辆类型分布",
      caption: "展示所选标段的车辆类型与在线情况。",
    },
    {
      type: "image",
      src: "images/2-14.png",
      alt: "在线车辆列表",
      caption: "对每台车辆的在线状态与工况进行明细记录。",
    },
    { type: "heading", content: "电子地图联动的四项功能" },
    {
      type: "text",
      content:
        "在矿山模拟电子地图上，我们扩展了定位、轨迹、电子围栏与智能防侧撞四项能力，让调度台从宏观看清车辆、从微观锁定风险。",
    },
    {
      type: "image",
      src: "images/2-15.png",
      alt: "车辆定位画面",
      caption: "矿区电子地图实时打点每一台车辆的位置。",
    },
    {
      type: "text",
      content:
        "轨迹回放记录每一次行驶路径，检查车辆是否按作业计划执行，帮助事故追溯与路线优化。",
    },
    {
      type: "image",
      src: "images/2-16.png",
      alt: "轨迹回放界面",
      caption: "可选择车辆和时间段查看完整行驶轨迹。",
    },
    {
      type: "text",
      content:
        "电子围栏与防侧撞策略依附在地图上：车辆越界即报警，自卸车进入排土场自动打开防侧撞提示，提醒保持侧向距离。",
    },
    {
      type: "image",
      src: "images/2-17.png",
      alt: "电子围栏报警",
      caption: "进入非授权区域立即触发越界警示。",
    },
    {
      type: "image",
      src: "images/2-18.png",
      alt: "智能防侧撞界面",
      caption: "排土场区域自动启用防侧撞策略，提示危险区。",
    },
    { type: "heading", content: "远程调度与语音联动" },
    {
      type: "text",
      content:
        "平台支持远程对讲、监听以及 TTS 文字播报，调度员可以批量向在线车辆发布指令。同时提供多路视频查看、轨迹查询与里程统计，按权限划分不同层级的可视内容。",
    },
    { type: "heading", content: "人员定位系统" },
    {
      type: "text",
      content:
        "矿山人员定位系统基于北斗与无线通信技术，实现井下/露天的实时定位、安全监管，实现实时定位、轨迹追踪、区域报警与人车协同四大子功能。",
    },
    {
      type: "image",
      src: "images/2-19.png",
      alt: "人员定位界面",
      caption: "实时显示人员在区域内的坐标与状态。",
    },
    {
      type: "image",
      src: "images/2-20.png",
      alt: "人员地图总览",
      caption: "在电子地图上查看多区域的人员分布。",
    },
    {
      type: "text",
      content:
        "轨迹追踪模块记录人员移动路线，可随时回放历史轨迹，确保任何一段行动都能被追溯。",
    },
    {
      type: "image",
      src: "images/2-21.png",
      alt: "人员轨迹回放",
      caption: "按时间轴回放人员的完整移动路径。",
    },
    {
      type: "text",
      content:
        "区域报警在人员进入禁区或停留超时后立即告警，人车协同模块则把人员位置与车辆定位绑定，方便调度统一管理。",
    },
    {
      type: "image",
      src: "images/2-22.png",
      alt: "区域报警示意",
      caption: "禁入区域触发高优先级提醒。",
    },
    {
      type: "image",
      src: "images/2-23.png",
      alt: "人车协同界面",
      caption: "人员上车后，轨迹与车辆信息实现绑定显示。",
    },
  ],
  suggestions: [
    {
      title: "露天矿车辆驾驶辅助预警系统：智慧之眼",
      description: "聚焦白音华蒙东露天矿夜班的 OTW 工况复盘。",
      link: "article.html",
    },
    {
      title: "排土场防侧撞策略复盘",
      description: "继续延展 OTW 系统在排土场的侧撞保护策略。",
      link: "article.html",
    },
  ],
};

const CONTACT = {
  email: "ops@pitwatch.example.com",
  emailButtonLabel: "邮件联络",
  socialLabel: "@PitWatchOps",
  socialButtonLabel: "关注频道",
  socialUrl: "https://example.com/pitwatch",
};

const select = (selector) => document.querySelector(selector);

const fillText = (selectors, value) => {
  if (!value) return;
  selectors.forEach((selector) => {
    const node = select(selector);
    if (node) node.textContent = value;
  });
};

const fillAttr = (selectors, attr, value) => {
  if (!value) return;
  selectors.forEach((selector) => {
    const node = select(selector);
    if (node) node.setAttribute(attr, value);
  });
};

const renderHero = () => {
  if (!select("#hero-title")) return;
  fillText(["#hero-title"], BLOG_SETUP.hero.title);
  fillText(["#hero-summary"], BLOG_SETUP.hero.summary);
  fillText(["#hero-date"], BLOG_SETUP.hero.dateLabel);
  fillAttr(["#hero-date"], "datetime", BLOG_SETUP.hero.date);

  fillText(["#hero-card-label"], BLOG_SETUP.heroHighlight.label);
  fillText(["#hero-card-title"], BLOG_SETUP.heroHighlight.title);
  fillText(["#hero-card-body"], BLOG_SETUP.heroHighlight.body);
  fillText(["#hero-card-timestamp"], BLOG_SETUP.heroHighlight.timestamp);
  fillText(["#hero-card-target"], BLOG_SETUP.heroHighlight.target);

  const heroLink = select("#hero-card-link");
  if (heroLink) {
    heroLink.href = BLOG_SETUP.heroHighlight.linkHref ?? heroLink.href;
    heroLink.textContent = BLOG_SETUP.heroHighlight.linkLabel ?? heroLink.textContent;
  }
};

const renderFeaturedPosts = () => {
  const container = select("#featured-posts");
  if (!container) return;
  if (!FEATURED_POSTS.length) {
    container.innerHTML =
      '<p class="muted">还没有记录，去 <code>FEATURED_POSTS</code> 添加条目吧。</p>';
    return;
  }

  container.innerHTML = FEATURED_POSTS.map((post) => {
    const date = post.dateLabel ?? post.date ?? "";
    const metric = post.metricLabel
      ? `<span class="metric">${post.metricLabel}: ${post.metricValue ?? ""}</span>`
      : "";
    return `
      <article class="post-card">
        <span class="post-tag">${post.tag ?? "现场速记"}</span>
        <h3>${post.title}</h3>
        <p>${post.summary ?? ""}</p>
        <div class="post-meta">
          <time datetime="${post.date ?? ""}">${date}</time>
          ${metric}
        </div>
        <a class="text-link" href="${post.link ?? "#"}">查看记录 →</a>
      </article>
    `;
  }).join("");
};

const renderNotes = () => {
  const list = select("#note-list");
  if (!list || !Array.isArray(NOTES)) return;
  list.innerHTML = NOTES.map((note) => `<li>${note}</li>`).join("");
};

const blockToHTML = (block) => {
  if (!block) return "";
  switch (block.type) {
    case "text":
      return `<p>${block.content}</p>`;
    case "heading":
      return `<h2 class="subheading">${block.content}</h2>`;
    case "image":
      return `
        <figure class="post-figure">
          <img src="${block.src}" alt="${block.alt ?? ""}" />
          <figcaption>${block.caption ?? ""}</figcaption>
        </figure>
      `;
    case "feature-grid":
      return `
        <div class="feature-grid">
          ${block.items
            .map(
              (item) => `
                <div class="feature-card">
                  <strong>${item.label ?? ""}</strong>
                  <h3>${item.title ?? ""}</h3>
                  <p>${item.body ?? ""}</p>
                </div>
              `
            )
            .join("")}
        </div>
      `;
    case "attachment":
      return `
        <article class="attachment-card">
          <figure>
            <img src="${block.src}" alt="${block.alt ?? ""}" />
          </figure>
          <div class="attachment-content">
            <h4>${block.title ?? ""}</h4>
            <p>${block.content ?? ""}</p>
            <p class="muted">${block.caption ?? ""}</p>
          </div>
        </article>
      `;
    default:
      return "";
  }
};

const renderArticle = () => {
  if (!select("#article-title")) return;
  const articleKey = document.body?.dataset?.article;
  const articleData = articleKey === "article2" ? ARTICLE_TWO : SAMPLE_ARTICLE;

  fillText(["#article-title"], articleData.title);
  fillText(["#article-excerpt"], articleData.excerpt);
  fillText(["#article-date"], articleData.dateLabel);
  fillAttr(["#article-date"], "datetime", articleData.date);
  fillAttr(["#article-cover"], "src", articleData.cover);
  fillAttr(["#article-cover"], "alt", articleData.coverCaption);
  fillText(["#article-cover-caption"], articleData.coverCaption);

  const body = select("#article-body");
  if (body) {
    body.innerHTML = articleData.blocks.map(blockToHTML).join("");
  }

  const suggestionList = select("#article-suggestions");
  if (suggestionList) {
    suggestionList.innerHTML = articleData.suggestions
      .map(
        (item) => `
        <li>
          <a href="${item.link ?? "#"}">${item.title}</a>
          <p>${item.description ?? ""}</p>
        </li>`
      )
      .join("");
  }
};

const renderAbout = () => {
  if (!select(".about-main")) {
    updateContactLinks();
    return;
  }

  fillText(["#about-intro"], BLOG_SETUP.about.intro);

  const focusList = select("#about-focus-list");
  if (focusList) {
    focusList.innerHTML = BLOG_SETUP.about.focus
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  const timeline = select("#timeline");
  if (timeline) {
    timeline.innerHTML = BLOG_SETUP.about.timeline
      .map(
        (item) => `
        <li>
          <span class="timeline-date">${item.when}</span>
          <p>${item.text}</p>
        </li>`
      )
      .join("");
  }

  updateContactLinks();
};

const updateContactLinks = () => {
  const footerEmailSelectors = ["#footer-email", "#article-footer-email", "#about-footer-email"];
  const footerSocialSelectors = [
    "#footer-social",
    "#article-footer-social",
    "#about-footer-social",
  ];

  fillAttr(footerEmailSelectors, "href", `mailto:${CONTACT.email}`);
  fillText(footerEmailSelectors, CONTACT.email);

  fillAttr(footerSocialSelectors, "href", CONTACT.socialUrl);
  fillText(footerSocialSelectors, CONTACT.socialLabel);

  const contactEmail = select("#contact-email");
  if (contactEmail) {
    contactEmail.setAttribute("href", `mailto:${CONTACT.email}`);
    contactEmail.textContent = CONTACT.emailButtonLabel ?? CONTACT.email;
  }

  const contactSocial = select("#contact-social");
  if (contactSocial) {
    contactSocial.setAttribute("href", CONTACT.socialUrl);
    contactSocial.textContent = CONTACT.socialButtonLabel ?? CONTACT.socialLabel;
  }
};

const renderSharedAuthorInfo = () => {
  fillText(["#author-name", "#article-author-name", "#about-author-name"], BLOG_SETUP.author.name);
  fillText(["#author-role", "#article-author-role", "#about-author-role"], BLOG_SETUP.author.role);
  fillAttr(
    ["#author-avatar", "#article-author-avatar", "#about-author-avatar"],
    "src",
    BLOG_SETUP.author.avatar
  );
};

const renderSiteChrome = () => {
  fillText(["#site-title", "#site-title-article", "#about-site-title"], BLOG_SETUP.siteTitle);
  fillText(
    ["#site-tagline", "#site-tagline-article", "#about-site-tagline"],
    BLOG_SETUP.tagline
  );
  fillText(
    ["#footer-author", "#article-footer-author", "#about-footer-author"],
    BLOG_SETUP.footer.name
  );
  fillText(
    ["#footer-tagline", "#article-footer-tagline", "#about-footer-tagline"],
    BLOG_SETUP.footer.tagline
  );
};

const init = () => {
  renderSiteChrome();
  renderSharedAuthorInfo();
  renderHero();
  renderFeaturedPosts();
  renderNotes();
  renderArticle();
  renderAbout();
};

document.addEventListener("DOMContentLoaded", init);
