/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

/**
 *
 * @author maninderpal
 */

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

public class Home extends AbstractController{
  
   @Override
   protected ModelAndView handleRequestInternal(HttpServletRequest request,
      HttpServletResponse response) throws Exception {
     // ModelAndView model = new ModelAndView("home");
      ModelAndView model = new ModelAndView("index1");
      model.addObject("message", " {name:'Maninder', age:25}");
      return model;
   }
   
}