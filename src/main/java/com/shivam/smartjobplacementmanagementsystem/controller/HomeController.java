package com.shivam.smartjobplacementmanagementsystem.controller;
   
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Smart Job & Placement Management System is running successfully!";
    }
}

