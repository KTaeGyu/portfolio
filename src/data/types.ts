/** 화면이 아니라 이 파일들이 정본이다 — 내용을 늘릴 때 컴포넌트는 건드리지 않는다. */

export type Profile = {
  /** 화면 맨 위에 크게 나오는 이름 */
  name: string
  /** 이름 아래 한 줄. 「무엇을 하는 사람인가」 */
  headline: string
  /** 두세 문장. 경력의 성격과 강점 */
  summary: string
  location: string
  email: string
  links: { label: string; href: string }[]
}

export type CareerEntry = {
  /** 「2019.03 ~ 재직 중」 처럼 사람이 읽는 그대로 */
  period: string
  organization: string
  role: string
  /** 한 줄씩. 맡은 범위와 결과 */
  points: string[]
}

export type Project = {
  id: string
  title: string
  /** 카드 제목 아래 한 줄 요약 */
  summary: string
  /** 「업무」는 회사 일, 「개인」은 사이드 프로젝트 */
  kind: '업무' | '개인'
  period: string
  /** 내가 맡은 범위. 팀 성과와 내 몫을 섞지 않는다 */
  role: string
  /** 숫자로 말할 수 있는 것. 없으면 빈 배열로 두고 points 로만 */
  metrics?: { label: string; value: string }[]
  points: string[]
  stack: string[]
  links?: { label: string; href: string }[]
}

export type SkillGroup = {
  category: string
  items: string[]
}
