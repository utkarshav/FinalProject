package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Membership;
import com.example.demo.service.MembershipService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MembershipController 
{
	
	@Autowired
	 MembershipService memservice;
	
	@GetMapping("/allmembership")
	public List <Membership> getAll()
	{
		return memservice.getAll();
	}
}
