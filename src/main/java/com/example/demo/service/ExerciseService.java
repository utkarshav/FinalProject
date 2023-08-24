package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Exercise;
import com.example.demo.repository.ExerciseRepository;

@Service
public class ExerciseService 
{
	@Autowired
	ExerciseRepository erepo;
	
	public List <Exercise> getAll()
	{
		return erepo.findAll();
	}
	
	public Exercise saveExercise(Exercise e)
	{
		return erepo.save(e);
	}

}
