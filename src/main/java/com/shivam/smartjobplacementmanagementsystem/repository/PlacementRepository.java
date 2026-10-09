package com.shivam.smartjobplacementmanagementsystem.repository;

import com.shivam.smartjobplacementmanagementsystem.entity.Placement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlacementRepository extends JpaRepository<Placement, Long> {

    long countByPlacementStatusIgnoreCase(String placementStatus);

}