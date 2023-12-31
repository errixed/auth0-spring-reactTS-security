package com.errixed.backend.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "employee_table")
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

}
