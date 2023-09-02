package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.*;
import com.example.demo.entity.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class WorkoutController
{
	@Autowired
	WorkoutService wservice;
	
	@Autowired
	GoalService gservice;
	
	@Autowired
	ExerciseService eservice;
	
	@GetMapping("/GetAllWorkouts")
	public List <Workout> getAllWorkouts()
	{
		return wservice.getAll();
	}
	
	@PostMapping("/SaveWorkout")
	public Workout saveWorkout(@RequestBody WorkoutNew w)
	{
		Goal g = gservice.getGoal(w.getGoals_id());
		Exercise e = eservice.getExercise(w.getExercise_id());
		Workout workout = new Workout(g,e,w.getReps());
		return wservice.save(workout);
	}

}
