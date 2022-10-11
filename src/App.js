import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  padding-left: 1rem;
  height: 4rem;
`;
const Main = styled.div`
  color: rgba(255, 255, 255, 1);
  padding: 20px 1rem 1rem 0.5rem;
`;
const ListWrap = styled.div`
  background-color: rgba(253, 253, 253, 1);
  text-align: left;
`;
const List = styled.div`
  border-bottom: 1px solid grey;
`;
const InputButton = styled.input`
  width: 12rem;
  height: 1.5rem;
  border-radius: 1rem;
  line-height: 1rem;
`;
const Button = styled.button`
  width: 5rem;
  height: 1.8rem;
  border-radius: 0rem;
  line-height: 1rem;
  border: none;
  background-color: rgba(255, 255, 255, 1);
`;
const Modals = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #eee;
  text-align: left;
`;

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동 맛집',
    '파이썬독학',
  ]);
  let [title, setTitle] = useState(0);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  function 함수() {}

  return (
    <div className='App'>
      <div className='black-nav'>
        <Wrap>
          <Main>ReactBlog</Main>
        </Wrap>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <ListWrap>
        {글제목.map(function (a, i) {
          return (
            <div className='list'>
              <h4
                onClick={() => {
                  setModal(true);
                  setTitle(i);
                }}
                style={{ padding: '0px 0px 0px 20px' }}
              >
                {글제목[i]}
                <span
                  onClick={() => {
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy);
                  }}
                >
                  👍
                </span>{' '}
                {따봉[i]}{' '}
              </h4>
              <List>
                <p style={{ padding: '0px 0px 0px 20px' }}>2월 17일 발행</p>
                <Button>
                  <button
                    onClick={() => {
                      let copy = [...글제목];
                      copy.splice(i, 1);
                      글제목변경(copy);
                    }}
                  >
                    삭제
                  </button>
                </Button>
              </List>
            </div>
          );
        })}
      </ListWrap>

      <InputButton
        placeholder='글제목'
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></InputButton>

      <Button>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.unshift(입력값);
            글제목변경(copy);
          }}
        >
          글발행
        </button>
      </Button>

      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}></Modal>
      ) : null}
    </div>
  );
}
// 동적 UI만드는 3STEP
// 1. html css로 미리 디자인
// 2. 현재 상태를 state에 저장
// 3 state에 따라 UI가 어떻게 보일지 작성
function Modal(props) {
  return (
    <div>
      <Modals>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </Modals>
    </div>
  );
}

export default App;
