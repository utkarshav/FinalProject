package com.example.demo.controller;

import com.example.demo.entity.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController 
{
	@Autowired
	LoginService lservice;
	
	@GetMapping("/allLogin")
	public List <Login> getAll()
	{
		return lservice.getAll();
	}
	
	@PostMapping("/savelogin")
	public Login saveAll(@RequestBody Login l)
	{
		return lservice.saveLogin(l);
	}
	
	@PostMapping("/logincheck")
	public Login logincheck(@RequestBody LoginCheck lch)
	{
		return lservice.getLogin(lch.getUid(), lch.getPwd());
	}
	

}
