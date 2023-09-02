package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Login;
import com.example.demo.entity.Member;
import com.example.demo.entity.Membership;
@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

	@Query("select m from Member m where login_id=:l")
	public Member getMember(Login l);

	@Modifying
	@Transactional
	@Query("update Member m set m.membership_id=:memb , m.status=:status where m.id=:m")
	public int updateMembership(Membership memb,int status,int m);

	@Query("Select m from Member m where m.trainer_id is null")
	public List <Member> getMembersWithoutTrainer();
}
