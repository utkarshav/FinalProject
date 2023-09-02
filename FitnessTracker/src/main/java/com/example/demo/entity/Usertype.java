package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="usertype")
public class Usertype {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column
	String name;
	
	public Usertype() 
	{
		
	}
	
	
	public Usertype(int id, String name) {
		super();
		this.id = id;
		this.name = name;
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

	public Usertype( String name) {
		super();
		
		this.name = name;
	}
	
	

}
