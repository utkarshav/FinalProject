package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User_Type;
import com.example.demo.services.User_TypeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class User_TypeController 
{
	@Autowired
	User_TypeService uservice;
	
	@GetMapping("/getAllUsersType")
	public List<User_Type> getAllUser_Type()
	{
		return uservice.getAll();
	}
	

}