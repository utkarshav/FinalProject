package com.example.demo.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="member")
public class Member 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String fname;
	String lname;
	@Column(name="email")
	String emailid;
	@ManyToOne
	@JoinColumn(name="login_id")
	Login login_id;
	String bloodgroup;
	String height;
	String weight;
	@Column(name="contact")
	String contactno;
	String address;
	@ManyToOne
	@JoinColumn(name="goal_id")
	Goal goal_id;
	int status;
	@OneToOne
	@JoinColumn(name="trainer_id")
	Trainer trainer_id;
	@OneToOne
	@JoinColumn(name="dietitian_id")
	Dietitian dietitian_id;
	@OneToOne
	@JoinColumn(name="membership_id")
	Membership membership_id;
	Date startdate;
	Date enddate;
	public Member() {
		super();
	}
	
	public Member(String fname, String lname, String emailid, Login login_id, String bloodgroup, String height,
			String weight, String contactno, String address, Goal goal_id, int status, Trainer trainer_id,
			Dietitian dietitian_id, Membership membership_id, Date startdate, Date enddate) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.emailid = emailid;
		this.login_id = login_id;
		this.bloodgroup = bloodgroup;
		this.height = height;
		this.weight = weight;
		this.contactno = contactno;
		this.address = address;
		this.goal_id = goal_id;
		this.status = status;
		this.trainer_id = trainer_id;
		this.dietitian_id = dietitian_id;
		this.membership_id = membership_id;
		this.startdate = startdate;
		this.enddate = enddate;
	}

	public Member(String fname, String lname, String emailid, Login login_id, String bloodgroup, String height,
			String weight, String contactno, String address, Goal goal_id, int status) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.emailid = emailid;
		this.login_id = login_id;
		this.bloodgroup = bloodgroup;
		this.height = height;
		this.weight = weight;
		this.contactno = contactno;
		this.address = address;
		this.goal_id = goal_id;
		this.status = status;
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
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
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
	public Goal getGoal_id() {
		return goal_id;
	}
	public void setGoal_id(Goal goal_id) {
		this.goal_id = goal_id;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Trainer gettrainer_id() {
		return trainer_id;
	}
	public void settrainer_id(Trainer trainer_id) {
		this.trainer_id = trainer_id;
	}
	public Dietitian getDietitian_id() {
		return dietitian_id;
	}
	public void setDietitian_id(Dietitian dietitian_id) {
		this.dietitian_id = dietitian_id;
	}
	public Membership getMembership_id() {
		return membership_id;
	}
	public void setMembership_id(Membership membership_id) {
		this.membership_id = membership_id;
	}
	public Date getStartdate() {
		return startdate;
	}
	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}
	public Date getEnddate() {
		return enddate;
	}
	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}	
}