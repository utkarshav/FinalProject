package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.*;
import com.example.demo.service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TrainerController 
{
	@Autowired
	TrainerService tservice;
	
	@Autowired
	UsertypeService utservice;
	
	@Autowired
	LoginService lservice;
	
	@GetMapping("/alltrainer")
	public List <Trainer> getAll()
	{
		return tservice.getAll();
	}
	
	@PostMapping("/savetrainer")
	public Trainer saveAll(@RequestBody Trainer t)
	{
		return tservice.saveTrainer(t);
	}
	@GetMapping("/getTrainer")
	public Trainer getTrainer(@RequestParam("loginid") int loginid)
	{
		Login l = lservice.getById(loginid);
		return tservice.getTrainer(l);
	}

	@PostMapping("/regTrainer")
	public Trainer regTrainer(@RequestBody TrainerReg tr)
	{
		Usertype u = utservice.getUsertype(2);
		Login l = new Login( u,tr.getUid(),tr.getPwd(),tr.getEmail(),1);
		Login saved = lservice.save(l);
		
		Trainer t = new Trainer(tr.getFname(),tr.getLname(),tr.getEmail(),tr.getContact(),tr.getAddress(),tr.getExperience(),saved);
		return tservice.saveTrainer(t);
	}
}
