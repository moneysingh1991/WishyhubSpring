/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Post;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Maninderpal
 */

@Entity
 @Table(name="Post")

public class Post {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="postid")
    public int id;
    
    @Column(name="author")
    public String author;
    
    @Column(name="title")
    public String title;

    @Column(name="longtext")
    public String longText;
    
    @Column(name="image")
    public String image;
    
    @Column(name="search")
    public String search;
    
    Post(int id, String author, String title, String longText, String image, String search) {
    
        this.id = id;
        this.author = author;
        this.title = title;
        this.longText = longText;
        this.image = image;
        this.search = search;
     }
}
