package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="workout")
public class Workout 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="goal_id")
	Goal goals_id;
	
	@ManyToOne
	@JoinColumn(name="exercise_id")
	Exercise exercise_id;
	
	@Column
	int reps;
	
	@Column
	double calories;

	public Workout() {
		super();
	}

	public Workout(Goal goals_id, Exercise exercise_id, int reps, double calories) {
		super();
		this.goals_id = goals_id;
		this.exercise_id = exercise_id;
		this.reps = reps;
		this.calories = calories;
	}
	
	

	public Workout(Goal goals_id, Exercise exercise_id, int reps) {
		super();
		this.goals_id = goals_id;
		this.exercise_id = exercise_id;
		this.reps = reps;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Goal getGoals_id() {
		return goals_id;
	}

	public void setGoals_id(Goal goals_id) {
		this.goals_id = goals_id;
	}

	public Exercise getExercise_id() {
		return exercise_id;
	}

	public void setExercise_id(Exercise exercise_id) {
		this.exercise_id = exercise_id;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public double getCalories() {
		return calories;
	}

	public void setCalories(double calories) {
		this.calories = calories;
	}
	
	

}
