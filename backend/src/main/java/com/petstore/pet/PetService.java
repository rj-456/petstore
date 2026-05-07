package com.petstore.pet;

import com.petstore.pet.dto.PetCreateUpdateDto;
import com.petstore.pet.dto.PetDetailDto;
import com.petstore.pet.dto.PetSummaryDto;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.Objects;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PetService {

    private final PetRepository petRepository;

    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public Page<PetSummaryDto> findPets(String search, PetCategory category, Pageable pageable) {
        String normalizedSearch = normalizeSearch(search);
        return petRepository.findBySearchAndCategory(normalizedSearch, category, pageable)
            .map(this::toSummaryDto);
    }

    public PetDetailDto findById(Long id) {
        Long requiredId = Objects.requireNonNull(id, "id must not be null");
        Pet pet = petRepository.findById(requiredId)
            .orElseThrow(() -> new EntityNotFoundException("Pet not found"));
        return toDetailDto(pet);
    }

    public PetDetailDto createPet(PetCreateUpdateDto dto) {
        Pet pet = new Pet();
        updateEntityFromDto(pet, dto);
        pet.setCreatedAt(LocalDateTime.now());
        Pet savedPet = petRepository.save(pet);
        return toDetailDto(savedPet);
    }

    public PetDetailDto updatePet(Long id, PetCreateUpdateDto dto) {
        Long requiredId = Objects.requireNonNull(id, "id must not be null");
        Pet pet = petRepository.findById(requiredId)
            .orElseThrow(() -> new EntityNotFoundException("Pet not found"));
        
        updateEntityFromDto(pet, dto);
        Pet savedPet = petRepository.save(pet);
        return toDetailDto(savedPet);
    }

    public void deletePet(Long id) {
        Long requiredId = Objects.requireNonNull(id, "id must not be null");
        if (!petRepository.existsById(requiredId)) {
            throw new EntityNotFoundException("Pet not found");
        }
        petRepository.deleteById(requiredId);
    }

    private void updateEntityFromDto(Pet pet, PetCreateUpdateDto dto) {
        pet.setName(dto.name());
        pet.setBreed(dto.breed());
        pet.setAge(dto.age());
        pet.setPrice(dto.price());
        pet.setDescription(dto.description());
        pet.setImageUrl(dto.imageUrl());
        pet.setAvailable(dto.available());
        pet.setCategory(dto.category());
    }


    private String normalizeSearch(String search) {
        if (search == null) {
            return "";
        }
        String trimmed = search.trim();
        return trimmed;
    }

    private PetSummaryDto toSummaryDto(Pet pet) {
        return new PetSummaryDto(
            pet.getId(),
            pet.getName(),
            pet.getBreed(),
            pet.getPrice(),
            pet.getImageUrl(),
            pet.getAvailable(),
            pet.getCategory()
        );
    }

    private PetDetailDto toDetailDto(Pet pet) {
        return new PetDetailDto(
            pet.getId(),
            pet.getName(),
            pet.getBreed(),
            pet.getAge(),
            pet.getPrice(),
            pet.getDescription(),
            pet.getImageUrl(),
            pet.getAvailable(),
            pet.getCategory()
        );
    }
}
