package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.entity.Member;
import com.example.demo.entity.Membership;
import com.example.demo.repository.MemberRepository;



@Service
public class MemberService {
	
	@Autowired
	MemberRepository mrepo;
	
	public Member saveMember(Member m)
	{
		return mrepo.save(m);
	}

	
	
	public Member getMember(Login l)
	{
		return mrepo.getMember(l);
	}



	public List<Member> getAll() 
	{
		return mrepo.findAll();
	}



	public int updateMembership(Membership memb,int status, int m) {
		return mrepo.updateMembership(memb,status,m);
	}
}
