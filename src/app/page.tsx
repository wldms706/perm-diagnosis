"use client";

import { useState } from "react";
import { RootCoverage, LashThickness, LashDirection } from "@/lib/types";
import { getRecommendation } from "@/lib/getRecommendation";

const LABELS: Record<string, string> = {
  none: "덮인 곳 없음",
  some: "조금 덮임",
  much: "많이 덮임",
  thin: "얇음",
  thick: "두꺼움",
  down: "극하향",
  normal: "평균",
  up: "극상향",
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [s1, setS1] = useState<RootCoverage | "">("");
  const [s2, setS2] = useState<LashThickness | "">("");
  const [s3, setS3] = useState<LashDirection | "">("");

  const pick1 = (v: RootCoverage) => {
    setS1(v);
    setS2("");
    setS3("");
    setStep(2);
  };

  const pick2 = (v: LashThickness) => {
    setS2(v);
    setS3("");
    setStep(3);
  };

  const pick3 = (v: LashDirection) => {
    setS3(v);
    setStep(4);
  };

  const goBack = (n: number) => {
    if (n === 1) {
      setS1("");
      setS2("");
      setS3("");
      setStep(1);
    } else if (n === 2) {
      setS2("");
      setS3("");
      setStep(2);
    } else if (n === 3) {
      setS3("");
      setStep(3);
    }
  };

  const reset = () => {
    setS1("");
    setS2("");
    setS3("");
    setStep(1);
  };

  const result =
    s1 && s2 && s3 ? getRecommendation(s1, s2, s3) : null;

  return (
    <div className="wrap">
      <div className="header">
        <div className="header-brand">앙비떼뷰티</div>
        <h1 className="header-title">
          <span>롯드 선정</span> 진단기
        </h1>
        <p className="header-sub">
          눈매와 속눈썹 상태에 맞는 최적의 롯드를 추천해드려요
        </p>
      </div>

      <div className="progress-bar">
        <div
          className={`progress-dot${step === 1 ? " active" : step > 1 ? " done" : ""}`}
        />
        <div
          className={`progress-dot${step === 2 ? " active" : step > 2 ? " done" : ""}`}
        />
        <div
          className={`progress-dot${step === 3 ? " active" : step > 3 ? " done" : ""}`}
        />
      </div>

      <div className="tags">
        {s1 && (
          <span className="tag" onClick={() => goBack(1)}>
            {LABELS[s1]} ✕
          </span>
        )}
        {s2 && (
          <span className="tag" onClick={() => goBack(2)}>
            {LABELS[s2]} ✕
          </span>
        )}
        {s3 && (
          <span className="tag" onClick={() => goBack(3)}>
            {LABELS[s3]} ✕
          </span>
        )}
      </div>

      <div id="content">
        {step === 1 && (
          <>
            <div className="step-label">STEP 1</div>
            <div className="step-question">
              눈두덩이 속눈썹 뿌리를
              <br />
              얼마나 덮고 있나요?
            </div>
            <button type="button" className="opt" onClick={() => pick1("none")}>
              <div className="opt-name">&#x1F441;&#xFE0F; 덮인 곳 없음</div>
              <div className="opt-desc">뿌리가 잘 보이는 눈</div>
            </button>
            <button type="button" className="opt" onClick={() => pick1("some")}>
              <div className="opt-name">&#x1F441;&#xFE0F;&#x200D;&#x1F5E8;&#xFE0F; 조금 덮임</div>
              <div className="opt-desc">뿌리가 살짝 덮여 있는 눈</div>
            </button>
            <button type="button" className="opt" onClick={() => pick1("much")}>
              <div className="opt-name">&#x1F611; 많이 덮임</div>
              <div className="opt-desc">
                뿌리가 많이 덮여 있는 눈 (무쌍, 속쌍 등)
              </div>
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="step-label">STEP 2</div>
            <div className="step-question">속눈썹 두께는 어떤가요?</div>
            <button type="button" className="opt" onClick={() => pick2("thin")}>
              <div className="opt-name">&#x1FAB6; 얇음</div>
              <div className="opt-desc">가늘고 부드러운 속눈썹</div>
            </button>
            <button
              type="button"
              className="opt"
              onClick={() => pick2("thick")}
            >
              <div className="opt-name">&#x1F4AA; 두꺼움</div>
              <div className="opt-desc">굵고 힘 있는 속눈썹</div>
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="step-label">STEP 3</div>
            <div className="step-question">속눈썹이 자라는 방향은?</div>
            <button type="button" className="opt" onClick={() => pick3("down")}>
              <div className="opt-name">&#x2B07;&#xFE0F; 극하향</div>
              <div className="opt-desc">속눈썹이 아래로 많이 처져 있음</div>
            </button>
            <button
              type="button"
              className="opt"
              onClick={() => pick3("normal")}
            >
              <div className="opt-name">&#x27A1;&#xFE0F; 평균</div>
              <div className="opt-desc">일반적인 속눈썹 방향</div>
            </button>
            <button type="button" className="opt" onClick={() => pick3("up")}>
              <div className="opt-name">&#x2B06;&#xFE0F; 극상향</div>
              <div className="opt-desc">속눈썹이 위로 많이 올라가 있음</div>
            </button>
          </>
        )}

        {step === 4 && result && (
          <>
            <div className="result-header">
              <h2>&#x2728; 추천 결과</h2>
              <p>선택하신 조건에 맞는 롯드 추천이에요</p>
            </div>

            <div className="result-card">
              <div className="result-row">
                <span className="result-label">추천 컬</span>
                <span className="result-value">{result.curl}</span>
              </div>
              <div className="result-row">
                <span className="result-label">롯드 방향</span>
                <span className="result-value">{result.dir}</span>
              </div>
              <div className="result-row">
                <span className="result-label">추천 사이즈</span>
                <span className="result-value">{result.size}</span>
              </div>
            </div>

            {s3 !== "down" && result.dir.includes("역방향") && (
              <div className="note-box">
                <div className="note-box-title">&#x1F4A1; 롯드 방향 참고</div>
                <div className="note-box-text">
                  롯드 방향 [ 정방향 / 역방향 ]이 나온 경우,
                  <br />
                  사용할 롯드 앞머리 부분 체크 후{" "}
                  <strong>많이 얇은 경우에만 역방향</strong>으로 사용합니다.
                </div>
              </div>
            )}

            <div className="desc-box">
              <div className="desc-box-title">&#x1F4CB; 참고사항</div>
              <div className="desc-box-text">
                {result.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < result.desc.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>

            <div className="disclaimer">
              <p>
                * 위의 추천 결과는 길이 상관없이 적용하시고, 극손상모의 경우
                적용 제외합니다. (극손상모는 시술법 상이)
              </p>
              <p>
                + 쏭원장의 시술법 기준으로 제작되어 시술법이 다를 경우 다소
                결과가 다르게 나올 수 있습니다.
              </p>
            </div>

            <button type="button" className="retry-btn" onClick={reset}>
              다시 진단하기
            </button>
          </>
        )}
      </div>

      <div className="footer">
        <div className="footer-brand">앙비떼뷰티</div>
        <div className="footer-sub">뷰러펌 | 뷰러펌 수강</div>
      </div>
    </div>
  );
}
