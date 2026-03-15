window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ds = [
  {
    id: 's3_ds_01',
    phase: 'deep',
    cat: 'DS 深挖 / 判断方式',
    triggerDirs: ['stats', 'bayes', 'causal', 'econom'],
    text: '如果数据科学已经是你的主方向，你最想长期精进哪种“判断方式”？',
    opts: [
      { t: '用统计规律判断现象是否稳定可靠', d: { stats: 3, bayes: 1, ds_sci: 1 } },
      { t: '把不确定性也写进结论里，而不是只给一个点答案', d: { bayes: 3, stats: 1, uq: 1 } },
      { t: '判断到底是什么真正导致了结果变化', d: { causal: 3, econom: 2, stats: 1 } },
      { t: '在真实政策、市场或行为问题里做更严格的识别', d: { econom: 3, causal: 2, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_02',
    phase: 'deep',
    cat: 'DS 深挖 / 数据工作形态',
    triggerDirs: ['ds_sci', 'ds_eng', 'mlops', 'domain_ds'],
    text: '你更想把时间花在哪类“数据工作形态”上？',
    opts: [
      { t: '做分析、建模型、解释结果，让判断更清楚', d: { ds_sci: 3, stats: 1, ts_anal: 1 } },
      { t: '做数据链路、平台和稳定供给，让别人能放心用数据', d: { ds_eng: 3, data_qual: 2, mlops: 1 } },
      { t: '做模型上线、监控和实验追踪，让生产环境更可控', d: { mlops: 3, ds_eng: 1, applied_ai: 1 } },
      { t: '把统计和建模方法放进具体行业，解决真实场景问题', d: { domain_ds: 3, causal: 1, ds_sci: 1 } }
    ]
  },
  {
    id: 's3_ds_03',
    phase: 'deep',
    cat: 'DS 深挖 / 时间与风险',
    triggerDirs: ['ts_anal', 'bayes', 'domain_ds', 'ds_sci'],
    text: '如果问题会随着时间不断变化，你更想长期研究哪类？',
    opts: [
      { t: '趋势、周期和异常，怎样更早被看见', d: { ts_anal: 3, stats: 1, ds_sci: 1 } },
      { t: '在信息不完整时怎样持续更新判断', d: { bayes: 3, stats: 1, causal: 1 } },
      { t: '在医疗、金融、制造这类场景里做长期预测和监测', d: { domain_ds: 3, ts_anal: 1, ds_sci: 1 } },
      { t: '把时间变化和业务决策真正连起来，而不只是画趋势图', d: { ds_sci: 2, ts_anal: 2, causal: 1 } }
    ]
  },
  {
    id: 's3_ds_04',
    phase: 'deep',
    cat: 'DS 深挖 / 因果与实验',
    triggerDirs: ['causal', 'econom', 'stats', 'ds_sci'],
    text: '如果你更在意“这个决策到底有没有用”，更想深挖哪类问题？',
    opts: [
      { t: '把实验设计做扎实，让结果更可信', d: { causal: 3, stats: 1, ds_sci: 1 } },
      { t: '在没有理想实验条件时，尽量从观测数据里做更好的识别', d: { econom: 3, causal: 2, stats: 1 } },
      { t: '把证据和不确定性表达得更完整，不夸大结论', d: { stats: 3, bayes: 1, causal: 1 } },
      { t: '把实验、因果和业务指标真正接进日常决策流程里', d: { ds_sci: 2, causal: 2, domain_ds: 1 } }
    ]
  },
  {
    id: 's3_ds_05',
    phase: 'deep',
    cat: 'DS 深挖 / 平台与质量',
    triggerDirs: ['ds_eng', 'data_qual', 'mlops', 'ds_sci'],
    text: '如果你更想让“数据这件事本身更可靠”，最想长期攻哪类问题？',
    opts: [
      { t: '让数据流转、清洗和存储更稳，不再反复返工', d: { ds_eng: 3, data_qual: 1, mlops: 1 } },
      { t: '让口径、血缘和质量检查更清楚，减少误判来源', d: { data_qual: 3, ds_eng: 2, stats: 1 } },
      { t: '让模型上线后更可观测、更能回滚、更容易复现实验', d: { mlops: 3, ds_eng: 1, applied_ai: 1 } },
      { t: '让这些能力更好服务分析和决策，而不是只停在平台层', d: { ds_sci: 2, ds_eng: 2, mlops: 1 } }
    ]
  },
  {
    id: 's3_ds_06',
    phase: 'deep',
    cat: 'DS 深挖 / 场景选择',
    triggerDirs: ['domain_ds', 'causal', 'ds_sci', 'bayes'],
    text: '如果你最后想把数据方法放进真实世界，哪类场景最像你会长期留下来的地方？',
    opts: [
      { t: '医疗、生物或健康场景，强调高门槛和高责任', d: { domain_ds: 3, bayes: 1, causal: 1 } },
      { t: '产品、增长或商业场景，强调快速判断和实验反馈', d: { ds_sci: 3, causal: 1, ts_anal: 1 } },
      { t: '金融、风险或策略场景，强调不确定性和稳健性', d: { bayes: 2, econom: 2, domain_ds: 1 } },
      { t: '政策、社会或公共事务场景，强调识别和解释', d: { econom: 3, causal: 2, stats: 1 } }
    ]
  },
  {
    id: 's3_ds_07',
    phase: 'deep',
    cat: 'DS 深挖 / 长期标签',
    triggerDirs: ['stats', 'causal', 'ds_eng', 'domain_ds'],
    text: '如果别人多年后想到你，会最希望是因为你在哪类能力上特别强？',
    opts: [
      { t: '方法严谨，做出的结论总是让人放心', d: { stats: 3, bayes: 1, causal: 1 } },
      { t: '判断清楚，能分辨“相关”和“真正有效”', d: { causal: 3, econom: 1, stats: 1 } },
      { t: '把数据底座搭得很稳，很多人都能从中受益', d: { ds_eng: 3, mlops: 1, data_qual: 1 } },
      { t: '能把统计和建模真正用到复杂行业问题里', d: { domain_ds: 3, ds_sci: 1, causal: 1 } }
    ]
  },
  {
    id: 's3_ds_08',
    phase: 'deep',
    cat: 'DS 深挖 / 结果表达',
    triggerDirs: ['stats', 'causal', 'ds_sci', 'domain_ds'],
    text: '如果最后要把分析结果交给别人使用，你最想长期练强哪种能力？',
    opts: [
      { t: '把结论讲得更严谨，别人一看就知道边界在哪里', d: { stats: 3, ds_sci: 1, bayes: 1 } },
      { t: '把“真的有效”这件事说清楚，而不只是展示相关性', d: { causal: 3, econom: 1, stats: 1 } },
      { t: '把分析结果真正转成可执行的业务或产品动作', d: { ds_sci: 3, domain_ds: 1, causal: 1 } },
      { t: '把复杂行业里的结论翻译成领域专家能信服的建议', d: { domain_ds: 3, ds_sci: 1, stats: 1 } }
    ]
  },
  {
    id: 's3_ds_09',
    phase: 'deep',
    cat: 'DS 深挖 / 研究素材',
    triggerDirs: ['ts_anal', 'causal', 'data_qual', 'bayes'],
    text: '如果未来一年都围着一种“数据材料”打磨，你更愿意是哪种？',
    opts: [
      { t: '长时间序列，想从变化趋势里提早发现信号', d: { ts_anal: 3, ds_sci: 1, bayes: 1 } },
      { t: '实验或准实验数据，想看决策前后到底差了什么', d: { causal: 3, econom: 1, stats: 1 } },
      { t: '口径复杂、质量不稳的数据，想先把底层打磨扎实', d: { data_qual: 3, ds_eng: 1, mlops: 1 } },
      { t: '噪声很多、信息不全的数据，想把不确定性表达清楚', d: { bayes: 3, stats: 1, uq: 1 } }
    ]
  },
  {
    id: 's3_ds_10',
    phase: 'deep',
    cat: 'DS 深挖 / 决策距离',
    triggerDirs: ['ds_sci', 'causal', 'ds_eng', 'domain_ds'],
    text: '你更想让自己的数据工作离最终决策有多近？',
    opts: [
      { t: '贴近业务和产品，每次分析都最好能直接影响动作', d: { ds_sci: 3, causal: 1, domain_ds: 1 } },
      { t: '贴近证据判断，确保任何决策前都有可靠依据', d: { causal: 3, stats: 1, bayes: 1 } },
      { t: '贴近底层供给，只要数据链路稳，别人就能做出好决策', d: { ds_eng: 3, data_qual: 2, mlops: 1 } },
      { t: '贴近具体行业问题，把方法真的嵌进场景里', d: { domain_ds: 3, ds_sci: 1, causal: 1 } }
    ]
  }
];
