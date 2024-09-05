package com.becoder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.becoder.model.UserDtls;
import com.becoder.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository UserRepo;

    @Override
    public UserDtls createUser(UserDtls user) {
        return UserRepo.save(user);

    }
    
}
