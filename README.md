## Katachii-sample

유리공예 작가인 친구를 위해 작품을 판매할 수 있는 간단한 온라인 몰을 만들어 주었다.

"기획 - Front 개발 - Back 개발 - 배포"까지 혼자 전담하여 풀스택으로 개발을 진행하였다.

### 프로젝트 기한
2020.08 ~ 2021.01 (약 6개월)

### 기술 스택

**Front**: React.js + Redux
**Back**: Node.js + Express
**DB**: MongoDB + Mongoose
**배포**: AWS EC2

### 서비스 링크

https://katachii.com/

-----

**실제 개발할때 사용한 repository는 private으로 설정되어 있습니다. 해당 repository는 sample이기 때문에 commit이 1회인 점 감안해주시기 바랍니다~**

-----

### 화면구성

#### 1. 랜딩 페이지

<img width="769" alt="스크린샷 2021-02-05 오전 3 54 53" src="https://user-images.githubusercontent.com/53468065/106941235-e833d180-6765-11eb-9d70-d35720143dd3.png">

#### 2. 작품 상세페이지

<img width="778" alt="스크린샷 2021-02-05 오전 3 55 02" src="https://user-images.githubusercontent.com/53468065/106941253-ed911c00-6765-11eb-87e0-e95bc41163a8.png">

#### 3. 카트(장바구니) 페이지

<img width="766" alt="스크린샷 2021-02-05 오전 3 55 12" src="https://user-images.githubusercontent.com/53468065/106941270-f386fd00-6765-11eb-84f3-9110861cc237.png">

#### 4. 마이페이지

<img width="771" alt="스크린샷 2021-02-05 오전 3 55 25" src="https://user-images.githubusercontent.com/53468065/106941288-fb46a180-6765-11eb-9da3-8f7d987594a9.png">

#### 5. 어드민 - 상품 업로드, 주문관리, 상품관리

<img width="779" alt="스크린샷 2021-02-05 오전 3 55 33" src="https://user-images.githubusercontent.com/53468065/106941310-00a3ec00-6766-11eb-8fe8-04e14727fedb.png">

-----

### 기획단계 요구사항

(1) 유리작품들을 판매할 온라인 몰이긴 하지만, 기존 쇼핑몰의 느낌 보다는 "작품 포트폴리오"라는 느낌을 주고 싶다.

(2) 결제는 PG사 연동없이 "무통장 입금"만 진행하고 싶다.

(3) 유저 페이지

- 회원가입, 로그인
- 랜딩페이지
- 상세페이지
- Cart (장바구니) 페이지
- 마이페이지 (주문내역)
- 결제 페이지 (무통장 입금만)

(4) 어드민 페이지

- 상품 업로드 페이지
- 상품 관리 페이지
- 주문 관리 페이지

#### "작품 포트폴리오"느낌 반영하기

1. 원하는 UI를 찾기 위해 함께 검색을 하였고, 아래의 사이트들을 참조하여 개발하게 되었다.

참조1: https://stuffmystuff.com/
참조2: https://kilchhofer.net/The-Book-Room

2. 유저가 상품 상세 페이지에 들어 왔을 때, 포트폴리오 갤러리 같은 느낌을 받을 수 있게 구성하였다.
<img width="754" alt="스크린샷 2021-02-05 오전 3 58 49" src="https://user-images.githubusercontent.com/53468065/106941648-74de8f80-6766-11eb-8846-603f73e85fc1.png">

- 사진을 메인으로 보여주고
- 결제에 관련된 상세한 내용들을 스크롤을 내렸을 때 아코디언식으로 열고 닫을 수 있게 구현
- 유저가 이를 이해할 수 있도록 닫혀있을 때만 click 메세지 추가

-----

### 개발단계 어려움과 해결 (Front-End)

1. 랜딩 페이지에서 작품 전체 리스트를 보여주기 위해 이미지를 로딩하게 되는데, 모든 이미지를 한번에 로딩한다면 불필요한 http 요청이 많이 발생하게 된다. 유저가 모든 사진 리스트를 보지 않을 수도 있는데!

