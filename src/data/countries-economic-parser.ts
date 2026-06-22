/**
 * Google Sheets CSV から経済データを抽出・パースする
 * 2026-06-22 版スプレッドシートに対応
 */

// 各国から抽出する経済指標パターン
const EXTRACTION_PATTERNS = {
  gdpGrowth2025: /2025年.*?([+-]?\d+\.?\d*)%(?![\s\S]*2026年)/,
  gdpGrowth2024: /2024年.*?([+-]?\d+\.?\d*)%/,
  gdpGrowth2023: /2023年.*?([+-]?\d+\.?\d*)%/,
  gdpGrowth2022: /2022年.*?([+-]?\d+\.?\d*)%/,
  gdpGrowth2021: /2021年.*?([+-]?\d+\.?\d*)%/,
  population: /人口は(?:約)?[*]?([0-9.]+[億万])/,
  inflationRate: /CPI|インフレ[^0-9]*([+-]?\d+\.?\d*)%/,
  unemploymentRate: /失業率[^0-9]*([+-]?\d+\.?\d*)%/,
  gdpNominal: /名目GDP[^0-9]*([0-9.]+[兆万])/,
  debtRatio: /債務[^0-9]*([0-9.]+)%/,
};

export interface EconomicData {
  gdpGrowthRates: Array<{ year: number; rate: number }>;
  inflation?: number;
  gdp?: string;
  population?: string;
  unemploymentRate?: number;
  debtToGdp?: number;
  summary?: string;
}

/**
 * テキストから数値を抽出
 */
function extractNumber(text: string, pattern: RegExp): number | null {
  const match = text.match(pattern);
  if (match && match[1]) {
    const num = parseFloat(match[1]);
    return isNaN(num) ? null : num;
  }
  return null;
}

/**
 * 国の詳細分析テキストから経済データを抽出
 */
export function parseCountryEconomicData(countryText: string): EconomicData {
  const rates: Array<{ year: number; rate: number }> = [];

  // GDP成長率（複数年）を抽出
  for (const year of [2025, 2024, 2023, 2022, 2021]) {
    const pattern = EXTRACTION_PATTERNS[`gdpGrowth${year}` as keyof typeof EXTRACTION_PATTERNS];
    const rate = extractNumber(countryText, pattern as RegExp);
    if (rate !== null) {
      rates.push({ year, rate });
    }
  }

  return {
    gdpGrowthRates: rates.sort((a, b) => a.year - b.year),
    inflation: extractNumber(countryText, EXTRACTION_PATTERNS.inflationRate) ?? undefined,
    gdp: extractTextMatch(countryText, EXTRACTION_PATTERNS.gdpNominal),
    population: extractTextMatch(countryText, EXTRACTION_PATTERNS.population),
    unemploymentRate: extractNumber(countryText, EXTRACTION_PATTERNS.unemploymentRate) ?? undefined,
    debtToGdp: extractNumber(countryText, EXTRACTION_PATTERNS.debtRatio) ?? undefined,
  };
}

function extractTextMatch(text: string, pattern: RegExp): string | undefined {
  const match = text.match(pattern);
  return match ? match[1] : undefined;
}

/**
 * 使用例：
 * const japanData = parseCountryEconomicData(japanFullText);
 * console.log(japanData.gdpGrowthRates);  // [{ year: 2021, rate: 2.1 }, ...]
 */
