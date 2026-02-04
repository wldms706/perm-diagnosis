export type RootCoverage = "none" | "some" | "much";
export type LashThickness = "thin" | "thick";
export type LashDirection = "down" | "normal" | "up";

export interface DiagnosisResult {
  curl: string;
  dir: string;
  size: string;
  desc: string;
}
