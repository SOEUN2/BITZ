package com.osds.bitz.repository.account.user;

import com.osds.bitz.model.entity.account.user.UserAuth;
import com.osds.bitz.model.entity.account.user.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    UserProfile getUserProfileById(Long id);
    UserProfile getUserProfileByNickname(String nickname);
    UserProfile getUserProfileByUserAuth(UserAuth userAuth);
}
