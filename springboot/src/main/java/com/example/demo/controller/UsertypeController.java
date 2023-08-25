package com.example.demo.controller;
import org.springframework.http.MediaType;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.*;
import com.example.demo.service.UsertypeService;

@RestController
public class UsertypeController 
{
	@Autowired
	UsertypeService utservice;

	
	//For mapping the request url
	
	@GetMapping("/all")
	public List<Usertype> getAll()
	{
		return utservice.getAll();
	}

	@PostMapping("/saveuser")
	public Usertype saveUser(@RequestBody Usertype ut)
	{
		return utservice.saveUser(ut);
	}
}
