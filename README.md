# 포트폴리오 사이트

이직·경력 증명용 개인 포트폴리오. 한 장 스크롤 구성이고, 회사 업무는
**시스템 실명 없이 일반화해서** 싣는다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b + vite build → dist/
npm run preview  # 빌드 결과 확인
```

Node 22.18 기준(`.node-version`).

> `npm run lint`(oxlint)은 **경로에 한글이 있으면 파일을 하나도 못 찾는다.**
> 지금 위치(`개인프로젝트/portfolio`)가 그 경우라 `No files found to lint` 로 실패한다.
> 타입 검사는 `npm run build` 의 `tsc -b` 가 대신 잡는다.

## 내용을 고치는 자리

**화면 파일은 건드리지 않는다.** 실을 것은 전부 `src/data/` 아래 있고,
컴포넌트는 그 배열을 그리기만 한다.

| 파일 | 무엇 |
|---|---|
| `src/data/profile.ts` | 이름 · 한 줄 소개 · 연락처 · 링크 |
| `src/data/career.ts` | 경력 타임라인 |
| `src/data/projects.ts` | 프로젝트 카드. **배열 순서가 화면 순서다** |
| `src/data/skills.ts` | 기술 묶음 |
| `src/data/types.ts` | 위 넷의 모양. 항목을 늘리려면 여기부터 |

`index.html` 의 `<title>` · `description` · og 태그도 이름에 맞춰 함께 고친다.

### 아직 비어 있는 것

`TODO —` 로 시작하는 값이 초안이다. 이름 · 메일 주소 · 기간 · 수치가 그렇고,
**지어내지 않고 비워 둔 자리**다. `grep -rn "TODO —" src index.html` 로 한 번에 볼 수 있다.

## 색과 여백

정한 값(간격 사다리 · 글씨 6단계 · 색 쓰는 자리)은 [`docs/디자인가이드.md`](docs/디자인가이드.md) 에 있다.

`src/index.css` 머리의 CSS 변수만 고치면 전체가 따라온다. 컴포넌트 안에서는
색을 직접 쓰지 않는다. 라이트/다크는 `prefers-color-scheme` 으로 갈린다.

## 배포

Vercel. 저장소를 연결하면 기본값(`npm run build` → `dist/`)으로 잡힌다.
라우터가 없는 한 장짜리라 rewrite 설정은 필요 없다.
