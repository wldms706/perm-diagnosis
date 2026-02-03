import {
  DiagnosisInput,
  DiagnosisResult,
  CurlType,
  RodDirection,
  RodSize,
} from "./types";

export function getRecommendation(input: DiagnosisInput): DiagnosisResult | null {
  const { rootCoverage, eyelidThickness, rootAngle, notExtremeDown } = input;

  if (!rootCoverage || !eyelidThickness || !rootAngle) {
    return null;
  }

  // 1) 뿌리 각도로 사이즈 결정
  let size: RodSize;
  let curls: CurlType[];

  switch (rootAngle) {
    case "extreme-down":
      size = "다운";
      curls = ["C컬", "L컬"];
      break;
    case "average":
      size = "정";
      curls = ["C컬", "물방울 C컬", "L컬"];
      break;
    case "extreme-up":
      size = "업";
      curls = ["C컬", "물방울 C컬", "L컬"];
      break;
  }

  const directions: RodDirection[] = ["정방향"];
  let memo = "";

  // 2) 뿌리 덮임 정도
  switch (rootCoverage) {
    case "none":
      memo = "뿌리 노출이 없어 컬 선택이 자유롭습니다.";
      break;
    case "slight":
      directions.push("역방향");
      memo = "살짝 덮임이 있어 역방향 시술도 고려해보세요.";
      break;
    case "heavy":
      curls = ["물방울 C컬", "L컬"];
      if (!notExtremeDown) {
        size = "업";
        memo = "많이 덮여 있어 물방울 C컬 꽉차게 또는 L컬을 추천합니다. 사이즈 업으로 시술하세요.";
      } else {
        // "극하향모가 아닌 경우" 토글이 켜져 있으면 각도 룰 유지
        memo = "많이 덮여 있어 물방울 C컬 꽉차게 또는 L컬을 추천합니다. 각도에 맞는 사이즈로 시술하세요.";
      }
      break;
  }

  // 3) 눈두덩 두꺼움 보정
  if (eyelidThickness === "thick") {
    const preferred: CurlType[] = ["바짝 C컬", "물방울 C컬"];
    const hasMulbangul = curls.includes("물방울 C컬");
    const hasCcurl = curls.includes("C컬");
    if (hasMulbangul || hasCcurl) {
      curls = preferred;
    } else {
      curls = preferred;
    }
    memo += " 눈두덩이 두꺼워 바짝 C컬 또는 물방울 C컬 쪽으로 보정했습니다.";
  }

  return { curls, directions, size, memo: memo.trim() };
}
