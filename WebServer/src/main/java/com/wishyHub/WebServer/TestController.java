/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer;

import java.io.File;
import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author maninderpal
 */
@RestController
@RequestMapping(path="/webAppWishyHub")
public class TestController {
 
    @GetMapping("/hello")
    public Collection<String> sayHello() {
        
         File directory = new File( "../"+System.getProperty("user.dir")+"/newCreateUpload");
              
                  directory.mkdir();
        return IntStream.range(0, 2)
          .mapToObj(i -> "../"+System.getProperty("user.dir")+"/newCreateUpload" + i)
          .collect(Collectors.toList());
    }
}