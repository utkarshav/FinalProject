package com.example.demo.entity;

import java.sql.Timestamp;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@OneToOne
	@JoinColumn(name="member_id")
	Member member_id;
	
	@OneToOne
	@JoinColumn(name="membership_id")
	Membership membership_id;
	
	double ammount;
	
	//Timestamp date;

	public Payment() {
		super();
	}

//	public Payment(int id, Member member_id, Membership membership_id, double ammount, Timestamp date) {
//		super();
//		this.id = id;
//		this.member_id = member_id;
//		this.membership_id = membership_id;
//		this.ammount = ammount;
//		this.date = date;
//	}

	public Payment(Member member_id, Membership membership_id, double ammount) {
		super();
		this.member_id = member_id;
		this.membership_id = membership_id;
		this.ammount = ammount;
	}

//	public Payment(Member member_id, Membership membership_id, double ammount, Timestamp date) {
//		super();
//		this.member_id = member_id;
//		this.membership_id = membership_id;
//		this.ammount = ammount;
//		this.date = date;
//	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Member getMember_id() {
		return member_id;
	}

	public void setMember_id(Member member_id) {
		this.member_id = member_id;
	}

	public Membership getMembership_id() {
		return membership_id;
	}

	public void setMembership_id(Membership membership_id) {
		this.membership_id = membership_id;
	}

	public double getAmmount() {
		return ammount;
	}

	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}

//	public Timestamp getDate() {
//		return date;
//	}
//
//	public void setDate(Timestamp date) {
//		this.date = date;
//	}
	
	
	
}
