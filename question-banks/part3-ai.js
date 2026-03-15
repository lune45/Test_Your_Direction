window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ai = [
  {
    id: 's3_ai_01',
    phase: 'deep',
    cat: 'AI 深挖 / 研究方向',
    triggerDirs: ['foundation', 'llm', 'multimodal', 'generative'],
    text: '如果 AI 已经是你的主方向，哪类长期主线最能让你保持投入？',
    opts: [
      { t: '做更通用的基础模型，让很多下游任务都从中受益', d: { foundation: 3, llm: 1, multimodal: 1 } },
      { t: '做语言智能，让系统更会理解、推理和对话', d: { llm: 3, nlp: 2, ir: 1 } },
      { t: '做多模态，让文字、图像、语音一起协同工作', d: { multimodal: 3, vlm: 2, doc_intel: 1 } },
      { t: '做生成式内容，让图像、视频或创作工具真正可用', d: { generative: 3, diffusion: 2, creative_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_02',
    phase: 'deep',
    cat: 'AI 深挖 / 学习范式',
    triggerDirs: ['ml_theory', 'repr', 'ssl', 'transfer'],
    text: '你更想把时间花在哪类“模型为什么会变强”的问题上？',
    opts: [
      { t: '它为什么能泛化，边界到底在哪里', d: { ml_theory: 3, stat_learn: 2, scaling: 1 } },
      { t: '怎样学到更好的内部表示，让后续任务更轻松', d: { repr: 3, ssl: 1, transfer: 1 } },
      { t: '没有很多标注时，怎样靠数据本身学到东西', d: { ssl: 3, repr: 2, transfer: 1 } },
      { t: '模型怎样更容易迁到新场景，不用每次重来', d: { transfer: 3, foundation: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_03',
    phase: 'deep',
    cat: 'AI 深挖 / 视觉与世界理解',
    triggerDirs: ['cv', 'video', 'vision3d', 'med_vision'],
    text: '如果你最后走向视觉类研究，更想长期钻哪类问题？',
    opts: [
      { t: '让系统更稳地看懂图片里的目标、关系和细节', d: { cv: 3, vlm: 1, applied_ai: 1 } },
      { t: '让系统理解连续视频里的事件、动作和因果链', d: { video: 3, multimodal: 1, cv: 1 } },
      { t: '让系统从图像恢复空间结构和三维世界', d: { vision3d: 3, cv: 1, generative: 1 } },
      { t: '让模型在医疗影像里给出更可靠的辅助判断', d: { med_vision: 3, cv: 1, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ai_04',
    phase: 'deep',
    cat: 'AI 深挖 / 决策与智能体',
    triggerDirs: ['rl', 'offline_rl', 'multiagent', 'planning_ai'],
    text: '如果你想研究“系统如何自己做决定”，最想进哪条线？',
    opts: [
      { t: '通过试错学策略，让系统自己找到更优动作', d: { rl: 3, planning_ai: 1, embodied: 1 } },
      { t: '先从历史数据里学，尽量减少昂贵的在线试错', d: { offline_rl: 3, rl: 1, causal: 1 } },
      { t: '研究很多智能体一起合作、竞争时会发生什么', d: { multiagent: 3, rl: 1, game_th: 1 } },
      { t: '让系统会规划、拆任务、按步骤完成复杂目标', d: { planning_ai: 3, llm: 1, rl: 1 } }
    ]
  },
  {
    id: 's3_ai_05',
    phase: 'deep',
    cat: 'AI 深挖 / 效率与部署',
    triggerDirs: ['efficient', 'quant', 'inf_opt', 'applied_ai'],
    text: '如果你更关心“能力怎样真正变成可用系统”，会更想深挖哪类问题？',
    opts: [
      { t: '让模型整体更省算力、更容易在真实环境中使用', d: { efficient: 3, applied_ai: 1, foundation: 1 } },
      { t: '做量化和压缩，在几乎不掉效果的前提下降成本', d: { quant: 3, efficient: 2, ai_hw: 1 } },
      { t: '把推理链路做快做稳，让延迟和成本都降下来', d: { inf_opt: 3, efficient: 1, sys_ai: 1 } },
      { t: '把模型能力真正接到用户场景和业务流程里', d: { applied_ai: 3, inf_opt: 1, llm: 1 } }
    ]
  },
  {
    id: 's3_ai_06',
    phase: 'deep',
    cat: 'AI 深挖 / 语言与信息',
    triggerDirs: ['nlp', 'ir', 'recsys', 'speech'],
    text: '如果你留在“信息和语言”这条线，最想长期做哪类问题？',
    opts: [
      { t: '理解文本、抽取结构、让语言信息更可计算', d: { nlp: 3, doc_intel: 1, llm: 1 } },
      { t: '让系统更会找信息、更懂用户真正想问什么', d: { ir: 3, nlp: 1, llm: 1 } },
      { t: '让系统更懂用户兴趣和长期偏好，分发更合适的内容', d: { recsys: 3, ir: 1, applied_ai: 1 } },
      { t: '让机器更好处理语音、音频和自然说话场景', d: { speech: 3, nlp: 1, multimodal: 1 } }
    ]
  },
  {
    id: 's3_ai_07',
    phase: 'deep',
    cat: 'AI 深挖 / 可信与治理',
    triggerDirs: ['safety', 'xai', 'fairness', 'foundation'],
    text: '如果你最在意“模型该不该被相信”，更想长期做哪类研究？',
    opts: [
      { t: '让模型在关键场景下更安全、更不容易失控', d: { safety: 3, foundation: 1, llm: 1 } },
      { t: '让人能看懂模型为什么这样判断', d: { xai: 3, safety: 1, med_vision: 1 } },
      { t: '让系统对不同人群更公平，减少系统性偏差', d: { fairness: 3, safety: 1, applied_ai: 1 } },
      { t: '把可信和治理要求一开始就做进基础模型能力里', d: { foundation: 2, safety: 2, llm: 1 } }
    ]
  },
  {
    id: 's3_ai_08',
    phase: 'deep',
    cat: 'AI 深挖 / 数据与评测',
    triggerDirs: ['applied_ai', 'safety', 'xai', 'foundation'],
    text: '如果你更相信“把数据和评测设计好”才是能力上限的关键，最想长期做哪类问题？',
    opts: [
      { t: '设计更能看出真实能力差异的评测体系', d: { safety: 2, xai: 1, llm: 1, foundation: 1 } },
      { t: '把训练数据和后训练数据组织得更高质量、更少偏差', d: { foundation: 2, applied_ai: 1, fairness: 1, llm: 1 } },
      { t: '研究数据变化和分布偏移怎样影响模型上线表现', d: { applied_ai: 2, safety: 1, transfer: 1, efficient: 1 } },
      { t: '让模型评测更贴近真实工作流，而不是只刷 benchmark', d: { applied_ai: 2, safety: 1, llm: 1, xai: 1 } }
    ]
  },
  {
    id: 's3_ai_09',
    phase: 'deep',
    cat: 'AI 深挖 / 模型对齐与行为',
    triggerDirs: ['llm', 'safety', 'foundation', 'planning_ai'],
    text: '如果你最在意“模型最终会表现成什么样”，更想长期研究哪类问题？',
    opts: [
      { t: '让模型更会遵守人类偏好、目标和规则', d: { safety: 3, llm: 1, foundation: 1 } },
      { t: '让模型在长任务里保持稳定规划和执行能力', d: { planning_ai: 3, llm: 1, foundation: 1 } },
      { t: '让模型面对陌生任务时也更稳、更少崩掉', d: { transfer: 2, llm: 1, safety: 1, foundation: 1 } },
      { t: '让模型输出更可解释、更容易被人信任和修正', d: { xai: 3, safety: 1, applied_ai: 1 } }
    ]
  },
  {
    id: 's3_ai_10',
    phase: 'deep',
    cat: 'AI 深挖 / 行业落地',
    triggerDirs: ['applied_ai', 'multimodal', 'doc_intel', 'speech'],
    text: '如果你更看重“AI 最终在哪类场景里真有长期价值”，最想长期扎在哪条线？',
    opts: [
      { t: '企业文档、知识和工作流自动化', d: { doc_intel: 3, llm: 1, applied_ai: 1 } },
      { t: '语音、对话和自然交互系统', d: { speech: 3, nlp: 1, multimodal: 1 } },
      { t: '图文协同、视觉搜索和多模态助手', d: { multimodal: 3, vlm: 2, doc_intel: 1 } },
      { t: '行业场景里真正能省钱省人的 AI 应用系统', d: { applied_ai: 3, llm: 1, efficient: 1 } }
    ]
  }
];
