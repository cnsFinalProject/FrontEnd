# FinAgent FrontEnd

LG CNS AM Inspire Camp 6기 최종 프로젝트 금융 도메인 팀의 프론트엔드 레포입니다. 담당: FE 진성민, 탁유진. 백엔드와 기획 문서는 [Backend](https://github.com/cnsFinalProject/Backend) 레포에 있습니다.

> 기획은 바뀔 수 있습니다. 최신 기준은 [project-context.md](https://github.com/cnsFinalProject/Backend/blob/develop/docs/project-context.md)입니다.

## 기술 스택 (가안)

| 영역 | 기술 |
| --- | --- |
| 화면 | React, Vite (TypeScript 여부 미정) |
| 라우팅 | React Router |
| 통신 | axios (API 주소는 `.env`로 관리) |

프로젝트 생성은 2회차 멘토링(11.28) 전에 화면 흐름과 라이브러리를 정한 뒤 진행합니다.

## 협업 규칙

브랜치, 커밋, PR, 리뷰 규칙은 Backend 레포의 [협업규칙.md](https://github.com/cnsFinalProject/Backend/blob/develop/docs/협업규칙.md)를 같이 씁니다. AI 도구 규칙은 [AGENTS.md](AGENTS.md)에 있습니다.

## 로컬에서 AI가 문서까지 읽게 하려면

```bash
mkdir cnsFinalProject && cd cnsFinalProject
git clone https://github.com/cnsFinalProject/Backend.git
git clone https://github.com/cnsFinalProject/FrontEnd.git
```

이렇게 두 레포를 나란히 두면 FrontEnd에서 실행한 AI가 `../Backend/docs`를 참고할 수 있습니다.
