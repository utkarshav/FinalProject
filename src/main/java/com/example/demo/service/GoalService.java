package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Goal;
import com.example.demo.repository.GoalRepository;

@Service
public class GoalService {

	@Autowired
	GoalRepository grepo;
	 public Goal getGoal(int id)
	   {
		   return grepo.findById(id).get();
	   }
}
