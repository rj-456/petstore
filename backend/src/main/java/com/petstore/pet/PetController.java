package com.petstore.pet;

import com.petstore.pet.dto.PetCreateUpdateDto;
import com.petstore.pet.dto.PagedResponse;
import com.petstore.pet.dto.PetDetailDto;
import com.petstore.pet.dto.PetSummaryDto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pets")
@Validated
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public PagedResponse<PetSummaryDto> listPets(
        @RequestParam(required = false) @Size(max = 100, message = "search parameter must not exceed 100 characters") String search,
        @RequestParam(required = false) String category,
        @RequestParam(defaultValue = "0") @Min(value = 0, message = "Invalid pagination parameters") Integer page,
        @RequestParam(defaultValue = "20") @Min(value = 1, message = "Invalid pagination parameters") @Max(value = 100, message = "Invalid pagination parameters") Integer size
    ) {
        PetCategory parsedCategory = category == null || category.isBlank() ? null : PetCategory.fromQuery(category);

        Page<PetSummaryDto> result = petService.findPets(search, parsedCategory, PageRequest.of(page, size));
        return new PagedResponse<>(
            result.getContent(),
            result.getNumber(),
            result.getSize(),
            result.getTotalElements(),
            result.getTotalPages()
        );
    }

    @GetMapping("/{id}")
    public PetDetailDto getPetById(@PathVariable Long id) {
        return petService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PetDetailDto createPet(@Valid @RequestBody PetCreateUpdateDto dto) {
        return petService.createPet(dto);
    }

    @PutMapping("/{id}")
    public PetDetailDto updatePet(@PathVariable Long id, @Valid @RequestBody PetCreateUpdateDto dto) {
        return petService.updatePet(id, dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePet(@PathVariable Long id) {
        petService.deletePet(id);
    }
}
