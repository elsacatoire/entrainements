package com.example.springapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.springapi.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
