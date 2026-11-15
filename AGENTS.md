# AGENTS.md — FinAgent FrontEnd 레포 AI 작업 가이드

Claude Code, Codex, Cursor, Copilot 등 AI 코딩 도구가 가장 먼저 읽는 규칙입니다. 사람 팀원도 같은 내용을 따릅니다.

## 0. 작업 전에 반드시 읽을 것
기획·협업 문서는 Backend 레포에 모여 있습니다. 로컬에 Backend 레포를 같은 상위 폴더에 clone해 두면(`../Backend`) AI가 바로 읽을 수 있습니다.

1. `../Backend/docs/project-context.md` ([GitHub](https://github.com/cnsFinalProject/Backend/blob/develop/docs/project-context.md)) — 기획 기준. ✅확정 / 🟡가안 / ⬜미정
2. `../Backend/docs/협업규칙.md` ([GitHub](https://github.com/cnsFinalProject/Backend/blob/develop/docs/협업규칙.md)) — 브랜치·커밋·PR 규칙
3. `../Backend/docs/api/` 와 Swagger — 호출할 API

## 1. 기획 변경에 대비하는 원칙
- ⬜미정 항목(TypeScript 여부, 상태관리·UI 라이브러리 등)은 임의로 정하지 않는다. 묻거나 `TODO(결정필요)`로 남긴다.
- API 주소는 `.env`(`VITE_API_BASE_URL` 등)로만 관리하고 코드에 박지 않는다.
- API 호출은 한 곳(예: `src/api/`)에 모아, 백엔드 명세가 바뀌어도 그 폴더만 고치면 되게 한다.
- 명세에 없는 화면·API를 새로 만들지 않는다. 필요하면 문서 수정부터 제안한다.

## 2. 화면 범위 (가안)
- 상담형 채팅 UI: Agent 응답에 근거 문서와 "투자 권유가 아님" 고지를 항상 표시
- 분석 대시보드: 거래내역 분류·현금흐름
- 결과 리포트: 저축 목표 시뮬레이션, 상품 비교
- 거래내역 CSV 업로드

## 3. 코드 규칙
- 금액은 화면에서 계산하지 않는다. 백엔드 응답 값을 포맷만 한다 (`Intl.NumberFormat('ko-KR')`).
- 계좌번호·이름 같은 개인정보를 `console.log`, localStorage에 남기지 않는다.
- 비밀 값은 프론트 코드·`.env`에도 넣지 않는다 (번들에 그대로 노출됨). LLM 키는 백엔드에만 둔다.

## 4. Git 규칙 요약
- 브랜치: `feat|fix|refactor|docs|chore/WBS번호-영문-작업명` (예: `feat/3.2.1-chat-ui`), `develop`에서 분기.
- 커밋: `[Add|Fix|Refactor|Docs]_WBS번호/요약` + 다음 줄부터 `- 변경 내용`.
- PR: `develop` 대상, 본문에 `Closes #이슈번호`, 화면 변경 시 스크린샷 필수.
- AI는 사용자가 시킬 때만 커밋·push 한다.
