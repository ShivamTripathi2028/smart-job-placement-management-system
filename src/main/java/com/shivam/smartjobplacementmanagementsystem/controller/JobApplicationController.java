package com.shivam.smartjobplacementmanagementsystem.controller;
import com.shivam.smartjobplacementmanagementsystem.entity.JobApplication;
import com.shivam.smartjobplacementmanagementsystem.service.JobApplicationService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applications")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping
    public JobApplication addApplication(
            @Valid @RequestBody JobApplication application) {

        return jobApplicationService.saveApplication(application);
    }

    @GetMapping
    public List<JobApplication> getAllApplications() {
        return jobApplicationService.getAllApplications();
    }

    @GetMapping("/{id}")
    public JobApplication getApplicationById(@PathVariable Long id) {
        return jobApplicationService.getApplicationById(id);
    }

    @PutMapping("/{id}")
    public JobApplication updateApplication(
            @PathVariable Long id,
            @Valid @RequestBody JobApplication application) {

        return jobApplicationService.updateApplication(id, application);
    }

    @DeleteMapping("/{id}")
    public String deleteApplication(@PathVariable Long id) {
        jobApplicationService.deleteApplication(id);
        return "Application deleted successfully!";
    }
}