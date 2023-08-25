package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Login;
import com.example.demo.entity.Usertype;

import jakarta.transaction.Transactional;


@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
    @Query("select l from Login l where uid =:uid and pwd =:pwd")
	public Optional<Login> getLogin(String uid,String pwd);

    
    @Query("select l from Login l where usertype_id =:u and l.status =0")
   	public List<Login> getPending(Usertype u);

    
    @Modifying
    @Transactional
	@Query("update Login l set l.status = 1 where l.id=:id")
    public int updateStatus(@Param("id") int id);
	
    
}


