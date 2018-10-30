/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.repository;

import org.springframework.data.repository.CrudRepository;
import com.wishyHub.WebServer.Uploader.FileDetail;

/**
 *
 * @author maninderpal
 */
public interface uploadRepository extends CrudRepository<FileDetail, Integer> {
    
}
