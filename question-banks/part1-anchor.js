window.STAGE1_QS = [
  {
    id: 's1_01',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪类研究主线最值得你用几年时间持续打磨？',
    opts: [
      { t: '把一个复杂问题讲出更一般的规律，让后来的人也能复用', d: { ml_theory: 2, stat_learn: 1, repr: 1, foundation: 1 } },
      { t: '把一套复杂系统做成很多人都敢长期依赖的底座', d: { systems: 2, dist_sys: 1, cloud: 1, data_mgmt: 1 } },
      { t: '把杂乱信息整理成别人愿意据此行动的判断依据', d: { applied_stats: 2, predictive_modeling: 1, bayes: 1, decision_analytics: 1 } },
      { t: '让机器在真实环境里更会看、更会判断、也更会行动', d: { robotics: 2, perception: 1, intelligent_mobility: 1, motion: 1 } },
      { t: '让设备、信号或反馈链路在真实工况下长期稳住', d: { sensor_signal: 1, autonomous_control: 1, realtime: 1, nextgen_comm: 1 } },
      { t: '在目标和约束很多时，排出更优也更可执行的方案', d: { conv_opt: 1, resource_alloc: 1, scheduling: 1, decision_science: 1 } },
      { t: '把算力、内存和数据通路组织得更高效', d: { arch: 1, processor_arch: 1, mem_sys: 1, hw_sw: 1 } }
    ]
  },
  {
    id: 's1_02',
    phase: 'anchor',
    cat: '粗分流',
    text: '拿到一个陌生而复杂的问题，你最自然会先从哪一层切进去？',
    opts: [
      { t: '先弄清这个问题真正成立的前提、结构和边界', d: { theory: 1, ml_theory: 1, stat_learn: 1, foundation: 1 } },
      { t: '先把组件、接口、状态和依赖关系理顺', d: { systems: 2, dist_sys: 1, cloud: 1, db: 1 } },
      { t: '先看数据够不够、准不准、能支持什么判断', d: { stats: 1, data_qual: 1, applied_stats: 1, predictive_modeling: 1 } },
      { t: '先看感知、决策和动作这条闭环里哪一环最可能出问题', d: { perception: 1, localization_mapping: 1, motion: 1, intelligent_mobility: 1 } },
      { t: '先看噪声、时延、扰动和反馈是不是关键瓶颈', d: { sensor_signal: 1, control: 1, realtime: 1, autonomous_control: 1 } },
      { t: '先把目标、约束和资源列出来，再看怎么建模', d: { optim: 1, conv_opt: 1, resource_alloc: 1, decision_science: 1 } },
      { t: '先看算、存、传这几层里哪一层最先卡住', d: { arch: 1, processor_arch: 1, mem_sys: 1, co_optimization: 1 } }
    ]
  },
  {
    id: 's1_03',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪类“这件事为什么又不对了”最容易让你停下来追到底？',
    opts: [
      { t: '方法换了场景就失灵了，却说不清到底差在哪', d: { transfer: 1, ml_theory: 1, stat_learn: 1, foundation: 1 } },
      { t: '本地能跑，一放大规模就开始抖、慢或者挂', d: { dist_sys: 1, cloud: 1, systems: 1, stream: 1 } },
      { t: '结论看起来像对的，后来发现判断方向完全偏了', d: { stats: 1, bayes: 1, data_qual: 1, experimentation: 1 } },
      { t: '仿真没问题，一到真环境就频繁失手', d: { robotics: 1, intelligent_mobility: 1, perception: 1, field_robotics: 1 } },
      { t: '加上噪声、扰动或时延后，系统一下就不稳了', d: { control: 1, sensor_signal: 1, stat_signal: 1, realtime: 1 } },
      { t: '每一步都说得过去，但合起来就是不够优', d: { optim: 1, comb_opt: 1, dynamic_prog: 1, planning_uncertainty: 1 } },
      { t: '功能都对，但性能、功耗或带宽总是顾此失彼', d: { arch: 1, mem_sys: 1, accelerator_arch: 1, ai_hw: 1 } }
    ]
  },
  {
    id: 's1_04',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果一个跨学科项目刚启动，你最想先研究哪一层技术问题？',
    opts: [
      { t: '把核心问题重新定义清楚，免得后面都建立在误解上', d: { theory: 1, ml_theory: 1, repr: 1, formal: 1 } },
      { t: '把系统边界、依赖关系和演进路径梳清楚', d: { systems: 2, data_mgmt: 1, dist_sys: 1, cloud: 1 } },
      { t: '把指标、口径和证据链讲明白，让判断更靠谱', d: { applied_stats: 1, stats: 1, decision_analytics: 1, data_qual: 1 } },
      { t: '把“看—想—做”的闭环真正跑通', d: { robotics: 1, intelligent_mobility: 1, motion: 1, perception: 1 } },
      { t: '把设备、信号或控制链路调到可控可复现', d: { image_signal: 1, sensor_signal: 1, control: 1, embedded: 1 } },
      { t: '把目标、约束和资源安排写成可执行方案', d: { resource_alloc: 1, scheduling: 1, optim: 1, decision_science: 1 } },
      { t: '把底层算力路径和数据搬运重新组织好', d: { processor_arch: 1, mem_sys: 1, hw_sw: 1, system_integration: 1 } }
    ]
  },
  {
    id: 's1_05',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果要长期围着一个技术主线做深入研究，你更愿意把时间花在哪类对象上？',
    opts: [
      { t: '问题的共性结构、理论边界和可复用的方法', d: { theory: 1, ml_theory: 1, stat_learn: 1, foundation: 1 } },
      { t: '复杂系统的边界、状态流转和长期治理', d: { systems: 2, dist_sys: 1, cloud: 1, security: 1 } },
      { t: '数据、证据和结论之间的判断链条', d: { stats: 1, bayes: 1, decision_analytics: 1, domain_ds: 1 } },
      { t: '机器在真实环境里的感知、决策和动作闭环', d: { robotics: 1, intelligent_mobility: 1, perception: 1, robot_learning: 1 } },
      { t: '现实工况下的信号、反馈和动态响应链路', d: { sensor_signal: 1, control: 1, nextgen_comm: 1, realtime: 1 } },
      { t: '多约束条件下的优化、调度和资源安排', d: { optim: 1, resource_alloc: 1, scheduling: 1, decision_science: 1 } },
      { t: '算力、内存和数据通路这类底层组织方式', d: { arch: 1, ai_hw: 1, mem_sys: 1, co_optimization: 1 } }
    ]
  },
  {
    id: 's1_06',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪类“材料”最像你愿意天天打交道的东西？',
    opts: [
      { t: '假设、结构、表示、证明和方法边界', d: { theory: 1, repr: 1, ml_theory: 1, formal: 1 } },
      { t: '服务状态、调用链、事务、容量和接口', d: { systems: 1, dist_sys: 1, db: 1, cloud: 1 } },
      { t: '日志、样本、波动、口径和结果解释', d: { stats: 1, data_qual: 1, ts_anal: 1, decision_analytics: 1 } },
      { t: '地图、轨迹、传感器输入和下一步动作', d: { slam: 1, perception: 1, motion: 1, intelligent_mobility: 1 } },
      { t: '波形、反馈、时延、噪声和设备状态', d: { stat_signal: 1, control: 1, sensor_signal: 1, image_signal: 1 } },
      { t: '约束表、目标函数、排程表和资源配额', d: { optim: 1, scheduling: 1, resource_alloc: 1, stoch: 1 } },
      { t: '缓存命中、带宽分配、数据搬运和执行路径', d: { mem_sys: 1, processor_arch: 1, ai_hw: 1, hw_sw: 1 } }
    ]
  },
  {
    id: 's1_07',
    phase: 'anchor',
    cat: '粗分流',
    text: '项目推进到一半突然卡住时，你最想先补哪一层技术能力？',
    opts: [
      { t: '把核心假设和问题定义补清楚', d: { theory: 1, foundation: 1, ml_theory: 1, bayes_ml: 1 } },
      { t: '把接口、状态和治理方式补扎实', d: { systems: 2, data_mgmt: 1, dist_sys: 1, cloud: 1 } },
      { t: '把数据口径、评估方式和证据链补完整', d: { experimentation: 1, stats: 1, data_qual: 1, bayes: 1 } },
      { t: '把感知、定位、规划或动作闭环补顺', d: { slam: 1, perception: 1, intelligent_mobility: 1, motion: 1 } },
      { t: '把传感、反馈和动态响应补稳定', d: { sensor_signal: 1, control: 1, autonomous_control: 1, realtime: 1 } },
      { t: '把目标、约束和资源分配方式补合理', d: { decision_science: 1, resource_alloc: 1, scheduling: 1, planning_uncertainty: 1 } },
      { t: '把算、存、传和软硬件协同补高效', d: { mem_sys: 1, arch: 1, hw_sw: 1, accelerator_arch: 1 } }
    ]
  },
  {
    id: 's1_08',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果未来几年只允许你刻意练一种核心研究能力，你更想练哪一种？',
    opts: [
      { t: '把复杂问题抽到别人也能复用的程度', d: { ml_theory: 1, theory: 1, repr: 1, stat_learn: 1 } },
      { t: '把复杂系统做成长期可维护的公共能力', d: { systems: 2, dist_sys: 1, cloud: 1, security: 1 } },
      { t: '把数据、证据和结论之间的链条守扎实', d: { stats: 1, applied_stats: 1, decision_analytics: 1, bayes: 1 } },
      { t: '把机器在现场的闭环越调越顺', d: { robotics: 1, motion: 1, intelligent_mobility: 1, robot_learning: 1 } },
      { t: '把噪声、反馈和设备状态压进稳定范围', d: { control: 1, sensor_signal: 1, stat_signal: 1, embedded: 1 } },
      { t: '把复杂约束写成真正能执行的决策方案', d: { conv_opt: 1, resource_alloc: 1, scheduling: 1, decision_science: 1 } },
      { t: '把算力、内存和通路组织到极致效率', d: { processor_arch: 1, mem_sys: 1, accelerator_arch: 1, co_optimization: 1 } }
    ]
  },
  {
    id: 's1_09',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种研究约束环境反而会让你更想继续往下做？',
    opts: [
      { t: '问题很抽象，但一旦讲通会带来长久解释力', d: { theory: 1, ml_theory: 1, stat_learn: 1, prob_ml: 1 } },
      { t: '组件很多、状态很多，不能乱也不能掉', d: { systems: 2, dist_sys: 1, db: 1, cloud: 1 } },
      { t: '信息不完整，结论却还必须站得住', d: { bayes: 1, stats: 1, uq: 1, decision_analytics: 1 } },
      { t: '环境持续变化，系统必须一边感知一边调整', d: { robotics: 1, intelligent_mobility: 1, perception: 1, field_robotics: 1 } },
      { t: '噪声、干扰和时延都是真实存在、躲不开的', d: { sensor_signal: 1, control: 1, comm_networks: 1, realtime: 1 } },
      { t: '目标彼此冲突，必须在很多取舍里找平衡', d: { optim: 1, stoch: 1, scheduling: 1, resource_alloc: 1 } },
      { t: '资源边界很硬，但性能要求一点都不能降', d: { arch: 1, mem_sys: 1, ai_hw: 1, edge_hw_platform: 1 } }
    ]
  },
  {
    id: 's1_10',
    phase: 'anchor',
    cat: '粗分流',
    text: '同样是在让系统更靠谱，你更想守哪一层？',
    opts: [
      { t: '让能力和方法本身更稳，不是一换场景就失效', d: { foundation: 1, transfer: 1, ml_theory: 1, safety: 1 } },
      { t: '让服务链路长期稳定、恢复快、治理清楚', d: { systems: 2, cloud: 1, dist_sys: 1, storage_sys: 1 } },
      { t: '让判断依据更扎实，知道什么时候该信、什么时候该停', d: { stats: 1, bayes: 1, data_qual: 1, experimentation: 1 } },
      { t: '让系统在真实场景里更会理解环境、决定下一步', d: { intelligent_mobility: 1, perception: 1, robotics: 1, robot_learning: 1 } },
      { t: '让传感、反馈和控制链在现实工况下不漂不炸', d: { control: 1, sensor_signal: 1, stat_signal: 1, cps: 1 } },
      { t: '让整体方案在限制很多时依然安排得合理', d: { decision_science: 1, scheduling: 1, resource_alloc: 1, planning_uncertainty: 1 } },
      { t: '让底层硬件平台把性能真正跑出来', d: { ai_hw: 1, processor_arch: 1, mem_sys: 1, device_edge_cloud: 1 } }
    ]
  },
  {
    id: 's1_11',
    phase: 'anchor',
    cat: '粗分流',
    text: '如果项目最终要落到车、机器人或设备上，你更想优先补哪块核心技术？',
    opts: [
      { t: '让核心能力本身更聪明，遇到新情况也不容易失手', d: { foundation: 1, applied_ai: 1, multimodal: 1, llm: 1 } },
      { t: '让整套软件和平台链路长期稳定、方便迭代', d: { systems: 2, dist_sys: 1, mlops: 1, cloud: 1 } },
      { t: '让日志、指标和评估体系能及时发现哪里开始跑偏', d: { experimentation: 1, data_qual: 1, mlops: 1, ts_anal: 1 } },
      { t: '让系统更会理解环境、决定下一步该怎么做', d: { embodied: 1, perception: 1, intelligent_mobility: 1, vla: 1 } },
      { t: '让感知、执行器和反馈回路在真实世界里始终稳得住', d: { control: 1, sensor_signal: 1, realtime: 1, autonomous_control: 1 } },
      { t: '让路线、资源和任务安排在复杂限制下依然合理', d: { dynamic_prog: 1, resource_alloc: 1, scheduling: 1, planning_uncertainty: 1 } },
      { t: '让车端或机端的算力、内存和通路不拖后腿', d: { ai_hw: 1, mem_sys: 1, processor_arch: 1, edge_hw_platform: 1 } }
    ]
  },
  {
    id: 's1_12',
    phase: 'anchor',
    cat: '粗分流',
    text: '哪种技术进展最像你愿意持续追下去的主线成果？',
    opts: [
      { t: '原本混乱的问题终于被讲得更清楚了', d: { theory: 1, ml_theory: 1, repr: 1, xai: 1 } },
      { t: '原本爱出问题的系统终于长期稳住了', d: { systems: 2, dist_sys: 1, cloud: 1, security: 1 } },
      { t: '原本靠感觉的判断终于有了扎实依据', d: { stats: 1, bayes: 1, applied_stats: 1, decision_analytics: 1 } },
      { t: '机器在复杂场景里真的少失手了', d: { robotics: 1, intelligent_mobility: 1, perception: 1, visual_navigation: 1 } },
      { t: '系统在真实工况下又稳又准地跑起来了', d: { sensor_signal: 1, control: 1, realtime: 1, edge_devices: 1 } },
      { t: '同样资源下方案明显更值、更能落地', d: { optim: 1, scheduling: 1, revenue_opt: 1, resource_alloc: 1 } },
      { t: '底层路径理顺后，性能一下上了一个台阶', d: { processor_arch: 1, mem_sys: 1, ai_hw: 1, co_optimization: 1 } }
    ]
  },
  {
    id: 's1_13',
    phase: 'anchor',
    cat: '粗分流',
    text: '同样是在复杂平台里，你更自然会先优化哪一层？',
    opts: [
      { t: '能力和方法的边界，看看系统到底学会了什么、没学会什么', d: { foundation: 1, ml_theory: 1, safety: 1, transfer: 1 } },
      { t: '服务边界和状态流转，让系统不因为复杂度上涨而失控', d: { systems: 2, dist_sys: 1, data_mgmt: 1, cloud: 1 } },
      { t: '数据、指标和判断链条，让结论更能被信任和采用', d: { decision_analytics: 1, experimentation: 1, data_qual: 1, business_intel: 1 } },
      { t: '场景理解和任务决策，让机器知道该往哪走、该做什么', d: { perception: 1, intelligent_mobility: 1, motion: 1, vla: 1 } },
      { t: '反馈、噪声和动态响应，让物理系统别一复杂就发散', d: { control: 1, stat_signal: 1, sensor_signal: 1, image_signal: 1 } },
      { t: '目标、约束和资源配置，让复杂系统整体更会取舍', d: { optim: 1, resource_alloc: 1, scheduling: 1, decision_science: 1 } },
      { t: '算力组织和数据搬运，让平台底层别白白浪费效率', d: { arch: 1, mem_sys: 1, hw_sw: 1, accelerator_arch: 1 } }
    ]
  },
  {
    id: 's1_14',
    phase: 'anchor',
    cat: '粗分流',
    text: '读完一个复杂项目的复盘后，你最想继续往下追问哪一类问题？',
    opts: [
      { t: '这件事真正成立的条件是什么，哪些地方不能想当然', d: { theory: 1, ml_theory: 1, stat_learn: 1, safety: 1 } },
      { t: '系统哪条链路最脆，怎么补才能长期稳住', d: { systems: 2, dist_sys: 1, cloud: 1, storage_sys: 1 } },
      { t: '哪些结论可以放心用，哪些只是阶段性信号', d: { stats: 1, bayes: 1, experimentation: 1, data_qual: 1 } },
      { t: '系统在现场到底看到了什么、想了什么、为什么做出这个动作', d: { perception: 1, intelligent_mobility: 1, robotics: 1, hri: 1 } },
      { t: '现实工况里的噪声、时延和反馈到底怎样影响表现', d: { sensor_signal: 1, control: 1, comm_networks: 1, autonomous_control: 1 } },
      { t: '如果要更值、更稳、更能落地，方案应该怎么重新安排', d: { optim: 1, resource_alloc: 1, revenue_opt: 1, planning_uncertainty: 1 } },
      { t: '如果要让平台更强，算、存、传应该先改哪层', d: { arch: 1, mem_sys: 1, ai_hw: 1, co_optimization: 1 } }
    ]
  }
];
