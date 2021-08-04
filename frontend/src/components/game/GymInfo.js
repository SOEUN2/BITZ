import React, { useContext, useEffect } from 'react';
import './GymInfo.css';
import { gameStore } from 'store/gameStore';

const GymInfo = () => {
  const gameStoreData = useContext(gameStore);
  const { aboutGame } = gameStoreData;
  const { is_parking, is_shower, is_airconditional, is_water, is_basketball, is_scoreboard } = aboutGame.gymInfo

  // 픽업게임 상세보기에서 체육관 정보를 보여주는 컴포넌트

  useEffect(() => {
    if (!is_water) {
      document.querySelector('#water').classList.add('no')
    }
    if (!is_shower) {
      document.querySelector('#shower').classList.add('no');
    }
    if (!is_scoreboard) {
      document.querySelector('#scoreboard').classList.add('no');
    }
    if (!is_parking) {
      document.querySelector('#parking').classList.add('no');
    }
    if (!is_basketball) {
      document.querySelector('#basketball').classList.add('no');
    }
    if (!is_airconditional) {
      document.querySelector('#airconditioner').classList.add('no');
    }
  });

  return (
    <div className="gymInfo">
      <p>저희 경기장의 코트 규격은, <span>28m x 15m</span> 입니다.</p>
      <p>편의시설은,</p>
      <div className="facilities__container">
        <div className="waterbox">
          <div className="facility" name="water" id="water" />
          <p>정수기</p>
        </div>
        <div className="showerbox">
          <div className="facility" name="shower" id="shower" />
          <p>샤워실</p>
        </div>
        <div className="scoreboardbox">
          <div className="facility" name="scoreboard" id="scoreboard" />
          <p>점수판 & 휘슬</p>
        </div>
        <div className="parkingbox">
          <div className="facility" name="parking" id="parking" />
          <p>주차장</p>
        </div>
        <div className="basketballbox">
          <div className="facility" name="basketball" id="basketball" />
          <p>농구공</p>
        </div>
        <div className="airconditionerbox">
          <div className="facility" name="airconditioner" id="airconditioner" />
          <p>에어컨 & 난방</p>
        </div>
      </div>
      <div className="gym__footer">
        <div className="left">
          <p>특이사항</p>
          <ul>
            <li>오픈 기념으로 이벤트 가격입니다.</li>
            <li>많이들 참여해주세요~</li>
          </ul>
        </div>
        <div className="right">
          <p>관리자 정보</p>
          <ul>
            <li>권오우 010-1122-1122</li>
          </ul>
          <p>체육관 리뷰</p>
          <ul>
            <li>시설</li>
            <li>친절</li>
          </ul>
        </div>
      </div>
      <button className="reservation__btn">예약하기</button>
    </div>
  );
};

export default GymInfo;
