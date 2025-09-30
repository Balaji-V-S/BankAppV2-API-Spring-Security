package com.training.bankappv2.BankAppV2.services;


import com.training.bankappv2.BankAppV2.dto.AccountHolderDTO;
import java.util.List;

public interface BankAppService {
    AccountHolderDTO create(AccountHolderDTO dto);
    AccountHolderDTO getById(Long id);
    List<AccountHolderDTO> getAll();
    AccountHolderDTO update(Long id, AccountHolderDTO dto);
    void delete(Long id);
}

