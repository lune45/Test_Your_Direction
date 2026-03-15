window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ce = [
  {
    id: 's3_ce_01',
    phase: 'deep',
    cat: 'CE 深挖 / 主线选择',
    triggerDirs: ['arch', 'hw_sw', 'ai_hw', 'emb_sw'],
    text: '如果 CE 已经是你的主方向，你最想长期把哪条线做深？',
    opts: [
      { t: '让计算架构本身更合理、更高效', d: { arch: 3, mem_sys: 1, logic_des: 1 } },
      { t: '让软件和硬件彼此更懂对方、协同更顺', d: { hw_sw: 3, arch: 1, soc: 1 } },
      { t: '让 AI 在专用硬件上跑得更快更省', d: { ai_hw: 3, npu: 2, arch: 1 } },
      { t: '让设备端和底层软件真正长期稳定工作', d: { emb_sw: 3, soc: 1, embedded: 1 } }
    ]
  },
  {
    id: 's3_ce_02',
    phase: 'deep',
    cat: 'CE 深挖 / 体系结构',
    triggerDirs: ['arch', 'mem_sys', 'logic_des', 'soc'],
    text: '如果你更偏体系结构，最想长期攻哪类瓶颈？',
    opts: [
      { t: '算得再快也没用，真正卡住的是数据搬运', d: { mem_sys: 3, arch: 2, ai_hw: 1 } },
      { t: '执行路径怎样设计，才能把周期尽量吃满', d: { arch: 3, logic_des: 2, mem_sys: 1 } },
      { t: '越来越多模块放进一颗芯片后怎样别互相堵', d: { soc: 3, arch: 1, mem_sys: 1 } },
      { t: '把数字逻辑本身组织得更清楚、更可验证', d: { logic_des: 3, arch: 1, soc: 1 } }
    ]
  },
  {
    id: 's3_ce_03',
    phase: 'deep',
    cat: 'CE 深挖 / AI 计算',
    triggerDirs: ['ai_hw', 'npu', 'in_mem', 'hw_sw'],
    text: '如果你更偏 AI 计算平台，最想长期解决哪类问题？',
    opts: [
      { t: '让专用执行单元真正适配主流模型的计算特征', d: { ai_hw: 3, npu: 2, arch: 1 } },
      { t: '让数据尽量少搬、多在靠近计算的地方完成处理', d: { in_mem: 3, ai_hw: 1, mem_sys: 1 } },
      { t: '让编译器、运行时和硬件自动配合起来', d: { hw_sw: 3, ai_hw: 1, arch: 1 } },
      { t: '让 AI 计算平台更适合真实端侧和部署场景', d: { ai_hw: 2, emb_sw: 1, soc: 2 } }
    ]
  },
  {
    id: 's3_ce_04',
    phase: 'deep',
    cat: 'CE 深挖 / 芯片平台',
    triggerDirs: ['soc', 'fpga', 'emb_sw', 'hw_sw'],
    text: '如果你更偏系统级平台，最想长期做哪类事情？',
    opts: [
      { t: '把很多模块、接口和功能真正集成成一个平台', d: { soc: 3, hw_sw: 1, emb_sw: 1 } },
      { t: '用 FPGA 或原型快速验证新思路和新路径', d: { fpga: 3, arch: 1, soc: 1 } },
      { t: '把固件、驱动和底层软件栈真正打通', d: { emb_sw: 3, soc: 1, hw_sw: 1 } },
      { t: '让平台从“能跑”变成“能长期维护和复用”', d: { hw_sw: 2, emb_sw: 2, soc: 1 } }
    ]
  },
  {
    id: 's3_ce_05',
    phase: 'deep',
    cat: 'CE 深挖 / 运行路径',
    triggerDirs: ['hw_sw', 'emb_sw', 'arch', 'ai_hw'],
    text: '如果你更在意“程序怎样真正跑起来”，更想长期研究哪类路径？',
    opts: [
      { t: '从编译、调度到执行，把整条软件到硬件路径做顺', d: { hw_sw: 3, arch: 1, ai_hw: 1 } },
      { t: '从启动、驱动到设备管理，把底层软件做稳', d: { emb_sw: 3, soc: 1, embedded: 1 } },
      { t: '从执行单元和存储层级出发，把瓶颈挖到最底层', d: { arch: 3, mem_sys: 1, ai_hw: 1 } },
      { t: '从模型、算子和硬件匹配出发，把 AI 平台做强', d: { ai_hw: 3, hw_sw: 1, npu: 1 } }
    ]
  },
  {
    id: 's3_ce_06',
    phase: 'deep',
    cat: 'CE 深挖 / 数据流',
    triggerDirs: ['mem_sys', 'soc', 'in_mem', 'ai_hw'],
    text: '如果你更着迷于“数据在系统里怎么走”，最想长期做哪类问题？',
    opts: [
      { t: '缓存和内存层级怎样别拖慢整机表现', d: { mem_sys: 3, arch: 1, ai_hw: 1 } },
      { t: '片上互连怎样让不同模块一起工作得更顺', d: { soc: 3, mem_sys: 1, arch: 1 } },
      { t: '把数据尽量留在靠近计算的位置，减少搬运成本', d: { in_mem: 3, mem_sys: 1, ai_hw: 1 } },
      { t: '围绕 AI 模型的真实数据流重新设计执行路径', d: { ai_hw: 3, npu: 1, arch: 1 } }
    ]
  },
  {
    id: 's3_ce_07',
    phase: 'deep',
    cat: 'CE 深挖 / 长期标签',
    triggerDirs: ['arch', 'hw_sw', 'ai_hw', 'fpga'],
    text: '几年后你更希望别人因为你哪类 CE 能力而来找你？',
    opts: [
      { t: '因为你特别会看穿系统真正卡在哪一层', d: { arch: 3, mem_sys: 1, logic_des: 1 } },
      { t: '因为你特别会把软件和硬件一起调顺', d: { hw_sw: 3, soc: 1, emb_sw: 1 } },
      { t: '因为你特别会把 AI 计算平台做强做稳', d: { ai_hw: 3, npu: 2, arch: 1 } },
      { t: '因为你特别会把想法先做成原型，再快速验证迭代', d: { fpga: 3, soc: 1, hw_sw: 1 } }
    ]
  },
  {
    id: 's3_ce_08',
    phase: 'deep',
    cat: 'CE 深挖 / 系统瓶颈',
    triggerDirs: ['arch', 'mem_sys', 'hw_sw', 'ai_hw'],
    text: '如果你总在查“为什么整机没跑满”，最想长期攻哪类瓶颈？',
    opts: [
      { t: '数据在不同层级之间搬来搬去，真正慢的是访存', d: { mem_sys: 3, arch: 1, ai_hw: 1 } },
      { t: '上层软件和下层硬件脱节，整条执行路径不顺', d: { hw_sw: 3, arch: 1, emb_sw: 1 } },
      { t: '架构设计本身没对上工作负载的节奏', d: { arch: 3, logic_des: 1, mem_sys: 1 } },
      { t: 'AI 算子在硬件上总有浪费，性能和功耗都不理想', d: { ai_hw: 3, npu: 2, hw_sw: 1 } }
    ]
  },
  {
    id: 's3_ce_09',
    phase: 'deep',
    cat: 'CE 深挖 / 工程落点',
    triggerDirs: ['soc', 'emb_sw', 'fpga', 'hw_sw'],
    text: '如果你长期待在工程一线，最想把哪类活做成自己的强项？',
    opts: [
      { t: '把复杂芯片平台各模块真正集成为能用的系统', d: { soc: 3, hw_sw: 1, emb_sw: 1 } },
      { t: '把固件、驱动、启动链和底层软件栈打磨扎实', d: { emb_sw: 3, soc: 1, hw_sw: 1 } },
      { t: '把新硬件思路先快速做成原型并验证', d: { fpga: 3, arch: 1, soc: 1 } },
      { t: '把编译、运行时和平台一起调到更匹配', d: { hw_sw: 3, ai_hw: 1, arch: 1 } }
    ]
  },
  {
    id: 's3_ce_10',
    phase: 'deep',
    cat: 'CE 深挖 / 长期作品',
    triggerDirs: ['ai_hw', 'arch', 'soc', 'emb_sw'],
    text: '如果多年后别人提起你的代表作，你更希望它像哪种作品？',
    opts: [
      { t: '一套明显提高某类计算效率的新平台或新架构', d: { arch: 3, ai_hw: 1, mem_sys: 1 } },
      { t: '一套把 AI 负载真正跑顺跑稳的专用计算平台', d: { ai_hw: 3, npu: 2, hw_sw: 1 } },
      { t: '一套从芯片到系统都能稳定交付的复杂平台', d: { soc: 3, emb_sw: 1, hw_sw: 1 } },
      { t: '一套长期可靠的底层软件与设备协同体系', d: { emb_sw: 3, hw_sw: 1, soc: 1 } }
    ]
  }
];
