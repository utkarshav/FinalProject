package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.entity.Member;
import com.example.demo.entity.Usertype;
import com.example.demo.repository.LoginRepository;


@Service
public class LoginService 
{
	@Autowired
	LoginRepository lrepo;

	public List<Login> getAll()
	{
		return lrepo.findAll();
	}
	
	public Login saveLogin(Login l)
	{
		return lrepo.save(l);
	}
	
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
	
	public Login getLogin(String uid,String pwd)
	{
		Login l;
		Optional <Login> ol =lrepo.getLogin(uid, pwd);
		try
		{
			l = ol.get();
		}
		catch(Exception e)
		{
			l = null;
		}
		return l;
	}
	
	public List<Login> getPendingMembs(Usertype u)
	{
		return lrepo.getPending(u);
	}
	
	public int updateStatus(int id)
	{
		return lrepo.updateStatus(id);
	}
}
