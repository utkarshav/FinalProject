package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Membership;
import com.example.demo.repository.MembershipRepository;


@Service
public class MembershipService {

	@Autowired
	MembershipRepository memrepo;
	public List<Membership> getAll() 
	{	
		return memrepo.findAll();
	}

	public Membership getById(int id)
	{
		return memrepo.findById(id).get();
	}
}
