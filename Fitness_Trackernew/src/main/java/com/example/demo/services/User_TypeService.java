package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.User_Type;
import com.example.demo.repositories.User_TypeRepository;

@Service
public class User_TypeService {
	
	@Autowired
	User_TypeRepository urepo;
	
	public List<User_Type> getAll()
	{
		return urepo.findAll();
	}

}
