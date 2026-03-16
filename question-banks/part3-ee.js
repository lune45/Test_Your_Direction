window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ee = [
  {
    id: 's3_ee_01',
    phase: 'deep',
    cat: 'EE 深挖 / 核心主线',
    triggerDirs: ['sensor_signal', 'nextgen_comm', 'autonomous_control', 'edge_devices'],
    text: '如果 ECE / EE 已经是你的主方向，你最想长期守哪条主线？',
    opts: [
      { t: '把真实世界输入变成更干净、更可用的状态信息', d: { sensor_signal: 2, stat_signal: 2, image_signal: 1 } },
      { t: '让下一代通信链路在复杂环境里依然传得稳、传得快', d: { nextgen_comm: 3, mobile_comm: 1, comm_networks: 1 } },
      { t: '让系统在扰动和不确定里仍然稳、准、快', d: { autonomous_control: 3, opt_ctrl: 1, dynamical_systems: 1 } },
      { t: '让边缘设备和嵌入式平台在真实工况里长期可靠工作', d: { edge_devices: 3, embedded: 1, realtime: 1 } }
    ]
  },
  {
    id: 's3_ee_02',
    phase: 'deep',
    cat: 'EE 深挖 / 信号与前端',
    triggerDirs: ['image_signal', 'speech_signal', 'audio_signal', 'sensor_signal', 'photonics'],
    text: '如果你更偏信号处理，最想长期做哪类问题？',
    opts: [
      { t: '把图像采集链路做稳，让后面的视觉系统拿到更可靠输入', d: { image_signal: 3, photonics: 1 } },
      { t: '把语音和音频里的有效信息从噪声里更稳地拎出来', d: { speech_signal: 3, audio_signal: 3 } },
      { t: '把多种传感器信息融合成更可靠的状态判断', d: { sensor_signal: 3, stat_signal: 1, autonomous_control: 1 } },
      { t: '把光、电、传感链路做成能支撑更复杂任务的底座', d: { photonics: 3, image_signal: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_03',
    phase: 'deep',
    cat: 'EE 深挖 / 通信问题',
    triggerDirs: ['mobile_comm', 'coding_theory', 'nextgen_comm', 'comm_networks'],
    text: '如果你更偏通信，最想长期攻哪类问题？',
    opts: [
      { t: '让移动和蜂窝通信在复杂环境下仍然稳、快、不断连', d: { mobile_comm: 3, nextgen_comm: 1, comm_networks: 1 } },
      { t: '搞清信息、编码和纠错能力的理论边界', d: { coding_theory: 3, info_th: 1, nextgen_comm: 1 } },
      { t: '为下一代通信系统设计更强的链路能力和系统架构', d: { nextgen_comm: 3, mobile_comm: 1, comm_networks: 1 } },
      { t: '把通信网络真正做成可部署、可维护、可扩展的系统', d: { comm_networks: 3, mobile_comm: 1, embedded: 1 } }
    ]
  },
  {
    id: 's3_ee_04',
    phase: 'deep',
    cat: 'EE 深挖 / 控制与反馈',
    triggerDirs: ['stat_signal', 'opt_ctrl', 'realtime', 'autonomous_control'],
    text: '如果你更偏控制，最想长期做哪类闭环问题？',
    opts: [
      { t: '先把估计和滤波做稳，让控制看到的状态别一直飘', d: { stat_signal: 3, sensor_signal: 1, opt_ctrl: 1 } },
      { t: '让系统更会提前预判未来，再做更好的动作选择', d: { opt_ctrl: 3, autonomous_control: 1, dynamical_systems: 1 } },
      { t: '让控制方法更适配真实设备和实时约束', d: { realtime: 3, embedded: 1, autonomous_control: 1 } },
      { t: '把估计、感知和控制之间的配合做顺', d: { autonomous_control: 3, stat_signal: 1, opt_ctrl: 1 } }
    ]
  },
  {
    id: 's3_ee_05',
    phase: 'deep',
    cat: 'EE 深挖 / 设备系统',
    triggerDirs: ['hardware_proto', 'cps', 'sensor_networks', 'edge_devices', 'iot', 'embedded', 'realtime'],
    text: '如果你更偏“设备真的要跑起来”，最想长期解决哪类问题？',
    opts: [
      { t: '让资源很紧的边缘设备也能长期稳定运行', d: { edge_devices: 3, embedded: 1, iot: 1 } },
      { t: '让很多设备之间能稳定联网、协同和维护', d: { iot: 3, embedded: 1, comm: 1 } },
      { t: '让底层嵌入式软件和设备链路更稳、更少现场问题', d: { embedded: 3, edge_devices: 1, realtime: 1 } },
      { t: '让设备端的感知和控制反应更及时更可靠', d: { realtime: 3, embedded: 1, autonomous_control: 1 } }
    ]
  },
  {
    id: 's3_ee_06',
    phase: 'deep',
    cat: 'EE 深挖 / 芯片与实现',
    triggerDirs: ['vlsi', 'digital_ic', 'asic', 'eda', 'elec_sys', 'embedded'],
    text: '如果你更靠近“芯片和实现”，最想长期做哪类问题？',
    opts: [
      { t: '把芯片设计本身做得更扎实、更高效', d: { vlsi: 3, elec_sys: 1, logic_des: 1 } },
      { t: '做工具和自动化，让设计流程更聪明', d: { eda: 3, digital_ic: 1, vlsi: 1 } },
      { t: '让芯片和真实设备链路之间更好接起来', d: { elec_sys: 2, embedded: 2, vlsi: 1 } },
      { t: '做面向现场约束的底层实现，而不是只停在设计图纸里', d: { asic: 3, digital_ic: 1, embedded: 1, vlsi: 1 } }
    ]
  },
  {
    id: 's3_ee_07',
    phase: 'deep',
    cat: 'EE 深挖 / 长期标签',
    triggerDirs: ['sensor_signal', 'nextgen_comm', 'autonomous_control', 'edge_devices'],
    text: '几年后你更希望别人因为你哪类能力而来找你？',
    opts: [
      { t: '因为你总能把传感链路调顺，让系统看到的世界更可信', d: { sensor_signal: 2, stat_signal: 2, autonomous_control: 1 } },
      { t: '因为你总能让通信系统在复杂环境里仍然可用', d: { nextgen_comm: 3, mobile_comm: 1, comm_networks: 1 } },
      { t: '因为你总能把反馈系统调到又稳又快', d: { autonomous_control: 3, opt_ctrl: 1, realtime: 1 } },
      { t: '因为你总能把边缘设备和嵌入式系统真正做成', d: { edge_devices: 3, embedded: 1, iot: 1 } }
    ]
  },
  {
    id: 's3_ee_08',
    phase: 'deep',
    cat: 'EE 深挖 / 世界接口',
    triggerDirs: ['sensor_signal', 'opt_ctrl', 'comm_networks', 'embedded'],
    text: '如果你最在意“电子系统怎样接触真实世界”，更想长期深挖哪一层？',
    opts: [
      { t: '从传感输入里尽量还原真实信号，不让信息丢太多', d: { sensor_signal: 1, stat_signal: 2, image_signal: 1, speech_signal: 1 } },
      { t: '让系统根据反馈及时修正动作，不被扰动带跑', d: { opt_ctrl: 3, autonomous_control: 1, realtime: 1 } },
      { t: '让远距离链路也能可靠交换信息', d: { comm_networks: 3, mobile_comm: 1, nextgen_comm: 1 } },
      { t: '让设备端长期在线、低功耗、可维护', d: { embedded: 3, iot: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_09',
    phase: 'deep',
    cat: 'EE 深挖 / 典型痛点',
    triggerDirs: ['elec_sys', 'embedded', 'sensor_signal', 'vlsi'],
    text: '如果你未来总在处理“出问题的现场”，哪类痛点最让你想长期攻克？',
    opts: [
      { t: '噪声一上来，信号就不准，后面全部跟着失真', d: { sensor_signal: 1, stat_signal: 2, image_signal: 1, autonomous_control: 1 } },
      { t: '系统明明能跑，但温度、功耗和稳定性互相打架', d: { elec_sys: 3, embedded: 1, vlsi: 1 } },
      { t: '设备在真实环境里一久跑，就会冒出各种边角问题', d: { embedded: 3, iot: 1, control: 1 } },
      { t: '实现路径太复杂，设计和验证周期总是拖太长', d: { vlsi: 3, eda: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_10',
    phase: 'deep',
    cat: 'EE 深挖 / 成熟成果',
    triggerDirs: ['comm_networks', 'opt_ctrl', 'embedded', 'sensor_signal'],
    text: '如果几年后你做出一项最拿得出手的成果，你更希望它是哪种？',
    opts: [
      { t: '一套在复杂环境里依然可靠的通信方案', d: { comm_networks: 3, nextgen_comm: 1, mobile_comm: 1 } },
      { t: '一套又稳又快、能落地的控制系统', d: { opt_ctrl: 3, autonomous_control: 1, embedded: 1 } },
      { t: '一个长期稳定运行、工程质量很高的设备平台', d: { embedded: 3, elec_sys: 1, iot: 1 } },
      { t: '一条从前端到处理都很扎实的信号链路', d: { sensor_signal: 1, image_signal: 1, speech_signal: 1, stat_signal: 2 } }
    ]
  },
  {
    id: 's3_ee_11',
    phase: 'deep',
    cat: 'EE 深挖 / 电路与芯片本体',
    triggerDirs: ['analog_circuits', 'digital_circuits', 'digital_ic', 'asic', 'mixed_signal', 'low_power'],
    text: '如果你更偏“电路和芯片本体”，最想长期深挖哪类问题？',
    opts: [
      { t: '把微弱、连续、真实的信号稳稳接住并放大处理', d: { analog_circuits: 3, mixed_signal: 1, elec_sys: 1 } },
      { t: '把逻辑、时序和数字链路组织得更快、更稳、更可验证', d: { digital_circuits: 4, digital_ic: 1, elec_sys: 1 } },
      { t: '让模拟和数字部分真正协同，把整条系统链路接顺', d: { mixed_signal: 3, analog_circuits: 1, digital_circuits: 1 } },
      { t: '在性能、面积和功耗之间把芯片做出更好的平衡', d: { asic: 3, low_power: 2, digital_ic: 1 } }
    ]
  },
  {
    id: 's3_ee_12',
    phase: 'deep',
    cat: 'EE 深挖 / 信号链路与通信场景',
    triggerDirs: ['image_signal', 'speech_signal', 'audio_signal', 'sensor_signal', 'nextgen_comm'],
    text: '如果你更关心“信息怎么被采到、传走、再被理解”，最想长期做哪类问题？',
    opts: [
      { t: '把图像链路做扎实，让采集后的画面更稳定、更可用', d: { image_signal: 3, photonics: 1 } },
      { t: '在语音和音频里把有效内容从噪声中更稳地还原出来', d: { speech_signal: 3, audio_signal: 3 } },
      { t: '把传感器信号变成更可靠的状态判断和环境理解', d: { sensor_signal: 3, stat_signal: 1, autonomous_control: 1 } },
      { t: '为下一代通信系统设计更稳、更快、更大规模的链路能力', d: { nextgen_comm: 3, mobile_comm: 1, comm_networks: 1 } }
    ]
  },
  {
    id: 's3_ee_13',
    phase: 'deep',
    cat: 'EE 深挖 / 通信层次细分',
    triggerDirs: ['info_th', 'coding_theory', 'comm_networks', 'nextgen_comm'],
    text: '如果你长期做通信，更想把哪一层做到最强？',
    opts: [
      { t: '先把传输极限和可靠性的数学边界搞清楚', d: { info_th: 3, coding_theory: 1, nextgen_comm: 1 } },
      { t: '把编码和纠错做得更强，让链路在恶劣条件下也不容易坏', d: { coding_theory: 3, info_th: 1, comm_networks: 1 } },
      { t: '把网络侧的协议、调度和系统配合做顺，真正支撑大规模运行', d: { comm_networks: 3, mobile_comm: 1, nextgen_comm: 1 } },
      { t: '围绕下一代移动通信，把链路能力和系统架构一起推到更高上限', d: { nextgen_comm: 3, mobile_comm: 1, info_th: 1 } }
    ]
  },
  {
    id: 's3_ee_14',
    phase: 'deep',
    cat: 'EE 深挖 / 电路本体细分',
    triggerDirs: ['analog_circuits', 'digital_circuits', 'digital_ic', 'asic', 'mixed_signal', 'low_power'],
    text: '如果你更偏“电路和芯片本体”，最想长期做深哪类 trade-off？',
    opts: [
      { t: '把连续、微弱、带噪声的真实信号稳稳接住并处理好', d: { analog_circuits: 3, mixed_signal: 1, image_signal: 1 } },
      { t: '把逻辑、时序和数字路径组织得又快又稳又可验证', d: { digital_circuits: 4, digital_ic: 1, elec_sys: 1 } },
      { t: '把模拟和数字真正接顺，让整条链路少掉边界损耗', d: { mixed_signal: 3, analog_circuits: 1, digital_circuits: 1 } },
      { t: '在面积、性能和功耗之间做出更长久、更实用的平衡', d: { asic: 3, low_power: 2, digital_ic: 1 } }
    ]
  },
  {
    id: 's3_ee_15',
    phase: 'deep',
    cat: 'EE 深挖 / 器件与前端细分',
    triggerDirs: ['photonics', 'optoelectronics', 'mems', 'semiconductor_devices', 'nanoelectronics', 'emerging_devices'],
    text: '如果你更着迷于“器件和前端本体”，最想长期做哪类东西？',
    opts: [
      { t: '把光学链路、成像和光子器件做成新的系统底座', d: { photonics: 3, image_signal: 1, optoelectronics: 1 } },
      { t: '把光电和传感器件做成真正能接到系统里的前端', d: { optoelectronics: 3, photonics: 1, sensor_signal: 1 } },
      { t: '把微小机械和传感结构做得更灵敏、更稳定、更可制造', d: { mems: 3, sensor_signal: 1, semiconductor_devices: 1 } },
      { t: '把器件缩得更小、做得更新，推进下一代硬件能力边界', d: { nanoelectronics: 3, semiconductor_devices: 1, emerging_devices: 1 } }
    ]
  },
  {
    id: 's3_ee_16',
    phase: 'deep',
    cat: 'EE 深挖 / 信号处理细分',
    triggerDirs: ['image_signal', 'speech_signal', 'audio_signal', 'stat_signal', 'sensor_signal'],
    text: '如果你长期做信号处理，更想把哪类“输入理解链路”做到最强？',
    opts: [
      { t: '图像进入系统后的前端质量、色彩、细节和稳定性', d: { image_signal: 4, photonics: 1 } },
      { t: '语音和音频在噪声里仍然能保持清晰、可分辨、可理解', d: { speech_signal: 4, audio_signal: 1 } },
      { t: '从数据里估计真实状态，让滤波、概率判断和鲁棒性更强', d: { stat_signal: 4, sensor_signal: 1, opt_ctrl: 1 } },
      { t: '把多传感器融合成稳定状态判断，让系统真正知道自己在哪', d: { sensor_signal: 4, stat_signal: 1, autonomous_control: 1 } }
    ]
  },
  {
    id: 's3_ee_17',
    phase: 'deep',
    cat: 'EE 深挖 / 器件与前端路线细分',
    triggerDirs: ['photonics', 'optoelectronics', 'mems', 'semiconductor_devices'],
    text: '如果你更着迷于“器件和前端本体”，最想长期把哪条路线做深？',
    opts: [
      { t: '光学链路、激光、成像和光子器件怎样成为新的系统底座', d: { photonics: 4, optoelectronics: 1, image_signal: 1 } },
      { t: '把光电器件、传感前端和成像接口真正接进完整系统里', d: { optoelectronics: 4, photonics: 1, sensor_signal: 1 } },
      { t: '把微小机械和传感结构做得更灵敏、更稳定、更可制造', d: { mems: 4, semiconductor_devices: 1, sensor_signal: 1 } },
      { t: '围绕半导体器件本身的工艺、结构和可靠性把底层能力做深', d: { semiconductor_devices: 4, nanoelectronics: 1, emerging_devices: 1 } }
    ]
  },
  {
    id: 's3_ee_18',
    phase: 'deep',
    cat: 'EE 深挖 / 通信层次路线细分',
    triggerDirs: ['info_th', 'coding_theory', 'comm_networks', 'nextgen_comm'],
    text: '如果你长期做通信，更想把哪一层做到别人绕不过去？',
    opts: [
      { t: '把传输极限、容量边界和信息表达方式在理论上真正说清楚', d: { info_th: 4, coding_theory: 1, nextgen_comm: 1 } },
      { t: '把编码、纠错和可靠性机制做到极致，让链路更抗干扰', d: { coding_theory: 4, info_th: 1, comm_networks: 1 } },
      { t: '把网络侧协议、调度和系统协同做成真正可运行的平台能力', d: { comm_networks: 4, mobile_comm: 1, nextgen_comm: 1 } },
      { t: '围绕 5G/6G 这类下一代系统，把链路与系统架构一起往前推', d: { nextgen_comm: 4, mobile_comm: 1, comm_networks: 1 } }
    ]
  },
  {
    id: 's3_ee_19',
    phase: 'deep',
    cat: 'EE 深挖 / 原型与闭环系统细分',
    triggerDirs: ['hardware_proto', 'cps', 'dynamical_systems', 'sensor_networks', 'embedded'],
    text: '如果你更想把“系统真的做出来并跑起来”这条线做深，最想长期做哪类工作？',
    opts: [
      { t: '快速搭硬件原型，把板卡、器件和链路尽快做出来验证', d: { hardware_proto: 4, elec_sys: 1, embedded: 1 } },
      { t: '把感知、计算、执行和物理世界连成稳定闭环系统', d: { cps: 4, autonomous_control: 1, embedded: 1 } },
      { t: '让很多分布式传感节点低功耗、稳定地协同工作', d: { sensor_networks: 4, iot: 1, sensor_signal: 1 } },
      { t: '把嵌入式平台和设备链路做成能长期部署的工程底座', d: { embedded: 4, edge_devices: 1, realtime: 1 } }
    ]
  },
  {
    id: 's3_ee_20',
    phase: 'deep',
    cat: 'EE 深挖 / 设备系统落地细分',
    triggerDirs: ['hardware_proto', 'cps', 'sensor_networks', 'embedded', 'edge_devices', 'realtime', 'iot'],
    text: '如果你长期待在设备系统一线，更想把哪类能力做成自己的主标签？',
    opts: [
      { t: '把嵌入式软件和设备链路做稳，让底层系统少出现场问题', d: { embedded: 4, hardware_proto: 1, realtime: 1 } },
      { t: '把边缘设备做成资源受限但长期稳定可运行的平台', d: { edge_devices: 4, embedded: 1, iot: 1 } },
      { t: '把实时反应和控制约束守住，让系统不拖、不飘、不乱', d: { realtime: 4, autonomous_control: 1, embedded: 1 } },
      { t: '把联网设备和远程协同维护做顺，形成真正可规模化系统', d: { iot: 4, sensor_networks: 1, embedded: 1 } }
    ]
  },
  {
    id: 's3_ee_21',
    phase: 'deep',
    cat: 'EE 深挖 / 芯片实现路线细分',
    triggerDirs: ['digital_ic', 'asic', 'eda', 'low_power'],
    text: '如果你长期做“芯片怎样真正被做出来”，更想把哪类实现能力做成自己的强项？',
    opts: [
      { t: '把数字 IC 的前端结构、时序和模块划分做得更清楚更稳', d: { digital_ic: 4, digital_circuits: 1, logic_des: 1 } },
      { t: '围绕 ASIC 这类专用芯片，把从架构到落地的路径做扎实', d: { asic: 4, digital_ic: 1, low_power: 1 } },
      { t: '做工具和自动化流程，让设计、验证和迭代更聪明更快', d: { eda: 4, vlsi: 1, digital_ic: 1 } },
      { t: '在功耗、面积和性能之间做出长期更实用的芯片平衡', d: { low_power: 4, asic: 1, digital_ic: 1 } }
    ]
  },
  {
    id: 's3_ee_22',
    phase: 'deep',
    cat: 'EE 深挖 / 器件路线细分',
    triggerDirs: ['semiconductor_devices', 'nanoelectronics', 'emerging_devices', 'photonics'],
    text: '如果你长期做“器件本身的能力边界”，更想把哪条路线做深？',
    opts: [
      { t: '把半导体器件本身的结构、工艺和可靠性研究扎实', d: { semiconductor_devices: 4, nanoelectronics: 1, emerging_devices: 1 } },
      { t: '把更小尺度下的电子特性、极限和新现象做清楚', d: { nanoelectronics: 4, semiconductor_devices: 1, emerging_devices: 1 } },
      { t: '围绕新型器件和前沿硬件形态探索下一代可能路线', d: { emerging_devices: 4, semiconductor_devices: 1, photonics: 1 } },
      { t: '把光学和光子器件做成真正能支撑更复杂系统的新前端', d: { photonics: 4, optoelectronics: 1, image_signal: 1 } }
    ]
  },
  {
    id: 's3_ee_23',
    phase: 'deep',
    cat: 'EE 深挖 / 原型与闭环实现细分',
    triggerDirs: ['hardware_proto', 'cps', 'sensor_networks', 'dynamical_systems'],
    text: '如果你长期待在“真实系统做出来再跑起来”的一线，更想把哪类能力做深？',
    opts: [
      { t: '快速搭原型、反复试板卡和链路，把想法尽快做出来验证', d: { hardware_proto: 4, embedded: 1, elec_sys: 1 } },
      { t: '把计算、传感、执行和物理世界接成稳定闭环系统', d: { cps: 4, autonomous_control: 1, embedded: 1 } },
      { t: '让很多分布式传感节点长期低功耗、稳定地一起工作', d: { sensor_networks: 4, iot: 1, sensor_signal: 1 } },
      { t: '把系统随时间变化、扰动传播和动态响应本身建模建清楚', d: { dynamical_systems: 4, opt_ctrl: 1, stat_signal: 1 } }
    ]
  },
  {
    id: 's3_ee_24',
    phase: 'deep',
    cat: 'EE 深挖 / 音频与语音细分',
    triggerDirs: ['audio_signal', 'speech_signal', 'image_signal', 'stat_signal'],
    text: '如果你长期做“声音和感知输入链路”，更想把哪类能力做深？',
    opts: [
      { t: '把音频本身的频谱、噪声和声学结构处理得更稳更细', d: { audio_signal: 4, speech_signal: 1 } },
      { t: '把人的说话内容、韵律和语音理解链路做得更好用', d: { speech_signal: 4, audio_signal: 1 } },
      { t: '把图像输入链路做稳，让视觉系统先拿到更可靠的画面', d: { image_signal: 4, photonics: 1 } },
      { t: '把滤波、估计和鲁棒性这层底座做强，让各种输入都更可信', d: { stat_signal: 4, sensor_signal: 1, audio_signal: 1 } }
    ]
  },
  {
    id: 's3_ee_25',
    phase: 'deep',
    cat: 'EE 深挖 / 数字实现边界细分',
    triggerDirs: ['digital_circuits', 'digital_ic', 'asic', 'logic_des'],
    text: '如果你长期做“数字实现”这条线，更想把哪一层做成自己的硬本事？',
    opts: [
      { t: '把数字电路本身的逻辑、时序和数据通路组织得更清楚更稳', d: { digital_circuits: 4, logic_des: 1, digital_ic: 1 } },
      { t: '把数字 IC 从模块设计、接口约束到实现路径都做扎实', d: { digital_ic: 4, digital_circuits: 1, asic: 1 } },
      { t: '把面向特定负载的专用芯片做成真正可落地的产品级实现', d: { asic: 4, digital_ic: 1, low_power: 1 } },
      { t: '把逻辑正确性、可验证性和模块结构本身做成自己的强项', d: { logic_des: 4, digital_circuits: 1, elec_sys: 1 } }
    ]
  },
  {
    id: 's3_ee_26',
    phase: 'deep',
    cat: 'EE 深挖 / 控制与估计边界细分',
    triggerDirs: ['opt_ctrl', 'stat_signal', 'autonomous_control', 'dynamical_systems'],
    text: '如果你长期做“系统如何稳定感知并控制真实对象”，更想把哪类能力做到最强？',
    opts: [
      { t: '把最优控制和约束下的动作设计做得更稳、更可解释', d: { opt_ctrl: 4, autonomous_control: 1, dynamical_systems: 1 } },
      { t: '把滤波、估计和噪声下的状态恢复做得更可靠', d: { stat_signal: 4, sensor_signal: 1, opt_ctrl: 1 } },
      { t: '把感知、估计、控制真正接成自动系统闭环，而不是各做各的', d: { autonomous_control: 4, opt_ctrl: 1, stat_signal: 1 } },
      { t: '把动态响应、扰动传播和系统随时间变化的规律建模建清楚', d: { dynamical_systems: 4, opt_ctrl: 1, stat_signal: 1 } }
    ]
  },
  {
    id: 's3_ee_27',
    phase: 'deep',
    cat: 'EE 深挖 / 通信与网络系统细分',
    triggerDirs: ['mobile_comm', 'comm_networks', 'nextgen_comm', 'coding_theory'],
    text: '如果你长期做“信息怎样在真实网络里稳定传输”，更想把哪类能力做深？',
    opts: [
      { t: '把移动通信链路和协议在复杂环境里做稳做顺', d: { mobile_comm: 4, comm_networks: 1, nextgen_comm: 1 } },
      { t: '把通信网络本身的结构、协同和容量问题做透', d: { comm_networks: 4, mobile_comm: 1, nextgen_comm: 1 } },
      { t: '围绕 5G/6G 这类下一代通信系统做更前沿的体系探索', d: { nextgen_comm: 4, mobile_comm: 1, info_th: 1 } },
      { t: '把编码与纠错做深，让信息在不完美信道中更稳地到达', d: { coding_theory: 4, info_th: 1, comm_networks: 1 } }
    ]
  },
  {
    id: 's3_ee_branch_01',
    phase: 'deep',
    cat: 'EE 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '如果 ECE / EE 已经是你的主方向，你更想长期把哪类“电子系统能力”做成主线？',
    opts: [
      { t: '电路、芯片和实现本体，重点是模拟、数字、混合信号怎样真正做成', d: { analog_circuits: 1, digital_circuits: 2, mixed_signal: 1, digital_ic: 1, asic: 1, vlsi: 1 } },
      { t: '信号处理和传感链路，重点是怎样从真实输入里稳稳拿到可用信息', d: { sensor_signal: 2, stat_signal: 2, image_signal: 1, speech_signal: 1, audio_signal: 1 } },
      { t: '通信和网络系统，重点是信息怎样在复杂环境里稳定传输', d: { mobile_comm: 1, comm_networks: 2, nextgen_comm: 2, coding_theory: 1, info_th: 1 } },
      { t: '控制和动态系统，重点是反馈、估计和真实闭环怎样稳住', d: { opt_ctrl: 2, autonomous_control: 2, dynamical_systems: 2, stat_signal: 1 } },
      { t: '嵌入式、设备和 CPS，重点是系统真的要长时间跑起来', d: { embedded: 2, edge_devices: 1, realtime: 2, cps: 1, hardware_proto: 1 } },
      { t: '器件、光子和前沿硬件，重点是前端本体和下一代硬件可能性', d: { semiconductor_devices: 1, photonics: 2, optoelectronics: 1, mems: 1, nanoelectronics: 1, emerging_devices: 1 } }
    ]
  },
  {
    id: 's3_ee_branch_02',
    phase: 'deep',
    cat: 'EE 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果你继续在 EE 里往深走，你更想长期守住哪类“硬本事”？',
    opts: [
      { t: '把模拟、混合信号和前端链路调到真正可用、可制造、可量产', d: { analog_circuits: 2, mixed_signal: 2, optoelectronics: 1, elec_sys: 1 } },
      { t: '把数字实现、芯片路径和低功耗平衡做得更扎实', d: { digital_ic: 2, asic: 2, low_power: 2, logic_des: 1 } },
      { t: '把滤波、估计和传感器信号这层底座做稳，让系统看到的世界更可信', d: { stat_signal: 2, sensor_signal: 2, image_signal: 1, speech_signal: 1 } },
      { t: '把信息论、编码和下一代通信系统的能力边界真正往前推', d: { info_th: 2, coding_theory: 2, nextgen_comm: 2, comm_networks: 1 } },
      { t: '把控制、动态和闭环行为做顺，让真实系统在扰动里也稳得住', d: { opt_ctrl: 2, autonomous_control: 2, dynamical_systems: 2, realtime: 1 } },
      { t: '把边缘设备、嵌入式和真实部署这条线做成长期可靠的工程能力', d: { embedded: 2, realtime: 2, edge_devices: 2, cps: 1 } }
    ]
  }
];
