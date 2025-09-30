package com.training.bankappv2.BankAppV2.services;

import com.training.bankappv2.BankAppV2.dto.AccountHolderDTO;
import com.training.bankappv2.BankAppV2.entities.AccType;
import com.training.bankappv2.BankAppV2.entities.AccountHolder;
import com.training.bankappv2.BankAppV2.repository.BankAppRepo;
import com.training.bankappv2.BankAppV2.services.BankAppService;
import com.training.bankappv2.BankAppV2.utility.AccountHolderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BankAppServiceImpl implements BankAppService {
    @Autowired
    private BankAppRepo repo;

    @Override
    public AccountHolderDTO create(AccountHolderDTO dto) {
        AccountHolder entity = AccountHolderMapper.toEntity(dto);
        repo.save(entity);
        return dto;
    }

    @Override
    public AccountHolderDTO getById(Long id) {
        return repo.findById(id)
                .map(AccountHolderMapper::toDTO)
                .orElseThrow(() -> new RuntimeException("AccountHolder not found with id " + id));
    }

    @Override
    public List<AccountHolderDTO> getAll() {
        return repo.findAll()
                .stream()
                .map(AccountHolderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public AccountHolderDTO update(Long id, AccountHolderDTO dto) {
        AccountHolder existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("AccountHolder not found with id " + id));
        existing.setFirstName(dto.getFirstName());
        existing.setLastName(dto.getLastName());
        existing.setEmail(dto.getEmail());
        existing.setPhone(dto.getPhone());
        existing.setAcctype(Enum.valueOf(AccType.class,dto.getAccType().name()));
        existing.setBalance(dto.getBalance());
        return AccountHolderMapper.toDTO(repo.save(existing));
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
