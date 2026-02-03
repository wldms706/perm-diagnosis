"use client";

import { useState, useMemo } from "react";
import {
  RootCoverage,
  EyelidThickness,
  RootAngle,
  DiagnosisInput,
} from "@/lib/types";
import { getRecommendation } from "@/lib/getRecommendation";

type OptionItem<T extends string> = { label: string; value: T };

const rootCoverageOptions: OptionItem<RootCoverage>[] = [
  { label: "덮인 곳 없음", value: "none" },
  { label: "조금 덮임·앞머리만", value: "slight" },
  { label: "많이 덮임", value: "heavy" },
];

const eyelidOptions: OptionItem<EyelidThickness>[] = [
  { label: "얇음", value: "thin" },
  { label: "두꺼움", value: "thick" },
];

const rootAngleOptions: OptionItem<RootAngle>[] = [
  { label: "극하향", value: "extreme-down" },
  { label: "평균", value: "average" },
  { label: "극상향", value: "extreme-up" },
];

function SelectorGroup<T extends string>({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: OptionItem<T>[];
  selected: T | null;
  onSelect: (v: T) => void;
}) {
  return (
    <div className="selector-group">
      <h3 className="selector-title">{title}</h3>
      <div className="selector-buttons">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`selector-btn ${selected === opt.value ? "active" : ""}`}
            onClick={() => onSelect(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [rootCoverage, setRootCoverage] = useState<RootCoverage | null>(null);
  const [eyelidThickness, setEyelidThickness] =
    useState<EyelidThickness | null>(null);
  const [rootAngle, setRootAngle] = useState<RootAngle | null>(null);
  const [notExtremeDown, setNotExtremeDown] = useState(false);

  const input: DiagnosisInput = {
    rootCoverage,
    eyelidThickness,
    rootAngle,
    notExtremeDown,
  };

  const result = useMemo(
    () => getRecommendation(input),
    [rootCoverage, eyelidThickness, rootAngle, notExtremeDown]
  );

  const handleReset = () => {
    setRootCoverage(null);
    setEyelidThickness(null);
    setRootAngle(null);
    setNotExtremeDown(false);
  };

  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">뷰러펌 롯드 선정 진단기</h1>
        <p className="app-subtitle">
          고객의 조건을 선택하면 최적의 롯드를 추천해드립니다
        </p>
      </header>

      <section className="input-section">
        <SelectorGroup
          title="1. 뿌리 노출 (덮임 정도)"
          options={rootCoverageOptions}
          selected={rootCoverage}
          onSelect={setRootCoverage}
        />

        <SelectorGroup
          title="2. 눈두덩 두께"
          options={eyelidOptions}
          selected={eyelidThickness}
          onSelect={setEyelidThickness}
        />

        <SelectorGroup
          title="3. 뿌리 각도"
          options={rootAngleOptions}
          selected={rootAngle}
          onSelect={setRootAngle}
        />

        <div className="toggle-group">
          <label className="toggle-label">
            <span className="toggle-text">극하향모가 아닌 경우 (선택)</span>
            <button
              type="button"
              role="switch"
              aria-checked={notExtremeDown}
              className={`toggle-switch ${notExtremeDown ? "on" : ""}`}
              onClick={() => setNotExtremeDown(!notExtremeDown)}
            >
              <span className="toggle-knob" />
            </button>
          </label>
        </div>
      </section>

      <section className="result-section">
        {result ? (
          <div className="result-card">
            <h2 className="result-title">추천 결과</h2>

            <div className="result-grid">
              <div className="result-item">
                <span className="result-label">추천 컬</span>
                <span className="result-value">
                  {result.curls.join(" / ")}
                </span>
              </div>

              <div className="result-item">
                <span className="result-label">롯드 방향</span>
                <span className="result-value">
                  {result.directions.join(" / ")}
                </span>
              </div>

              <div className="result-item">
                <span className="result-label">사이즈</span>
                <span className="result-value highlight">{result.size}</span>
              </div>
            </div>

            <div className="result-memo">
              <p className="memo-text">{result.memo}</p>
            </div>
          </div>
        ) : (
          <div className="result-placeholder">
            <p>위 항목을 모두 선택하면 결과가 표시됩니다</p>
          </div>
        )}
      </section>

      {result && (
        <button className="reset-btn" onClick={handleReset}>
          초기화
        </button>
      )}
    </main>
  );
}
