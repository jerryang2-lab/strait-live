/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NewsArticle, QuantitativeDataset, DailyMorningBrief } from '../types/news';

export const quantitativeDatasets: QuantitativeDataset[] = [
  {
    pillar: 'ppp',
    title: {
      'zh-TW': '2026 實質購買力平價 (PPP) 經濟規模與人均指標',
      'zh-CN': '2026 实质购买力平价 (PPP) 经济规模与人均指标',
      en: '2026 Purchasing Power Parity (PPP) Total & Per Capita Metrics'
    },
    subtitle: {
      'zh-TW': '考量兩地物價與匯率調整後的實際購買力比較',
      'zh-CN': '考量两地物价与汇率调整后的实际购买力比较',
      en: 'Real purchasing capacity adjusted for price levels and living costs'
    },
    summary: {
      'zh-TW': '中國大陸總體 GDP (PPP) 居全球第 1 名（約 44.3 兆美元）；台灣人均 GDP (PPP) 達 98,051 美元，居全球第 8 名，約為中國大陸人均的 3.1 倍。',
      'zh-CN': '中国大陆总体 GDP (PPP) 居全球第 1 名（约 44.3 万亿美元）；台湾人均 GDP (PPP) 达 98,051 美元，居全球第 8 名，约为中国大陆人均的 3.1 倍。',
      en: 'Mainland China ranks 1st globally in total GDP PPP ($44.3T); Taiwan ranks 8th globally in per capita GDP PPP ($98,051), roughly 3.1x that of Mainland China.'
    },
    metrics: [
      {
        id: 'ppp-per-capita',
        indicator: {
          'zh-TW': '人均購買力平價 (GDP per capita PPP)',
          'zh-CN': '人均购买力平价 (GDP per capita PPP)',
          en: 'Per Capita GDP (PPP Adjusted)'
        },
        taiwanValue: '$98,051',
        taiwanNumeric: 98051,
        taiwanUnit: { 'zh-TW': '國際美元 (全球第 8)', 'zh-CN': '国际美元 (全球第 8)', en: 'Int. $ (Rank #8)' },
        mainlandValue: '$31,596',
        mainlandNumeric: 31596,
        mainlandUnit: { 'zh-TW': '國際美元 (全球中上)', 'zh-CN': '国际美元 (全球中上)', en: 'Int. $ (Mid-High)' },
        ratioExplanation: {
          'zh-TW': '台灣人均實質購買力約為中國大陸的 3.10 倍',
          'zh-CN': '台湾人均实质购买力约为中国大陆的 3.10 倍',
          en: 'Taiwan per capita purchasing power is approx. 3.10x Mainland China'
        },
        sourceAuthority: 'IMF (World Economic Outlook 2026)',
        year: '2026',
        chartType: 'bar'
      },
      {
        id: 'ppp-total-gdp',
        indicator: {
          'zh-TW': '經濟總體購買力規模 (GDP PPP 總額)',
          'zh-CN': '经济总体购买力规模 (GDP PPP 总额)',
          en: 'Total GDP (PPP Adjusted)'
        },
        taiwanValue: '$2.27 兆',
        taiwanNumeric: 2.27,
        taiwanUnit: { 'zh-TW': '兆美元 (全球第 20)', 'zh-CN': '万亿美元 (全球第 20)', en: 'Trillion $ (Rank #20)' },
        mainlandValue: '$44.30 兆',
        mainlandNumeric: 44.30,
        mainlandUnit: { 'zh-TW': '兆美元 (全球第 1)', 'zh-CN': '万亿美元 (全球第 1)', en: 'Trillion $ (Rank #1)' },
        ratioExplanation: {
          'zh-TW': '中國大陸總量約為台灣的 19.5 倍，市場縱深極廣',
          'zh-CN': '中国大陆总量约为台湾的 19.5 倍，市场纵深极广',
          en: 'Mainland China aggregate volume is 19.5x Taiwan, showing vast market scale'
        },
        sourceAuthority: 'IMF 2026 Dataset',
        year: '2026',
        chartType: 'bar'
      }
    ],
    sources: ['IMF World Economic Outlook (2026)', 'World Bank ICP Data']
  },
  {
    pillar: 'salary',
    title: {
      'zh-TW': '薪資中位數與每月可支配購買力比較',
      'zh-CN': '薪资中位数与每月可支配购买力比较',
      en: 'Median Salary & Monthly Disposable Purchasing Power'
    },
    subtitle: {
      'zh-TW': '反映受僱受薪階級「排名最中間者」的真實體感所得',
      'zh-CN': '反映受雇受薪阶级「排名最中间者」的真实体感所得',
      en: 'Reflecting the true earning power of the 50th percentile median wage earner'
    },
    summary: {
      'zh-TW': '台灣薪資中位數約 NT$42,000，PPP 調整後相當於每月 US$3,150 實質生活力；大陸全體中位數折合約 NT$18,500（PPP $1,180），一線城市約 NT$40,000（PPP $2,450）。',
      'zh-CN': '台湾薪资中位数约 NT$42,000，PPP 调整后相当于每月 US$3,150 实质生活力；大陆全体中位数折合约 NT$18,500（PPP $1,180），一线城市约 NT$40,000（PPP $2,450）。',
      en: 'Taiwan median salary is ~NT$42,000 (US$3,150 PPP adjusted); Mainland overall median is ~NT$18,500 ($1,180 PPP), while Tier-1 cities reach ~NT$40,000 ($2,450 PPP).'
    },
    metrics: [
      {
        id: 'salary-median-ppp',
        indicator: {
          'zh-TW': '中位數月薪實質購買力 (PPP 美元)',
          'zh-CN': '中位数月薪实质购买力 (PPP 美元)',
          en: 'Median Monthly Wage (PPP USD)'
        },
        taiwanValue: '$3,150',
        taiwanNumeric: 3150,
        taiwanUnit: { 'zh-TW': 'PPP 美元/月', 'zh-CN': 'PPP 美元/月', en: 'PPP $/mo' },
        mainlandValue: '$1,180 (全體) / $2,450 (一線)',
        mainlandNumeric: 1180,
        mainlandUnit: { 'zh-TW': 'PPP 美元/月', 'zh-CN': 'PPP 美元/月', en: 'PPP $/mo' },
        ratioExplanation: {
          'zh-TW': '全體比較台灣為 2.7 倍；若對比大陸一線城市則為 1.28 倍',
          'zh-CN': '全体比较台湾为 2.7 倍；若对比大陆一线城市则为 1.28 倍',
          en: '2.7x vs nationwide Mainland; 1.28x vs Mainland Tier-1 megacities'
        },
        sourceAuthority: '台灣主計總處 / 大陸國家統計局 / IMF',
        year: '2026',
        chartType: 'bar'
      },
      {
        id: 'salary-disposable-ppp',
        indicator: {
          'zh-TW': '人均年可支配所得 (考慮 PPP 後購買力倍數)',
          'zh-CN': '人均年可支配收入 (考虑 PPP 后购买力倍数)',
          en: 'Annual Disposable Income (PPP Relative Index)'
        },
        taiwanValue: '1.00 (基準)',
        taiwanNumeric: 1.0,
        taiwanUnit: { 'zh-TW': '約 NT$448,000 (名義2.2倍購買力)', 'zh-CN': '约 NT$448,000 (名义2.2倍购买力)', en: 'Base ~NT$448k' },
        mainlandValue: '0.32 (全體) / 0.45 (城鎮)',
        mainlandNumeric: 0.32,
        mainlandUnit: { 'zh-TW': '全體 ¥43,100 / 城鎮 ¥56,500', 'zh-CN': '全体 ¥43,100 / 城镇 ¥56,500', en: 'Urban ¥56,500' },
        ratioExplanation: {
          'zh-TW': '受惠於健保與能源補貼，台灣居民在必需品上自由支配力更高',
          'zh-CN': '受惠于医保与能源补贴，台湾居民在必需品上自由支配力更高',
          en: 'Subsidies on energy and health provide higher disposable room in Taiwan'
        },
        sourceAuthority: 'IMF 2026 Disposable Income Survey',
        year: '2026',
        chartType: 'bar'
      }
    ],
    sources: ['台灣主計總處薪資調查 (2025/2026)', '大陸國家統計局住戶收支調查', 'IMF 經濟展望']
  },
  {
    pillar: 'housing',
    title: {
      'zh-TW': '住房自有率、屋齡結構與人均居住空間',
      'zh-CN': '住房自有率、屋龄结构与人均居住空间',
      en: 'Home Ownership, Building Age Structure & Living Area'
    },
    subtitle: {
      'zh-TW': '產權型態（永久產權 vs 70年使用權）與老屋都市更新對比',
      'zh-CN': '产权形态（永久产权 vs 70年使用权）与老旧住宅更新对比',
      en: 'Freehold vs 70-year leasehold, urban renewal, and housing stock age'
    },
    summary: {
      'zh-TW': '台灣自有率約 78%-81%，平均屋齡達 34-35 年（雙北40年以上），空屋率 10.43%；大陸城鎮自有率約 89%（全體96%含農村），平均屋齡僅 20-23 年，新房去化為當前重點。',
      'zh-CN': '台湾自有率约 78%-81%，平均屋龄达 34-35 年（双北40年以上），空屋率 10.43%；大陆城镇自有率约 89%（全体96%含农村），平均屋龄仅 20-23 年，新房去化为当前重点。',
      en: 'Taiwan ownership rate is 78-81% with avg building age 34-35 yrs (Taipei 40+); Mainland China town ownership is 89% with avg age 20-23 yrs.'
    },
    metrics: [
      {
        id: 'housing-ownership',
        indicator: {
          'zh-TW': '家庭自有住房率 (Home Ownership Rate)',
          'zh-CN': '家庭自有住房率 (Home Ownership Rate)',
          en: 'Home Ownership Rate'
        },
        taiwanValue: '78% - 81%',
        taiwanNumeric: 80,
        taiwanUnit: { 'zh-TW': '永久土地與建物產權', 'zh-CN': '永久土地与建筑物产权', en: 'Freehold title' },
        mainlandValue: '96% (全體) / 89% (城鎮)',
        mainlandNumeric: 89,
        mainlandUnit: { 'zh-TW': '70 年住宅用地使用權', 'zh-CN': '70 年住宅用地使用权', en: '70-yr leasehold' },
        ratioExplanation: {
          'zh-TW': '大陸數據含廣大農村自建房與早期房改房；台灣資產保值性高但有老齡化僵局',
          'zh-CN': '大陆数据含广大农村自建房与早期房改房；台湾资产保值性高但有老龄化僵局',
          en: 'Mainland includes rural homesteads; Taiwan has perpetual land titles'
        },
        sourceAuthority: '台灣內政部戶政司 / 大陸國家統計局普查',
        year: '2026',
        chartType: 'gauge'
      },
      {
        id: 'housing-age-above-30',
        indicator: {
          'zh-TW': '30 年以上老屋佔比 (屋齡老化程度)',
          'zh-CN': '30 年以上老旧住宅占比 (房龄老化程度)',
          en: 'Dwellings Aged Over 30 Years'
        },
        taiwanValue: '接近 60% (雙北 >72%)',
        taiwanNumeric: 59,
        taiwanUnit: { 'zh-TW': '全國約 554 萬戶', 'zh-CN': '全国约 554 万户', en: '% of total housing' },
        mainlandValue: '約 15% - 20%',
        mainlandNumeric: 18,
        mainlandUnit: { 'zh-TW': '城鎮住宅多建於2000年後', 'zh-CN': '城镇住宅多建于2000年后', en: '% of urban housing' },
        ratioExplanation: {
          'zh-TW': '台灣面臨「人屋雙老」都更挑戰；大陸住宅普遍較新但需加強後期維護',
          'zh-CN': '台湾面临「人屋双老」旧改挑战；大陆住宅普遍较新但需加强后期维护',
          en: 'Taiwan faces aging building stock; Mainland faces quality/maintenance life-cycle'
        },
        sourceAuthority: '台灣內政部統計處 / 2026 兩岸房產白皮書',
        year: '2026',
        chartType: 'bar'
      }
    ],
    distributionData: [
      {
        label: { 'zh-TW': '5 年內新成屋', 'zh-CN': '5 年内新房', en: '< 5 Years Old' },
        taiwanPct: 16,
        mainlandPct: 38
      },
      {
        label: { 'zh-TW': '5 - 30 年成屋', 'zh-CN': '5 - 30 年住宅', en: '5 - 30 Years Old' },
        taiwanPct: 25,
        mainlandPct: 44
      },
      {
        label: { 'zh-TW': '30 年以上老宅', 'zh-CN': '30 年以上老屋', en: '> 30 Years Old' },
        taiwanPct: 59,
        mainlandPct: 18
      }
    ],
    sources: ['台灣內政部不動產資訊平台', '大陸國家統計局城鄉居住統計', '信義房屋指數 (2026)']
  },
  {
    pillar: 'healthcare',
    title: {
      'zh-TW': '醫療照護指數、全民健保與自費負擔結構',
      'zh-CN': '医疗照护指数、全民健保与自费负担结构',
      en: 'Health Care Index & Out-of-Pocket Expense Breakdown'
    },
    subtitle: {
      'zh-TW': '基礎就醫門檻、重大傷病藥物納保與分級診療體系',
      'zh-CN': '基础就医门槛、重大疾病药物报销与分级诊疗体系',
      en: 'Public insurance coverage, cancer drug reimbursement, and out-of-pocket costs'
    },
    summary: {
      'zh-TW': '台灣醫療照護指數以 87.1 分名列全球第 1，行政成本僅 2%，但自費項目比率攀升至 35.7%；大陸醫保覆蓋約 95%，推動藥品集採規模化降價，但在頂級三甲醫院目錄外自費仍對中產構成壓力。',
      'zh-CN': '台湾医疗照护指数以 87.1 分名列全球第 1，行政成本仅 2%，但自费项目比率攀升至 35.7%；大陆医保覆盖约 95%，推动药品集采规模化降价，但在顶级三甲医院目录外自费仍对中产构成压力。',
      en: 'Taiwan ranks 1st globally in Numbeo Health Care Index (87.1 score); Mainland China achieves 95% basic coverage with bulk drug procurement, while out-of-pocket cancer therapies remain significant.'
    },
    metrics: [
      {
        id: 'healthcare-index',
        indicator: {
          'zh-TW': '全球醫療照護指數 (Health Care Index)',
          'zh-CN': '全球医疗照护指数 (Health Care Index)',
          en: 'Global Health Care Index'
        },
        taiwanValue: '87.1 分',
        taiwanNumeric: 87.1,
        taiwanUnit: { 'zh-TW': '全球排名第 1', 'zh-CN': '全球排名第 1', en: 'Rank #1 Global' },
        mainlandValue: '41.4 分',
        mainlandNumeric: 41.4,
        mainlandUnit: { 'zh-TW': '全球排名第 46', 'zh-CN': '全球排名第 46', en: 'Rank #46 Global' },
        ratioExplanation: {
          'zh-TW': '台灣在基礎就醫便利度、轉診平等性與費用保障度維持高優勢',
          'zh-CN': '台湾在基础就医便利度、转诊平等性与费用保障度维持高优势',
          en: 'Taiwan maintains exceptional equity and accessibility in basic healthcare'
        },
        sourceAuthority: 'Numbeo Health Care Survey / WHO Global Reports',
        year: '2026',
        chartType: 'gauge'
      },
      {
        id: 'outpatient-burden',
        indicator: {
          'zh-TW': '普通門診一般看診自付金額',
          'zh-CN': '普通门诊一般看病自付金额',
          en: 'Outpatient Typical Co-pay'
        },
        taiwanValue: 'NT$150 - 500',
        taiwanNumeric: 15,
        taiwanUnit: { 'zh-TW': '定額掛號費+部分負擔', 'zh-CN': '定额挂号费+部分自负', en: 'USD ~$10-15' },
        mainlandValue: '按比例自負 (一線較重)',
        mainlandNumeric: 30,
        mainlandUnit: { 'zh-TW': '三甲醫院起付線與自費項', 'zh-CN': '三甲医院起付线与自费项', en: 'USD ~$20-40' },
        ratioExplanation: {
          'zh-TW': '依薪資購買力換算，台灣居民基礎醫療支付能力約為大陸的 4-5 倍',
          'zh-CN': '依薪资购买力换算，台湾居民基础医疗支付能力约为大陆的 4-5 倍',
          en: 'Purchasing-power adjusted basic care affordability is 4-5x in Taiwan'
        },
        sourceAuthority: '台灣衛福部健保署 / 國家醫保局公報',
        year: '2026',
        chartType: 'bar'
      }
    ],
    sources: ['Numbeo Health Care Index (2026)', '台灣衛福部健保統計年報', '中國國家衛健委衛生統計年鑑']
  },
  {
    pillar: 'pension',
    title: {
      'zh-TW': '養老退休金水準與所得替代率',
      'zh-CN': '养老退休金水平与所得替代率',
      en: 'Pensions, Retirement Security & Replacement Rates'
    },
    subtitle: {
      'zh-TW': '勞保勞退雙軌制 vs 機關企業城鄉三元體系',
      'zh-CN': '劳保劳退双轨制 vs 机关企业城乡三元体系',
      en: 'Dual-pillar stability vs three-tier structure and pension replacement ratios'
    },
    summary: {
      'zh-TW': '台灣勞工退休平均月領約 NT$31,500（約 $1,650 PPP 美元），所得替代率約 50%-60%；大陸全體退休平均約 ¥3,850（城鎮職工約 ¥4,700，折合 $1,120 PPP 美元），所得替代率約 40%-45%。',
      'zh-CN': '台湾劳工退休平均月领约 NT$31,500（约 $1,650 PPP 美元），所得替代率约 50%-60%；大陆全体退休平均约 ¥3,850（城镇职工约 ¥4,700，折合 $1,120 PPP 美元），所得替代率约 40%-45%。',
      en: 'Taiwan average combined pension is ~NT$31,500 ($1,650 PPP) with 50-60% replacement rate; Mainland urban employee average is ~¥4,700 ($1,120 PPP) with 40-45% replacement rate.'
    },
    metrics: [
      {
        id: 'pension-monthly-ppp',
        indicator: {
          'zh-TW': '平均月領退休金 (PPP 美元換算)',
          'zh-CN': '平均月领养老金 (PPP 美元换算)',
          en: 'Avg Monthly Pension (PPP USD)'
        },
        taiwanValue: '$1,650 PPP 美元',
        taiwanNumeric: 1650,
        taiwanUnit: { 'zh-TW': '約 NT$31,500 (勞保+勞退)', 'zh-CN': '约 NT$31,500 (劳保+劳退)', en: 'PPP $/mo' },
        mainlandValue: '$1,120 (城鎮職工) / $920 (全體)',
        mainlandNumeric: 1120,
        mainlandUnit: { 'zh-TW': '約 ¥4,700 (城鎮) / ¥3,850 (全體)', 'zh-CN': '约 ¥4,700 (城镇) / ¥3,850 (全体)', en: 'PPP $/mo' },
        ratioExplanation: {
          'zh-TW': '台灣平均退休購買力約為大陸全體 1.8 倍、城鎮職工 1.5 倍',
          'zh-CN': '台湾平均退休购买力约为大陆全体 1.8 倍、城镇职工 1.5 倍',
          en: 'Taiwan retired purchasing capacity is 1.8x overall Mainland, 1.5x urban employees'
        },
        sourceAuthority: '勞動部統計處 / 人力資源和社會保障部公報',
        year: '2026',
        chartType: 'bar'
      },
      {
        id: 'replacement-rate',
        indicator: {
          'zh-TW': '中位數勞工退休所得替代率',
          'zh-CN': '中位数劳工退休所得替代率',
          en: 'Pension Income Replacement Rate'
        },
        taiwanValue: '50% - 60%',
        taiwanNumeric: 55,
        taiwanUnit: { 'zh-TW': '退休金占退休前薪資比', 'zh-CN': '养老金占退休前薪资比', en: '%' },
        mainlandValue: '40% - 45% (城鎮)',
        mainlandNumeric: 42,
        mainlandUnit: { 'zh-TW': '農村居民額外推動個人養老金', 'zh-CN': '农村居民额外推动个人养老金', en: '%' },
        ratioExplanation: {
          'zh-TW': '兩岸皆面臨人口老齡化挑戰，台灣關注基金撥補，大陸推動延遲退休',
          'zh-CN': '两岸皆面临人口老龄化挑战，台湾关注基金拨补，大陆推动延迟退休',
          en: 'Both face demographic pressure; pension reforms active in both regions'
        },
        sourceAuthority: 'OECD / 兩岸社會保障研究報告',
        year: '2026',
        chartType: 'bar'
      }
    ],
    sources: ['台灣勞保局業務統計', '大陸人力資源和社會保障事業發展公報 (2025/2026)', 'IMF 社保精算研究']
  },
  {
    pillar: 'public_goods',
    title: {
      'zh-TW': '公共財累積、生活體感與城鄉差距',
      'zh-CN': '公共品累积、生活体感与城乡差距',
      en: 'Public Goods Accumulation, Infrastructure & Civic Living'
    },
    subtitle: {
      'zh-TW': '硬體基建（高鐵、綠帶空間、數位物流）與制度型軟性保障',
      'zh-CN': '硬件基建（高铁、绿带空间、数字物流）与制度型软性保障',
      en: 'Physical infrastructure vs institutional safety nets and quality of life'
    },
    summary: {
      'zh-TW': '大陸二三線城市在道路寬度、高鐵網絡、濕地公園與數位物流等「硬體公共財」上具顯著優勢；台灣則在全民健保均質性、永久產權法治與公民互助等「制度型防禦性公共財」上具備深厚護城河。',
      'zh-CN': '大陆二三线城市在道路宽度、高铁网络、湿地公园与数字物流等「硬件公共品」上具显著优势；台湾则在全民健保均质性、永久产权法治与公民互助等「制度型防御性公共品」上具备深厚护城河。',
      en: 'Mainland tier-2/3 cities exhibit high physical infrastructure amenities (parks, high-speed rail, ultra-efficient logistics); Taiwan retains structural safety net and institutional resilience.'
    },
    metrics: [
      {
        id: 'high-speed-rail',
        indicator: {
          'zh-TW': '軌道交通與公共運輸人均涵蓋率指數',
          'zh-CN': '轨道交通与公共运输人均覆盖率指数',
          en: 'Transit & Infrastructure Network Density'
        },
        taiwanValue: '雙北高度密集 / 中南部汽機車依賴',
        taiwanNumeric: 74,
        taiwanUnit: { 'zh-TW': '綜合評分 (滿分100)', 'zh-CN': '综合评分 (满分100)', en: 'Score (out of 100)' },
        mainlandValue: '高鐵大網覆蓋全國 / 三線現代化公路',
        mainlandNumeric: 88,
        mainlandUnit: { 'zh-TW': '綜合評分 (滿分100)', 'zh-CN': '综合评分 (满分100)', en: 'Score (out of 100)' },
        ratioExplanation: {
          'zh-TW': '大陸大規模大基建使二三線城市居民享有超低物流成本與現代公園綠帶',
          'zh-CN': '大陆大规模大基建使二三线城市居民享有超低物流成本与现代公园绿带',
          en: 'Mainland infra investments deliver expansive roads, transit networks and parks'
        },
        sourceAuthority: '世界銀行基礎設施評估 / 交通主管機關數據',
        year: '2026',
        chartType: 'gauge'
      }
    ],
    sources: ['World Bank Infrastructure Database', '兩岸交通運輸統計公報 (2026)']
  },
  {
    pillar: 'culture_wellbeing',
    title: {
      'zh-TW': '非物質與文化生活可量化指標',
      'zh-CN': '非物质与文化生活可量化指标',
      en: 'Cultural, Social Well-Being & Non-Material Measurable Metrics'
    },
    subtitle: {
      'zh-TW': '幸福感評分、社會互助與治安安全指數',
      'zh-CN': '幸福感评分、社会互助与治安安全指数',
      en: 'World Happiness score, social giving, and global safety indices'
    },
    summary: {
      'zh-TW': '聯合國幸福報告中台灣得分 6.51 分（亞洲前列）；治安安全指數 Numbeo 評比達 83.2 分；大陸社群互助與銀髮族公共文娛（老年大學、集體活動）參與率極高，數位便民政務評分達 82.5 分。',
      'zh-CN': '联合国幸福报告中台湾得分 6.51 分（亚洲前列）；治安安全指数 Numbeo 评比达 83.2 分；大陆社群互助与银发族公共文娱（老年大学、集体活动）参与率极高，数字便民政务评分达 82.5 分。',
      en: 'World Happiness Report scores Taiwan at 6.51; Numbeo Safety Index at 83.2. Mainland China shows strong civic digital services (82.5) and vibrant elderly community engagement.'
    },
    metrics: [
      {
        id: 'happiness-index',
        indicator: {
          'zh-TW': '全球幸福感指數 (World Happiness Report)',
          'zh-CN': '全球幸福感指数 (World Happiness Report)',
          en: 'World Happiness Score (0-10)'
        },
        taiwanValue: '6.51 分',
        taiwanNumeric: 6.51,
        taiwanUnit: { 'zh-TW': '滿分 10 分 (亞洲前列)', 'zh-CN': '满分 10 分 (亚洲前列)', en: 'Points (out of 10)' },
        mainlandValue: '5.82 分',
        mainlandNumeric: 5.82,
        mainlandUnit: { 'zh-TW': '滿分 10 分 (中上水平)', 'zh-CN': '满分 10 分 (中上水平)', en: 'Points (out of 10)' },
        ratioExplanation: {
          'zh-TW': '台灣在社會支持度、人身自由感受與預期健康壽命上評分較高',
          'zh-CN': '台湾在社会支持度、人身自由感受与预期健康寿命上评分较高',
          en: 'Higher scores in social support, personal freedom, and life expectancy'
        },
        sourceAuthority: 'UN Sustainable Development Solutions Network (2026)',
        year: '2026',
        chartType: 'gauge'
      },
      {
        id: 'safety-index',
        indicator: {
          'zh-TW': '全球治安安全指數 (Safety Index)',
          'zh-CN': '全球治安安全指数 (Safety Index)',
          en: 'Global Safety Index'
        },
        taiwanValue: '83.2 分',
        taiwanNumeric: 83.2,
        taiwanUnit: { 'zh-TW': '全球第 3 名 (極度安全)', 'zh-CN': '全球第 3 名 (极度安全)', en: 'Score (Rank #3)' },
        mainlandValue: '74.5 分',
        mainlandNumeric: 74.5,
        mainlandUnit: { 'zh-TW': '全球第 18 名 (高度安全)', 'zh-CN': '全球第 18 名 (高度安全)', en: 'Score (Rank #18)' },
        ratioExplanation: {
          'zh-TW': '兩岸在夜間獨自行走安全感與整體犯罪率控制均名列世界前茅',
          'zh-CN': '两岸在夜间独自行走安全感与整体犯罪率控制均名列世界前茅',
          en: 'Both regions maintain exceptional safety and low violent crime rates'
        },
        sourceAuthority: 'Numbeo Global Crime and Safety Report',
        year: '2026',
        chartType: 'gauge'
      }
    ],
    sources: ['UN World Happiness Report (2026)', 'Numbeo Safety Index', 'Charities Aid Foundation World Giving Index']
  },
  {
    pillar: 'semiconductor',
    title: {
      'zh-TW': '科技產業供應鏈自主性與關鍵節點',
      'zh-CN': '科技产业供应链自主性与关键节点',
      en: 'Semiconductor Supply Chain Autonomy & Strategic Nodes'
    },
    subtitle: {
      'zh-TW': '先進製程代工節點優勢 vs 全產業鏈自主閉環與成熟製程替代',
      'zh-CN': '先进先进制程代工节点优势 vs 全产业链自主闭环与成熟制程替代',
      en: 'Foundry node leadership vs full-chain domestic substitution & packaging'
    },
    summary: {
      'zh-TW': '台灣在 2/3 奈米先進晶圓製造與純 IC 設計佔全球關鍵核心；大陸在 14/28 奈米成熟製程國產替代率已逾 60%，並積極推進先進封裝（Chiplet）與國產設備去美化，預計 5-10 年重塑供需格局。',
      'zh-CN': '台湾在 2/3 纳米先进制程代工与纯 IC 设计占全球关键核心；大陆在 14/28 纳米成熟制程国产替代率已逾 60%，并积极推进先进封装（Chiplet）与国产设备去美化，预计 5-10 年重塑供需格局。',
      en: 'Taiwan commands critical node advantages in 2-3nm manufacturing; Mainland China accelerates mature node domestic substitution (>60%) and Chiplet packaging innovation.'
    },
    metrics: [
      {
        id: 'advanced-foundry-share',
        indicator: {
          'zh-TW': '全球 7 奈米以下先進製程製造市佔率',
          'zh-CN': '全球 7 纳米以下先进制程制造市占率',
          en: 'Global Sub-7nm Foundry Market Share'
        },
        taiwanValue: '約 68% - 72%',
        taiwanNumeric: 70,
        taiwanUnit: { 'zh-TW': '全球第 1 (高度集中)', 'zh-CN': '全球第 1 (高度集中)', en: '% market share' },
        mainlandValue: '突破 8% - 12% (自主研發中)',
        mainlandNumeric: 10,
        mainlandUnit: { 'zh-TW': '發展先進封裝小晶片補足', 'zh-CN': '发展先进封装小芯片补足', en: '% market share' },
        ratioExplanation: {
          'zh-TW': '台灣依賴美歐日設備原料；大陸採取舉國體制推動全產業鏈國產化替代',
          'zh-CN': '台湾依赖美欧日设备原料；大陆采取举国体制推动全产业链国产化替代',
          en: 'Taiwan leads in advanced nodes; Mainland drives full domestic closed-loop'
        },
        sourceAuthority: 'TrendForce / SEMI 國際半導體產業協會 (2026)',
        year: '2026',
        chartType: 'bar'
      }
    ],
    sources: ['SEMI Semiconductor Industry Reports', 'TrendForce 集邦科技 (2026)', '兩岸高科技產業統計']
  }
];

