/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Post;

import com.wishyHub.WebServer.Global.GetIP;
import com.wishyHub.WebServer.repository.PostRepository;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/**
 *
 * @author maninderpal
 */

@RestController
@RequestMapping(path="/post")
public class PostController   {
    
    /**
     * Data coming from web/api via http 
     * This is post request
     * @param author
     * @param title
     * @param image
     * @param longText
     * @return 
     */
   @PostMapping("/save")
    public HashMap<String, String> savePost(@RequestParam("edit") boolean edit,@RequestParam("id") int id, @RequestParam("author") String author,@RequestParam("search") String search, @RequestParam("title") String title, @RequestParam("link") String image, @RequestParam("textArea") String longText, HttpServletRequest request) {
       // model.addAttribute("name", name);
       
         // add log of request ip
        GetIP.addlog(request);
        
       HashMap<String,String> map = new HashMap<String,String>();
       map.put("error","success");
      
       String dbResponse = "success";
       
       // if its new post
       if(!edit) {
          dbResponse =  saveIntoDB(-1, author,title,longText,image, search);
       } else {
             // if its edit request for existing post
              dbResponse = saveIntoDB(id,author,title,longText,image,search);
       }
      map.put("data",dbResponse);
        return map;
    }
    
    /**
     * Get all post 
     * @return 
     */
    @GetMapping("/all")
    public ResponseEntity<?> getAllPost(HttpServletRequest request) {
       
        // -1 mean return all result from table
        
               // add log of request ip
        GetIP.addlog(request);
          return new ResponseEntity<>(  new PostRepository().getResultAll(-1),HttpStatus.OK);
    
    }
    
    /**
     * send data to database for storage
     * @param author
     * @param title
     * @param longtext
     * @param image
     * @return 
     */

    private String saveIntoDB(int id, String author, String title, String longtext, String image, String search) {
        // if its new post , id = -1 mean new post
       
       try {
         
          if(id == -1) {
            return Integer.toString(new PostRepository().insert(new Post(0, author, title,  longtext,  image, search)));
        } else {
        // if its edit request for existing post
          new PostRepository().update(new Post( id , author, title,  longtext,  image,search));
        }
       } catch (Exception e) {
            return e.toString();
       } finally {
       
       }
      
       return "success save post";
    }
    
    @PostMapping("/delete")
    public HashMap<String, String> deletePost(@RequestParam("id") int id, HttpServletRequest request ) {
        
         // add log of request ip
        GetIP.addlog(request);
        
       // model.addAttribute("name", name);
       HashMap<String,String> map = new HashMap<String,String>();
       map.put("error","success");
       String dbResponse = "delete success";
       
       // if its new post
       if(id > -1) {
         
          map.put("data",Integer.toString(deletePostById(id)));
       } else {
          
            map.put("data","Something wrong with delete. Server error");
       }
      
        return map;
    }

    private int deletePostById(int id) {
       return new PostRepository().delete(id);
    }
}
