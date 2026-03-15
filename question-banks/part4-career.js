window.STAGE4_CAREER_BANKS = {
  ai: [
    {
      id: 's4_ai_01',
      phase: 'career',
      text: '如果以后主要做 AI 相关工作，你更想过哪种工作节奏？',
      opts: [
        { t: '慢一点也可以，但要能长期啃深问题', sub: '更偏长期研究与理论积累。', career: 'ml_theorist' },
        { t: '高频做实验、快速迭代，每周都看到变化', sub: '更偏研究科学家或应用科学家。', career: 'ml_rs' },
        { t: '节奏快没关系，但结果最好尽快能被用户用上', sub: '更偏应用科学、生成式产品或 Agent 落地。', career: 'applied_sci' },
        { t: '强度大、资源重、离前沿特别近也能接受', sub: '更偏基础模型和前沿能力岗位。', career: 'fm_researcher' }
      ]
    },
    {
      id: 's4_ai_02',
      phase: 'career',
      text: '如果高薪常常伴随高压，你更能接受哪种压力来源？',
      opts: [
        { t: '论文、评测和研究结果必须站得住', sub: '更偏研究岗。', career: 'ml_rs' },
        { t: '系统上线后延迟、成本和稳定性直接暴露', sub: '更偏工程落地岗。', career: 'llm_eng' },
        { t: '产品 deadline 很紧，要尽快把能力做成体验', sub: '更偏应用科学和生成式产品岗。', career: 'genai_eng' },
        { t: '别人会把重要任务交给你的模型，容错很低', sub: '更偏安全、评测和基础模型相关岗位。', career: 'llm_rs' }
      ]
    },
    {
      id: 's4_ai_03',
      phase: 'career',
      text: '你更想被哪种评价方式认可？',
      opts: [
        { t: '因为你把一个问题讲清楚了，别人会引用你的思路', sub: '更偏理论和研究。', career: 'ml_theorist' },
        { t: '因为你做的实验改变了团队下一步方向', sub: '更偏研究科学。', career: 'ml_rs' },
        { t: '因为你做的能力真的进了产品，被很多人每天使用', sub: '更偏应用科学。', career: 'applied_sci' },
        { t: '因为你把复杂能力做成了稳定系统，大家都敢依赖', sub: '更偏 AI 系统与平台。', career: 'ml_sys_eng' }
      ]
    },
    {
      id: 's4_ai_04',
      phase: 'career',
      text: '你更舒服的协作关系是什么样？',
      opts: [
        { t: '和研究同伴一起围绕一个问题长期打磨', sub: '更偏研究环境。', career: 'ml_rs' },
        { t: '和产品、设计、工程一起把能力做成真实功能', sub: '更偏应用科学和产品化。', career: 'applied_sci' },
        { t: '和平台、后端、基础设施团队一起守住系统能力', sub: '更偏 LLM/AI 工程与平台。', career: 'llm_eng' },
        { t: '和创作者、业务团队一起快速迭代新体验', sub: '更偏生成式应用与创意工具。', career: 'genai_eng' }
      ]
    },
    {
      id: 's4_ai_05',
      phase: 'career',
      text: '如果只能选一种职业成就感，你更想要哪种？',
      opts: [
        { t: '留下一个能解释很多现象的框架或方法', sub: '更偏理论研究。', career: 'ml_theorist' },
        { t: '参与推动一个前沿方向真正往前走', sub: '更偏研究科学。', career: 'ml_rs' },
        { t: '把复杂能力变成很多人真正会用的产品', sub: '更偏应用与产品化。', career: 'applied_sci' },
        { t: '把一个大系统做稳做快，让能力大规模可用', sub: '更偏工程与平台。', career: 'ml_sys_eng' }
      ]
    }
  ],
  cs: [
    {
      id: 's4_cs_01',
      phase: 'career',
      text: '如果以后主要做 CS 相关工作，你更想过哪种日常？',
      opts: [
        { t: '盯系统、架构和故障，把复杂链路理顺', sub: '更偏系统/分布式。', career: 'dist_sys_eng' },
        { t: '盯性能瓶颈和成本，让服务更快更稳', sub: '更偏推理/平台/基础设施。', career: 'inf_eng' },
        { t: '做工具链、编译器或底层平台，让别人也一起变快', sub: '更偏编译器和开发工具。', career: 'compiler_eng' },
        { t: '做数据平台和底座，让很多团队都能依赖它', sub: '更偏数据平台与基础设施。', career: 'data_plat' }
      ]
    },
    {
      id: 's4_cs_02',
      phase: 'career',
      text: '你更能接受哪种工作压力？',
      opts: [
        { t: '线上一出问题就要马上处理，责任非常直接', sub: '更偏系统与服务稳定性。', career: 'dist_sys_eng' },
        { t: '天天和性能、容量、延迟数字较劲', sub: '更偏推理/系统性能。', career: 'inf_eng' },
        { t: '做很底层的工具，复杂度高但成果不一定立刻可见', sub: '更偏编译器与工具链。', career: 'compiler_eng' },
        { t: '很多团队都依赖你做的平台，接口和规则不能乱', sub: '更偏平台工程。', career: 'data_plat' }
      ]
    },
    {
      id: 's4_cs_03',
      phase: 'career',
      text: '如果薪资、稳定性和影响力要权衡，你更优先什么？',
      opts: [
        { t: '稳定长期地做底座，很多人依赖我', sub: '更偏平台和分布式。', career: 'dist_sys_eng' },
        { t: '离核心性能和高价值链路更近，压力大也值得', sub: '更偏基础设施与性能。', career: 'ai_infra' },
        { t: '做得深一点、底一点，形成个人技术护城河', sub: '更偏编译器和底层系统。', career: 'compiler_eng' },
        { t: '让数据和平台真正服务业务，影响很具体', sub: '更偏数据平台。', career: 'data_plat' }
      ]
    },
    {
      id: 's4_cs_04',
      phase: 'career',
      text: '你更喜欢哪种成就感？',
      opts: [
        { t: '系统几乎不出事，大家已经默认它可靠', sub: '更偏系统可靠性。', career: 'dist_sys_eng' },
        { t: '把关键链路做快很多，大家都能感受到变化', sub: '更偏性能与推理。', career: 'inf_eng' },
        { t: '把一套工具做顺，让很多开发者少走弯路', sub: '更偏编译器与工具链。', career: 'compiler_eng' },
        { t: '把平台做成公共能力，团队协作明显变顺', sub: '更偏平台工程。', career: 'data_plat' }
      ]
    },
    {
      id: 's4_cs_05',
      phase: 'career',
      text: '你更想和哪类团队一起工作？',
      opts: [
        { t: '和后端、基础设施、运维一起守住系统', sub: '更偏分布式与平台。', career: 'dist_sys_eng' },
        { t: '和算法、模型、平台一起把能力做成大规模服务', sub: '更偏 AI 基础设施。', career: 'ml_sys_eng' },
        { t: '和编译器、内核、底层工具团队一起打磨路径', sub: '更偏编译器工程。', career: 'compiler_eng' },
        { t: '和数据、分析、业务团队一起把底座搭起来', sub: '更偏数据平台。', career: 'data_plat' }
      ]
    }
  ],
  ds: [
    {
      id: 's4_ds_01',
      phase: 'career',
      text: '如果以后主要做数据相关工作，你最想把价值体现在什么地方？',
      opts: [
        { t: '把“到底有没有用”这件事判断清楚', sub: '更偏因果、实验和评估。', career: 'causal_sci' },
        { t: '给业务和产品提供持续可用的分析与判断', sub: '更偏数据科学。', career: 'data_sci' },
        { t: '把数据底座和流程做稳，让别人放心依赖', sub: '更偏数据工程。', career: 'data_eng_role' },
        { t: '把方法真正放进某个行业场景里解决问题', sub: '更偏领域数据科学。', career: 'domain_ds' }
      ]
    },
    {
      id: 's4_ds_02',
      phase: 'career',
      text: '你更能接受哪种压力来源？',
      opts: [
        { t: '结论必须严谨，宁可慢一点也不能说错', sub: '更偏因果/统计。', career: 'causal_sci' },
        { t: '业务期待你快速给出方向和判断', sub: '更偏数据科学。', career: 'data_sci' },
        { t: '一旦链路坏了，很多下游工作都会受影响', sub: '更偏数据工程。', career: 'data_eng_role' },
        { t: '模型和实验上线后要长期稳定、可追踪', sub: '更偏 MLOps。', career: 'mlops_eng' }
      ]
    },
    {
      id: 's4_ds_03',
      phase: 'career',
      text: '如果薪资、行业门槛和工作节奏绑在一起，你更偏哪种组合？',
      opts: [
        { t: '门槛高一点、节奏慢一点，但问题更值得做', sub: '更偏医疗/领域数据科学。', career: 'domain_ds' },
        { t: '反馈快、回报直接，但压力和波动也大', sub: '更偏量化/风险相关。', career: 'quant_ds' },
        { t: '影响大、节奏快，工作内容贴近产品和业务', sub: '更偏数据科学。', career: 'data_sci' },
        { t: '稳定做平台和流程，长期护城河强', sub: '更偏数据工程或 MLOps。', career: 'data_eng_role' }
      ]
    },
    {
      id: 's4_ds_04',
      phase: 'career',
      text: '你更喜欢哪种合作关系？',
      opts: [
        { t: '和研究、策略或评估团队一起把判断做严谨', sub: '更偏因果/实验。', career: 'causal_sci' },
        { t: '和产品、运营、商业团队一起把问题说清楚', sub: '更偏数据科学。', career: 'data_sci' },
        { t: '和工程、平台团队一起把数据底座搭稳', sub: '更偏数据工程。', career: 'data_eng_role' },
        { t: '和算法、平台团队一起把模型上线和监控做顺', sub: '更偏 MLOps。', career: 'mlops_eng' }
      ]
    },
    {
      id: 's4_ds_05',
      phase: 'career',
      text: '如果只能选一种职业成就感，你更想要哪种？',
      opts: [
        { t: '结论足够可信，别人愿意拿它做重要决策', sub: '更偏因果/统计。', career: 'causal_sci' },
        { t: '分析结果真的改变了产品、策略或增长方向', sub: '更偏数据科学。', career: 'data_sci' },
        { t: '平台和链路稳到大家几乎感受不到摩擦', sub: '更偏数据工程。', career: 'data_eng_role' },
        { t: '很多重复工作被平台化，团队效率明显提高', sub: '更偏 MLOps。', career: 'mlops_eng' }
      ]
    }
  ],
  robotics: [
    {
      id: 's4_rb_01',
      phase: 'career',
      text: '如果以后主要做机器人相关工作，你更想过哪种日常？',
      opts: [
        { t: '让机器学会新技能、迁到新场景里也能用', sub: '更偏机器人学习。', career: 'robot_learn' },
        { t: '让系统更稳地看懂环境、看见风险和边界', sub: '更偏感知。', career: 'perception_eng' },
        { t: '让机器人知道自己在哪、地图对不对、路线该怎么走', sub: '更偏定位与建图。', career: 'slam_eng' },
        { t: '把整套系统做成在真实现场真的能长期工作', sub: '更偏机器人工程。', career: 'robotics_eng' }
      ]
    },
    {
      id: 's4_rb_02',
      phase: 'career',
      text: '你更能接受哪种工作压力？',
      opts: [
        { t: '仿真和现实差很多，要不断做迁移和验证', sub: '更偏机器人学习。', career: 'robot_learn' },
        { t: '传感器、环境和边缘场景总会出幺蛾子', sub: '更偏感知。', career: 'perception_eng' },
        { t: '系统一旦判断错了，后果会很直接', sub: '更偏自主系统。', career: 'av_eng' },
        { t: '系统必须和人一起工作，不能只在 demo 里成立', sub: '更偏 HRI。', career: 'hri_researcher' }
      ]
    },
    {
      id: 's4_rb_03',
      phase: 'career',
      text: '如果薪资、节奏和现场环境绑在一起，你更想选哪种？',
      opts: [
        { t: '慢一点没关系，但希望问题更深、更通用', sub: '更偏机器人学习。', career: 'robot_learn' },
        { t: '现场复杂也能接受，但希望结果和任务完成强相关', sub: '更偏机器人工程或自主系统。', career: 'robotics_eng' },
        { t: '节奏快一点没关系，但希望每天都能看见真实反馈', sub: '更偏感知或 SLAM。', career: 'slam_eng' },
        { t: '愿意多花时间在安全、信任和协作上', sub: '更偏 HRI。', career: 'hri_researcher' }
      ]
    },
    {
      id: 's4_rb_04',
      phase: 'career',
      text: '你更想被哪种评价方式认可？',
      opts: [
        { t: '因为机器学会了以前不会的能力', sub: '更偏机器人学习。', career: 'robot_learn' },
        { t: '因为系统在复杂环境里也能稳稳看懂世界', sub: '更偏感知。', career: 'perception_eng' },
        { t: '因为机器人或车在真实环境里真的能跑起来', sub: '更偏自主系统。', career: 'av_eng' },
        { t: '因为人和机器人合作时更安心、更顺手', sub: '更偏 HRI。', career: 'hri_researcher' }
      ]
    },
    {
      id: 's4_rb_05',
      phase: 'career',
      text: '如果只能选一种职业成就感，你更想要哪种？',
      opts: [
        { t: '系统学到了能迁到别处的新能力', sub: '更偏机器人学习。', career: 'robot_learn' },
        { t: '系统对环境的理解终于足够可靠', sub: '更偏感知。', career: 'perception_eng' },
        { t: '定位、地图和导航终于不再反复漂掉', sub: '更偏 SLAM。', career: 'slam_eng' },
        { t: '整套系统终于在真实现场稳定完成任务', sub: '更偏机器人工程。', career: 'robotics_eng' }
      ]
    }
  ],
  ee: [
    {
      id: 's4_ee_01',
      phase: 'career',
      text: '如果以后主要做 ECE / EE 相关工作，你更想过哪种日常？',
      opts: [
        { t: '和真实设备、波形、传感器链路打交道，把输入做稳', sub: '更偏信号/DSP。', career: 'dsp_eng' },
        { t: '和控制回路、反馈响应打交道，让系统稳准快', sub: '更偏控制。', career: 'embedded_eng' },
        { t: '和芯片、模块、实现流程打交道，把设计真正做成', sub: '更偏 VLSI。', career: 'vlsi_eng' },
        { t: '和链路、协议、无线系统打交道，让传输更可靠', sub: '更偏通信。', career: 'dsp_eng' }
      ]
    },
    {
      id: 's4_ee_02',
      phase: 'career',
      text: '你更能接受哪种压力来源？',
      opts: [
        { t: '误差、噪声和边缘条件总在挑战你', sub: '更偏信号与前端。', career: 'dsp_eng' },
        { t: '真实系统一旦失稳，后果就很直接', sub: '更偏控制与嵌入式。', career: 'embedded_eng' },
        { t: '节点很紧、细节很多，必须把实现做扎实', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '长期做底层工具或流程优化，成果不会立刻被看见', sub: '更偏 EDA。', career: 'eda_eng' }
      ]
    },
    {
      id: 's4_ee_03',
      phase: 'career',
      text: '如果薪资、稳定性和行业门槛绑在一起，你更偏哪种？',
      opts: [
        { t: '门槛高、周期长，但底层护城河强', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '节奏稳、贴近真实设备，长期价值明确', sub: '更偏嵌入式/控制。', career: 'embedded_eng' },
        { t: '需要长期磨链路和输入质量，但专业性很强', sub: '更偏信号。', career: 'dsp_eng' },
        { t: '做工具和流程，影响一整条实现链', sub: '更偏 EDA。', career: 'eda_eng' }
      ]
    },
    {
      id: 's4_ee_04',
      phase: 'career',
      text: '你更喜欢哪种成就感？',
      opts: [
        { t: '信号更干净、系统看得更准、链路更稳', sub: '更偏信号。', career: 'dsp_eng' },
        { t: '设备或控制系统终于稳稳地跑起来', sub: '更偏嵌入式/控制。', career: 'embedded_eng' },
        { t: '复杂设计终于被做成真正可量产的实现', sub: '更偏 VLSI。', career: 'vlsi_eng' },
        { t: '设计和验证效率被明显拉高，整个团队都变快', sub: '更偏 EDA。', career: 'eda_eng' }
      ]
    },
    {
      id: 's4_ee_05',
      phase: 'career',
      text: '你更想和哪类团队一起工作？',
      opts: [
        { t: '传感器、算法和设备链路团队', sub: '更偏信号。', career: 'dsp_eng' },
        { t: '设备、控制、现场系统团队', sub: '更偏嵌入式/控制。', career: 'embedded_eng' },
        { t: '芯片设计、验证和实现团队', sub: '更偏 VLSI。', career: 'vlsi_eng' },
        { t: '设计工具、流程和方法团队', sub: '更偏 EDA。', career: 'eda_eng' }
      ]
    }
  ],
  ce: [
    {
      id: 's4_ce_01',
      phase: 'career',
      text: '如果以后主要做 CE 相关工作，你更想过哪种日常？',
      opts: [
        { t: '看性能、看带宽、看执行路径，找出真正瓶颈', sub: '更偏体系结构。', career: 'npu_arch' },
        { t: '把软件和硬件链路一起打通，让系统更顺', sub: '更偏软硬件协同。', career: 'ai_hw_eng' },
        { t: '做底层实现和验证，把复杂设计真正做成', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '做固件、驱动和设备端底层，让系统长期稳定运行', sub: '更偏底层软件与设备。', career: 'embedded_eng' }
      ]
    },
    {
      id: 's4_ce_02',
      phase: 'career',
      text: '你更能接受哪种压力来源？',
      opts: [
        { t: '早期架构选择很关键，一步选错代价很大', sub: '更偏架构岗。', career: 'npu_arch' },
        { t: '天天盯性能和资源利用率，必须持续榨出提升', sub: '更偏 AI 硬件性能岗。', career: 'ai_hw_eng' },
        { t: '实现节点很紧，细节和边界条件特别多', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '设备一旦出问题，底层链路必须第一时间看清', sub: '更偏设备/固件。', career: 'embedded_eng' }
      ]
    },
    {
      id: 's4_ce_03',
      phase: 'career',
      text: '如果薪资、节奏和工作层次绑在一起，你更偏哪种？',
      opts: [
        { t: '前期取舍重、回报高、长期护城河也强', sub: '更偏架构。', career: 'npu_arch' },
        { t: '离业务价值和性能结果都很近，节奏会更快', sub: '更偏 AI 硬件/协同优化。', career: 'ai_hw_eng' },
        { t: '周期长、实现深，但“做成”的成就感很强', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '节奏稳、问题具体、贴近真实设备和平台', sub: '更偏底层软件。', career: 'embedded_eng' }
      ]
    },
    {
      id: 's4_ce_04',
      phase: 'career',
      text: '你更喜欢哪种成就感？',
      opts: [
        { t: '你定下的整体方向成了后面很多实现的基础', sub: '更偏架构。', career: 'npu_arch' },
        { t: '同样任务终于能跑得更快、更省、更稳', sub: '更偏 AI 硬件性能。', career: 'ai_hw_eng' },
        { t: '复杂设计终于流到可验证、可实现、可量产', sub: '更偏芯片/VLSI。', career: 'vlsi_eng' },
        { t: '底层系统终于稳定，设备端问题也更容易定位', sub: '更偏固件/底层软件。', career: 'embedded_eng' }
      ]
    },
    {
      id: 's4_ce_05',
      phase: 'career',
      text: '你更想和哪类团队一起工作？',
      opts: [
        { t: '架构、性能和平台方向团队', sub: '更偏架构。', career: 'npu_arch' },
        { t: '编译器、运行时、模型与硬件协同团队', sub: '更偏 AI 硬件/协同优化。', career: 'ai_hw_eng' },
        { t: '设计、验证、实现和工具链团队', sub: '更偏芯片/VLSI 或 EDA。', career: 'eda_eng' },
        { t: '设备、固件、驱动和系统联调团队', sub: '更偏底层软件。', career: 'embedded_eng' }
      ]
    }
  ],
  or: [
    {
      id: 's4_or_01',
      phase: 'career',
      text: '如果以后主要做 Math / OR 相关工作，你更想过哪种日常？',
      opts: [
        { t: '围绕市场、价格和快速反馈做判断', sub: '更偏量化研究。', career: 'quant_researcher' },
        { t: '围绕排班、调度、供应链和资源分配做方案', sub: '更偏运筹科学。', career: 'or_sci' },
        { t: '围绕求解效率和数值表现把方法做成系统', sub: '更偏优化工程。', career: 'optim_eng' },
        { t: '围绕风险、不确定性和稳健决策做判断', sub: '更偏风险科学。', career: 'risk_sci' }
      ]
    },
    {
      id: 's4_or_02',
      phase: 'career',
      text: '你更能接受哪种压力来源？',
      opts: [
        { t: '反馈快、结果直接，但波动和竞争也很强', sub: '更偏量化研究。', career: 'quant_researcher' },
        { t: '现实约束很多，方案必须真的能落地执行', sub: '更偏运筹科学。', career: 'or_sci' },
        { t: '算法得又快又稳，算不出来就没有价值', sub: '更偏优化工程。', career: 'optim_eng' },
        { t: '很多时候最重要的是把最坏情况想清楚', sub: '更偏风险科学。', career: 'risk_sci' }
      ]
    },
    {
      id: 's4_or_03',
      phase: 'career',
      text: '如果薪资、稳定性和工作节奏绑在一起，你更偏哪种？',
      opts: [
        { t: '高波动高回报也可以，只要问题足够刺激', sub: '更偏量化研究。', career: 'quant_researcher' },
        { t: '希望方案真正改变运营效率和资源利用率', sub: '更偏运筹科学。', career: 'or_sci' },
        { t: '希望长期形成“很会做复杂求解”的技术护城河', sub: '更偏优化工程。', career: 'optim_eng' },
        { t: '希望长期做稳健决策，少犯代价很高的错', sub: '更偏风险或决策科学。', career: 'decision_sci' }
      ]
    },
    {
      id: 's4_or_04',
      phase: 'career',
      text: '你更喜欢哪种成就感？',
      opts: [
        { t: '模型和判断真的帮团队赚到钱或避开损失', sub: '更偏量化研究。', career: 'quant_researcher' },
        { t: '同样资源下，系统明显更顺、更省、更可执行', sub: '更偏运筹科学。', career: 'or_sci' },
        { t: '复杂求解终于又快又稳，别人能反复复用', sub: '更偏优化工程。', career: 'optim_eng' },
        { t: '团队在高不确定下也能更稳地做决定', sub: '更偏风险/决策科学。', career: 'decision_sci' }
      ]
    },
    {
      id: 's4_or_05',
      phase: 'career',
      text: '你更想和哪类团队一起工作？',
      opts: [
        { t: '交易、策略、价格和市场团队', sub: '更偏量化研究。', career: 'quant_researcher' },
        { t: '运营、供应链、调度和资源配置团队', sub: '更偏运筹科学。', career: 'or_sci' },
        { t: '平台、求解器、复杂系统方法团队', sub: '更偏优化工程。', career: 'optim_eng' },
        { t: '风险、合规、稳健性要求很高的团队', sub: '更偏风险科学。', career: 'risk_sci' }
      ]
    }
  ]
};
