package com.example.demo.models;

public class LoginCheck {
	
	int user_type;//for logincheck email verify
	String password;
	
	
	public LoginCheck(int user_type, String password) {
		super();
		this.user_type = user_type;
		this.password = password;
	}


	public LoginCheck() {
		super();
	}


	public int getUser_type() {
		return user_type;
	}


	public void setUser_type(int user_type) {
		this.user_type = user_type;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}



	
	
	

}
