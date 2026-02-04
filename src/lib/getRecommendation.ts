import { RootCoverage, LashThickness, LashDirection, DiagnosisResult } from "./types";

const DATA: Record<string, DiagnosisResult> = {
  none_thin_down:   { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "극하향모는 뿌리 부분이 물방울 모양인 롯드 사용을 더 추천드려요!" },
  none_thin_normal: { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "뿌리 덮임이 없어 자유로운 컬 선택이 가능해요!" },
  none_thin_up:     { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "뿌리 덮임이 없어 자유로운 컬 선택이 가능해요!" },
  none_thick_down:   { curl: "물방울 C컬", dir: "정방향", size: "정", desc: "극하향모는 뿌리 부분 물방울 모양인 롯드 사용을 더 추천드려요!" },
  none_thick_normal: { curl: "C컬", dir: "정방향", size: "정", desc: "공간감이 많이 필요한 눈매이므로 C컬 롯드 추천!\n롱래쉬인 경우 롯드 아무거나 사용 가능해요!" },
  none_thick_up:     { curl: "C컬", dir: "정방향", size: "정", desc: "공간감이 많이 필요한 눈매이므로 C컬 롯드 추천!\n롱래쉬인 경우 롯드 아무거나 사용 가능해요!" },
  some_thin_down:   { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "극하향모는 뿌리 부분이 물방울 모양인 롯드 사용을 더 추천!\n롯드 방향 주의해서 시술해 주세요!" },
  some_thin_normal: { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  some_thin_up:     { curl: "모든 컬 가능", dir: "정방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  some_thick_down:   { curl: "물방울 C컬", dir: "정방향", size: "정", desc: "극하향모는 뿌리 부분이 물방울 모양인 롯드 사용을 더 추천!\n롯드의 방향 주의해서 시술해 주세요!" },
  some_thick_normal: { curl: "C컬", dir: "정방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  some_thick_up:     { curl: "C컬", dir: "정방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  much_thin_down:   { curl: "물방울 C컬 / L컬", dir: "정방향 / 역방향", size: "물방울 C컬 = 다운, L컬 = 업", desc: "사용하는 컬에 따라 사이즈 선택이 다릅니다.\n롯드의 방향 주의해서 시술해 주세요!" },
  much_thin_normal: { curl: "모든 컬 가능", dir: "정방향 / 역방향", size: "정", desc: "모든 컬 가능하지만 뿌리쪽 두께가 통통한 롯드로 선택하세요!\n롯드의 방향 주의해서 시술해 주세요!" },
  much_thin_up:     { curl: "모든 컬 가능", dir: "정방향 / 역방향", size: "정", desc: "모든 컬 가능하지만 뿌리쪽 두께가 통통한 롯드로 선택하세요!\n롯드의 방향 주의해서 시술해 주세요!" },
  much_thick_down:   { curl: "물방울 C컬", dir: "정방향 / 역방향", size: "다운", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  much_thick_normal: { curl: "C컬", dir: "정방향 / 역방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
  much_thick_up:     { curl: "C컬", dir: "정방향 / 역방향", size: "정", desc: "롯드의 방향 주의해서 시술해 주세요!" },
};

export function getRecommendation(
  coverage: RootCoverage,
  thickness: LashThickness,
  direction: LashDirection
): DiagnosisResult | null {
  const key = `${coverage}_${thickness}_${direction}`;
  return DATA[key] ?? null;
}
