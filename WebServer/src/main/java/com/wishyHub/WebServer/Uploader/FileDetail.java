/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Uploader;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author maninderpal
 */
 @Entity
 @Table(name="FileDetail")
public class FileDetail {
 
  
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="fileid")
    private Integer fileid;
    
    @Column(name="userid")
    private Integer userid;
    
    @Column(name="name")
    private String name;
    
    @Column(name="size")
    private Integer size;
    
    @Column(name="type")
    private String type;
    
    @Column(name="timestamp")
    private String timestamp;

    public FileDetail(Integer userid, String name, Integer size, String type) {
        this.userid = userid;
        this.name = name;
        this.size = size;
        this.type = type;
    }
    
    public Integer getFileid() {
        return fileid;
    }

    public void setFileid(Integer fileid) {
        this.fileid = fileid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
    
    
    
}
