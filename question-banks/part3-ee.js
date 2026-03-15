window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ee = [
  {
    id: 's3_ee_01',
    phase: 'deep',
    cat: 'EE 深挖 / 核心主线',
    triggerDirs: ['signal', 'comm', 'control', 'embedded'],
    text: '如果 ECE / EE 已经是你的主方向，你最想长期守哪条主线？',
    opts: [
      { t: '让连续世界里的信号更干净、更可分析', d: { signal: 3, elec_sys: 1, comm: 1 } },
      { t: '让信息在复杂链路里传得更稳、更快', d: { comm: 3, info_th: 1, signal: 1 } },
      { t: '让系统在扰动和不确定里仍然稳、准、快', d: { control: 3, opt_ctrl: 2, embedded: 1 } },
      { t: '让设备和嵌入式系统在真实环境里长期可靠工作', d: { embedded: 3, iot: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_02',
    phase: 'deep',
    cat: 'EE 深挖 / 信号与前端',
    triggerDirs: ['signal', 'elec_sys', 'embedded', 'photonics'],
    text: '如果你更偏信号处理，最想长期做哪类问题？',
    opts: [
      { t: '从原始输入里提取更稳定、更有用的信息', d: { signal: 3, elec_sys: 1, embedded: 1 } },
      { t: '把传感前端做得更准、更稳，让后面更好处理', d: { elec_sys: 2, signal: 2, photonics: 1 } },
      { t: '让信号处理更适合落在真实设备里长期运行', d: { embedded: 2, signal: 2, elec_sys: 1 } },
      { t: '把光、电、传感链路做成能支撑更复杂任务的底座', d: { photonics: 3, signal: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_03',
    phase: 'deep',
    cat: 'EE 深挖 / 通信问题',
    triggerDirs: ['comm', 'info_th', 'signal', 'embedded'],
    text: '如果你更偏通信，最想长期攻哪类问题？',
    opts: [
      { t: '让真实无线链路在复杂环境里传得更稳', d: { comm: 3, signal: 1, embedded: 1 } },
      { t: '搞清信息、编码和噪声之间的理论边界', d: { info_th: 3, comm: 1, theory: 1 } },
      { t: '让通信能力更好地落到设备和系统实现上', d: { embedded: 2, comm: 2, signal: 1 } },
      { t: '让链路设计和信号处理一起协同起来', d: { signal: 2, comm: 2, info_th: 1 } }
    ]
  },
  {
    id: 's3_ee_04',
    phase: 'deep',
    cat: 'EE 深挖 / 控制与反馈',
    triggerDirs: ['control', 'opt_ctrl', 'embedded', 'signal'],
    text: '如果你更偏控制，最想长期做哪类闭环问题？',
    opts: [
      { t: '让系统在扰动和噪声下依然稳住', d: { control: 3, signal: 1, embedded: 1 } },
      { t: '让系统更会提前预判未来，再做更好的动作选择', d: { opt_ctrl: 3, control: 1, mpc: 1 } },
      { t: '让控制方法更适配真实设备和实时约束', d: { embedded: 2, control: 2, elec_sys: 1 } },
      { t: '把估计、感知和控制之间的配合做顺', d: { signal: 2, control: 2, embedded: 1 } }
    ]
  },
  {
    id: 's3_ee_05',
    phase: 'deep',
    cat: 'EE 深挖 / 设备系统',
    triggerDirs: ['embedded', 'iot', 'elec_sys', 'control'],
    text: '如果你更偏“设备真的要跑起来”，最想长期解决哪类问题？',
    opts: [
      { t: '让资源很紧的设备也能长期稳定运行', d: { embedded: 3, iot: 1, elec_sys: 1 } },
      { t: '让很多设备之间能稳定联网、协同和维护', d: { iot: 3, embedded: 1, comm: 1 } },
      { t: '让电子系统在功耗、热和稳定性之间平衡得更好', d: { elec_sys: 3, embedded: 1, vlsi: 1 } },
      { t: '让设备端的感知和控制反应更及时更可靠', d: { control: 2, embedded: 2, signal: 1 } }
    ]
  },
  {
    id: 's3_ee_06',
    phase: 'deep',
    cat: 'EE 深挖 / 芯片与实现',
    triggerDirs: ['vlsi', 'eda', 'elec_sys', 'embedded'],
    text: '如果你更靠近“芯片和实现”，最想长期做哪类问题？',
    opts: [
      { t: '把芯片设计本身做得更扎实、更高效', d: { vlsi: 3, elec_sys: 1, logic_des: 1 } },
      { t: '做工具和自动化，让设计流程更聪明', d: { eda: 3, vlsi: 1, pl: 1 } },
      { t: '让芯片和真实设备链路之间更好接起来', d: { elec_sys: 2, embedded: 2, vlsi: 1 } },
      { t: '做面向现场约束的底层实现，而不是只停在设计图纸里', d: { embedded: 2, vlsi: 2, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_07',
    phase: 'deep',
    cat: 'EE 深挖 / 长期标签',
    triggerDirs: ['signal', 'comm', 'control', 'embedded'],
    text: '几年后你更希望别人因为你哪类能力而来找你？',
    opts: [
      { t: '因为你总能把信号链路看清、调顺、做稳', d: { signal: 3, elec_sys: 1, photonics: 1 } },
      { t: '因为你总能让通信系统在复杂环境里仍然可用', d: { comm: 3, info_th: 1, signal: 1 } },
      { t: '因为你总能把反馈系统调到又稳又快', d: { control: 3, opt_ctrl: 1, embedded: 1 } },
      { t: '因为你总能把设备和嵌入式系统真正做成', d: { embedded: 3, iot: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_08',
    phase: 'deep',
    cat: 'EE 深挖 / 世界接口',
    triggerDirs: ['signal', 'control', 'comm', 'embedded'],
    text: '如果你最在意“电子系统怎样接触真实世界”，更想长期深挖哪一层？',
    opts: [
      { t: '从传感输入里尽量还原真实信号，不让信息丢太多', d: { signal: 3, elec_sys: 1, photonics: 1 } },
      { t: '让系统根据反馈及时修正动作，不被扰动带跑', d: { control: 3, opt_ctrl: 1, embedded: 1 } },
      { t: '让远距离链路也能可靠交换信息', d: { comm: 3, info_th: 1, signal: 1 } },
      { t: '让设备端长期在线、低功耗、可维护', d: { embedded: 3, iot: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_09',
    phase: 'deep',
    cat: 'EE 深挖 / 典型痛点',
    triggerDirs: ['elec_sys', 'embedded', 'signal', 'vlsi'],
    text: '如果你未来总在处理“出问题的现场”，哪类痛点最让你想长期攻克？',
    opts: [
      { t: '噪声一上来，信号就不准，后面全部跟着失真', d: { signal: 3, elec_sys: 1, photonics: 1 } },
      { t: '系统明明能跑，但温度、功耗和稳定性互相打架', d: { elec_sys: 3, embedded: 1, vlsi: 1 } },
      { t: '设备在真实环境里一久跑，就会冒出各种边角问题', d: { embedded: 3, iot: 1, control: 1 } },
      { t: '实现路径太复杂，设计和验证周期总是拖太长', d: { vlsi: 3, eda: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_10',
    phase: 'deep',
    cat: 'EE 深挖 / 成熟成果',
    triggerDirs: ['comm', 'control', 'embedded', 'signal'],
    text: '如果几年后你做出一项最拿得出手的成果，你更希望它是哪种？',
    opts: [
      { t: '一套在复杂环境里依然可靠的通信方案', d: { comm: 3, info_th: 1, signal: 1 } },
      { t: '一套又稳又快、能落地的控制系统', d: { control: 3, opt_ctrl: 1, embedded: 1 } },
      { t: '一个长期稳定运行、工程质量很高的设备平台', d: { embedded: 3, elec_sys: 1, iot: 1 } },
      { t: '一条从前端到处理都很扎实的信号链路', d: { signal: 3, elec_sys: 1, photonics: 1 } }
    ]
  }
];
