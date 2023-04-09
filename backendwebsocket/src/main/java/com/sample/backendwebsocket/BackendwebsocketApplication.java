package com.sample.backendwebsocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.sample.backendwebsocket.config", "com.sample.backendwebsocket.controller"})
public class BackendwebsocketApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendwebsocketApplication.class, args);
    }

}
