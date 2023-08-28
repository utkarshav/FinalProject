package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="membership")
public class Membership 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	double baseprice;
	float duration;
	
	public Membership() {
		super();
	}

	public Membership(int id, String name, double baseprice, float duration) {
		super();
		this.id = id;
		this.name = name;
		this.baseprice = baseprice;
		this.duration = duration;
	}

	public Membership(String name, double baseprice, float duration) {
		super();
		this.name = name;
		this.baseprice = baseprice;
		this.duration = duration;
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

	public double getBaseprice() {
		return baseprice;
	}

	public void setBaseprice(double baseprice) {
		this.baseprice = baseprice;
	}

	public float getDuration() {
		return duration;
	}

	public void setDuration(float duration) {
		this.duration = duration;
	}

	
	

}
