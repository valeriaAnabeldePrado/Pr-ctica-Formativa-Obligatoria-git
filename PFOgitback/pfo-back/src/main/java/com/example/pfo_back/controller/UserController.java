package com.example.pfo_back.controller;

import com.example.pfo_back.dto.UserDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("api/user")
    public ResponseEntity<?> createUser(@RequestBody UserDTO user){
        return ResponseEntity.ok().build();
    }
}
