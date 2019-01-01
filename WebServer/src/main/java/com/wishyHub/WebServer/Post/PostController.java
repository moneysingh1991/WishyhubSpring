/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Post;

import com.wishyHub.WebServer.DataBase.DbConfig;
import com.wishyHub.WebServer.repository.PostRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import static org.springframework.http.RequestEntity.post;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author maninderpal
 */

@RestController
@RequestMapping(path="/post")
public class PostController {
    
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
    public HashMap<String, String> savePost(@RequestParam("edit") boolean edit,@RequestParam("id") int id, @RequestParam("author") String author, @RequestParam("title") String title, @RequestParam("link") String image, @RequestParam("textArea") String longText) {
       // model.addAttribute("name", name);
       HashMap<String,String> map = new HashMap<String,String>();
       map.put("error","success");
      
       String dbResponse = "success";
       
       // if its new post
       if(!edit) {
          dbResponse =  saveIntoDB(-1, author,title,longText,image);
       } else {
             // if its edit request for existing post
              dbResponse = saveIntoDB(id,author,title,longText,image);
       }
      map.put("data",dbResponse);
        return map;
    }
    
    /**
     * Get all post 
     * @return 
     */
    @GetMapping("/all")
    public ResponseEntity<?> getAllPost() {
        
        // -1 mean return all result from table
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

    private String saveIntoDB(int id, String author, String title, String longtext, String image) {
        // if its new post , id = -1 mean new post
       
       try {
         
          if(id == -1) {
            return Integer.toString(new PostRepository().insert(new Post(0, author, title,  longtext,  image)));
        } else {
        // if its edit request for existing post
          new PostRepository().update(new Post( id , author, title,  longtext,  image));
        }
       } catch (Exception e) {
            return e.toString();
       } finally {
       
       }
      
       return "success save post";
    }
    
    @DeleteMapping("/delete")
    public HashMap<String, String> deletePost(@RequestParam("id") int id ) {
       // model.addAttribute("name", name);
       HashMap<String,String> map = new HashMap<String,String>();
       map.put("error","success");
       String dbResponse = "dele success";
       
       // if its new post
//       if(!edit) {
//          dbResponse =  saveIntoDB(-1, author,title,longText,image);
//       } else {
//             // if its edit request for existing post
//              dbResponse = saveIntoDB(id,author,title,longText,image);
//       }
      map.put("data",dbResponse);
        return map;
    }
}
