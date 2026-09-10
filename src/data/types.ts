/** 화면이 아니라 이 파일들이 정본이다 — 내용을 늘릴 때 컴포넌트는 건드리지 않는다. */

export type Profile = {
  /** 화면 맨 위에 크게 나오는 이름 */
  name: string
  /** 이름 뒤에 작게 붙는 영문 표기. 안 쓰면 빈 문자열로 두면 사라진다 */
  nameLatin: string
  /** 이름 아래 한 줄. 「무엇을 하는 사람인가」 */
  headline: string
  location: string
  email: string
  /**
   * 첫 화면에서 문단보다 먼저 읽히는 줄. 셋을 넘기지 않는다 —
   * 넷째부터는 아무도 안 읽고 앞의 셋까지 같이 죽는다.
   */
  highlights: { value: string; label: string }[]
  links: { label: string; href: string }[]
}

/** 소개 구역. 히어로에는 안 들어가는 배경 이야기가 여기 모인다 */
export type About = {
  /** 문단 단위. 두세 개를 넘기지 않는다 */
  paragraphs: string[]
  education: { period: string; name: string; detail: string }[]
  /** 학위가 아닌 교육 과정. 학력에 섞으면 학위처럼 읽힌다 */
  training: { period: string; name: string; detail: string }[]
  certifications: { name: string; issuer: string; date: string }[]
}

export type CareerEntry = {
  /** 「2019.03 ~ 재직 중」 처럼 사람이 읽는 그대로 */
  period: string
  organization: string
  role: string
  /** 한 줄씩. 맡은 범위와 결과 */
  points: string[]
}

/**
 * 프로젝트 한 건은 「문제 → 판단 → 한 일 → 결과 → 배운 점」 다섯으로 적는다.
 * 다섯 중 결과가 가장 먼저 읽혀야 해서 화면에서는 맨 위에 온다.
 *
 * 경력이 짧을 때는 「무엇을 만들었나」보다 「왜 그렇게 정했나 · 무엇을 배웠나」가
 * 더 팔린다. decision 과 learned 가 그 자리다.
 */
export type Project = {
  id: string
  /** 배열 맨 앞 두 개는 화면에서 가로 전면으로 크게 나온다 */
  title: string
  /** 카드 제목 아래 한 줄 요약 */
  summary: string
  /** 카드에 붙는 이름표. 「팀」은 여럿이 한 것 */
  kind: '업무' | '팀' | '개인'
  period: string
  /** 내가 맡은 범위. 팀 성과와 내 몫을 섞지 않는다 */
  role: string
  /** 무엇이 문제였나. 한 문장 */
  problem: string
  /**
   * 갈림길에서 무엇 대신 무엇을 골랐고 왜 그랬나. 한 문단.
   * 길게 쓰고 싶으면 경력기술서로 넘긴다 — 여기는 30초 스캔용이다.
   */
  decision?: string
  /** 무엇을 했나 — 구조 선택과 그 까닭 */
  approach: string[]
  /** 결과. 숫자로 말할 수 있는 것만 넣는다 */
  metrics?: { label: string; value: string }[]
  /**
   * 무엇을 배웠나. 한 문단.
   * 🔴 반드시 본인 말로 받는다 — 대신 지어내면 면접에서 본인이 못 받는다.
   */
  learned?: string
  stack: string[]
  links?: { label: string; href: string }[]
}

export type SkillGroup = {
  category: string
  items: string[]
}
