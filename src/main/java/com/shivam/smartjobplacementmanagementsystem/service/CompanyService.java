package com.shivam.smartjobplacementmanagementsystem.service;

import com.shivam.smartjobplacementmanagementsystem.entity.Company;
import com.shivam.smartjobplacementmanagementsystem.exception.ResourceNotFoundException;
import com.shivam.smartjobplacementmanagementsystem.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company createCompany(Company company) {
        return companyRepository.save(company);
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(Long id) {
        return companyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Company not found with id: " + id
                ));
    }

    public Company updateCompany(Long id, Company company) {

        Company existingCompany = companyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Company not found with id: " + id
                ));

        existingCompany.setCompanyName(company.getCompanyName());
        existingCompany.setIndustry(company.getIndustry());
        existingCompany.setLocation(company.getLocation());
        existingCompany.setWebsite(company.getWebsite());
        existingCompany.setContactEmail(company.getContactEmail());

        return companyRepository.save(existingCompany);
    }

    public void deleteCompany(Long id) {

        if (!companyRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Company not found with id: " + id
            );
        }

        companyRepository.deleteById(id);
    }
}