package com.shivam.smartjobplacementmanagementsystem.repository;
import com.shivam.smartjobplacementmanagementsystem.entity.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {

    long countByApplicationStatusIgnoreCase(String applicationStatus);

}