: **react-lazy-load-image-component 라이브러리를 이용해 Lazy Loading 구현.**

2. 어드민을 위한 주문관리 페이지에는 매일 새로운 주문이 쌓일 예정이기 때문에 스크롤로만 구현하면 관리가 힘들어질 것이다

: **Front에 Paginate 컴포넌트를 생성하고, Back에선 주문내역 리스트를 요청할 때 15개씩 limit을 주어서 어드민 페이지 내에 Pagination을 구현.**

3. 유저가 Cart에서 원하는 상품을 선택한 후, 실제 주문을 완료하는 단계 사이에 선택한 상품들을 저장해서 결제 페이지 내에 상품리스트를 가져올 수 있어야 한다. 처음에는 DB에 잠시 저장하고 결제완료와 동시에 삭제가 되도록 구현하였지만, 삭제가 제대로 이뤄지지 않을 수도 있고, DB에 불필요한 쿼리를 날리게 된다.

: **DB대신 local storage에 저장이 되고 삭제도 되도록 구현.**

-----

### 개발단계 어려움과 해결 (Back-End)

1. 중복결제 방지 필요. 유저가 상품을 구매완료한 후에서야 상품이 sold-out처리가 되도록 구현하였다. 문제는, 만약 A유저가 결제하려고 정보를 입력하는 중에 B유저가 동일한 상품을 구매하면, A유저가 구매를 하는 순간 중복결제가 생길 수도 있다.
(모든 유리 상품은 핸드메이드로 단 하나의 작품만 존재하기에 이런 상황은 큰 문제가 될수 있다.)

: **유저가 결제버튼을 눌렀을 때, 결제정보를 저장하기 전에 결제하려는 상품 리스트 속 상품들의 sold-out 여부를 한번 더 더블체크. 만약 이미 sold-out된 상품이 하나라도 있다면, 결제를 더이상 진행하지 않고 alert 띄워주기.**

2. 유저의 Cart에 담겨있던 상품들은 유저모델에 해당 상품들의 id 정보가 있고, 이를 가지고 상품 테이블에서 정보를 가지고 와서 보여준다. 만약 어드민이 삭제한 상품이 Cart기록에 있다면, 화면에는 보여지지 않겠지만 DB에는 남아있게 된다.

: **유저 Cart 기록에 있는 상품 id를 상품 테이블에서 조회해서, 상품 테이블에는 더이상 존재하지 않는 id가 있다면 골라서 기록에서 삭제해 준 후, 존재하는 상품들만 Cart 페이지에 보여주기.**

3. 몽고DB에서 유료 sandbox 중 가장 용량이 작은 M2(2GB)를 사용하기 때문에, 최대한 불필요한 데이터의 저장을 피하고 싶어 Cart에 동시에 담고 있을 수 있는 상품의 수를 5개로 제한하였다.

: **유저가 어떤 상품을 '장바구니에 담기'를 하면, 해당 유저의 기존 Cart에 몇개의 상품들이 담겨있는지 먼저 체크하고, 만약 5개 이상이라면 상품추가를 진행하지 않고 alert를 띄워주기**

-----

### 프로젝트를 마치며..

프론트엔드 독학 시작한지 얼마 안 되었을때 시작한 프로젝트라서 모든 것이 처음이었기에 힘들고 어렵고 포기하고 싶다는 생각을 하루에도 몇번이나 했는지 모르겠다.

하지만 약속을 지켜내겠다는 책임감으로 계속 나아갈 수 있었고,
해낼 수 없어 보였던 것들을 하나씩 해나가며 생기는 성취감과 쾌감이 결국은 프로젝트를 완수하여 서비스할 수 있게 해주었다.

Katachii 프로젝트를 통해 웹 서비스의 전반적인 모습을 얕게나마 다 경험해 볼 수 있었고, 앞으로 개발자로서 성장해 나갈 때 큰 밑거름이 될 것이라고 믿는다.
