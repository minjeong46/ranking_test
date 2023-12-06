# ranking_test

## 깃허브 배포

1. 리파지토리 생성
    - ranking_test
2. setting
    - Pages -> GitHub Pages -> Build and deployment (Branch) -> None 선택 master -> 배포주소.io

3. package.json
    - "homepage": "https://github.com/minjeong46/ranking_test.io"
    수정 -> "homepage": "https://minjeong46.github.io/ranking_test",

4. 깃설정
   - 터미널 git init  -> .git 만들기

5. 깃환경(config) 설정(name, email)
 - git config user.name 'minjeong46'
 - git config user.email 'eyou46@naver.com'

6. 리모트 오리진 추가 (깃허브 홈페이지 )
 - git 오리진 주소 : git remote add origin https://github.com/minjeong46/ranking_test.git
 - 확인 git remote -v

7. add(스테이징)
 - git add .

8. commit(커밋)
 - git commit -m '랭킹닭컴 테스트 배포'

9. push(푸쉬)
 - git push origin master

10. Deployment 이동 (배포하면 md에 주소 있음)

    ### GitHub Page

       Step 1 : "homepage": "https://minjeong46.github.io/ranking_test" -> package.json
       Step 2 : npm install --save gh-pages 혹은 npm install gh-pages 혹은 npm i gh-pages -> 
                

                * branch 배포(참고)
                    "predeploy": "npm run build",
                    "deploy": "gh-pages -d build",
                    "deploy": "gh-pages -b master -d build"

                * master 배포
                    package.json에 scripts 에 속성 추가

                    "predeploy": "npm run build",
                    "deploy": "gh-pages -b master -d build"

                - 저장한다.

       Step 3 : build 한다 -> npm run deploy -> 배포 완료 Published 뜸
