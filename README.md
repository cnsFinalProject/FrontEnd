# 바로바로 프론트엔드

바로바로는 두 사람이 돈을 빌려주고 갚는 과정을 함께 관리하는 서비스다. 한 약속 안에서 상대를 확인하고, 조건을 주고받고, 같은 버전의 차용증에 서명한다. 체결 후에는 대여 송금, 회차별 상환, 조건 변경, 완납까지 이어진다. 채권자와 채무자는 **계약마다** 정해진다.

## 처음 합류한 날

```powershell
git clone --branch develop https://github.com/cnsFinalProject/FrontEnd.git
cd FrontEnd
git status --short --branch
git ls-files -- package.json
```

2026-11-28 인수인계 시점의 `develop`에는 협업 문서와 GitHub 설정이 있고 앱 소스와 패키지 명세는 아직 없다. 마지막 명령의 출력이 비면 이 체크아웃에서 실행할 앱이 없는 상태다. 앱을 처음 통합하는 PR에서 실제 작업 디렉터리, Node·패키지 관리자 버전, 잠금 파일, 설치·실행·테스트·빌드 명령과 환경 변수 예시를 이 절에 함께 추가한다.

| 지금 하려는 일 | 먼저 볼 문서 |
| --- | --- |
| 맡은 화면의 사용자·권한·완료 조건 찾기 | [요구사항 목록](docs/requirements.md) |
| 화면을 나누고 두 사람의 상태를 맞추기 | [프론트 구현·연동 가이드](docs/frontend.md) |
| 관리자 화면 범위와 FE·BE·인프라 분담 확인 | [관리자 웹 인수인계](docs/admin.md) |
| 작업 이슈 작성, 브랜치 생성, PR과 CodeRabbit 리뷰 | [기여 가이드](CONTRIBUTING.md) |
| AI 코딩 도구에 작업 맡기기 | [AGENTS.md](AGENTS.md) |

사용자 앱은 React Native·Expo 시안을 기준으로 한다. 운영자 화면은 인프라팀이 제안한 React 웹 조회 화면이다. 사용자 앱과 관리자 웹의 배포 단위·URL, 실제 Gateway 계약은 각 담당자의 합의 후 기록한다. 사용자 앱의 색과 수달 로고는 기존 바로바로 디자인을 따른다.

프론트 담당은 진성민·탁유진이다. 작업 이슈마다 구현자 한 명을 정하고, 다른 한 명은 상대 역할의 화면과 실패 후 복귀까지 확인한다. API 계약과 팀 공통 협업 규칙은 백엔드 저장소에서도 확인할 수 있다. [백엔드 API 문서](https://github.com/cnsFinalProject/Backend/tree/develop/docs/api) · [팀 협업 규칙](https://github.com/cnsFinalProject/Backend/blob/develop/docs/협업규칙.md)
