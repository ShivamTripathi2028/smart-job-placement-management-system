package com.shivam.smartjobplacementmanagementsystem.controller;
import com.shivam.smartjobplacementmanagementsystem.entity.Placement;
import com.shivam.smartjobplacementmanagementsystem.service.PlacementService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/placements")
public class PlacementController {

    private final PlacementService placementService;

    public PlacementController(PlacementService placementService) {
        this.placementService = placementService;
    }

    @PostMapping
    public Placement createPlacement(
            @Valid @RequestBody Placement placement) {

        return placementService.savePlacement(placement);
    }

    @GetMapping
    public List<Placement> getAllPlacements() {
        return placementService.getAllPlacements();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Placement> getPlacementById(@PathVariable Long id) {

        return ResponseEntity.ok(
                placementService.getPlacementById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Placement> updatePlacement(
            @PathVariable Long id,
            @Valid @RequestBody Placement placement) {

        Placement existingPlacement =
                placementService.getPlacementById(id);

        existingPlacement.setStudentId(placement.getStudentId());
        existingPlacement.setJobId(placement.getJobId());
        existingPlacement.setCompanyName(placement.getCompanyName());
        existingPlacement.setJobRole(placement.getJobRole());
        existingPlacement.setPlacementDate(placement.getPlacementDate());
        existingPlacement.setPackageAmount(placement.getPackageAmount());
        existingPlacement.setPlacementStatus(placement.getPlacementStatus());
        existingPlacement.setJoiningDate(placement.getJoiningDate());
        existingPlacement.setOfferLetterStatus(
                placement.getOfferLetterStatus()
        );
        existingPlacement.setPlacementType(placement.getPlacementType());
        existingPlacement.setRemarks(placement.getRemarks());

        return ResponseEntity.ok(
                placementService.savePlacement(existingPlacement)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlacement(@PathVariable Long id) {

        placementService.deletePlacement(id);

        return ResponseEntity.noContent().build();
    }
}