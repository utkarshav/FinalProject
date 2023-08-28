package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.*;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer> 
{
	@Query("Select t from Trainer t where login_id = :l")
	public Trainer getTrainer(Login l);
}
