import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  { category: '백엔드', items: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Node.js'] },
  { category: '프론트엔드', items: ['TypeScript', 'React', 'Vite', '순수 CSS'] },
  { category: '데이터', items: ['Oracle', 'H2', 'SQL 튜닝', 'ERD 설계'] },
  { category: '인프라 · 운영', items: ['Linux', 'nginx', 'systemd', 'Jenkins', 'Docker', '무중단 배포'] },
  { category: '인증 · 연계', items: ['OIDC', 'OAuth 2.0', 'REST API 설계'] },
]
