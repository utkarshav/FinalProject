package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="exercise")
public class Exercise 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String name;
	
	@Column
	double calories_burnt;
	
	@Column
	String equipment;
	
	@Column
	String description;
	
	@Column
	int reps;
	

	public Exercise() {
		super();
	}



	public Exercise(String name, double calories_burnt, String equipment, String description,int reps) {
		super();
		this.name = name;
		this.calories_burnt = calories_burnt;
		this.equipment = equipment;
		this.description = description;
		this.reps = reps;
	}



	public int getReps() {
		return reps;
	}



	public void setReps(int reps) {
		this.reps = reps;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	



	public double getCalories_burnt() {
		return calories_burnt;
	}



	public void setCalories_burnt(double calories_burnt) {
		this.calories_burnt = calories_burnt;
	}



	public String getEquipment() {
		return equipment;
	}



	public void setEquipment(String equipment) {
		this.equipment = equipment;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}
	

	
}
