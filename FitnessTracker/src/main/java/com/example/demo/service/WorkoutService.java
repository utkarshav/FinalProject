package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Workout;
import com.example.demo.repository.WorkoutRepository;

@Service
public class WorkoutService
{
	@Autowired
	WorkoutRepository wrepo;
	
	public List<Workout> getAll()
	{
		return wrepo.findAll();
	}
	
	public Workout save(Workout w)
	{
		return wrepo.save(w);
	}
	

}
