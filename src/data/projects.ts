import type { Project } from './types'

/**
 * 회사 업무는 시스템 실명 없이 「무엇을 하는 시스템인가」로만 적는다.
 * 배열 순서가 화면 순서이고, 맨 앞 둘이 가로 전면으로 크게 나온다.
 */
export const workProjects: Project[] = [
  {
    id: 'api-gateway',
    title: '사내 데이터 연계 API 게이트웨이',
    summary: '시스템마다 제각각이던 데이터 제공 경로를 창구 하나로 모았다',
    kind: '업무',
    period: '2026.06 ~ 2026.08',
    role: '설계 · 백엔드 · 운영 화면 전반',
    problem:
      '시스템마다 학사 DB에 직접 붙어 있어, 표 하나가 바뀌면 어디가 깨지는지 아무도 몰랐다',
    approach: [
      '데이터를 내주는 창구를 하나로 모으고, 뒤쪽 DB 구조가 바뀌어도 앞쪽 계약은 그대로 두게 함',
      '이용 기관별 키 발급과 경로 단위 인가를 두어 「누가 무엇까지 볼 수 있는가」를 값으로 관리',
      '호출 이력을 남겨 응답 시간과 오류율을 이용 현황 화면에서 바로 보게 함',
    ],
    metrics: [
      { label: '연계 시스템', value: 'TODO — n개' },
      { label: '제공 API', value: 'TODO — n종' },
    ],
    stack: ['Java', 'Spring Boot', 'JPA', 'Oracle', 'React', 'TypeScript', 'nginx'],
  },
  {
    id: 'sso-oidc',
    title: '통합 인증 OIDC 이관',
    summary: '자체 방식으로 굴러가던 로그인을 표준 프로토콜로 다시 세웠다',
    kind: '업무',
    period: '2026.07 ~ 2026.08',
    role: '설계 · 이관 · 연계 시스템 대응',
    problem:
      '표준을 벗어난 자체 인증 연동 탓에 새 시스템을 붙일 때마다 붙이는 방식을 새로 만들어야 했다',
    approach: [
      'OIDC 로 바꿔 이후 시스템은 표준 라이브러리만으로 붙게 함',
      '운영 중인 서비스를 멈추지 않기 위해 한 시스템씩 순차로 이관',
      '옛 방식과 새 방식을 한동안 함께 굴리며 되돌릴 자리를 남겨 둠',
    ],
    metrics: [
      { label: '이관 시스템', value: 'TODO — n개' },
      { label: '이관 중 중단', value: 'TODO — n분' },
    ],
    stack: ['Spring Boot', 'OIDC', 'OAuth 2.0', 'nginx'],
  },
  {
    id: 'legacy-consolidation',
    title: '레거시 행정 업무 시스템 통합',
    summary: '따로 놀던 업무 시스템들을 하나의 행정 시스템으로 옮겼다',
    kind: '업무',
    period: '2025.06 ~ 진행 중',
    role: '이관 설계 · 개발',
    problem:
      '자산 관리 · 채용 등 업무마다 시스템이 따로 있어 화면 규칙도 권한 체계도 제각각이었다',
    approach: [
      '옛 시스템의 데이터 구조를 그대로 옮기지 않고, 지금 쓰이는 값을 기준으로 다시 설계',
      '화면 컴포넌트와 권한 체계를 표준화해 다음 업무 이관의 비용을 낮춤',
    ],
    metrics: [{ label: '이관 업무', value: 'TODO — n개 업무' }],
    stack: ['Spring Boot', 'JPA', 'Oracle', 'React', 'TypeScript', 'Vite'],
  },
  {
    id: 'zero-downtime-deploy',
    title: '무중단 배포 전환',
    summary: '배포할 때마다 서비스가 끊기던 것을 5개 시스템에서 없앴다',
    kind: '업무',
    period: '2026.08',
    role: '배포 구조 설계 · 스크립트 · 서버 구성',
    problem:
      '배포할 때마다 서비스가 끊겨, 이용자가 적은 시간을 골라 사람이 지켜보며 올려야 했다',
    approach: [
      '슬롯 두 벌을 두고 새 버전이 정상 응답할 때만 트래픽을 넘기는 blue/green 구조로 전환',
      '배포 · 상태 확인 · 되돌리기를 명령 하나씩으로 정리해 담당자가 바뀌어도 같은 순서로 돌게 함',
      'CI 에서 빌드한 산출물만 배포되도록 경로를 고정',
    ],
    metrics: [
      { label: '전환 시스템', value: '5대' },
      { label: '배포 중 중단', value: '0초' },
    ],
    stack: ['Jenkins', 'nginx', 'systemd', 'Shell', 'Linux'],
  },
]

