package com.training.bankappv2.BankAppV2.repository;
import com.training.bankappv2.BankAppV2.entities.AccountHolder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAppRepo extends JpaRepository<AccountHolder, Long> {
}
