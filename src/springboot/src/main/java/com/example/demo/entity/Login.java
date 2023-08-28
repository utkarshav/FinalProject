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

	public Login(int id, Usertype usertype_id, String uid, String pwd, String email, int status) {
		super();
		this.id = id;
		this.usertype_id = usertype_id;
		this.uid = uid;
		this.pwd = pwd;
		this.email = email;
		this.status = status;
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

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	


	
	
	

}
