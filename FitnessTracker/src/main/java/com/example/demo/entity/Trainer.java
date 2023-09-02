package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="trainer")
public class Trainer
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
	
	

	public Trainer() {
		super();
	}

	public Trainer(Login login_id, String fname, String lname, String email, String conatct, String address,
			int experience) {
		super();
		this.login_id = login_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = conatct;
		this.address = address;
		this.experience = experience;
	}
	
	

	public Trainer(String fname, String lname, String email, String conatact, String address, int experience,Login login_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = conatact;
		this.address = address;
		this.experience = experience;
		this.login_id = login_id;
	}

	public Trainer(int id, Login login_id, String fname, String lname, String email, String contact, String address,
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

	public String getConatct() {
		return contact;
	}

	public void setConatct(String contact) {
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
