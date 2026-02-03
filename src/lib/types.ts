export type RootCoverage = "none" | "slight" | "heavy";
export type EyelidThickness = "thin" | "thick";
export type RootAngle = "extreme-down" | "average" | "extreme-up";

export interface DiagnosisInput {
  rootCoverage: RootCoverage | null;
  eyelidThickness: EyelidThickness | null;
  rootAngle: RootAngle | null;
  notExtremeDown: boolean;
}

export type CurlType = "C컬" | "바짝 C컬" | "물방울 C컬" | "L컬";
export type RodDirection = "정방향" | "역방향";
export type RodSize = "다운" | "정" | "업";

export interface DiagnosisResult {
  curls: CurlType[];
  directions: RodDirection[];
  size: RodSize;
  memo: string;
}
