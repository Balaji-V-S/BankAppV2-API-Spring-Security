package com.training.bankappv2.BankAppV2.dto;
import com.training.bankappv2.BankAppV2.entities.AccType;
import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AccountHolderDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private AccType accType;
    private Long balance;
}
