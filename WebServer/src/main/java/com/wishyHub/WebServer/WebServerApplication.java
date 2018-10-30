package com.wishyHub.WebServer;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("com.wishyHub.WebServer")
@SpringBootApplication
//@ComponentScan(basePackages = { "User","Uploader"} )
public class WebServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebServerApplication.class, args);
	}
}
