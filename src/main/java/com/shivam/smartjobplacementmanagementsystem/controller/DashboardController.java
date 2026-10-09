package com.shivam.smartjobplacementmanagementsystem.controller;

import com.shivam.smartjobplacementmanagementsystem.repository.CompanyRepository;
import com.shivam.smartjobplacementmanagementsystem.repository.JobRepository;
import com.shivam.smartjobplacementmanagementsystem.repository.StudentRepository;
import com.shivam.smartjobplacementmanagementsystem.service.JobApplicationService;
import com.shivam.smartjobplacementmanagementsystem.service.PlacementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    private final StudentRepository studentRepository;
    private final JobRepository jobRepository;
    private final CompanyRepository companyRepository;
    private final JobApplicationService jobApplicationService;
    private final PlacementService placementService;

    public DashboardController(
            StudentRepository studentRepository,
            JobRepository jobRepository,
            CompanyRepository companyRepository,
            JobApplicationService jobApplicationService,
            PlacementService placementService) {

        this.studentRepository = studentRepository;
        this.jobRepository = jobRepository;
        this.companyRepository = companyRepository;
        this.jobApplicationService = jobApplicationService;
        this.placementService = placementService;
    }

    @GetMapping("/summary")
    public Map<String, Object> getDashboardSummary() {

        Map<String, Object> summary = new HashMap<>();

        summary.put("totalStudents", studentRepository.count());
        summary.put("totalJobs", jobRepository.count());
        summary.put(
                "totalApplications",
                jobApplicationService.getApplicationCountByStatus("Applied")
                        + jobApplicationService.getApplicationCountByStatus("Shortlisted")
                        + jobApplicationService.getApplicationCountByStatus("Rejected")
                        + jobApplicationService.getApplicationCountByStatus("Selected")
        );
        summary.put(
                "totalPlacements",
                placementService.getPlacementCountByStatus("Selected")
        );
        summary.put("totalCompanies", companyRepository.count());

        return summary;
    }

    @GetMapping("/placement-statistics")
    public Map<String, Object> getPlacementStatistics() {

        Map<String, Object> statistics = new HashMap<>();

        statistics.put(
                "selected",
                placementService.getPlacementCountByStatus("Selected")
        );

        statistics.put(
                "rejected",
                placementService.getPlacementCountByStatus("Rejected")
        );

        statistics.put(
                "pending",
                placementService.getPlacementCountByStatus("Pending")
        );

        return statistics;
    }

    @GetMapping("/application-statistics")
    public Map<String, Object> getApplicationStatistics() {

        Map<String, Object> statistics = new HashMap<>();

        statistics.put(
                "applied",
                jobApplicationService.getApplicationCountByStatus("Applied")
        );

        statistics.put(
                "shortlisted",
                jobApplicationService.getApplicationCountByStatus("Shortlisted")
        );

        statistics.put(
                "rejected",
                jobApplicationService.getApplicationCountByStatus("Rejected")
        );

        statistics.put(
                "selected",
                jobApplicationService.getApplicationCountByStatus("Selected")
        );

        return statistics;
    }
}