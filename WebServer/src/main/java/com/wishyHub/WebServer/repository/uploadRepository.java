/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.repository;

import com.wishyHub.WebServer.DataBase.DbConfig;
import org.springframework.data.repository.CrudRepository;
import com.wishyHub.WebServer.Uploader.FileDetail;

/**
 *
 * @author maninderpal
 */
public class uploadRepository  {
    public void save(FileDetail fileDetail) {
         String sql = "INSERT INTO fileDetail (articleId, title, category) values (?, ?, ?)";
          DbConfig.jdbcTemplate().update(sql, fileDetail.getName(), fileDetail.getSize() ,fileDetail.getType());
          
    }
    
   
}
