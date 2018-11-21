/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.MainController;

import com.wishyHub.WebServer.User.User;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author maninderpal
 */

@RestController
public class MainController {
    
@GetMapping("/error")

	public @ResponseBody Map<String,String> getAllUsers() {
		// This returns a JSON or XML with the users
                Map<String,String> m = new HashMap<String,String>();
                m.put("response", "200");
		return m;
	}
  }
    

