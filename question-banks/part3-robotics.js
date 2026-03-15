window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.robotics = [
  {
    id: 's3_rb_01',
    phase: 'deep',
    cat: 'Robotics 深挖 / 主线选择',
    triggerDirs: ['robotics', 'perception', 'autonomous', 'embodied'],
    text: '如果机器人已经是你的主方向，你最想长期守哪条主线？',
    opts: [
      { t: '让机器人真正稳定地看懂周围环境', d: { perception: 3, slam: 1, robotics: 1 } },
      { t: '让系统自己做决策、规划路径并完成任务', d: { autonomous: 3, motion: 1, mpc: 1 } },
      { t: '让机器人通过学习获得更通用的技能', d: { embodied: 3, vla: 2, robotics: 1 } },
      { t: '把整套机器人系统做扎实，真机能长期运行', d: { robotics: 3, motion: 1, hri: 1 } }
    ]
  },
  {
    id: 's3_rb_02',
    phase: 'deep',
    cat: 'Robotics 深挖 / 感知问题',
    triggerDirs: ['perception', 'slam', 'autonomous', 'robotics'],
    text: '如果你更偏机器人感知，最想长期攻哪类问题？',
    opts: [
      { t: '让系统更稳地识别、跟踪和理解环境里的对象', d: { perception: 3, autonomous: 1, robotics: 1 } },
      { t: '让机器人更清楚地知道自己在哪里、地图是不是对的', d: { slam: 3, perception: 1, robotics: 1 } },
      { t: '让感知结果更适合后面的规划和决策', d: { autonomous: 2, perception: 2, slam: 1 } },
      { t: '让感知在真实设备和复杂场景里更稳定可用', d: { robotics: 2, perception: 2, embedded: 1 } }
    ]
  },
  {
    id: 's3_rb_03',
    phase: 'deep',
    cat: 'Robotics 深挖 / 规划控制',
    triggerDirs: ['motion', 'mpc', 'autonomous', 'robotics'],
    text: '如果你更在意“接下来该怎么动”，最想长期做哪类问题？',
    opts: [
      { t: '让系统在复杂环境里规划出可执行的动作路径', d: { motion: 3, autonomous: 1, robotics: 1 } },
      { t: '让系统边看边调，始终把动作维持在稳定范围内', d: { mpc: 3, motion: 1, control: 1 } },
      { t: '让整条决策链在真实场景里更安全、更稳健', d: { autonomous: 3, motion: 1, hri: 1 } },
      { t: '让规划和控制真正适配具体设备和任务限制', d: { robotics: 2, motion: 2, mpc: 1 } }
    ]
  },
  {
    id: 's3_rb_04',
    phase: 'deep',
    cat: 'Robotics 深挖 / 学习与具身',
    triggerDirs: ['embodied', 'vla', 'robotics', 'perception'],
    text: '如果你更偏“机器人怎么学”，最想长期深挖哪类问题？',
    opts: [
      { t: '让机器人从数据和试错里学到可迁移技能', d: { embodied: 3, robotics: 1, autonomous: 1 } },
      { t: '让视觉、语言和动作真正接成一条链路', d: { vla: 3, embodied: 2, perception: 1 } },
      { t: '让学习到的能力在真实环境里不轻易失效', d: { robotics: 2, embodied: 2, slam: 1 } },
      { t: '让机器人既会看也会做，而不是只有单点能力', d: { embodied: 2, perception: 2, vla: 1 } }
    ]
  },
  {
    id: 's3_rb_05',
    phase: 'deep',
    cat: 'Robotics 深挖 / 人与机器人',
    triggerDirs: ['hri', 'robotics', 'autonomous', 'embodied'],
    text: '如果你最在意“机器人怎样进入人的世界”，更想长期做哪类研究？',
    opts: [
      { t: '让人和机器人在同一空间里更安全地协作', d: { hri: 3, robotics: 1, autonomous: 1 } },
      { t: '让机器人更会理解人的意图和反馈', d: { hri: 3, embodied: 1, vla: 1 } },
      { t: '让自主系统在有人的场景里更稳、更可预期', d: { autonomous: 2, hri: 2, robotics: 1 } },
      { t: '把交互、任务、硬件和系统能力一起做成产品', d: { robotics: 2, hri: 2, embodied: 1 } }
    ]
  },
  {
    id: 's3_rb_06',
    phase: 'deep',
    cat: 'Robotics 深挖 / 真实部署',
    triggerDirs: ['robotics', 'autonomous', 'slam', 'perception'],
    text: '如果你更想把机器人放进真实现场，最想长期解决哪类难题？',
    opts: [
      { t: '场景一变、光照一变，感知就失稳的问题', d: { perception: 3, slam: 1, robotics: 1 } },
      { t: '地图、定位和导航在长时间运行里慢慢漂掉的问题', d: { slam: 3, autonomous: 1, robotics: 1 } },
      { t: '任务链很长，任何一步判断失误都会影响后面的问题', d: { autonomous: 3, motion: 1, robotics: 1 } },
      { t: '系统一上真机就和仿真差很多的问题', d: { robotics: 3, embodied: 1, mpc: 1 } }
    ]
  },
  {
    id: 's3_rb_07',
    phase: 'deep',
    cat: 'Robotics 深挖 / 长期标签',
    triggerDirs: ['perception', 'motion', 'embodied', 'hri'],
    text: '几年后你更希望别人把你看作哪类机器人研究者/工程师？',
    opts: [
      { t: '特别会“看世界”的那类人', d: { perception: 3, slam: 1, robotics: 1 } },
      { t: '特别会让系统“动起来并动得稳”的那类人', d: { motion: 3, mpc: 1, robotics: 1 } },
      { t: '特别会让机器人“学会新技能”的那类人', d: { embodied: 3, vla: 2, robotics: 1 } },
      { t: '特别会处理“人和机器人怎样共事”的那类人', d: { hri: 3, robotics: 1, autonomous: 1 } }
    ]
  },
  {
    id: 's3_rb_08',
    phase: 'deep',
    cat: 'Robotics 深挖 / 真机难点',
    triggerDirs: ['robotics', 'perception', 'autonomous', 'motion'],
    text: '如果你长期待在真机现场，最想攻克哪类反复出现的难点？',
    opts: [
      { t: '一换环境感知就掉链子，系统突然看不懂世界', d: { perception: 3, slam: 1, robotics: 1 } },
      { t: '计划在仿真里能走，真机一跑就变形', d: { motion: 3, autonomous: 1, robotics: 1 } },
      { t: '整条决策链太脆，任何一步失误都会级联放大', d: { autonomous: 3, motion: 1, robotics: 1 } },
      { t: '系统能跑但维护很痛苦，稳定性和可复现性太差', d: { robotics: 3, embedded: 1, hri: 1 } }
    ]
  },
  {
    id: 's3_rb_09',
    phase: 'deep',
    cat: 'Robotics 深挖 / 数据来源',
    triggerDirs: ['embodied', 'slam', 'perception', 'hri'],
    text: '如果你要长期依赖一类“学习素材”推进机器人能力，你最想用哪种？',
    opts: [
      { t: '真实传感器和真机日志，从现场里学最关键的模式', d: { slam: 2, perception: 2, robotics: 1 } },
      { t: '大量交互或试错数据，让机器人靠经验长技能', d: { embodied: 3, robotics: 1, autonomous: 1 } },
      { t: '人类示范、语言指令和任务反馈，让机器人更懂人', d: { hri: 2, vla: 2, embodied: 1 } },
      { t: '多视角、多模态感知数据，让系统更稳地理解环境', d: { perception: 3, embodied: 1, slam: 1 } }
    ]
  },
  {
    id: 's3_rb_10',
    phase: 'deep',
    cat: 'Robotics 深挖 / 成熟形态',
    triggerDirs: ['autonomous', 'hri', 'embodied', 'robotics'],
    text: '如果多年后这条线成熟了，你最希望自己推进出来的是哪种机器人能力？',
    opts: [
      { t: '能在复杂环境里自主完成更长链路任务', d: { autonomous: 3, motion: 1, robotics: 1 } },
      { t: '能和人自然、安全、可信地协作', d: { hri: 3, robotics: 1, autonomous: 1 } },
      { t: '能通过学习快速适应新任务和新场景', d: { embodied: 3, vla: 2, robotics: 1 } },
      { t: '能作为稳定产品长期部署，而不是只停在 demo', d: { robotics: 3, autonomous: 1, hri: 1 } }
    ]
  }
];
