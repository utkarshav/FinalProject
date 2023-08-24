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
	String muscle_type;
	
	@Column
	int calories_burnt;
	
	@Column
	String equipment;
	
	@Column
	String description;
	
	

	public Exercise() {
		super();
	}



	public Exercise(String name, String muscle_type, int calories_burnt, String equipment, String description) {
		super();
		this.name = name;
		this.muscle_type = muscle_type;
		this.calories_burnt = calories_burnt;
		this.equipment = equipment;
		this.description = description;
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



	public String getMuscle_type() {
		return muscle_type;
	}



	public void setMuscle_type(String muscle_type) {
		this.muscle_type = muscle_type;
	}



	public int getCalories_burnt() {
		return calories_burnt;
	}



	public void setCalories_burnt(int calories_burnt) {
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
