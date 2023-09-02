package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.entity.Trainer;
import com.example.demo.repository.*;

@Service
public class TrainerService 
{
	@Autowired
	TrainerRepository trepo;
	
	public List<Trainer> getAll()
	{
		return trepo.findAll();
	}
	
	
	public Trainer saveTrainer(Trainer t)
	{
		return trepo.save(t);
	}
	
	
	public Trainer getTrainer(Login l)
	{
		return trepo.getTrainer(l);
	}
	
	public Trainer getTrainer(int id)
	   {
		   return trepo.findById(id).get();
	   }



}
