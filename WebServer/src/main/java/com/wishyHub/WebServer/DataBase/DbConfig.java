/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.DataBase;

import javax.sql.DataSource;
import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 *
 * @author maninderpal
 */


@Configuration 
@EnableTransactionManagement
@PropertySource("classpath:application.properties")

public class DbConfig {
  
    
    @Bean
    public static DataSource getDataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://127.0.0.1:3306/wishyhub");
        dataSource.setUsername("root");
        dataSource.setPassword("9872476129Mm$");
      
        return (DataSource) dataSource;
    }
    
	@Bean
	public static JdbcTemplate jdbcTemplate() {
	    return new JdbcTemplate(getDataSource());
	}
}
