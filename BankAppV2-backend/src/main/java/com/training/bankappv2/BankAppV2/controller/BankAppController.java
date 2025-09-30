package com.training.bankappv2.BankAppV2.controller;

import com.training.bankappv2.BankAppV2.dto.AccountHolderDTO;
import com.training.bankappv2.BankAppV2.services.BankAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = {"http://localhost:5173","http://localhost:8080/users/"})
public class BankAppController {
    @Autowired
    private BankAppService service;

    @PostMapping
    public AccountHolderDTO create(@RequestBody AccountHolderDTO dto) {
        return service.create(dto);
    }

    @GetMapping("/getById/{id}")
    public AccountHolderDTO getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping
    public List<AccountHolderDTO> getAll() {
        return service.getAll();
    }

    @PutMapping("/update/{id}")
    public AccountHolderDTO update(@PathVariable Long id, @RequestBody AccountHolderDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
