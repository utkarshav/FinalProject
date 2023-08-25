package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name="login")
public class Login 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="usertype_id")
	Usertype usertype_id;
	
	@Column
	String uid;
	
	@Column
	String pwd;
	
	@Column
	String email;
	
	@Column
	int status;

	public Login()
	{
		
	}
	
	
	
	



	public Login(Usertype usertype_id, String uid, String pwd, String email, int status) {
		super();
		this.usertype_id = usertype_id;
		this.uid = uid;
		this.pwd = pwd;
		this.email = email;
		this.status = status;
	}







	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public Usertype getUsertype_id() {
		return usertype_id;
	}



	public void setUsertype_id(Usertype usertype_id) {
		this.usertype_id = usertype_id;
	}



	public String getUserid() {
		return uid;
	}



	public void setUserid(String userid) {
		this.uid = userid;
	}



	public String getPassword() {
		return pwd;
	}



	public void setPassword(String password) {
		this.pwd = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	



	
	
	
	
	

}
