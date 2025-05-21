package com.unac.salescarpremium.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {

    private Long id;
    private String marca;
    private String linea;
    private String color;
    private int model;
    private String placa;

}
