/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wishyHub.WebServer.Global;

import com.wishyHub.WebServer.repository.IpRepository;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author Maninderpal
 */
public class GetIP {
    public static boolean addlog(HttpServletRequest request) {
        
        if(request == null) {
            return false;
        }
        IpRepository.insert(request.getRemoteAddr(),request.getRequestURI());
        
        return true;
    
    }
    
    
}
