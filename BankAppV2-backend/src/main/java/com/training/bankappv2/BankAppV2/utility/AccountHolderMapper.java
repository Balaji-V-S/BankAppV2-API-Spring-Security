package com.training.bankappv2.BankAppV2.utility;
import com.training.bankappv2.BankAppV2.dto.AccountHolderDTO;
import com.training.bankappv2.BankAppV2.entities.AccType;
import com.training.bankappv2.BankAppV2.entities.AccountHolder;

public class AccountHolderMapper {
    public static AccountHolderDTO toDTO(AccountHolder entity) {
        AccountHolderDTO dto = new AccountHolderDTO();
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setEmail(entity.getEmail());
        dto.setPhone(entity.getPhone());
        dto.setAccType(Enum.valueOf(AccType.class,entity.getAcctype().name()));
        dto.setBalance(entity.getBalance());
        return dto;
    }

    public static AccountHolder toEntity(AccountHolderDTO dto) {
        AccountHolder entity = new AccountHolder();
        entity.setId(dto.getId());
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        entity.setAcctype(Enum.valueOf(AccType.class, dto.getAccType().name()));
        entity.setBalance(dto.getBalance());
        return entity;
    }
}

