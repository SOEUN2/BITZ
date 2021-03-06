import React, { useContext, useEffect, useState } from 'react';
import GameRecordInput from './GameRecord__Input.js';
import './GameRecord__Table.css';
import { gameStore } from 'store/gameStore';
import GameApi from 'api/GameApi.js';

const GameRecord__Table = ({ team1, team2, game }) => {
  const gameStoreData = useContext(gameStore);
  const { aboutGame, gameDispatch } = gameStoreData;

  // State
  // (1) - 모달 창 display 여부
  const [showInput, setShowInput] = useState(false)
  // (2) - indexing을 위한 naming
  const team1_score = game+'_team1_score'
  const team2_score = game+'_team2_score'
  const recorder = game+'_recorder'
  // (3) - 쿼터 데이터
  const [quarters, setQuaters] = useState([])

  // useEffect
  useEffect(()=>{
    // (1) - 쿼터 데이터 세팅
    setQuaters([...Array(aboutGame.gameData[recorder].length).keys()].map(key => key))
  },[aboutGame.gameData, recorder])

  useEffect(()=>{
    // (2) 게임 정보 조회 API
    GameApi.getGameRecord({gameId: aboutGame.gameInfo.id},
      (res)=>{
        const data = {
          gameType: res.data.length, // 2: 2팀, 3: 3팀
          game1_team1_score: res.data[0].teamAScoreList,
          game1_team2_score: res.data[0].teamBScoreList,
          game2_team1_score: res.data[1].teamAScoreList,
          game2_team2_score: res.data[1].teamBScoreList,
          game3_team1_score: res.data[2]? res.data[2].teamBScoreList:[], // res.data는 무조건 사전순 (teamA=> A, teamB=> C)
          game3_team2_score: res.data[2]? res.data[2].teamAScoreList:[],
          game1_recorder: res.data[0].recorderList.map(element=>element), // 2팀 게임은 game1만 사용
          game2_recorder: res.data[1].recorderList.map(element=>element),
          game3_recorder: res.data[2]? res.data[2].recorderList.map(element=>element.email):[]
        }
        gameDispatch({ type: "UPADTE_GAME_SCORE", value: data })
      },
      (err)=>console.log(err)
      )
  },[aboutGame.gameInfo.id, gameDispatch])

  // 입력 버튼 클릭
  // (백에서 동시 입력으로 인한 중복 저장이 불가능하게 처리 필요)
  const addRecord = ()=>{
    setShowInput(true)
  }

  return (
    <div className="gameRecord__table">
      <table className="RecordTable">
        <thead>
          <tr>
            <th>쿼터</th>
            <th>{team1}팀</th>
            <th>{team2}팀</th>
            <th>기록자</th>
          </tr>
        </thead>
        <tbody>
          { quarters.map((quarter, idx)=>(<tr key={idx}>
            <td>{quarter+1}</td>
            <td>{aboutGame.gameData[team1_score]?aboutGame.gameData[team1_score][quarter]:""}</td>
            <td>{aboutGame.gameData[team2_score]?aboutGame.gameData[team2_score][quarter]:""}</td>
            <td>{aboutGame.gameData[recorder]?aboutGame.gameData[recorder][quarter]:""}</td>
            </tr>))}
          { showInput ? <GameRecordInput game={game} setShowInput={setShowInput} team1={team1} team2={team2} /> : "" }
          { (aboutGame.gameState !== 4&&
          aboutGame.gameData.gameType===2?(
            game==="game1"?(
              aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length<4?(
                <tr onClick={addRecord} className="gameRecord__button"><td colSpan="4">{ !showInput ? '추가' : '기록 중' }</td></tr>):(
                <tr />)):(
              (aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length>=4&&aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length<8)?(
                <tr onClick={addRecord} className="gameRecord__button"><td colSpan="4">{ !showInput ? '추가' : '기록 중' }</td></tr>):(
                <tr />))) : (
            game==="game1"?(
              (aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length)%3===0&&aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length<12?(
                <tr onClick={addRecord} className="gameRecord__button"><td colSpan="4">{ !showInput ? '추가' : '기록 중' }</td></tr>):(
                  <tr />)):(
                game==="game2"?(
                  (aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length)%3===1&&aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length<12?(
                    <tr onClick={addRecord} className="gameRecord__button"><td colSpan="4">{ !showInput ? '추가' : '기록 중' }</td></tr>):(
                      <tr />)):(
                        (aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length)%3===2&&aboutGame.gameData.game1_recorder.length+aboutGame.gameData.game2_recorder.length+aboutGame.gameData.game3_recorder.length<12?(
                          <tr onClick={addRecord} className="gameRecord__button"><td colSpan="4">{ !showInput ? '추가' : '기록 중' }</td></tr>):(
                          <tr />))
              )))
          }
        </tbody>
      </table>
    </div>
  );
};

export default GameRecord__Table;
