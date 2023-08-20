package com.example.demo.repositories;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.models.*;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {

	/*@Query("select l from User where l.user_type=:user_type and l.password=:password")
	public Optional<User> getLogin(int user_type,String password);  Gmail */
	
}


