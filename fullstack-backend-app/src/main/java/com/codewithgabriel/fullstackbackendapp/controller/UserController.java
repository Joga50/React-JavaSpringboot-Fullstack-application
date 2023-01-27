package com.codewithgabriel.fullstackbackendapp.controller;

import com.codewithgabriel.fullstackbackendapp.exception.UserNotFoundException;
import com.codewithgabriel.fullstackbackendapp.model.User;
import com.codewithgabriel.fullstackbackendapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController

@CrossOrigin("http://localhost:3000")

public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }


@GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
}



}