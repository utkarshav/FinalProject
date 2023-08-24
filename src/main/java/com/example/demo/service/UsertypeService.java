package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.*;
import com.example.demo.repository.UsertypeRepository;

@Service
public class UsertypeService
{
	
	//this has nothing to do with req and resp cycle
	//controllers decides which service method is used as per the need
	
	
    @Autowired
	UsertypeRepository urepo;
     
   public List<Usertype> getAll()
   {
	   return urepo.findAll();
   }
   //The data will be converted to object from JSON and it will be send to save method
   public Usertype saveUser(Usertype ut)
   {
	   return urepo.save(ut);
   }
   
   public Usertype getUsertype(int id)
   {
	   return urepo.findById(id).get();
   }
   
   public Usertype getByI(int id)
   {
	   return urepo.findById(id).get();
   }
}
