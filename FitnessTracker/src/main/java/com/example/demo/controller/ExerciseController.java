package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Exercise;
import com.example.demo.entity.Login;
import com.example.demo.service.ExerciseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExerciseController
{
	@Autowired
	ExerciseService eservise;
	
	@GetMapping("/getAllExercises")
	public List<Exercise> getAll()
	{
		return eservise.getAll();
	}
	
	@PostMapping("/saveExercise")
	public Exercise saveAll(@RequestBody Exercise e)
	{
		return eservise.saveExercise(e);
	}
	

}
