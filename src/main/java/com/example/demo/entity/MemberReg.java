package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class MemberReg 
{
	String fname;
	String lname;
	String emailid;
	String uid;
	String pwd;
	String bloodgroup;
	String height;
	String weight;
	String contactno;
	String address;
	int goal_id;
	public MemberReg(String fname, String lname, String emailid, String uid, String pwd, String bloodgroup,
			String height, String weight, String contactno, String address, int goal_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.emailid = emailid;
		this.uid = uid;
		this.pwd = pwd;
		this.bloodgroup = bloodgroup;
		this.height = height;
		this.weight = weight;
		this.contactno = contactno;
		this.address = address;
		this.goal_id = goal_id;
	}
	public MemberReg() {
		super();
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
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
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
	public String getBloodgroup() {
		return bloodgroup;
	}
	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getGoal_id() {
		return goal_id;
	}
	public void setGoal_id(int goal_id) {
		this.goal_id = goal_id;
	}
	
	
	
}

