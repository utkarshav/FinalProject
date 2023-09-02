package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.*;

import jakarta.transaction.Transactional;
@Transactional
@Repository
public interface UsertypeRepository extends JpaRepository<Usertype ,Integer>
{
	 
	
}