export const initialNewsArticles: NewsArticle[] = [
  {
    id: 'art-ppp-2026',
    pillar: 'ppp',
    title: {
      'zh-TW': '國際貨幣基金最新評比：2026 兩岸實質購買力平價深度解析',
      'zh-CN': '国际货币基金最新评比：2026 两岸实质购买力平价深度解析',
      en: 'IMF 2026 Benchmark: Deep Analysis of Cross-Strait Purchasing Power Parity'
    },
    kicker: {
      'zh-TW': '宏觀經濟 · 購買力平價',
      'zh-CN': '宏观经济 · 购买力平价',
      en: 'Macroeconomics · PPP'
    },
    source: 'IMF 2026 經濟展望報告 / 全球財經數據庫',
    sourceAuthority: 'IMF',
    publishedAt: '2026-09-28T06:30:00Z',
    readTimeMinutes: 4,
    summary: {
      'zh-TW': '在考慮物價與生活成本折算後，台灣 2026 年人均購買力高達 98,051 美元居全球第 8 名，約為中國大陸人均的 3.1 倍；而大陸則以 44.3 兆美元維持全球最大 PPP 經濟體。',
      'zh-CN': '在考虑物价与生活成本折算后，台湾 2026 年人均购买力高达 98,051 美元居全球第 8 名，约为中国大陆人均的 3.1 倍；而大陆则以 44.3 万亿美元维持全球最大 PPP 经济体。',
      en: 'After living cost adjustments, Taiwan per capita PPP reaches $98,051 (ranked 8th globally), roughly 3.1x Mainland China ($31,596), while Mainland remains 1st in aggregate volume at $44.3T.'
    },
    content: {
      'zh-TW': [
        '根據 2026 年國際貨幣基金組織（IMF）及相關財經數據，關於中國大陸與台灣在購買力平價（Purchasing Power Parity, PPP）下的經濟比較呈現出鮮明的「總體國力」與「個人體感」分野。',
        '在經濟總體規模（GDP PPP）方面，中國大陸 2026 預估總額達約 44.3 兆美元，穩居全球第 1 名，總體規模約為台灣（2.27 兆美元，全球第 20 名）的 19.5 倍。這反映出龐大的人口基數與內需市場深度所賦予的產業完整度。',
        '然而在最能反映居民實質生活水平與消費能力的人均購買力（GDP per capita PPP）指標上，台灣 2026 年預估值高達約 98,051 美元，高居全球第 8 名。相比之下，中國大陸人均預估值約為 31,596 美元。',
        '核心機制在於：台灣長期具備「相對低通脹、水電油等民生基礎能源高度補貼」的隱性優勢，其隱性 PPP 轉換率約為 13.47（即 13.47 台幣在本地的購買力相當於 1 美元在美國的購買力）。這使得台灣受薪族在日常民生開銷後的實質可支配力保持全球前列。'
      ],
      'zh-CN': [
        '根据 2026 年国际货币基金组织（IMF）及相关财经数据，关于中国大陆与台湾在购买力平价（Purchasing Power Parity, PPP）下的经济比较呈现出鲜明的「总体国力」与「个人体感」分野。',
        '在经济总体规模（GDP PPP）方面，中国大陆 2026 预估总额达约 44.3 万亿美元，稳居全球第 1 名，总体规模约为台湾（2.27 万亿美元，全球第 20 名）的 19.5 倍。这反映出庞大的人口基数与内需市场深度所赋予的产业完整度。',
        '然而在最能反映居民实质生活水平与消费能力的人均购买力（GDP per capita PPP）指标上，台湾 2026 年预估值高达约 98,051 美元，高居全球第 8 名。相比之下，中国大陆人均预估值约为 31,596 美元。',
        '核心机制在于：台湾长期具备「相对低通胀、水电油等民生基础能源高度补贴」的隐性优势，其隐性 PPP 转换率约为 13.47（即 13.47 台币在本地的购买力相当于 1 美元在美国的购买力）。这使得台湾受薪族在日常民生开销后的实质可支配力保持全球前列。'
      ],
      en: [
        'According to the 2026 International Monetary Fund (IMF) and related economic data, economic comparisons between Mainland China and Taiwan under Purchasing Power Parity (PPP) reveal a distinct divide between aggregate national scale and individual living experience.',
        'In terms of aggregate GDP (PPP), Mainland China is projected to reach approx. $44.3 trillion in 2026, ranking 1st globally, roughly 19.5 times the size of Taiwan ($2.27 trillion, 20th globally). This reflects scale advantages in infrastructure, internal markets, and supply chains.',
        'However, in GDP per capita (PPP), which directly measures purchasing capacity and living standards, Taiwan is estimated at $98,051, ranking 8th globally, compared to $31,596 for Mainland China.',
        'The core mechanism lies in low inflation and subsidized basic utilities in Taiwan, where the implied PPP conversion rate (~13.47 NTD per USD) amplifies local purchasing power for day-to-day essentials.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '總量與個體差異：大陸總體 PPP 是台灣 19.5 倍，但台灣人均 PPP 是大陸的 3.1 倍。',
        '隱性購買力轉換優勢：台灣水、電、瓦斯與健保高度公費定價，維持超高實質生活購買力。',
        '經濟韌性支撐：AI 與半導體硬體需求帶動台灣薪資成長，舒緩部分通膨壓力。'
      ],
      'zh-CN': [
        '总量与个体差异：大陆总体 PPP 是台湾 19.5 倍，但台湾人均 PPP 是大陆的 3.1 倍。',
        '隐性购买力转换优势：台湾水、电、燃气与医保高度公费定价，维持超高实质生活购买力。',
        '经济韧性支撑：AI 与半导体硬件需求带动台湾薪资增长，舒缓部分通胀压力。'
      ],
      en: [
        'Aggregate vs. Individual: Mainland total GDP PPP is 19.5x Taiwan, but Taiwan per capita PPP is 3.1x Mainland.',
        'Purchasing conversion advantage: Subsidized utilities and healthcare provide strong baseline consumer resilience in Taiwan.',
        'AI industry tailwinds: Tech exports support wage growth and mitigate consumer price pressures.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '購買力平價消除了名義匯率被金融市場短期波動扭曲的現象，更能還原以一籃子商品與服務計算的生活實況。',
        'zh-CN': '购买力平价消除了名义汇率被金融市场短期波动扭曲的现象，更能还原以一篮子商品与服务计算的生活实况。',
        en: 'PPP eliminates nominal currency fluctuations, restoring accurate purchasing calculations based on a representative basket of goods and services.'
      },
      coreMechanism: {
        'zh-TW': '台灣的購買力優勢集中在「吃、行、醫療」等民生必需品；但在「自費高階居住空間與資產購置」上受到房價擠壓。',
        'zh-CN': '台湾的购买力优势集中在「吃、行、医疗」等民生必需品；但在「自费高阶居住空间与资产购置」上受到房价挤压。',
        en: 'Taiwan’s edge shines in everyday dining, transit, and healthcare, but is constrained in asset purchases and housing square footage.'
      },
      outlook2026: {
        'zh-TW': '預期至 2031 年，大陸若在能源轉型（平價綠電、平價電動車）持續突破，將在特定科技消費生活領域形成局部反超。',
        'zh-CN': '预期至 2031 年，大陆若在能源转型（平价绿电、平价电动车）持续突破，将在特定科技消费生活领域形成局部反超。',
        en: 'Looking towards 2031, rapid Chinese advances in green power and affordable EV mobility may create pockets of purchasing superiority in tech-driven living.'
      }
    },
    metrics: quantitativeDatasets[0].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true
  },
  {
    id: 'art-salary-2026',
    pillar: 'salary',
    title: {
      'zh-TW': '薪資中位數對比：拆解兩岸受薪階級的「真實體感所得」',
      'zh-CN': '薪资中位数对比：拆解两岸受薪阶级的「真实体感所得」',
      en: 'Median Wage Comparison: Unpacking Real Lived Income for Wage Earners'
    },
    kicker: {
      'zh-TW': '民生所得 · 實質收入',
      'zh-CN': '民生所得 · 实质收入',
      en: 'Income & Wages · Real Disposable'
    },
    source: '台灣主計總處 / 大陸國家統計局 2025-2026 普查',
    sourceAuthority: 'DGBAS',
    publishedAt: '2026-09-28T05:45:00Z',
    readTimeMinutes: 5,
    summary: {
      'zh-TW': '薪資中位數更能剔除科技高階主管極端值。台灣月薪中位數約 NT$4.2 萬，換算實質生活力約 3,150 PPP 美元；大陸一線城市中位數約折合 NT$4 萬，但高房租與外送服務形成不同支出結構。',
      'zh-CN': '薪资中位数更能剔除科技高阶主管极端值。台湾月薪中位数约 NT$4.2 万，换算实质生活力约 3,150 PPP 美元；大陆一线城市中位数约折合 NT$4 万，但高房租与外送服务形成不同支出结构。',
      en: 'Median wages isolate skew from ultra-high tech earners. Taiwan monthly median is ~NT$42,000 (~$3,150 PPP); Tier-1 Chinese megacities reach ~NT$40,000, yet face higher rent-to-income burdens.'
    },
    content: {
      'zh-TW': [
        '根據 2026 年最新薪資普查，「薪資中位數」比平均值更能反映一般受雇勞工的「真實體感」。平均薪資往往容易被半導體工程師或金融業高管大幅拉高，而中位數則精準代表「排名第 50%」的普通受薪者。',
        '2026 年初數據顯示，台灣薪資中位數約落在 4.2 萬台幣左右。得益於台灣極高的 PPP 係數，這份月薪在換取水電、日常外食與大眾交通時，相當於在美國領取 3,150 美元的消費購買力。',
        '在中國大陸，全體受雇者中位數約為 4,100 人民幣（折合台幣約 18,500 元，PPP 約 1,180 美元），廣大二三線城市與農村勞動力拉低了全國平均值。',
        '然而若聚焦於北京、上海、深圳等一線城市，其薪資中位數已接近 8,900 人民幣（折合台幣約 40,000 元，PPP 約 2,450 美元），與台灣全國中位數已極度接近。不過，一線城市高昂的房租與生活服務成本，抵銷了一部分名義所得增長。'
      ],
      'zh-CN': [
        '根据 2026 年最新薪资普查，「薪资中位数」比平均值更能反映一般受雇劳工的「真实体感」。平均薪资往往容易被半导体工程师或金融业高管大幅拉高，而中位数则精准代表「排名第 50%」的普通受薪者。',
        '2026 年初数据显示，台湾薪资中位数约落在 4.2 万台币左右。得益于台湾极高的 PPP 系数，这份月薪在换取水电、日常外食与大众交通时，相当于在美国领取 3,150 美元的消费购买力。',
        '在中国大陆，全体受雇者中位数约为 4,100 人民币（折合台币约 18,500 元，PPP 约 1,180 美元），广大二三线城市与农村劳动力拉低了全国平均值。',
        '然而若聚焦于北京、上海、深圳等一线城市，其薪资中位数已接近 8,900 人民币（折合台币约 40,000 元，PPP 约 2,450 美元），与台湾全国中位数已极度接近。不过，一线城市高昂的房租与生活服务成本，抵销了一部分名义所得增长。'
      ],
      en: [
        'According to the latest 2026 wage census, median wages represent the authentic experience of the middle wage-earner far better than arithmetic averages skewed by high-tech executives.',
        'Taiwan median monthly wage sits at ~NT$42,000. Leveraging strong PPP exchange factors, this equates to ~$3,150 in equivalent U.S. purchasing power for standard daily amenities.',
        'Across nationwide Mainland China, the overall median is ~RMB 4,100 (~NT$18,500, or $1,180 PPP).',
        'However, in Tier-1 megacities (Beijing, Shanghai, Shenzhen), the median hits ~RMB 8,900 (~NT$40,000, or $2,450 PPP), closely rivaling Taiwan, though offset by substantial rent-to-income ratios.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '中位數指標：台灣受雇中位數 NT$42,000，實質購買力約 3,150 PPP 美元。',
        '城鄉結構落差：大陸一線城市中位數逼近台灣水準，但全體受二三線與農村人口稀釋。',
        '自由支配空間：台灣中位數族群在醫療免憂與平價餐飲上具備較高生活安定感。'
      ],
      'zh-CN': [
        '中位数指标：台湾受雇中位数 NT$42,000，实质购买力约 3,150 PPP 美元。',
        '城乡结构落差：大陆一线城市中位数逼近台湾水准，但全体受二三线与农村人口稀释。',
        '自由支配空间：台湾中位数族群在医疗免忧与平价餐饮上具备较高生活安定感。'
      ],
      en: [
        'Median Benchmark: Taiwan median earner takes home NT$42,000 (~$3,150 PPP purchasing equivalent).',
        'Urban-rural divide: Mainland Tier-1 cities match Taiwan nominally, but national figures are diluted by inland areas.',
        'Disposable comfort: Modest medical expenses and subsidized transit sustain baseline security in Taiwan.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '恩格爾係數（食品佔支出比）與居住支出比，是決定薪資實質含金量的關鍵。',
        'zh-CN': '恩格尔系数（食品占支出比）与居住支出比，是决定薪资实质含金量的关键。',
        en: 'The Engel coefficient (food share of expenditure) and housing cost ratios determine the real purchasing strength of wage income.'
      },
      coreMechanism: {
        'zh-TW': '在台灣，健保與公營水電吸收了系統性風險；但在房貸與私人交通上，受薪者承受較高隱性成本。',
        'zh-CN': '在台湾，医保与公营水电吸收了系统性风险；但在房贷与私人交通上，受薪者承受较高隐性成本。',
        en: 'Taiwan public health and utilities buffer systemic risks, yet private housing loans and transit impose private costs.'
      },
      outlook2026: {
        'zh-TW': '2026 年台灣基本工資調升至 NT$28,590，基層消費力受到支撐；大陸則加強推動縮小城鄉收入差距的轉移支付。',
        'zh-CN': '2026 年台湾基本工资调升至 NT$28,590，基层消费力受到支撑；大陆则加强推动缩小城乡收入差距的转移支付。',
        en: 'Taiwan’s 2026 minimum wage adjustment to NT$28,590 supports entry-level workers, while China focuses on common-prosperity rural transfers.'
      }
    },
    metrics: quantitativeDatasets[1].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-housing-2026',
    pillar: 'housing',
    title: {
      'zh-TW': '高自有率下的屋齡反差：台灣「人屋雙老」與大陸「存量房去化」',
      'zh-CN': '高自有率下的房龄反差：台湾「人屋双老」与大陆「存量房去化」',
      en: 'Homeownership vs. Aging Stocks: Taiwan Aging Dwellings & Mainland Housing Inventory'
    },
    kicker: {
      'zh-TW': '住房屋況 · 產權制度',
      'zh-CN': '住房屋况 · 产权制度',
      en: 'Housing & Property · Freehold vs Leasehold'
    },
    source: '內政部戶政司與營建統計 / 大陸住建部房產報告',
    sourceAuthority: 'DGBAS',
    publishedAt: '2026-09-28T04:15:00Z',
    readTimeMinutes: 5,
    summary: {
      'zh-TW': '兩岸自有率均處於 80%-90% 的全球高水平，但台灣半數以上住宅屋齡超過 30 年，永久產權帶來資產抗通膨性但都更延宕；大陸城鎮屋齡多在 25 年內，正推進房屋養老金制度。',
      'zh-CN': '两岸自有率均处于 80%-90% 的全球高水平，但台湾半数以上住宅房龄超过 30 年，永久产权带来资产抗通胀性但旧改延宕；大陆城镇房龄多在 25 年内，正推进房屋养老金制度。',
      en: 'Both regions maintain high homeownership (80-90%). Over half of Taiwan housing is >30 years old under freehold tenure, while Mainland urban homes are mostly <25 years old under 70-year leaseholds.'
    },
    content: {
      'zh-TW': [
        '依據 2026 年最新官方統計，台灣與中國大陸在「個人與家庭自有房屋率」上均處於世界較高水平（台灣約 78%-81%，中國大陸全體約 96%、城鎮約 89%），但背後的屋齡結構與產權型態有顯著差異。',
        '在房屋屋齡方面，台灣正面臨嚴峻的「人屋雙老」現象。全台平均屋齡已達 34 至 35 年，30 年以上老宅佔比接近 60%（約 554 萬戶），在台北市更有超過 72% 為老屋，且 40 年以上無電梯老公寓仍是交易主流。永久產權雖然賦予房產極佳的抗通膨保值力，但過低的持有稅與少數產權整合困難，導致都市更新週期長達數十年。',
        '相較之下，中國大陸城鎮住宅得益於 2000 年後的大開發時代，平均屋齡僅約 20 至 23 年，新屋與電梯大樓覆蓋率極高。其當前挑戰在於 2026 年新成屋庫存去化，以及 70 年產權住宅步入 20-30 年後的物業維護與「房屋養老金」制度建立。',
        '統計定義上，台灣自有率統計以戶內成員擁有為基準；大陸則包含廣大農村宅基地自建房（幾乎 100% 自有）。'
      ],
      'zh-CN': [
        '依据 2026 年最新官方统计，台湾与中国大陆在「个人与家庭自有房屋率」上均处于世界较高水平（台湾约 78%-81%，中国大陆全体约 96%、城镇约 89%），但背后的房龄结构与产权形态有显著差异。',
        '在房屋房龄方面，台湾正面临严峻的「人屋双老」现象。全台平均房龄已达 34 至 35 年，30 年以上老旧住宅占比接近 60%（约 554 万户），在台北市更有超过 72% 为老房，且 40 年以上无电梯老公寓仍是交易主流。永久产权虽然赋予房产极佳的抗通胀保值力，但过低的持有税与少数产权整合困难，导致都市更新周期长达数十年。',
        '相比之下，中国大陆城镇住宅得益于 2000 年后的大开发时代，平均房龄仅约 20 至 23 年，新房与电梯大楼覆盖率极高。其当前挑战在于 2026 年新成屋库存去化，以及 70 年产权住宅步入 20-30 年后的物业维护与「房屋养老金」制度建立。',
        '统计定义上，台湾自有率统计以户内成员拥有为基准；大陆则包含广大农村宅基地自建房（几乎 100% 自有）。'
      ],
      en: [
        'Official 2026 statistics show both Taiwan (78-81%) and Mainland China (96% overall, 89% urban) exhibit high homeownership rates, yet face contrasting age structures and property rights regimes.',
        'Taiwan contends with an "aging people, aging houses" dilemma. Nationwide average building age is 34-35 years, with ~60% of homes older than 30 years (exceeding 72% in Taipei). While freehold titles ensure long-term value preservation, low holding tax creates urban renewal bottlenecks.',
        'Conversely, Mainland urban housing was largely constructed during the 2000-2020 urban expansion wave, averaging 20-23 years. The focus in 2026 revolves around inventory de-stocking and long-term maintenance reserve funds for 70-year leaseholds.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '屋齡鴻溝：台灣平均屋齡 34-35 年（老屋近 60%）；大陸城鎮屋齡僅 20-23 年。',
        '產權本質：台灣為土地建物永久所有權，大陸為 70 年住宅用地使用權。',
        '居住體感：大陸新一線電梯大樓與智慧物業普及；台灣老舊公寓面臨長照與無障礙改裝壓力。'
      ],
      'zh-CN': [
        '房龄鸿沟：台湾平均房龄 34-35 年（老房近 60%）；大陆城镇房龄仅 20-23 年。',
        '产权本质：台湾为土地建筑物永久所有权，大陆为 70 年住宅用地使用权。',
        '居住体感：大陆新一线电梯大楼与智慧物业普及；台湾老旧公寓面临长照与无障碍改建压力。'
      ],
      en: [
        'Building age contrast: Taiwan housing averages 34-35 yrs (>60% aged >30); Mainland urban housing averages 20-23 yrs.',
        'Tenure framework: Perpetual freehold title in Taiwan vs 70-year residential land leaseholds in Mainland China.',
        'Living experience: Modern elevator complexes dominate Chinese cities; Taiwan older walk-ups face retrofit challenges.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '永久地權保護了既有資產擁有者，但也推升了首購族購屋年齡延遲現象。',
        'zh-CN': '永久地权保护了既有资产拥有者，但也推升了首购族购房年龄延迟现象。',
        en: 'Perpetual title protects legacy homeowners, but delays the average first-time buyer acquisition age.'
      },
      coreMechanism: {
        'zh-TW': '台灣地價貴於建物，40 年老公寓地段價值依然強勁；大陸房產價值更高度依賴後期物業管理與折舊。',
        'zh-CN': '台湾地价贵于建筑物，40 年老公寓地段价值依然强劲；大陆房产价值更高度依赖后期物业管理与折旧。',
        en: 'In Taiwan, land scarcity supports older home values; in China, asset valuations depend more directly on property management upkeep.'
      },
      outlook2026: {
        'zh-TW': '台灣 2026 推動老屋延壽與耐震補助；大陸推廣房屋養老金與城市更新法規。',
        'zh-CN': '台湾 2026 推动老旧建筑延寿与耐震补助；大陆推广房屋养老金与城市更新法规。',
        en: 'Taiwan reinforces seismic retrofit subsidies in 2026, while China implements building lifecycle reserve mechanisms.'
      }
    },
    metrics: quantitativeDatasets[2].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-healthcare-2026',
    pillar: 'healthcare',
    title: {
      'zh-TW': '醫療制度與照護指數：全民健保制度優勢與大病自費課題',
      'zh-CN': '医疗制度与照护指数：全民健保制度优势与大病自费课题',
      en: 'Healthcare Systems & Care Indices: Universal Access & Critical Care Co-Pays'
    },
    kicker: {
      'zh-TW': '公衛醫療 · 健保照護',
      'zh-CN': '公卫医疗 · 医保照护',
      en: 'Public Health · Universal Care'
    },
    source: 'Numbeo Health Care Index 2026 / 衛福部健保署 / 國家醫保局',
    sourceAuthority: 'WHO',
    publishedAt: '2026-09-28T03:30:00Z',
    readTimeMinutes: 5,
    summary: {
      'zh-TW': '台灣在 2026 全球醫療照護指數以 87.1 分奪冠，門診定額自負低且行政效率極高；大陸透過規模集採壓低基礎慢性病藥價，城鄉分級診療推進中。',
      'zh-CN': '台湾在 2026 全球医疗照护指数以 87.1 分夺冠，门诊定额自负低且行政效率极高；大陆通过规模集采压低基础慢性病药价，城乡分级诊疗推进中。',
      en: 'Taiwan ranks #1 globally in Numbeo Health Care Index (87.1 points), with low copays and administrative efficiency; China lowers baseline drug prices via centralized bulk volume tenders.'
    },
    content: {
      'zh-TW': [
        '根據 2026 年最新發布的全球醫療體系指標，台灣全民健康保險以 87.1 分高居全球第 1 名，制度覆蓋率趨近 100%，行政管理成本僅約 2%。一般感冒或常規門診僅需支付 NT$150 至 500 元的定額掛號費與部分負擔。',
        '這項強大的公共醫療財，大幅降低了台灣家庭在應對日常健康風險時的「預防性儲蓄」需求，使可支配薪資實質含金量顯著提高。',
        '然而，台灣健保在 2026 年面臨四大考驗：內外婦兒重症科別及基層護理人員薪資工作壓力（全台關床現象）、以及國際新興標靶新藥納保審查週期長，導致自費醫材與商業癌症險負擔增加。',
        '在中國大陸，醫保制度覆蓋率達到約 95%。政府藉由 14 億人口的超大市場規模，推動「國家藥品集採」，大幅降低常見慢性病藥品價格達 50%-70%。然而對於一線三甲醫院重症治療，醫保目錄外的自費藥品與檢查項目仍佔住院費用相當比重，城鄉分級就醫體系持續優化中。'
      ],
      'zh-CN': [
        '根据 2026 年最新发布的全球医疗体系指标，台湾全民健康保险以 87.1 分高居全球第 1 名，制度覆盖率趋近 100%，行政管理成本仅约 2%。一般感冒或常规门诊仅需支付 NT$150 至 500 元的定额挂号费与部分负担。',
        '这项强大的公共医疗品，大幅降低了台湾家庭在应对日常健康风险时的「预防性储蓄」需求，使可支配薪资实质含金量显著提高。',
        '然而，台湾健保在 2026 年面临四大考验：内外妇儿重症科别及基层护理人员薪资工作压力（全台关床现象）、以及国际新兴靶向新药纳保审查周期长，导致自费医材与商业癌症险负担增加。',
        '在中国大陆，医保制度覆盖率达到约 95%。政府借由 14 亿人口的超大市场规模，推动「国家药品集采」，大幅降低常见慢性病药品价格达 50%-70%。然而对于一线三甲医院重症治疗，医保目录外的自费药品与检查项目仍占住院费用相当比重，城乡分级就医体系持续优化中。'
      ],
      en: [
        'Taiwan’s National Health Insurance program ranks 1st globally with an 87.1 score in the 2026 Numbeo Health Care Index, offering near 100% population coverage and administrative costs of only ~2%. Typical clinic visits cost between NT$150-500 in copays.',
        'This universal healthcare buffer drastically reduces precautionary medical savings, boosting disposable household purchasing power.',
        'Nevertheless, Taiwan faces structural bottlenecks: nursing shortages, critical care staffing pressures, and delays in reimbursing novel targeted cancer therapies.',
        'In Mainland China, basic coverage exceeds 95%. Through centralized national volume procurement, prices for chronic disease medications dropped 50-70%. However, out-of-pocket expenses for cutting-edge therapies at Tier-3 hospitals still represent substantial shares of critical illness inpatient care.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '體系評分：台灣以 87.1 分名列全球第 1，基礎門診與慢性病負擔極輕。',
        '採購規模：大陸透過國家集採成功大幅壓低基礎藥價，擴大普惠覆蓋。',
        '共同挑戰：新興昂貴標靶藥物納保審查與自費項目增長，是兩岸家庭共同關注的焦點。'
      ],
      'zh-CN': [
        '体系评分：台湾以 87.1 分名列全球第 1，基础门诊与慢性病负担极轻。',
        '采购规模：大陆通过国家集采成功大幅压低基础药价，扩大普惠覆盖。',
        '共同挑战：新兴昂贵靶向药物纳保审查与自费项目增长，是两岸家庭共同关注的焦点。'
      ],
      en: [
        'Global Leader: Taiwan leads world rankings with an 87.1 score in healthcare accessibility.',
        'Bulk Tendering: Mainland China utilizes vast purchasing scale to sharply lower common chronic medicine costs.',
        'Shared Burden: Reimbursing cutting-edge oncology and gene therapies remains a fiscal balancing act for both.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '醫療公共財的優劣，直接決定薪資能否實質轉化為生活品質，而非沉澱為防禦性醫療儲蓄。',
        'zh-CN': '医疗公共品的优劣，直接决定薪资能否实质转化为生活品质，而非沉淀为防御性医疗储蓄。',
        en: 'The quality of public health goods determines whether wages become active consumption or defensive savings.'
      },
      coreMechanism: {
        'zh-TW': '台灣的優勢在於就醫極度平等且行政成本低；大陸的優勢在於集採規模效益與互聯網遠端醫療推進。',
        'zh-CN': '台湾的优势在于就医极度平等且行政成本低；大陆的优势在于集采规模效益与互联网远程医疗推进。',
        en: 'Taiwan excels in egalitarian clinic access, while China advances telehealth and centralized price leverage.'
      },
      outlook2026: {
        'zh-TW': '2026 年台灣著手健保財務改革與醫護薪資調整；大陸著力推展跨省共濟與農村報銷比率提升。',
        'zh-CN': '2026 年台湾着手健保财务改革与医护薪资调整；大陆着力推展跨省共济与农村报销比率提升。',
        en: 'Taiwan is reforming staff compensation and drug reimbursement, while China expands cross-provincial medical pooling.'
      }
    },
    metrics: quantitativeDatasets[3].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-pension-2026',
    pillar: 'pension',
    title: {
      'zh-TW': '退休金與養老保障：所得替代率與長照資源雙軌比較',
      'zh-CN': '退休金与养老保障：所得替代率与长照资源双轨比较',
      en: 'Pensions & Elder Care: Income Replacement Rates & Long-Term Care'
    },
    kicker: {
      'zh-TW': '社會安全 · 退休所得',
      'zh-CN': '社会安全 · 退休所得',
      en: 'Social Security · Pensions'
    },
    source: 'OECD 養老金報告 / 兩岸勞動與社保統計',
    sourceAuthority: 'DGBAS',
    publishedAt: '2026-09-28T02:00:00Z',
    readTimeMinutes: 4,
    summary: {
      'zh-TW': '台灣勞保勞退雙軌制平均月領約 NT$31,500（約 1,650 PPP 美元），替代率達 50%-60%；大陸城鎮職工月領約 ¥4,700（約 1,120 PPP 美元），並逐步推動延遲退休與個人養老金第三支柱。',
      'zh-CN': '台湾劳保劳退双轨制平均月领约 NT$31,500（约 1,650 PPP 美元），替代率达 50%-60%；大陆城镇职工月领约 ¥4,700（约 1,120 PPP 美元），并逐步推动延迟退休与个人养老金第三支柱。',
      en: 'Taiwan dual-pillar retirement provides avg ~NT$31,500 ($1,650 PPP) with 50-60% replacement rate; Mainland China urban workers receive ~¥4,700 ($1,120 PPP) alongside gradual retirement age adjustments.'
    },
    content: {
      'zh-TW': [
        '在衡量退休後的生活安定度與所得替代率時，台灣與中國大陸各自呈現出不同的制度演進特徵。',
        '台灣多數私校及企業受雇勞工領取「勞保年金（第一層）」加上「勞工退休金（第二層）」。2026 年預估平均月領金額約達 NT$31,500（折合購買力平價約 1,650 PPP 美元），中位數勞工的退休前所得替代率約落在 50% 至 60% 之間。配合健保免除大額醫療負擔，使多數退休族群享有穩定的現金流。',
        '在中國大陸，養老體系呈現機關事業單位、城鎮企業職工與城鄉居民養老的三元層級。2026 年全體退休人員平均月領約 3,850 人民幣，其中城鎮職工平均約 4,700 人民幣（折合購買力平價約 1,120 PPP 美元），所得替代率約為 40% 至 45%。',
        '面對高齡化社會，兩岸均在加緊強化長期照護網絡：台灣以長照 3.0 深入社區居家復健；大陸則在二三線城市廣泛設立社區養老食堂與銀髮日間照料中心。'
      ],
      'zh-CN': [
        '在衡量退休后的生活安定度与所得替代率时，台湾与中国大陆各自呈现出不同的制度演进特征。',
        '台湾多数私校及企业受雇劳工领取「劳保年金（第一层）」加上「劳工退休金（第二层）」。2026 年预估平均月领金额约达 NT$31,500（折合购买力平价约 1,650 PPP 美元），中位数劳工的退休前所得替代率约落在 50% 至 60% 之间。配合健保免除大额医疗负担，使多数退休族群享有稳定的现金流。',
        '在中国大陆，养老体系呈现机关事业单位、城镇企业职工与城乡居民养老的三元层级。2026 年全体退休人员平均月领约 3,850 人民币，其中城镇职工平均约 4,700 人民币（折合购买力平价约 1,120 PPP 美元），所得替代率约为 40% 至 45%。',
        '面对高龄化社会，两岸均在加紧强化长期照护网络：台湾以长照 3.0 深入社区居家复健；大陆则在二三线城市广泛设立社区养老食堂与银发日间照料中心。'
      ],
      en: [
        'Comparing retirement comfort involves looking at income replacement rates and eldercare safety nets.',
        'Taiwan private-sector workers draw upon dual pillars (Labor Insurance + Labor Pension). In 2026, average combined monthly receipt is ~NT$31,500 (~$1,650 PPP), achieving a 50-60% replacement rate for median workers. Paired with low healthcare expenses, this secures steady baseline cash flow.',
        'In Mainland China, the pension system features civil service, enterprise urban employees, and rural resident tiers. Urban employees receive ~RMB 4,700 (~$1,120 PPP) on average, representing a 40-45% replacement rate.',
        'Both regions are expanding eldercare: Taiwan accelerates Long-Term Care 3.0 community outreach, while Chinese cities deploy municipal senior canteens and daycare centers.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '月領購買力：台灣退休平均購買力為大陸全體 1.8 倍、城鎮職工 1.5 倍。',
        '所得替代率：台灣中位數勞工約 50%-60%，大陸城鎮職工約 40%-45%。',
        '高齡化趨勢：兩岸均致力於推動銀髮健康照護與養老基金可持續性改革。'
      ],
      'zh-CN': [
        '月领购买力：台湾退休平均购买力为大陆全体 1.8 倍、城镇职工 1.5 倍。',
        '所得替代率：台湾中位数劳工约 50%-60%，大陆城镇职工约 40%-45%。',
        '高龄化趋势：两岸均致力于推动银发健康照护与养老基金可持续性改革。'
      ],
      en: [
        'Purchasing parity: Taiwan retirees receive ~1.8x overall Mainland, 1.5x urban employee average in PPP terms.',
        'Replacement ratios: 50-60% in Taiwan vs 40-45% in urban China.',
        'Aging societies: Both economies prioritize pension fund sustainability and community eldercare services.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '退休安全感不僅取決於每月金流，更高度依賴自有住宅產權與醫療健保支撐。',
        'zh-CN': '退休安全感不仅取决于每月金流，更高度依赖自有住宅产权与医疗医保支撑。',
        en: 'Retirement security relies not solely on cash income, but fundamentally on debt-free homeownership and comprehensive health coverage.'
      },
      coreMechanism: {
        'zh-TW': '台灣退休族多持有付清房貸之老屋，居住負擔極低；大陸二三線城市在生活食品與餐飲物價上表現強韌。',
        'zh-CN': '台湾退休族多持有付清房贷之老房，居住负担极低；大陆二三线城市在生活食品与餐饮物价上表现强韧。',
        en: 'Taiwan retirees largely own mortgage-free homes; Chinese tier-2/3 cities offer very inexpensive dining and food staples.'
      },
      outlook2026: {
        'zh-TW': '台灣持續執行勞保財務撥補（2026 預算 1,500 億元）；大陸推進延遲退休與第三支柱商業養老金試點。',
        'zh-CN': '台湾持续执行劳保财务拨补（2026 预算 1,500 亿元）；大陆推进延迟退休与第三支柱商业养老金试点。',
        en: 'Taiwan continues fiscal budget subsidization, while China rolls out incremental retirement age adjustments.'
      }
    },
    metrics: quantitativeDatasets[4].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-publicgoods-2026',
    pillar: 'public_goods',
    title: {
      'zh-TW': '公共財累積與生活體感：硬體基建紅利與制度安全網對比',
      'zh-CN': '公共品累积与生活体感：硬件基建红利与制度安全网对比',
      en: 'Public Goods & Quality of Life: Physical Infrastructure vs. Social Safety Nets'
    },
    kicker: {
      'zh-TW': '生活品質 · 公共財',
      'zh-CN': '生活品质 · 公共品',
      en: 'Quality of Life · Public Goods'
    },
    source: '世界銀行基礎設施評估報告 / 兩岸公共工程年報',
    sourceAuthority: 'WorldBank',
    publishedAt: '2026-09-28T01:10:00Z',
    readTimeMinutes: 5,
    summary: {
      'zh-TW': '大陸二三線城市憑藉寬廣道路、高鐵網、大型濕地公園與極速數位物流形成強大生活便利感；台灣則在法治穩定、產權保護與均質健保等非物質公共財上維持厚實韌性。',
      'zh-CN': '大陆二三线城市凭借宽广道路、高铁网、大型湿地公园与极速数字物流形成强大生活便利感；台湾则在法治稳定、产权保护与均质健保等非物质公共品上维持厚实韧性。',
      en: 'Chinese regional cities present expansive roads, high-speed rail, public parks, and ultra-efficient e-commerce logistics; Taiwan retains deep institutional equity in rule of law, healthcare, and civic trust.'
    },
    content: {
      'zh-TW': [
        '在經濟學中，「公共財」（Public Goods）的品質與普及率，直接影響個人的實質生活感受。如果社會公共財高度發達，個人需要「自費購買」以維持體面生活的開銷就相對降低。',
        '在過去十數年的大規模基建驅動下，中國大陸二三線城市（如臨沂、蕪湖、清遠等）展現了顯著的「硬體公共財」溢價：寬敞平整的市政道路、四通八達的高鐵網絡、出門即見的大型濕地公園、以及極低費用的快遞配送網絡，使居民享有開闊的物理生活空間。',
        '相比之下，台灣的公共財優勢深植於「防禦性與制度型」領域：均質平等的健保制度、可靠的法治產權保障、以及成熟的志工社會網絡。這些軟性公共財雖然在市容外觀上不顯眼，但有效排除了個體在面對重大變故時的系統性風險。',
        '兩者形成了獨特的生活體感對照：大陸二三線城市展現現代化都市硬體的舒適感；台灣則展現私人生活彈性與制度安全網的包容感。'
      ],
      'zh-CN': [
        '在经济学中，「公共品」（Public Goods）的品质与普及率，直接影响个人的实质生活感受。如果社会公共品高度发达，个人需要「自费购买」以维持体面生活的开销就相对降低。',
        '在过去十数年的大规模基建驱动下，中国大陆二三线城市（如临沂、芜湖、清远等）展现了显著的「硬件公共品」溢价：宽敞平整的市政道路、四通八达的高铁网络、出门即见的大型湿地公园、以及极低费用的快递配送网络，使居民享有开阔的物理生活空间。',
        '相比之下，台湾的公共品优势深植于「防御性与制度型」领域：均质平等的健保制度、可靠的法治产权保障、以及成熟的志工社会网络。这些软性公共品虽然在市容外观上不显眼，但有效排除了个体在面对重大变故时的系统性风险。',
        '两者形成了独特的生活体感对照：大陆二三线城市展现现代化都市硬件的舒适感；台湾则展现私人生活弹性与制度安全网的包容感。'
      ],
      en: [
        'In economics, the density and quality of public goods directly shape the daily lived experience. High public good provision lowers the private out-of-pocket costs needed to maintain a high quality of life.',
        'Backed by massive infrastructure investment, Mainland regional cities provide striking physical infrastructure amenities: multi-lane avenues, high-speed rail integration, municipal green spaces, and low-cost delivery networks.',
        'By contrast, Taiwan’s public goods lie in institutional safety nets: egalitarian healthcare, legal predictability, property tenure certainty, and deep civic networks. While not visible in city skylines, they buffer families from major life hazards.',
        'This creates a meaningful contrast: physical spaciousness and digital convenience in regional Chinese hubs versus institutional resilience and individual security in Taiwan.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '硬體基建紅利：大陸二三線城市在道路、高鐵、綠帶與數位物流上具備極高便利體感。',
        '制度安全底線：台灣在全民醫療、產權法治與社會救濟上提供低生存焦慮的制度防線。',
        '互補發展借鏡：硬體現代化與制度均質性，是兩岸提升公共福利的共同思考方向。'
      ],
      'zh-CN': [
        '硬件基建红利：大陆二三线城市在道路、高铁、绿带与数字物流上具备极高便利体感。',
        '制度安全底线：台湾在全民医疗、产权法治与社会救济上提供低生存焦虑的制度防线。',
        '互补发展借镜：硬件现代化与制度均质性，是两岸提升公共福利的共同思考方向。'
      ],
      en: [
        'Physical infrastructure: Regional Chinese cities feature wide transit boulevards, rail grids, and municipal parks.',
        'Institutional resilience: Taiwan provides robust baseline guarantees against catastrophic healthcare and asset risk.',
        'Mutual perspectives: Balancing physical modernization with equitable social services is a universal priority.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '公共財能有效降低名義薪資與生活幸福感之間的落差。',
        'zh-CN': '公共品能有效降低名义薪资与生活幸福感之间的落差。',
        en: 'Abundant public amenities bridge the gap between nominal earnings and subjective well-being.'
      },
      coreMechanism: {
        'zh-TW': '大陸硬體基建賦予中產階級「微觀寬敞」的物理享受；台灣軟性制度給予中產階級「宏觀確定性」的心靈安穩。',
        'zh-CN': '大陆硬件基建赋予中产阶级「微观宽敞」的物理享受；台湾软性制度给予中产阶级「宏观确定性」的心灵安稳。',
        en: 'Mainland infrastructure delivers physical spaciousness, whereas Taiwan’s institutional fabric provides legal predictability.'
      },
      outlook2026: {
        'zh-TW': '未來五年，台灣著重人行道優化與都更翻新；大陸著重加強基層社會保障均等化。',
        'zh-CN': '未来五年，台湾着重人行道优化与旧改翻新；大陆着重加强基层社会保障均等化。',
        en: 'Taiwan focuses on urban pedestrian walkways and renewal, while China prioritizes equalizing basic social benefits across regions.'
      }
    },
    metrics: quantitativeDatasets[5].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-culture-2026',
    pillar: 'culture_wellbeing',
    title: {
      'zh-TW': '文化生活與非物質指標：幸福指數、社會信任與安全感實測',
      'zh-CN': '文化生活与非物质指标：幸福指数、社会信任与安全感实测',
      en: 'Cultural Well-Being: Happiness Rankings, Civic Trust & Safety Indices'
    },
    kicker: {
      'zh-TW': '非物質量化 · 社會文明',
      'zh-CN': '非物质量化 · 社会文明',
      en: 'Measurable Well-Being · Civic Metrics'
    },
    source: 'UN World Happiness Report / Numbeo Safety / CAF Giving Index',
    sourceAuthority: 'ThinkTank',
    publishedAt: '2026-09-27T23:00:00Z',
    readTimeMinutes: 4,
    summary: {
      'zh-TW': '聯合國幸福感報告中台灣名列亞洲前列（6.51分）；Numbeo 治安指數達 83.2 分；大陸社群集體文娛參與率極高，數位政務一站式便民指數獲 82.5 分好評。',
      'zh-CN': '联合国幸福感报告中台湾名列亚洲前列（6.51分）；Numbeo 治安指数达 83.2 分；大陆社群集体文娱参与率极高，数字政务一站式便民指数获 82.5 分好评。',
      en: 'Taiwan scores 6.51 in the UN World Happiness Report and 83.2 in the Numbeo Safety Index; Mainland China achieves high civic digital service adoption (82.5) alongside active elderly cultural participation.'
    },
    content: {
      'zh-TW': [
        '民生研究不應僅限於貨幣與水泥，文化休閒、人身安全與社會信任等非物質面向，是衡量現代文明成熟度的關鍵量化尺規。',
        '在聯合國永續發展解決方案網絡（SDSN）發布的《全球幸福感報告》中，台灣評分達 6.51 分（滿分 10 分），在預期健康壽命、社會互助支持感與人生自由選擇度三個子維度上評分亮眼。同時，在 Numbeo 治安安全指數中，台灣以 83.2 分名列全球第 3 名。',
        '在中國大陸，數位便民政務與社群互助也展現了獨特的文化活力。一站式便民 App 普及率與政務辦理滿意度達 82.5 分；在退休族群中，基層老年大學、社區文化站與戶外廣場集體社交的普及率極高，展現出強韌的群體凝聚感。',
        '客觀數據證實，兩岸在治安安全感與日常人際信任上均維持世界一流水平，夜間獨自外出安全感皆超過 80%。'
      ],
      'zh-CN': [
        '民生研究不应仅限于货币与水泥，文化休闲、人身安全与社会信任等非物质面向，是衡量现代文明成熟度的关键量化尺规。',
        '在联合国永续发展解决方案网络（SDSN）发布的《全球幸福感报告》中，台湾评分达 6.51 分（满分 10 分），在预期健康寿命、社会互助支持感与人生自由选择度三个子维度上评分亮眼。同时，在 Numbeo 治安安全指数中，台湾以 83.2 分名列全球第 3 名。',
        '在中国大陆，数字便民政务与社群互助也展现了独特的文化活力。一站式便民 App 普及率与政务办理满意度达 82.5 分；在退休族群中，基层老年大学、社区文化站与户外广场集体社交的普及率极高，展现出强韧的群体凝聚感。',
        '客观数据证实，两岸在治安安全感与日常人际信任上均维持世界一流水平，夜间独自外出安全感皆超过 80%。'
      ],
      en: [
        'Living standards extend beyond financial metrics. Leisure, personal security, and social trust constitute vital measurable dimensions of modern civic society.',
        'In the UN World Happiness Report, Taiwan scores 6.51 (out of 10), ranking near the top in East Asia for health expectancy, social support, and personal autonomy. Taiwan also ranks 3rd worldwide in the Numbeo Safety Index with an 83.2 score.',
        'In Mainland China, civic digital administration and communal culture demonstrate distinct vitality. One-stop municipal service apps score 82.5 in satisfaction. Among retirees, senior cultural colleges and square-dance associations provide vibrant social inclusion.',
        'Data confirms both societies enjoy top-tier public safety, with over 80% expressing confidence walking alone at night.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '幸福感指數：台灣 6.51 分（亞洲前茅），大陸在集體文娛生活上具備高活躍度。',
        '人身安全：兩岸在治安指數均高居全球前 20 名（台灣 83.2 分、大陸 74.5 分）。',
        '文化參與：退休族群文化社交與日常休閒支出佔比逐年上升。'
      ],
      'zh-CN': [
        '幸福感指数：台湾 6.51 分（亚洲前茅），大陆在集体文娱生活上具备高活跃度。',
        '人身安全：两岸在治安指数均高居全球前 20 名（台湾 83.2 分、大陆 74.5 分）。',
        '文化参与：退休族群文化社交与日常休闲支出占比逐年上升。'
      ],
      en: [
        'Happiness Rankings: Taiwan scores 6.51; Mainland retirees display notable collective social engagement.',
        'Public Safety: Both rank in the global top 20 for safety (Taiwan 83.2, Mainland 74.5).',
        'Cultural Engagement: Senior participation in community arts and education expands steadily in both areas.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '非物質指標反映了公民在基本溫飽滿足後，對尊嚴、歸屬感與生活樂趣的深層追求。',
        'zh-CN': '非物质指标反映了公民在基本温饱满足后，对尊严、归属感与生活乐趣的深层追求。',
        en: 'Non-material indices capture deeper societal aspirations for dignity, community belonging, and life fulfillment.'
      },
      coreMechanism: {
        'zh-TW': '台灣的公民互助與非營利組織成熟度高；大陸的基層社區組織動員與數位服務普及力強。',
        'zh-CN': '台湾的公民互助与非营利组织成熟度高；大陆的基层社区组织动员与数字服务普及力强。',
        en: 'Taiwan features rich civil society NGOs; China demonstrates rapid civic digital integration and neighborhood mobilization.'
      },
      outlook2026: {
        'zh-TW': '兩岸均持續將心理健康諮商與高齡孤獨問題納入公共政策重點。',
        'zh-CN': '两岸均持续将心理健康咨询与高龄孤独问题纳入公共政策重点。',
        en: 'Both policy landscapes increasingly focus on mental wellness and tackling elder isolation.'
      }
    },
    metrics: quantitativeDatasets[6].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'art-semiconductor-2026',
    pillar: 'semiconductor',
    title: {
      'zh-TW': '半導體產業鏈自主性：關鍵節點優勢與國產替代競爭格局',
      'zh-CN': '半导体产业链自主性：关键节点优势与国产替代竞争格局',
      en: 'Semiconductor Autonomy: Critical Node Dominance & Domestic Substitution'
    },
    kicker: {
      'zh-TW': '產業科技 · 戰略晶片',
      'zh-CN': '产业科技 · 战略芯片',
      en: 'Tech & Industry · Semiconductors'
    },
    source: 'TrendForce 集邦科技 / SEMI 國際半導體產業協會 2026',
    sourceAuthority: 'ThinkTank',
    publishedAt: '2026-09-27T21:40:00Z',
    readTimeMinutes: 5,
    summary: {
      'zh-TW': '台灣在 2/3 奈米先進晶圓代工掌握全球約 70% 市佔，但依賴美日歐設備原料；大陸在 28/14 奈米成熟製程國產替代率逾 60%，並積極佈局先進封裝 Chiplet 與去美化供應鏈。',
      'zh-CN': '台湾在 2/3 纳米先进制程晶圆代工掌握全球约 70% 市占，但依赖美日欧设备原料；大陆在 28/14 纳米成熟制程国产替代率逾 60%，并积极布局先进封装 Chiplet 与去美化供应链。',
      en: 'Taiwan controls ~70% of global sub-7nm foundry output, relying on western EDA and materials; Mainland China achieves >60% mature node self-sufficiency, pushing Chiplet advanced packaging.'
    },
    content: {
      'zh-TW': [
        '半導體產業是兩岸經濟與科技實力的核心引擎，然而兩者在全球產業鏈的定位與自主性路徑存在重大差異。',
        '台灣的晶圓製造龍頭與 IC 設計業者在全球「非紅產業鏈」中佔據了無可替代的「關鍵節點」。在 2 奈米、3 奈米與 5 奈米先進製程領域，台灣晶圓代工市佔率高達約 70%。然而其軟肋在於上下游依賴度高：EDA 軟體受制於美國、EUV 光刻機受制於荷蘭、關鍵光阻劑與化學原料依賴日本，且產能高度依賴外部終端市場消化。',
        '面對地緣政治技術封鎖，中國大陸在 2026 年採取舉國體制推動「全產業鏈自主攻堅」。在 28 奈米、14 奈米等成熟製程領域，汽車晶片與家電微控制器的國產化替代率已突破 60%，產能瘋狂開出；在先進封裝（Advanced Packaging）與小晶片（Chiplet）架構上，大陸正嘗試以成熟製程多晶片堆疊逼近先進製程性能。',
        '未來 5 至 10 年，成熟製程競爭將趨於白熱化，而先進製程自主封閉循環將是全球關注的勝負分野。'
      ],
      'zh-CN': [
        '半导体产业是两岸经济与科技实力的核心引擎，然而两者在全球产业链的定位与自主性路径存在重大差异。',
        '台湾的晶圆制造龙头与 IC 设计业者在全球「非红产业链」中占据了无可替代的「关键节点」。在 2 纳米、3 纳米与 5 纳米先进制程领域，台湾晶圆代工市占率高达约 70%。然而其软肋在于上下游依赖度高：EDA 软件受制于美国、EUV 光刻机受制于荷兰、关键光刻胶与化学原料依赖日本，且产能高度依赖外部终端市场消化。',
        '面对地缘政治技术封锁，中国大陆在 2026 年采取举国体制推动「全产业链自主攻坚」。在 28 纳米、14 纳米等成熟制程领域，汽车芯片与家电微控制器的国产化替代率已突破 60%，产能疯狂开出；在先进封装（Advanced Packaging）与小芯片（Chiplet）架构上，大陆正尝试以成熟制程多芯片堆叠逼近先进制程性能。',
        '未来 5 至 10 年，成熟制程竞争将趋于白热化，而先进制程自主封闭循环将是全球关注的胜负分野。'
      ],
      en: [
        'The semiconductor industry powers economic resilience in both regions, yet their supply chain postures diverge sharply.',
        'Taiwan anchors an indispensable foundry node in the global western-aligned tech ecosystem, commanding ~70% of sub-7nm fabrication capacity. However, it relies entirely on U.S. EDA software, Dutch lithography tools, and Japanese photoresists.',
        'Facing geopolitical tech controls, Mainland China drives whole-chain self-sufficiency. In 14nm and 28nm mature nodes, domestic automotive and IoT chip replacement exceeds 60%. China also channels massive capital into Chiplet modular 3D packaging to bypass optical lithography limits.',
        'Over the next 5 to 10 years, intense mature node competition will redefine global margins, testing technological autonomy on both sides.'
      ]
    },
    keyTakeaways: {
      'zh-TW': [
        '節點優勢：台灣掌控先進製程晶圓製造 70% 市佔，為全球 AI 硬體供應鏈中樞。',
        '自主替代：大陸成熟製程國產替代率破 60%，全力攻堅 Chiplet 先進封裝與自主設備。',
        '戰略轉折：未來 5-10 年，設備材料自主性與多元晶片架構將是重塑格局的核心變數。'
      ],
      'zh-CN': [
        '节点优势：台湾掌控先进制程晶圆制造 70% 市占，为全球 AI 硬件供应链中枢。',
        '自主替代：大陆成熟制程国产替代率破 60%，全力攻坚 Chiplet 先进封装与自主设备。',
        '战略转折：未来 5-10 年，设备材料自主性与多元芯片架构将是重塑格局的核心变量。'
      ],
      en: [
        'Node Dominance: Taiwan holds ~70% share of advanced fabrication, serving as the world’s AI hardware anchor.',
        'Autonomous Substitution: China exceeds 60% domestic substitution in mature nodes, leaning into modular Chiplet architectures.',
        'Long-term Horizon: The next 5-10 years will test full-chain supply sovereignty and alternative chip packaging.'
      ]
    },
    deepAnalysis: {
      context: {
        'zh-TW': '半導體產值是支撐台灣外匯儲備與科技高薪的單一最關鍵命脈。',
        'zh-CN': '半导体产值是支撑台湾外汇储备与科技高薪的单一最关键命脉。',
        en: 'Semiconductor value creation is the single greatest pillar underpinning Taiwan’s foreign reserves and high-paying tech jobs.'
      },
      coreMechanism: {
        'zh-TW': '台灣模式是高度分工的代工節點模式；大陸戰略則是全產業鏈自主閉環與內循環替代。',
        'zh-CN': '台湾模式是高度分工的代工节点模式；大陆战略则是全产业链自主闭环与内循环替代。',
        en: 'Taiwan represents specialized fabrication excellence, whereas China pursues vertically integrated domestic loop security.'
      },
      outlook2026: {
        'zh-TW': '台灣持續加碼 2 奈米量產與海外晶圓廠佈局；大陸擴大國產光刻設備商業化驗證。',
        'zh-CN': '台湾持续加码 2 纳米量产与海外晶圆厂布局；大陆扩大国产光刻设备商业化验证。',
        en: 'Taiwan accelerates 2nm mass production, while China scales commercial trials of domestic lithography tools.'
      }
    },
    metrics: quantitativeDatasets[7].metrics,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  }
];

