# 원티드 프리온보딩 프론트엔드 인턴십 12차 - 2주 차 과제 (개인)

## 👥 Member Info
### 이유승


## 💪🏻과제의 목표와 진행 방법
출제된 과제의 범위, 요구 사항 등을 분석하여 제시된 개발 조건에 맞춰 기능을 구현.


### ✔️ 배포 
- ```Google Firebase``` [🔗Link](https://pre-onboarding-2-17-deploy.web.app/)

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
    [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
> 1. 배포 링크를 통한 접속
> 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행

```
$ npm i
$ npm run start
```

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)


#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development
![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black)


## ✨ Assignments별 구현 방식

#### 과제 소개 [🔗Link](https://lean-mahogany-686.notion.site/Week-2-a28eb717312a434498ea431d2ff8fc17)

#### [Assignment 1] 이슈 데이터 가져오기
- Axios를 이용, 비동기 통신으로 API를 호출하여 데이터를 받음.
- 커스텀 훅으로 Issue 목록을 가져오고, 로딩 플래그와 에러 플래그를 관리.
- map 함수를 이용하여 데이터를 렌더링.

#### [Assignment 2] Open 상태인 이슈를, Comment가 가장 많은 순서대로 정렬하여 출력
- GitHub REST API에서 지원하는 Params를 이용하여 정렬 조건을 걸고, API 호출.

#### [Assignment 3] 이슈 데이터를 출력할 때, 5번째 셀마다 광고 이미지 출력하기
- map 함수의 index 속성을 이용하여 일정 순서마다 지정된 이미지가 출력되도록 구현.

#### [Assignment 4] 이슈 데이터를 출력하는 무한 스크롤 기능 구현하기
- 스크롤 이벤트 방식 사용, 스크롤 위치가 페이지 최하단에 닿았을 경우 추가 데이터를 호출하여 렌더링.
- 추가 데이터 호출 방식은 Github REST API의 page와 perpage param을 이용하여 페이지당 데이터 갯수를 설정하고 페이지를 변경하여 호출.
- 기존 데이터는 스프레드 문법으로 보존하고 새로 불러온 데이터를 배열에 추가.

#### [Assignment 5] 이슈 상세 페이지 구현
- issue 리스트 컴포넌트에서 항목을 클릭할 경우,  Link 태그를 이용해 issue 상세 페이지 컴포넌트로 이동. 이때 param으로 issue number을 넘겨줌.
- issue 상세 페이지에서는 넘겨받은 issue number를 기준으로 REST API를 호출하여 데이터를 받아 화면에 렌더링.

#### [Assignment 6] 마크다운 렌더링
- react-markdown 라이브러리 사용.

#### [Assignment 7] 이슈 목록 / 상세 페이지는 공통된 헤더 컴포넌트를 소유
- Header 컴포넌트로 분리하여 구현.

#### [Assignment 8] 데이터가 요청되는 도중에는 로딩 화면을 렌더링
- API를 호출하는 커스텀 훅에서 로딩 플래그 변수를 관리, 작업이 완료되기 전까지는 로딩 플래그가 true가 되며, 컴포넌트에서는 플래그 변수를 받아 조건문을 통해 로딩 컴포넌트가 렌더링 되도록 구현.

#### [Assignment 9] 데이터 요청 중 에러가 발생했을 때는 에러 화면을 렌더링
- API를 호출하는 커스텀 훅에서 에러 플래그 변수를 관리, 작업이 완료되기 전까지는 에러 플래그가 true가 되며, 컴포넌트에서는 플래그 변수를 받아 조건문을 통해 에러 컴포넌트가 렌더링 되도록 구현.

## 🔥 과제 진행 방법
- 깃 컨벤션, 브랜치 관리 전략, 코드 구조 및 작성 규칙, 컴포넌트 명명 규칙 등의 팀 코딩 표준에 따라 혼자 진행.

### 코딩 컨벤션 [🔗Link](https://shorturl.at/dAO08)

## 🌲프로젝트 구조
```bash
src
 ┣ api
 ┃ ┣ axios.js
 ┃ ┗ function.js
 ┣ components
 ┃ ┣ Error.js
 ┃ ┣ Header.js
 ┃ ┣ IssueItemLabel.js
 ┃ ┣ IssueList.js
 ┃ ┗ Loading.js
 ┣ hooks
 ┃ ┗ useGetIssues.js
 ┣ pages
 ┃ ┣ IssueItemPage.js
 ┃ ┗ MainPage.js
 ┣ utils
 ┃ ┗ storageFunction.js
 ┣ .DS_Store
 ┣ App.js
 ┣ index.css
 ┣ index.js
 ┗ routes.jsx
```
