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
    title: "露天矿调度台 43 号工况简报",
    summary:
      "夜班巡检记录了 43 号采区的车辆预警、司机状态与排土场姿态，所有数据实时回传到调度台，为下一次巡视留下一份可追溯的底稿。",
    date: "2025-11-12",
    dateLabel: "2025 年 11 月 12 日",
  },
  heroHighlight: {
    label: "系统档案",
    title: "OTW 驾驶辅助预警系统",
    body: "车载终端、4G 边缘网络与监控平台组成闭环，覆盖速度、身份与排土场三条底线。",
    timestamp: "11 月 12 日 22:40",
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
      { when: "2025.11", text: "OTW V3.2 在白音华蒙东露天矿上线，全部调度屏实时联动。" },
      { when: "2025.08", text: "排土场电子围栏与侧撞预警模块完成二次迭代。" },
      { when: "2025.05", text: "完成边坡位移监测数据接入调度平台的验证。" },
    ],
  },
};

const FEATURED_POSTS = [
  {
    title: "排土场防侧撞策略复盘",
    date: "2025-11-09",
    dateLabel: "2025.11.09",
    summary: "自卸车进入排土场即触发电子围栏，叠加坡面雷达回传的姿态数据，避免高位侧翻。",
    link: "article.html",
    tag: "防护策略",
    metricLabel: "触发预警",
    metricValue: "8 次",
  },
  {
    title: "大班次驾驶员疲劳识别调优",
    date: "2025-10-28",
    dateLabel: "2025.10.28",
    summary: "以 4,200 条驾驶行为样本训练识别模型，在 10km/h 以上的工况下实时推送提醒。",
    link: "article.html",
    tag: "行为数据",
    metricLabel: "识别准确率",
    metricValue: "97%",
  },
  {
    title: "四屏联动调度台部署记",
    date: "2025-10-12",
    dateLabel: "2025.10.12",
    summary: "车载、APP、PC 与大屏共享同一数据通道，调度人员可以跨端回放轨迹与处理告警。",
    link: "article.html",
    tag: "系统落地",
    metricLabel: "并发车辆",
    metricValue: "126",
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
  date: "2025-11-10",
  dateLabel: "2025 年 11 月 10 日",
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
      title: "边坡位移监测闭环",
      description: "将 GNSS 与激光雷达接入调度台，形成边坡健康度评分。",
      link: "article.html",
    },
    {
      title: "夜班调度数字孪生",
      description: "利用车载摄像头与数字孪生模型还原夜班作业全过程。",
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
  fillText(["#article-title"], SAMPLE_ARTICLE.title);
  fillText(["#article-excerpt"], SAMPLE_ARTICLE.excerpt);
  fillText(["#article-date"], SAMPLE_ARTICLE.dateLabel);
  fillAttr(["#article-date"], "datetime", SAMPLE_ARTICLE.date);
  fillAttr(["#article-cover"], "src", SAMPLE_ARTICLE.cover);
  fillAttr(["#article-cover"], "alt", SAMPLE_ARTICLE.coverCaption);
  fillText(["#article-cover-caption"], SAMPLE_ARTICLE.coverCaption);

  const body = select("#article-body");
  if (body) {
    body.innerHTML = SAMPLE_ARTICLE.blocks.map(blockToHTML).join("");
  }

  const suggestionList = select("#article-suggestions");
  if (suggestionList) {
    suggestionList.innerHTML = SAMPLE_ARTICLE.suggestions
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
