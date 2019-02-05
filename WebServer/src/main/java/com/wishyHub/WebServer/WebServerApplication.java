package com.wishyHub.WebServer;


import com.wishyHub.WebServer.Global.GetIP;
import javax.servlet.http.HttpServletRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@ComponentScan("com.wishyHub.WebServer")
@SpringBootApplication
//@ComponentScan(basePackages = { "User","Uploader"} )
public class WebServerApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(WebServerApplication.class, args);
               
	}
        
        @Override
        protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
            return builder.sources(WebServerApplication.class);
        }
}
