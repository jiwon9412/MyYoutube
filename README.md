# Youtube Clone Coding (Dream Coding)

드림코딩 강의를 들으며 Youtube 사이트를 클론코딩한 프로젝트이다.   
강의를 듣기 전에 스스로 만들어 보면서 요구사항을 구현하고 추가해보고 싶었던 새로운 기능을 구현하였고   
강의를 보며 부족했던 부분이나 더 효율적인 방법이 있다면 리팩토링하는 방식으로 진행했다.   

##

### 강의에서의 요구사항

1. Youtube API 활용해서 첫 화면에 인기있는 영상 25개 자동조회  
2. 영상 검색 기능                                         
3. 영상 클릭 시 영상 재생 및 화면 변환                       
4. 3번 상태에서 반응형 디자인 추가                          

### 자체적인 추가사항

1. 다크모드 (redux를 사용하여 상태관리 해보기)                
2. 데이터 로딩 시 loading component 보여주기                 
3. 오른쪽 위의 유저아이디 원하는 색으로 변경 (color picker 라이브러리 사용해서 구현해보기) - 

##

### API

* Youtube APIs
  * Search
  * Video
  
### Tools

* VS Code
* Postman

### Library

* Matual-UI (MUI) - grid system
* Font awesome
* Redux

### CSS
* css module 방식 + scss

##

### 강의를 통해 리팩토링한 부분
1. 디렉토리 구조 변경 - components 폴더 안에 각 컴포넌트 폴더 생성
2. 플레이어에 커서 올릴 시 살짝 커지도록 transform 추가
3. 검색 시 id 값이 다른형태로 전달되는 것 데이터 가공을 통해서 map 함수에서 key값 설정 가능하게 함 -> warning 제거
4. video 타입만 가져오도록 fetch url 설정 (실행되지 않았던 비디오 제거)
5. 데이터 통신 로직을 view에서 분리하기 위해 service폴더에 class를 생성하고 그 안에 데이터 통신 로직을 담는 방식으로 구조 변경
6. api key는 노출되면 안되는 정보이기 때문에 .env파일에 등록하여 사용, gitignore에 .env를 추가함으로써 깃허브 코드에 private data가 나타나지 않도록 설정

### 리팩토링 코드
* 3번 : 검색 시에는 데이터를 받아올 때 id를 바로 전달받지 못하고 id라는 객체안에 kind, videoId 라는 두개의 String 값을 전달 받게된다.   
이 때문에 playerList 컴포넌트에서 map함수를 사용할 때 key값을 id로 설정하였는데 검색 시에는 key값이 object로 동일하게 판단되어 경고 메세지가 나타났다.   
그래서 검색 시와 첫화면 렌더링 시 두가지 경우에 key를 구분을 해주어야 했는데 이것을 데이터 받는 당시에 바로 가공하여 사용해주니 간단하게 문제를 해결할 수 있었다.   

```JavaScript
const fetchSearch = async (search) => {
      setLoading(true);
      try {
        const response = await axios
          .get(
            baseUrl +
              `search?part=snippet&maxResults=25&key=${mykey}&q=${search}&type=video`,
          )
          .then((results) =>
            results.data.items.map((item) => ({
              ...item,
              id: item.id.videoId,
            })),
          );

        console.log(response);
        setPlayerList(response);
      } catch (e) {
        console.log(`error : ${e}`);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch(search);
    dispatch(selectVideo(null));
```

##

### 구현
* Youtube API 활용해서 첫 화면에 인기있는 영상 25개 자동조회   
<img src="https://user-images.githubusercontent.com/80965224/193395131-bf7e1063-fe9c-4207-bd1b-87446d9a97b8.png" width="700px">   
   
* 영상 검색 기능   
<img src="https://user-images.githubusercontent.com/80965224/193395180-333ede99-6c79-44e6-983a-ce8bfcce7cdf.png" width="700px">  
   
* 영상 클릭 시 영상 재생 및 화면 변환  
<img src="https://user-images.githubusercontent.com/80965224/193395229-018554e0-778d-4e9f-b369-6cbd4add9b04.png" width="700px">  
   
* 위 상태에서 반응형 디자인 추가   
<img src="https://user-images.githubusercontent.com/80965224/193395241-74e5b9e0-22cf-4054-9e00-cb38b72880b8.png" width="700px">  
   
* 다크모드   
<img src="https://user-images.githubusercontent.com/80965224/193395418-1e64cc7b-707e-4e8d-aac4-87f169036ebb.png" width="700px">  
   




   
