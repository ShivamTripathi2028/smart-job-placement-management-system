package com.shivam.smartjobplacementmanagementsystem.repository;
import com.shivam.smartjobplacementmanagementsystem.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
    
public interface JobRepository extends JpaRepository<Job, Long> {

}

