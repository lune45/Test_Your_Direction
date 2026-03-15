window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.or = [
  {
    id: 's3_or_01',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 主线选择',
    triggerDirs: ['optim', 'or_ops', 'stoch', 'sci_comp'],
    text: '如果 Math / OR 已经是你的主方向，你最想长期守哪条主线？',
    opts: [
      { t: '把最优解本身找得更快、更稳、更可解释', d: { optim: 3, conv_opt: 1, comb_opt: 1 } },
      { t: '把复杂运营和资源问题真正建成可执行方案', d: { or_ops: 3, scheduling: 1, optim: 1 } },
      { t: '把不确定性本身写进模型，而不是事后再解释', d: { stoch: 3, uq: 2, bayes: 1 } },
      { t: '把真实世界系统做成可计算、可模拟、可验证的模型', d: { sci_comp: 3, comp_bio: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_02',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 优化路径',
    triggerDirs: ['conv_opt', 'comb_opt', 'optim', 'dynamic_prog'],
    text: '如果你更偏优化，最想长期深挖哪类问题？',
    opts: [
      { t: '把连续优化问题写得更漂亮、更有保证', d: { conv_opt: 3, optim: 2, theory: 1 } },
      { t: '在离散结构里做出真正可执行的最优方案', d: { comb_opt: 3, optim: 1, algo: 1 } },
      { t: '把大规模优化真正做成工程可用的方法', d: { optim: 3, or_ops: 1, sci_comp: 1 } },
      { t: '处理一连串相关决策，而不是只做一次性求解', d: { dynamic_prog: 3, optim: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_03',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 运筹场景',
    triggerDirs: ['or_ops', 'scheduling', 'game_th', 'optim'],
    text: '如果你更偏运筹，最想长期在哪类场景里磨问题？',
    opts: [
      { t: '排班、调度、路线和资源分配', d: { scheduling: 3, or_ops: 2, optim: 1 } },
      { t: '供应链、库存、运力和运营效率', d: { or_ops: 3, scheduling: 1, domain_ds: 1 } },
      { t: '定价、激励和平台规则设计', d: { game_th: 3, or_ops: 1, econom: 1 } },
      { t: '把优化结果真正接到工程或产品系统里', d: { optim: 2, or_ops: 2, systems: 1 } }
    ]
  },
  {
    id: 's3_or_04',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 随机与风险',
    triggerDirs: ['stoch', 'uq', 'game_th', 'bayes'],
    text: '如果你更在意“不确定”这件事，最想长期做哪类问题？',
    opts: [
      { t: '理解随机系统怎样随时间演化，并据此建模', d: { stoch: 3, dynamic_prog: 1, uq: 1 } },
      { t: '给预测和决策加上更靠谱的不确定性刻画', d: { uq: 3, stoch: 1, bayes: 1 } },
      { t: '研究很多参与者在规则下会怎样博弈和响应', d: { game_th: 3, stoch: 1, econom: 1 } },
      { t: '让数据和先验一起参与判断，而不是只看单一结果', d: { bayes: 3, stoch: 1, stats: 1 } }
    ]
  },
  {
    id: 's3_or_05',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 决策系统',
    triggerDirs: ['dynamic_prog', 'game_th', 'or_ops', 'stoch'],
    text: '如果问题是“一步一步做决定”，你最想长期攻哪类？',
    opts: [
      { t: '当前选择会影响后续很多步时，怎样做更长期的规划', d: { dynamic_prog: 3, or_ops: 1, stoch: 1 } },
      { t: '很多参与者会彼此影响时，怎样让规则更稳', d: { game_th: 3, or_ops: 1, econom: 1 } },
      { t: '需求和环境在变时，怎样让系统继续做出高质量安排', d: { or_ops: 2, stoch: 2, scheduling: 1 } },
      { t: '让这类决策既能算得出，又能在现实里真正执行', d: { or_ops: 3, optim: 1, dynamic_prog: 1 } }
    ]
  },
  {
    id: 's3_or_06',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 科学建模',
    triggerDirs: ['sci_comp', 'comp_bio', 'stoch', 'optim'],
    text: '如果你更偏科学建模，最想长期把哪类系统建清楚？',
    opts: [
      { t: '物理、工程或工业过程这类可以被严格模拟的系统', d: { sci_comp: 3, optim: 1, stoch: 1 } },
      { t: '生物、健康或复杂生命系统这类结构丰富的问题', d: { comp_bio: 3, sci_comp: 1, bayes: 1 } },
      { t: '带有明显随机性的动态系统', d: { stoch: 3, sci_comp: 1, uq: 1 } },
      { t: '需要把建模和优化结果一起落到现实决策里的系统', d: { optim: 2, or_ops: 2, sci_comp: 1 } }
    ]
  },
  {
    id: 's3_or_07',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 长期标签',
    triggerDirs: ['optim', 'or_ops', 'stoch', 'game_th'],
    text: '几年后你更希望别人因为你哪类能力而来找你？',
    opts: [
      { t: '因为你总能把复杂问题写成清楚、漂亮、能算的模型', d: { optim: 3, conv_opt: 1, or_ops: 1 } },
      { t: '因为你总能给复杂运营问题找出更优安排', d: { or_ops: 3, scheduling: 1, optim: 1 } },
      { t: '因为你总能把不确定和风险讲明白', d: { stoch: 3, uq: 1, bayes: 1 } },
      { t: '因为你总能把规则、激励和参与者行为想清楚', d: { game_th: 3, econom: 1, or_ops: 1 } }
    ]
  },
  {
    id: 's3_or_08',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 输入材料',
    triggerDirs: ['optim', 'or_ops', 'stoch', 'sci_comp'],
    text: '如果你未来几年一直盯着一类“问题材料”打磨，你更想选哪种？',
    opts: [
      { t: '一大堆约束和目标，想把方案排得更优更稳', d: { optim: 3, conv_opt: 1, or_ops: 1 } },
      { t: '真实业务系统的资源、流程和运营规则', d: { or_ops: 3, scheduling: 1, optim: 1 } },
      { t: '随机波动、风险暴露和不确定决策', d: { stoch: 3, uq: 1, bayes: 1 } },
      { t: '一个复杂系统的机理模型，想把它算清楚、模拟清楚', d: { sci_comp: 3, comp_bio: 1, stoch: 1 } }
    ]
  },
  {
    id: 's3_or_09',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 决策距离',
    triggerDirs: ['dynamic_prog', 'or_ops', 'game_th', 'optim'],
    text: '你更想让自己的工作离最终决策有多近？',
    opts: [
      { t: '非常近，最好每次求解都直接影响资源安排或策略动作', d: { or_ops: 3, dynamic_prog: 1, scheduling: 1 } },
      { t: '偏中间，先把模型、目标和约束写对，再给别人用', d: { optim: 3, conv_opt: 1, sci_comp: 1 } },
      { t: '更靠近规则和机制设计，决定大家会怎样互动', d: { game_th: 3, econom: 1, or_ops: 1 } },
      { t: '更靠近长期规划，让每一步都为后续决策服务', d: { dynamic_prog: 3, stoch: 1, optim: 1 } }
    ]
  },
  {
    id: 's3_or_10',
    phase: 'deep',
    cat: 'Math / OR 深挖 / 最想留下的能力',
    triggerDirs: ['conv_opt', 'scheduling', 'uq', 'comp_bio'],
    text: '如果最终只留下一个最鲜明的专业标签，你更希望是哪一种？',
    opts: [
      { t: '把数学结构看得很透，模型一写就很漂亮', d: { conv_opt: 3, optim: 1, theory: 1 } },
      { t: '把复杂流程排得井井有条，现实里也真能执行', d: { scheduling: 3, or_ops: 1, optim: 1 } },
      { t: '把风险、不确定和边界条件讲得非常清楚', d: { uq: 3, stoch: 1, bayes: 1 } },
      { t: '把某类复杂系统建成真正可算可解释的模型', d: { comp_bio: 2, sci_comp: 2, stoch: 1 } }
    ]
  }
];
