/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.repository;

import com.wishyHub.WebServer.DataBase.DbConfig;
import com.wishyHub.WebServer.Uploader.FileDetail;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.dao.EmptyResultDataAccessException;

/**
 *
 * @author maninderpal
 */
public class uploadRepository  {
    public void insert(FileDetail fileDetail) {
         String sql = "INSERT INTO fileDetail (name, size, type, userid) values (?, ?, ?, ?)";
          DbConfig.jdbcTemplate().update(sql, fileDetail.getName(), fileDetail.getSize() ,fileDetail.getType(), fileDetail.getUserid());
    }
    
   public Map<String, Object> getResult(int fileid) throws EmptyResultDataAccessException {
       Map<String, Object> result = null;
       if(fileid > -1) {
        String sql = "select * from fileDetail where fileid = " + fileid;
         result = DbConfig.jdbcTemplate().queryForMap(sql);
         
         System.out.println("-------------------------"+result);
         
       } else {
            String sql = "select TOP 2* from fileDetail";
        // result = DbConfig.jdbcTemplate().queryForMap(sql);
         result = (Map<String, Object>) DbConfig.jdbcTemplate().queryForList(sql);
         System.out.println("-------Select * from fileDetail----------- : ");
         System.out.println(result);
       }
       if(result instanceof Map) {
            return result; 
        } else {
           result = new HashMap<String,Object>();
           result.put("result", "No result found");
                 return result;
        }
   
    }
         public List<Map<String, Object>> getResultAll(int fileid) throws EmptyResultDataAccessException {
      List<Map<String, Object>> result = null;
       if(fileid == -1) {
            String sql = "SELECT *  FROM wishyhub.filedetail where type in ('jpg','png','jpeg') ;";
        // result = DbConfig.jdbcTemplate().queryForMap(sql);
         result =  DbConfig.jdbcTemplate().queryForList(sql);
       
       }
       if(result instanceof Map) {
            return result; 
        } else {
        
           result.add((Map<String, Object>) new HashMap<String,Object>().put("result", "No result found"));
                 return result;
        }
   
    }
}
