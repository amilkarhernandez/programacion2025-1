package com.unac.salescarpremium;

import com.unac.salescarpremium.dao.CarDAO;
import com.unac.salescarpremium.dtos.CarDTO;
import com.unac.salescarpremium.entities.Car;
import com.unac.salescarpremium.services.interfaces.CarService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class CarTest {

    @MockBean
    private CarDAO carDAO;

    @Autowired
    private CarService carService;

    private List<Car> carList;

    @BeforeEach
    void setUp() {
        carList = new ArrayList<>();

        Car car = new Car();
        car.setId(1L);
        car.setModel(2024);
        car.setColor("Blanco");
        car.setFechafabri(LocalDate.of(2024,2,4));
        car.setLinea("Yaris");
        car.setMarca("Toyota");
        car.setPlaca("GGT-563");

        carList.add(car);

        Car car1 = new Car();
        car1.setId(2L);
        car1.setModel(2022);
        car1.setColor("Gris");
        car1.setFechafabri(LocalDate.of(2024,2,4));
        car1.setLinea("Hilux");
        car1.setMarca("Toyota");
        car1.setPlaca("WGT-889");

        carList.add(car1);
    }

    @Test
    @DisplayName("Should return a list cars")
    void findAllCars() {
        // Contenido del Test

        when(carDAO.findAll()).thenReturn(carList);

        List<CarDTO> response = carService.findAllService();

        assertEquals("Toyota",response.get(0).getMarca());
        assertEquals(2, response.size());
    }

    @Test
    @DisplayName("Should return a car by Id")
    void findOneCar() {
        // Contenido del Test
        when(carDAO.findById(1L)).thenReturn(Optional.of(carList.get(0)));

        Optional<CarDTO> response = carService.findOneService(1L);

        assertEquals(1L, response.get().getId());
    }


}
