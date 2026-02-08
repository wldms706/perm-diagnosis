import { RootCoverage, LashThickness, LashDirection, DiagnosisResult } from "./types";

const DATA: Record<string, DiagnosisResult> = {
  // 덮인 곳 없음 + 얇음
  none_thin_down: {
    curl: "물방울 C컬 / L컬",
    dir: "정방향",
    size: "사이즈 다운",
    note: "",
    desc: "극하향모는 뿌리 부분이 많이 쳐져있어\n롯드를 타이트하게 사용해야 컬이 잘 나와요!"
  },
  none_thin_normal: {
    curl: "모든 컬 가능",
    dir: "정방향",
    size: "정사이즈",
    note: "",
    desc: "뿌리 덮임이 없는 눈은 자유로운 컬 선택이 가능해요!"
  },
  none_thin_up: {
    curl: "모든 컬 가능",
    dir: "정방향",
    size: "사이즈 업",
    note: "",
    desc: "극상향모는 뿌리가 들려있어\n롯드를 넉넉하게 사용해야 눈두덩에 닿지 않아요!"
  },

  // 덮인 곳 없음 + 두꺼움
  none_thick_down: {
    curl: "물방울 C컬",
    dir: "정방향",
    size: "사이즈 다운",
    note: "",
    desc: "극하향모는 뿌리가 쳐져있어\n롯드를 타이트하게 사용해야 컬이 잘 나와요!"
  },
  none_thick_normal: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향",
    size: "정사이즈",
    note: "",
    desc: "롱래쉬인 경우에는 컬 상관없이\n모든 롯드 사용 가능해요!"
  },
  none_thick_up: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향",
    size: "사이즈 업",
    note: "",
    desc: "롱래쉬인 경우에는 컬 상관없이\n모든 롯드 사용 가능해요!"
  },

  // 조금 덮임 + 얇음
  some_thin_down: {
    curl: "물방울 C컬 / L컬",
    dir: "정방향 / 역방향",
    size: "사이즈 다운",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: "뿌리가 쳐져있다면? 컬이 루즈하게 나오므로\n사이즈를 타이트하게 사용하세요!"
  },
  some_thin_normal: {
    curl: "모든 컬 가능",
    dir: "정방향 / 역방향",
    size: "정사이즈",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: "롯드 방향만 주의해주세요!"
  },
  some_thin_up: {
    curl: "모든 컬 가능",
    dir: "정방향 / 역방향",
    size: "사이즈 업",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: "뿌리가 들려있어 컬이 과하게 나오므로\n사이즈를 넉넉하게 사용하세요!"
  },

  // 조금 덮임 + 두꺼움
  some_thick_down: {
    curl: "물방울 C컬",
    dir: "정방향 / 역방향",
    size: "사이즈 다운",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: "뿌리가 쳐져있어 컬이 루즈하게 나오므로\n사이즈를 타이트하게 사용하세요!"
  },
  some_thick_normal: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향 / 역방향",
    size: "정사이즈",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: ""
  },
  some_thick_up: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향 / 역방향",
    size: "사이즈 업",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.\n그래야 앞머리쪽 속눈썹이 눈두덩이를 뚫고 나올 수 있어요!",
    desc: "뿌리가 들려있어 컬이 과하게 나오므로\n사이즈를 넉넉하게 사용하세요!"
  },

  // 많이 덮임 + 얇음
  much_thin_down: {
    curl: "물방울 C컬 / L컬",
    dir: "정방향 / 역방향",
    size: "물방울 C컬 - 다운 , L컬 - 업",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.",
    desc: "이 눈매는 잘 나오는 컬과 사이즈가 정해져 있어요."
  },
  much_thin_normal: {
    curl: "모든 컬 사용 가능",
    dir: "정방향 / 역방향",
    size: "정사이즈",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.",
    desc: "모든 컬이 가능하지만 되도록이면\n롯드의 하단 두께가 통통하게 디자인 된 롯드를 선택하세요!"
  },
  much_thin_up: {
    curl: "모든 컬 사용 가능",
    dir: "정방향 / 역방향",
    size: "사이즈 업",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.",
    desc: "모든 컬이 가능하지만 되도록이면\n롯드의 하단 두께가 통통하게 디자인 된 롯드를 선택하세요!"
  },

  // 많이 덮임 + 두꺼움
  much_thick_down: {
    curl: "물방울 C컬",
    dir: "정방향 / 역방향",
    size: "사이즈 다운",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.",
    desc: "이 눈매는 잘 나오는 컬과 사이즈가 정해져있어요."
  },
  much_thick_normal: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향 / 역방향",
    size: "정사이즈",
    note: "롯드의 앞머리쪽 두께가 많이 얇은 롯드를\n사용 할 경우 역방향으로 시술하세요.",
    desc: "눈두덩 두께가 두꺼우므로\n공간감이 많은 C컬 사용해야 안전합니다."
  },
  much_thick_up: {
    curl: "C컬 롯드 모두 가능",
    dir: "정방향 / 역방향",
    size: "사이즈 업",
    note: "사용할 롯드의 앞머리쪽 두께가 많이 얇은 경우\n롯드를 역방향으로 시술하세요.",
    desc: "눈두덩 두께가 두꺼우므로\n공간감이 많은 C컬 사용해야 안전합니다."
  },
};

export function getRecommendation(
  coverage: RootCoverage,
  thickness: LashThickness,
  direction: LashDirection
): DiagnosisResult | null {
  const key = `${coverage}_${thickness}_${direction}`;
  return DATA[key] ?? null;
}
