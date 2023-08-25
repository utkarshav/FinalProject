package com.example.demo.controller;

import com.example.demo.entity.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.service.LoginService;
import com.example.demo.service.UsertypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController 
{
	@Autowired
	LoginService lservice;
	@Autowired
	UsertypeService uservice;
	
	@GetMapping("/allLogin")
	public List <Login> getAll()
	{
		return lservice.getAll();
	}
	
	@PostMapping("/savelogin")
	public Login saveAll(@RequestBody Login l)
	{
		return lservice.saveLogin(l);
	}
	
	@PostMapping("/logincheck")
	public Login logincheck(@RequestBody LoginCheck lch)
	{
		return lservice.getLogin(lch.getUid(), lch.getPwd());
	}
	
	@GetMapping("/pending")
	public List<Login> getAllPending()
	{
		Usertype u = uservice.getByI(4);
		return lservice.getPendingMembs(u);
	}
	
	 @PutMapping("/approve/{memberId}")
	    public ResponseEntity<String> approveStatus(@PathVariable int memberId) {
	        // Call your service method to update the member's status
	        int rowsUpdated = lservice.updateStatus(memberId);
	        
	        if (rowsUpdated > 0) {
	            return ResponseEntity.ok("Status updated successfully");
	        } else {
	            return ResponseEntity.badRequest().body("Failed to update status");
	        }
	    }

}
