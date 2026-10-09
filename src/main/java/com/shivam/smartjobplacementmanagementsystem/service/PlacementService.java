package com.shivam.smartjobplacementmanagementsystem.service;

import com.shivam.smartjobplacementmanagementsystem.entity.Placement;
import com.shivam.smartjobplacementmanagementsystem.exception.ResourceNotFoundException;
import com.shivam.smartjobplacementmanagementsystem.repository.PlacementRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlacementService {

    private final PlacementRepository placementRepository;

    public PlacementService(PlacementRepository placementRepository) {
        this.placementRepository = placementRepository;
    }

    public Placement savePlacement(Placement placement) {
        return placementRepository.save(placement);
    }

    public List<Placement> getAllPlacements() {
        return placementRepository.findAll();
    }

    public Placement getPlacementById(Long id) {
        return placementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Placement not found with id: " + id
                ));
    }

    public void deletePlacement(Long id) {

        if (!placementRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                    "Placement not found with id: " + id
            );
        }

        placementRepository.deleteById(id);
    }

    public long getPlacementCountByStatus(String status) {
        return placementRepository.countByPlacementStatusIgnoreCase(status);
    }
}