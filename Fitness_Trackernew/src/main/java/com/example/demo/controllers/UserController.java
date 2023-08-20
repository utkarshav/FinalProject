package com.example.demo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.LoginCheck;
import com.example.demo.models.User;
import com.example.demo.models.User_Type;
import com.example.demo.services.UserService;
import com.example.demo.services.User_TypeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController 
{
	@Autowired
	UserService uservice;
	@GetMapping("/getAllUsers")
	public List<User> getAllUser()
	{
		return uservice.getUsers();
	}
	
	/*@PostMapping("/checklogin")
	public User checkLogin(@RequestBody LoginCheck lcheck)
	{
		return uservice.getLogin(lcheck.getUser_type(),lcheck.getPassword());
	}*/

	
}








