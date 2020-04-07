import axios from 'axios';

/*export const getGameList = id =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);*/

export const getGameList = id =>
    axios.get("/api/tfgame/").catch(err => console.log(err));

      // 2. 호출된 _renderText 함수는 장고 Model에 있는 Data를 Json으로 보여주는 페이지에서 Data를 가져와 SetState해줌
 // _renderText = () => {
   // axios
    // Restframework에서 json으로 보여주는 페이지 url을 get 방식으로 접근
   // .get("/api/tfgame/")
    //.then(res => this.setState({ gameList: res.data })) // res에 데이터들이 담겨짐, state의 textList에 res의 데이터를 저장
    //.catch(err => console.log(err));
  //};