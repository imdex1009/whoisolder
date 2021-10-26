import dummydata from "../api/dummydata"

const initialState = { // state의 초기화 설정
    header : true, 
    "result" : true,
    "score" : 0,
    "people" : [],
    "answer" : {},
    "dummydata" : dummydata
  }

export default initialState