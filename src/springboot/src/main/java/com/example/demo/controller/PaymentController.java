package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Member;
import com.example.demo.entity.Membership;
import com.example.demo.entity.Payment;
import com.example.demo.entity.PaymentSave;
import com.example.demo.service.MemberService;
import com.example.demo.service.MembershipService;
import com.example.demo.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController 
{
	@Autowired
	PaymentService pservice;
	@Autowired
	MemberService mservice;
	@Autowired
	MembershipService membservice;
	@PostMapping("/savepayment")
	public Payment save(@RequestParam int member_id,@RequestParam int membership_id, @RequestParam double ammount)
	{
		Member member_id1=mservice.getById(member_id);
		Membership membership_id1=membservice.getById(membership_id);
		Payment pay=new Payment(member_id1,membership_id1,ammount);
		return pservice.save(pay);
	}
}
