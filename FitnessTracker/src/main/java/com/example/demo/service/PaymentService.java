package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Payment;
import com.example.demo.entity.PaymentSave;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentService 
{
	@Autowired
	PaymentRepository prepo;
	
	public Payment save(Payment p)
	{
		return prepo.save(p);
	}
}