/** 회사 밖에서 만든 것. 업무와 섞으면 둘 다 흐려진다 */
export const sideProjects: Project[] = [
  {
    id: 'samsung-signature',
    title: 'Samsung Signature',
    summary: '실물 카드 없이 결제 권한만 넘겨 대신 결제하게 하는 모바일 서비스',
    kind: '팀',
    period: '2024.04 ~ 2024.05',
    role: '팀 리드 · 프론트엔드 (6명)',
    problem:
      '카드를 통째로 빌려주지 않고는 심부름 결제나 법인카드 임시 사용을 맡길 방법이 없었다',
    approach: [
      'RSA + AES 하이브리드 암호화로 결제 권한만 넘기고 카드 정보는 넘기지 않게 함',
      '서비스를 인증 · 지갑 · 결제 · VAN 으로 쪼개고 게이트웨이와 서비스 등록을 앞에 둠',
      '요청 · 승인 · 거절 상태를 실시간으로 따라가게 하고 푸시로 알림',
    ],
    metrics: [
      { label: '팀 규모', value: '6명' },
      { label: '개발 기간', value: '7주' },
    ],
    stack: [
      'TypeScript',
      'React Native',
      'Redux Toolkit',
      'TanStack Query',
      'Spring Boot',
      'Kafka',
      'Docker',
      'Jenkins',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/orgs/SamsungSignature/repositories',
      },
    ],
  },
  {
    id: 'trip-together',
    title: 'Trip-Together',
    summary: '배낭여행 동행을 찾고 쓴 돈을 함께 정산하는 앱',
    kind: '팀',
    period: '2024.03 ~ 2024.04',
    role: '프론트엔드 리드 (6명)',
    problem:
      '혼자 다니는 배낭여행자는 동행을 구하는 곳과 환전 · 정산하는 곳이 따로 놀았다',
    approach: [
      '위치를 기준으로 즉석 모임을 찾고 참여 승인까지 앱 안에서 끝내게 함',
      '은행 OAuth 2.0 으로 계좌를 연결해 앱이 금융 인증 정보를 쥐지 않게 함',
      '실제 거래 내역을 기준으로 더치페이를 계산해 「누가 얼마 냈나」를 다투지 않게 함',
    ],
    metrics: [{ label: '팀 규모', value: '6명' }],
    stack: [
      'TypeScript',
      'React Native',
      'Redux',
      'Spring Boot',
      'MySQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/SSAFY-A309/Trip-Together' },
    ],
  },
  {
    id: 'the-gang',
    title: 'The Gang — 웹 보드게임',
    summary: '협력형 보드게임을 여러 명이 실시간으로 함께 하는 웹 게임',
    kind: '개인',
    period: 'TODO — 시작 ~ 진행 중',
    role: '기획 · 서버 · 프론트 전부',
    problem:
      '여러 명이 같은 판을 동시에 보는데, 판정이 클라이언트마다 갈리면 게임이 성립하지 않는다',
    approach: [
      '방 생성부터 판 진행까지 서버가 상태를 쥐고, 클라이언트는 받은 상태만 그린다',
      '게임 규칙을 서버 · 클라이언트가 공유하는 모듈로 빼서 판정이 갈리지 않게 함',
      '접속이 끊겨도 같은 방으로 돌아오면 하던 판을 이어가도록 처리',
    ],
    stack: ['TypeScript', 'React', 'Socket.IO', 'Node.js', 'Vercel', 'Render'],
    links: [{ label: 'GitHub', href: 'https://github.com/KTaeGyu/web-boardgame' }],
  },
]
