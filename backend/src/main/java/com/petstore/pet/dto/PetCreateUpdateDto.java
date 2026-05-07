package com.petstore.pet.dto;

import com.petstore.pet.PetCategory;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;

public record PetCreateUpdateDto(
    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name must not exceed 100 characters")
    String name,

    @NotBlank(message = "Breed is required")
    @Size(max = 100, message = "Breed must not exceed 100 characters")
    String breed,

    @NotNull(message = "Age is required")
    @Min(value = 0, message = "Age cannot be negative")
    Integer age,

    @NotNull(message = "Price is required")
    @DecimalMin(value = "0.0", inclusive = true, message = "Price cannot be negative")
    BigDecimal price,

    @NotBlank(message = "Description is required")
    String description,

    @NotBlank(message = "Image URL is required")
    @Size(max = 500, message = "Image URL must not exceed 500 characters")
    String imageUrl,

    @NotNull(message = "Availability status is required")
    Boolean available,

    @NotNull(message = "Category is required")
    PetCategory category
) {
}
