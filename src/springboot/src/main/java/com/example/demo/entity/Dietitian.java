package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="dietitian")
public class Dietitian 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="login_id")
	Login login_id;
	
	@Column
	String fname;
	
	@Column
	String lname;
	
	@Column
	String email;
	
	@Column
	String contact;
	
	@Column
	String address;
	
	@Column
	int experience;

	public Dietitian() {
		super();
	}
	

	public Dietitian(int id, Login login_id, String fname, String lname, String email, String contact, String address,
			int experience) {
		super();
		this.id = id;
		this.login_id = login_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.experience = experience;
	}


	public Dietitian(Login login_id, String fname, String lname, String email, String contact, String address,
			int experience) {
		super();
		this.login_id = login_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.experience = experience;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	
}
