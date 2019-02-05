/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.repository;

import com.wishyHub.WebServer.DataBase.DbConfig;
import com.wishyHub.WebServer.Post.Post;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

/**
 *
 * @author Maninderpal
 */
public class PostRepository {
    /**
     * inserting new data into database
     * @param post 
     * @Return returning key of new post
     */
     public int insert(Post post) {
         String INSERT_SQL = "INSERT INTO post (author, title, text, image,search) values (?, ?, ?, ?,?)";
       //  System.out.println(sql);
       //   DbConfig.jdbcTemplate().update(sql,post.author, post.title, post.longText ,post.image);
          
          KeyHolder holder = new GeneratedKeyHolder();
		DbConfig.jdbcTemplate().update(new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
				PreparedStatement ps = connection.prepareStatement(INSERT_SQL, Statement.RETURN_GENERATED_KEYS);
				ps.setString(1, post.author);
				ps.setString(2,  post.title);
				ps.setString(3, post.longText );
                                ps.setString(4, post.image );
                                ps.setString(5, post.search );
				return ps;
			}
		}, holder);

		// returning key of new post
		return holder.getKey().intValue();
		
    }
     
     public int delete(int id) {
       
          String sql = "Update post ";
          String where = " WHERE postid=" + quote(Integer.toString(id));
          String set = " SET active = " + quote(Integer.toString(0));
          sql = sql + set + where;
		 return DbConfig.jdbcTemplate().update(sql);
		
    }
     
     public static String quote(String s) {
    return new StringBuilder()
        .append('\'')
        .append(s)
        .append('\'')
        .toString();
}

     
     public void update(Post post) {
         String sql = "UPDATE post ";
         String set = "";
         String where = " WHERE postid=" + quote(Integer.toString(post.id));
         
         if(post.longText != "") {
             set = set + " text = " + quote(post.longText);
         } 
         if(post.image != "") {
             if(set != "") { 
                 set = set + " , ";
               }
             set = set + " image = " + quote(post.image);
         }
         if(post.author != "") {
             if(set != "") { 
                 set = set + " , ";
               }
             set = set + " author = " + quote(post.author);
         }
         
         if(post.search != "") {
             if(set != "") { 
                 set = set + " , ";
               }
             set = set + " search = " + quote(post.search);
         }
         
         if(post.title != "") {
             if(set != "") { 
                 set = set + " , ";
               }
             
             set = set + "title = " + quote(post.title);
         }
         
         sql = sql + " SET " + set + where;
         
        // System.out.println(sql);
          DbConfig.jdbcTemplate().update(sql);
    }
     
     /**
      * 
      * @param fileid
      * @return
      * @throws EmptyResultDataAccessException 
      */
     public List<Map<String, Object>> getResultAll(int postid) throws EmptyResultDataAccessException {
      List<Map<String, Object>> result = null;
      String sql = null;
       if(postid == -1) {
            sql = "SELECT postid,text,title,image,search,author, date(timestamp) as timestamp  FROM wishyhub.post where active = 1 order by timestamp desc;";
        // result = DbConfig.jdbcTemplate().queryForMap(sql);
        
       } else {
            sql = "SELECT * FROM wishyhub.post where postid =" + postid + ";";
       }
        result =  DbConfig.jdbcTemplate().queryForList(sql);
        
       if(result instanceof Map) {
            return result; 
        } else {
        
           result.add((Map<String, Object>) new HashMap<String,Object>().put("result", "No result found"));
                 return result;
        }
   
    }
}
