package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Membership;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Integer> {

}
