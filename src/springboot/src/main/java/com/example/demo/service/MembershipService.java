package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Membership;
import com.example.demo.repository.MembershipRepository;


@Service
public class MembershipService {

	@Autowired
	MembershipRepository mrepo;
	public List<Membership> getAll() 
	{	
		return mrepo.findAll();
	}

	public Membership getById(int id)
	{
		return mrepo.findById(id).get();
	}
}
