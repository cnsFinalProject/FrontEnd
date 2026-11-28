# 작업 이슈에서 첫 PR까지

## 시작

1. [WBS 작업 이슈](https://github.com/cnsFinalProject/FrontEnd/issues/new/choose)를 연다. 팀이 배정한 WBS, 관련 RQ-ID, 역할·화면, 완료를 판정할 예시를 적고 한 명이 맡는다.
2. API 연동이면 Gateway 계약 링크와 응답 상태를 함께 적는다. 서버 계약이 준비 중일 때는 목업에서 검증할 범위와 실제 연동에 필요한 응답 예시를 나눈다.
3. 로컬 변경 사항을 확인하고 최신 `develop`에서 분기한다. 아래 `2.3.1`은 명령 형식을 보여 주는 예시다.

```powershell
git status --short --branch
git switch develop
git pull --ff-only origin develop
git switch -c feat/2.3.1-repayment-receipt
```

브랜치 접두사는 `feat`, `fix`, `refactor`, `docs`, `chore` 중 하나다. 작업명에는 영문 소문자·숫자·하이픈을 쓴다. 커밋 첫 줄은 예를 들어 `[Add]_2.3.1/상환 영수증 화면`으로 쓰고 본문에 변경 사항을 적는다. 팀 커밋 머리말은 `[Add]`, `[Fix]`, `[Refactor]`, `[Docs]`다.

## 인계 가능한 PR

PR 대상은 `develop`, 제목은 작업 이슈 제목과 동일하게 쓴다. 본문의 `Closes #` 뒤에 실제 작업 이슈 번호를 채운다. 화면 변경에는 가상 데이터 스크린샷을, API 변경에는 마스킹한 요청·응답 예시나 계약 링크를 붙인다. 다른 FE가 동일한 조건으로 다시 실행할 수 있게 사용자 역할, 시작 상태, 조작, 기대 결과와 확인 환경을 기록한다.

**RP-05 예시** — 채권자가 가상 입금 한 건을 선택해 2회차에 반영한다. 새로고침 후 잔액과 영수증을 확인한다. 동일 입금을 다시 선택했을 때 추가 반영이 없는지 보고, 정정 후에는 원래 반영과 정정 기록이 모두 보이는지 확인한다. 서버 중복 방지는 실제 API에서 확인했을 때만 통과로 적는다.

## 자동 검사와 사람 리뷰

- [pr-rules](.github/workflows/pr-rules.yml)는 브랜치 형식과 PR 본문의 이슈 연결을 검사한다. 앱의 테스트·빌드는 소스 통합 시 실행 명령과 함께 CI에 연결한다.
- [CodeRabbit 설정](.coderabbit.yaml)은 한국어 리뷰, 일반 PR 자동 리뷰, 역할·버전·금융 요청·개인정보 관련 기준을 정의한다. Draft를 Ready for review로 전환한 뒤 PR에서 봇의 리뷰 상태를 확인한다. 리뷰가 없으면 저장소의 GitHub App 접근 권한과 PR 대상 브랜치 설정을 확인한다.
- 봇이 지적한 문제는 요구사항과 실제 코드로 재현해 고친다. 제안이 맞지 않으면 해당 계약이나 테스트를 근거로 답한다. 작성자 외 FE 한 명이 결과를 확인하고 팀 규칙에 따라 승인한다. 배포나 워크플로 변경은 인프라 담당자와도 확인한다.
- 문서만 바꾼 PR은 상대 링크, 요구사항 번호, 예시 명령과 설정 파일을 검증한다. 요구사항·범위가 바뀌면 결정 이슈의 결론과 관련 문서를 함께 갱신한다.

[팀 공통 브랜치·커밋·리뷰 규칙](https://github.com/cnsFinalProject/Backend/blob/develop/docs/협업규칙.md)
