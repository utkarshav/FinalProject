package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user")
public class User 
{
	@Id
	private int id;
	
	@Column
	private String password;
	
	@Column
	private String emailid;
	
	@Column
	private String phoneno;
	
	@Column
	private boolean status;
	
	
	@JsonIgnoreProperties("user")
	@ManyToOne
	@JoinColumn(name="user_type")
	User_Type user_Type;
	
	
	
	public User() 
	{
		super();
	}

	public User(int id, String password, String emailid, String phoneno, boolean status) {
		super();
		this.id = id;
		this.password = password;
		this.emailid = emailid;
		this.phoneno = phoneno;
		this.status = status;
	}
	
	

	public User(int id, String password, String emailid, String phoneno, boolean status, User_Type user_Type) {
		super();
		this.id = id;
		this.password = password;
		this.emailid = emailid;
		this.phoneno = phoneno;
		this.status = status;
		this.user_Type = user_Type;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public boolean getStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public User_Type getUser_Type() {
		return user_Type;
	}

	public void setUser_Type(User_Type user_Type) {
		this.user_Type = user_Type;
	}

	

	

}

/*
 * 
 * +-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| id        | int         | NO   | PRI | NULL    |       |
| password  | varchar(45) | YES  |     | NULL    |       |
| user_type | int         | YES  | MUL | NULL    |       |
| emailid   | varchar(45) | YES  |     | NULL    |       |
| phoneno   | varchar(45) | YES  |     | NULL    |       |
| status    | varchar(45) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
 */
