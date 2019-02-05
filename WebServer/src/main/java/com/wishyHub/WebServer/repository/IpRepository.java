/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.repository;

import com.wishyHub.WebServer.DataBase.DbConfig;

/**
 *
 * @author Maninderpal
 */
public class IpRepository {
    public static void insert(String ip, String url) {
         String sql = "INSERT INTO track (ip,url) values (?, ?)";
          DbConfig.jdbcTemplate().update(sql,ip,url);
    }
}
