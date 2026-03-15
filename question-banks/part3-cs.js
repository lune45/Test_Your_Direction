window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.cs = [
  {
    id: 's3_cs_01',
    phase: 'deep',
    cat: 'CS 深挖 / 系统骨架',
    triggerDirs: ['systems', 'dist_sys', 'cloud', 'db'],
    text: '如果 CS 是你的主方向，你最想长期搭哪种“骨架型能力”？',
    opts: [
      { t: '让复杂系统整体更稳、更清晰、更容易治理', d: { systems: 3, dist_sys: 1, cloud: 1 } },
      { t: '让很多机器一起工作时仍然可靠一致', d: { dist_sys: 3, systems: 1, cloud: 1 } },
      { t: '让云平台和大规模服务更会扩、更会恢复', d: { cloud: 3, dist_sys: 1, systems: 1 } },
      { t: '让数据存储、查询和组织方式更高效', d: { db: 3, stream: 1, systems: 1 } }
    ]
  },
  {
    id: 's3_cs_02',
    phase: 'deep',
    cat: 'CS 深挖 / 语言与正确性',
    triggerDirs: ['pl', 'formal', 'security', 'systems'],
    text: '如果你更想让“软件本身”变得更可靠，最想往哪条线深挖？',
    opts: [
      { t: '设计更好的语言、编译器和开发工具', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '用形式化方法把正确性真的证明清楚', d: { formal: 3, pl: 1, security: 1 } },
      { t: '从系统和软件层面减少漏洞和攻击面', d: { security: 3, systems: 1, formal: 1 } },
      { t: '把这些能力做进工程系统，让团队长期受益', d: { systems: 2, pl: 1, formal: 1 } }
    ]
  },
  {
    id: 's3_cs_03',
    phase: 'deep',
    cat: 'CS 深挖 / 理论到算法',
    triggerDirs: ['theory', 'algo', 'complexity', 'security'],
    text: '如果你愿意为抽象问题花很多年，最想钻哪类？',
    opts: [
      { t: '找出问题背后的共性结构和一般性规律', d: { theory: 3, algo: 1, complexity: 1 } },
      { t: '把问题从“能做”改成“做得足够快”', d: { algo: 3, theory: 1, optim: 1 } },
      { t: '搞清哪些问题本质上就是难、快不了', d: { complexity: 3, theory: 1, formal: 1 } },
      { t: '把理论工具真正用到安全和验证问题上', d: { security: 2, formal: 2, theory: 1 } }
    ]
  },
  {
    id: 's3_cs_04',
    phase: 'deep',
    cat: 'CS 深挖 / 网络与流',
    triggerDirs: ['networks', 'stream', 'cloud', 'dist_sys'],
    text: '如果你更关注“东西怎样流动起来”，哪类问题最吸引你？',
    opts: [
      { t: '让网络在复杂环境里保持低延迟和稳定连接', d: { networks: 3, cloud: 1, systems: 1 } },
      { t: '让实时数据进来就能马上被处理和使用', d: { stream: 3, db: 1, dist_sys: 1 } },
      { t: '让云上的服务、资源和容量能更聪明地协同', d: { cloud: 3, dist_sys: 1, networks: 1 } },
      { t: '让多组件、多节点的协作链路更稳更可恢复', d: { dist_sys: 3, systems: 1, cloud: 1 } }
    ]
  },
  {
    id: 's3_cs_05',
    phase: 'deep',
    cat: 'CS 深挖 / 图形与交互',
    triggerDirs: ['graphics', 'geo_proc', 'hci', 'vis'],
    text: '如果你更在意“人怎样看见、理解、使用技术”，会更想深挖哪类方向？',
    opts: [
      { t: '把视觉世界渲染得更真实、更快、更可交互', d: { graphics: 3, geo_proc: 1, hci: 1 } },
      { t: '处理三维几何、形状和空间结构', d: { geo_proc: 3, graphics: 1, vision3d: 1 } },
      { t: '研究人和界面怎样协作得更顺手、更自然', d: { hci: 3, vis: 1, applied_ai: 1 } },
      { t: '把复杂信息变成别人一眼能看懂的图和界面', d: { vis: 3, hci: 1, ds_sci: 1 } }
    ]
  },
  {
    id: 's3_cs_06',
    phase: 'deep',
    cat: 'CS 深挖 / 数据基础设施',
    triggerDirs: ['db', 'stream', 'dist_sys', 'systems'],
    text: '如果你继续往“数据系统”这条线走，最想长期攻哪类问题？',
    opts: [
      { t: '让查询更快、存储更稳、事务更靠谱', d: { db: 3, systems: 1, dist_sys: 1 } },
      { t: '让实时数据流在大规模下仍然顺畅', d: { stream: 3, dist_sys: 1, cloud: 1 } },
      { t: '让数据库和分布式系统更好地协作', d: { dist_sys: 2, db: 2, systems: 1 } },
      { t: '让整套底层能力变成团队都敢依赖的平台', d: { systems: 3, db: 1, cloud: 1 } }
    ]
  },
  {
    id: 's3_cs_07',
    phase: 'deep',
    cat: 'CS 深挖 / 工程重心',
    triggerDirs: ['systems', 'pl', 'security', 'dist_sys'],
    text: '如果你未来几年只能把“独特深度”押在一件事上，会更想押哪类能力？',
    opts: [
      { t: '把大系统拆清楚、守住稳定性和恢复力', d: { systems: 3, dist_sys: 2, cloud: 1 } },
      { t: '把语言、编译和工具链做得更聪明', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '把安全、验证和正确性能力做扎实', d: { security: 3, formal: 1, systems: 1 } },
      { t: '把多机协作和大规模工程做成公共底座', d: { dist_sys: 3, systems: 2, cloud: 1 } }
    ]
  },
  {
    id: 's3_cs_08',
    phase: 'deep',
    cat: 'CS 深挖 / 安全与可信系统',
    triggerDirs: ['security', 'systems', 'formal', 'networks'],
    text: '如果你更担心“系统被攻击或失控”，最想长期钻哪类问题？',
    opts: [
      { t: '把系统和基础设施本身做得更难被攻破', d: { security: 3, systems: 1, networks: 1 } },
      { t: '让协议、规则和实现之间更难出现逻辑漏洞', d: { formal: 2, security: 2, pl: 1 } },
      { t: '让网络、边界和连接链路在复杂环境里更可信', d: { networks: 3, security: 1, cloud: 1 } },
      { t: '做能长期守住正确性和恢复力的可信系统工程', d: { systems: 3, security: 1, formal: 1 } }
    ]
  },
  {
    id: 's3_cs_09',
    phase: 'deep',
    cat: 'CS 深挖 / 开发者效率',
    triggerDirs: ['pl', 'systems', 'vis', 'hci'],
    text: '如果你更在意“人怎样把软件做得更快更少错”，最想长期做哪类问题？',
    opts: [
      { t: '让语言、编译器和类型系统提前拦住错误', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '让调试、性能定位和可观测性更顺手', d: { systems: 2, dist_sys: 1, vis: 1, mlops: 1 } },
      { t: '让复杂数据和系统状态更容易被人理解', d: { vis: 3, hci: 1, systems: 1 } },
      { t: '研究开发者与工具如何形成更好的协作方式', d: { hci: 3, pl: 1, vis: 1 } }
    ]
  },
  {
    id: 's3_cs_10',
    phase: 'deep',
    cat: 'CS 深挖 / 服务与平台边界',
    triggerDirs: ['cloud', 'db', 'dist_sys', 'stream'],
    text: '如果你长期在“服务平台”这条线上，你最想守住哪类核心能力？',
    opts: [
      { t: '服务弹性和故障恢复，让高峰和异常都不慌', d: { cloud: 3, dist_sys: 1, systems: 1 } },
      { t: '数据一致性和查询能力，让底层存取更可靠', d: { db: 3, dist_sys: 1, systems: 1 } },
      { t: '流式与实时链路，让数据进来就能马上产生价值', d: { stream: 3, db: 1, cloud: 1 } },
      { t: '跨服务协同与系统治理，让整体架构更能长期演化', d: { dist_sys: 3, systems: 2, cloud: 1 } }
    ]
  }
];
