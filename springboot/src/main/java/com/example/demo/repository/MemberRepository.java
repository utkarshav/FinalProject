package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Login;
import com.example.demo.entity.Member;
@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

	@Query("select m from Member m where login_id=:l")
	public Member getMember(Login l);

}
