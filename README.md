## 깃허브 배포

1. 리파지토리 생성
    - ranking_test
2. setting
    - Pages -> GitHub Pages -> Build and deployment (Branch) -> None 선택 master -> 배포주소.io

3. package.json
    - "homepage": "https://github.com/minjeong46/ranking_test.io"

4. 깃설정
   - 터미널 git init  -> .git 만들기

5. 깃환경(config) 설정(name, email)
 - git config user.name 'minjeong46'
 - git config user.email 'eyou46@naver.com'

6. 리모트 오리진 추가 (깃허브 홈페이지 )
 - git 오리진 주소 : git remote add origin https://github.com/minjeong46/ranking_test.git

7. add(스테이징)
 - git add .

8. commit(커밋)
 - git commit -m '랭킹닭컴 테스트 배포'

9. push(푸쉬)
 - git push origin master

10. Deployment
