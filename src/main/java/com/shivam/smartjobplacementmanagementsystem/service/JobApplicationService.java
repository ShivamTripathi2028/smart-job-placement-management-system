package com.shivam.smartjobplacementmanagementsystem.service;

import com.shivam.smartjobplacementmanagementsystem.entity.JobApplication;
import com.shivam.smartjobplacementmanagementsystem.exception.ResourceNotFoundException;
import com.shivam.smartjobplacementmanagementsystem.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;

    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public JobApplication saveApplication(JobApplication application) {
        return jobApplicationRepository.save(application);
    }

    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }

    public JobApplication getApplicationById(Long id) {
        return jobApplicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Job application not found with id: " + id
                ));
    }

    // Update Application
    public JobApplication updateApplication(
            Long id,
            JobApplication updatedApplication) {

        JobApplication existingApplication =
                jobApplicationRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException(
                                "Job application not found with id: " + id
                        ));

        existingApplication.setStudentId(updatedApplication.getStudentId());
        existingApplication.setJobId(updatedApplication.getJobId());
        existingApplication.setApplicationDate(
                updatedApplication.getApplicationDate()
        );
        existingApplication.setApplicationStatus(
                updatedApplication.getApplicationStatus()
        );

        return jobApplicationRepository.save(existingApplication);
    }

    public void deleteApplication(Long id) {

        if (!jobApplicationRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Job application not found with id: " + id
            );
        }

        jobApplicationRepository.deleteById(id);
    }

    public long getApplicationCountByStatus(String status) {
        return jobApplicationRepository.countByApplicationStatusIgnoreCase(status);
    }
}