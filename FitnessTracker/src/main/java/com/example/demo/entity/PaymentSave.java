package com.example.demo.entity;

public class PaymentSave 
{
	int member_id;
	int membership_id;
	double ammount;
	public PaymentSave(int member_id, int membership_id, double ammount) {
		super();
		this.member_id = member_id;
		this.membership_id = membership_id;
		this.ammount = ammount;
	}
	public int getMember_id() {
		return member_id;
	}
	public void setMember_id(int member_id) {
		this.member_id = member_id;
	}
	public int getMembership_id() {
		return membership_id;
	}
	public void setMembership_id(int membership_id) {
		this.membership_id = membership_id;
	}
	public double getAmmount() {
		return ammount;
	}
	public void setAmmount(double ammount) {
		this.ammount = ammount;
	}
	public PaymentSave() {
		super();
	}
	
	
	

}
