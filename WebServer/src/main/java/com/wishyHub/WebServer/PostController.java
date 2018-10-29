/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer;

import java.util.HashMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author maninderpal
 */

@RestController
public class PostController {
    
   @PostMapping("/post")
    public HashMap<String, String> greeting(@RequestBody String postPayload) {
       // model.addAttribute("name", name);
       HashMap<String,String> map = new HashMap<String,String>();
       map.put("error","success");
       map.put("data",postPayload);
        return map;
    }

}
