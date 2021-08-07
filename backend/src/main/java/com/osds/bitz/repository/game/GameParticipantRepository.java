package com.osds.bitz.repository.game;


import com.osds.bitz.model.entity.account.user.UserAuth;
import com.osds.bitz.model.entity.game.GameParticipant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

public interface GameParticipantRepository extends JpaRepository<GameParticipant, Long> {

    ArrayList<GameParticipant> getGameParticipantsByGameId(long gameId); // gameID로 참가자들 목록 받아내기

    GameParticipant getGameParticipantByUserId(UserAuth userAuth);

    @Transactional
    void deleteAllByGameId(long gameId);
}
