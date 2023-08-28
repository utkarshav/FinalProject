package com.example.demo.entity;

public class WorkoutNew 
{
	int goals_id,exercise_id,reps;
	double calories;
	
	public WorkoutNew() {
		super();
	}

	public WorkoutNew(int goals_id, int exercise_id, int reps, double calories) {
		super();
		this.goals_id = goals_id;
		this.exercise_id = exercise_id;
		this.reps = reps;
		this.calories = calories;
	}

	public int getGoals_id() {
		return goals_id;
	}

	public void setGoals_id(int goals_id) {
		this.goals_id = goals_id;
	}

	public int getExercise_id() {
		return exercise_id;
	}

	public void setExercise_id(int exercise_id) {
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
