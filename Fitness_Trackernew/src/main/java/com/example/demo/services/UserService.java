package com.example.demo.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.models.User_Type;
import com.example.demo.repositories.UserRepository;
import com.example.demo.repositories.User_TypeRepository;

@Service
public class UserService {

	@Autowired
	UserRepository urepo;
	
	public List<User> getUsers()
	{
		return urepo.findAll();
	}
	
	
	/*public User getLogin(int user_type,String password)
	{
		User u;
		Optional<User> ol=urepo.getLogin(user_type, password);
		try 
		{
			u=ol.get();
		}
		catch(Exception e)
		{
			u=null;
		}
		return u;
	}*/
}








	
