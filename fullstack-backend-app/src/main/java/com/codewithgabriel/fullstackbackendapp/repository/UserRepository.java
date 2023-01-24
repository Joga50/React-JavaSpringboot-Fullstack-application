package com.codewithgabriel.fullstackbackendapp.repository;

import com.codewithgabriel.fullstackbackendapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
}
