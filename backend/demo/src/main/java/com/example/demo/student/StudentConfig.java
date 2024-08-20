package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner runner(StudentRepository repository) {
        return args -> {
            Student pedro = new Student(
                    1L,
                    "pedro",
                    "pedroramirezneira@gmail.com",
                    LocalDate.of(2004, Month.JANUARY, 10)
            );
            repository.save(pedro);
        };
    }
}
