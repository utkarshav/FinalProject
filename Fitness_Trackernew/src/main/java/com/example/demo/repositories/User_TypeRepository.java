package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.*;

@Repository
public interface User_TypeRepository extends JpaRepository<User_Type, Integer> 
{

}