export const defaultMorningBrief: DailyMorningBrief = {
  date: '2026-09-28',
  headline: {
    'zh-TW': '2026 兩岸民生焦點：實質購買力平價、居住空間結構與公共財體感最新綜覽',
    'zh-CN': '2026 两岸民生焦点：实质购买力平价、居住空间结构与公共品体感最新综览',
    en: '2026 Cross-Strait Livelihood Brief: PPP Purchasing Power, Housing Stocks & Public Goods'
  },
  overview: {
    'zh-TW': '依據 IMF、台灣主計總處與大陸國家統計局最新 2026 數據模型：台灣在人均實質購買力（$98,051 PPP）與健保照護指數（87.1分）維持高度優勢；中國大陸在經濟總量（$44.3兆 PPP）與二三線城市硬體公共財（高鐵道路、綠帶公園）展現強大基建紅利。兩岸在醫療新藥給付、老屋都市更新與銀髮長照面臨共同的時代考驗。',
    'zh-CN': '依据 IMF、台湾主计总处与大陆国家统计局最新 2026 数据模型：台湾在人均实质购买力（$98,051 PPP）与健保照护指数（87.1分）维持高度优势；中国大陆在经济总量（$44.3万亿 PPP）与二三线城市硬件公共品（高铁道路、绿带公园）展现强大基建红利。两岸在医疗新药给付、老旧住宅更新与银发长照面临共同的时代考验。',
    en: 'Based on 2026 datasets from the IMF, DGBAS, and NBS: Taiwan retains strong leadership in per capita PPP ($98,051) and universal healthcare access (87.1 score), while Mainland China leads in aggregate volume ($44.3T PPP) and municipal infrastructure expansion. Both face structural transitions in critical care drug reimbursement, aging dwellings, and eldercare.'
  },
  bulletPoints: {
    'zh-TW': [
      '【實質購買力】：台灣人均 PPP 為大陸 3.1 倍；薪資中位數在水電與大眾運輸補貼下具備高實質生活力。',
      '【居住與空間】：台灣自有率 80% 但老屋佔比近 60% 面臨人屋雙老；大陸城鎮屋齡多在 25 年內正推動養老金維護機制。',
      '【公共財交叉點】：大陸二三線城市硬體空間與數位物流表現亮眼；台灣在均質健保與法治產權等制度公共財上提供強韌安全感。'
    ],
    'zh-CN': [
      '【实质购买力】：台湾人均 PPP 为大陆 3.1 倍；薪资中位数在水电与大众运输补贴下具备高实质生活力。',
      '【居住与空间】：台湾自有率 80% 但老房占比近 60% 面临人屋双老；大陆城镇房龄多在 25 年内正推动养老金维护机制。',
      '【公共品交叉点】：大陆二三线城市硬件空间与数字物流表现亮眼；台湾在均质健保与法治产权等制度公共品上提供强韧安全感。'
    ],
    en: [
      'PPP Purchasing Power: Taiwan per capita PPP is 3.1x Mainland China; median earners benefit from subsidized utility anchors.',
      'Housing Stocks: Taiwan homeownership sits at 80% with ~60% aged >30; Mainland China urban dwellings are mostly <25 yrs old.',
      'Public Goods Crossroads: Chinese regional cities showcase expansive transit & parks; Taiwan provides resilient institutional safety nets.'
    ]
  },
  dataSpotlight: {
    title: {
      'zh-TW': '今日關鍵量化對照：人均購買力平價 (GDP PPP per capita)',
      'zh-CN': '今日关键量化对照：人均购买力平价 (GDP PPP per capita)',
      en: 'Today’s Key Quantitative Spotlight: Per Capita GDP (PPP)'
    },
    taiwan: '$98,051 (全球第 8)',
    mainland: '$31,596 (全球中上)',
    verdict: {
      'zh-TW': '台灣實質購買力約為大陸 3.1 倍，主要受惠於民生水電低通脹與健保支持；大陸以 44.3 兆美元居總量第一。',
      'zh-CN': '台湾实质购买力约为大陆 3.1 倍，主要受惠于民生水电低通胀与医保支持；大陆以 44.3 万亿美元居总量第一。',
      en: 'Taiwan per capita purchasing power is ~3.1x Mainland, underpinned by low inflation on utilities and healthcare.'
    }
  }
};
