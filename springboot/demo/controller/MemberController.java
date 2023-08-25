package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.*;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MemberController 
{
	@Autowired
	MemberService mservice;
	@Autowired
	LoginService lservice;
	@Autowired
	UsertypeService uservice;
	@Autowired
	GoalService gservice;
	
	
	
	@PostMapping("/registerMember")
	public Member registerMember(@RequestBody MemberReg mem)
	{
		Goal g=gservice.getGoal(mem.getGoal_id());
		Usertype u=uservice.getUsertype(2);
		Login l=new Login(u,mem.getUid(),mem.getPwd(),mem.getEmailid(),0);
		Login saved=lservice.saveLogin(l);
		Member m=new Member(mem.getFname(),mem.getLname(),mem.getEmailid(),saved,mem.getBloodgroup(),mem.getHeight(),mem.getWeight(),mem.getContactno(),mem.getAddress(),g,0);
		return mservice.saveMember(m);
		
	}
	
	
	@GetMapping("/allMem")
    public List<Member> getAllMembers() {
        return mservice.getAll();
    }
  
    

}
