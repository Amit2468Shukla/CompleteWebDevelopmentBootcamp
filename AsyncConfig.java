package com.base.program;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.DelegatingAsyncTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {

    @Autowired
    private Environment env;

    @Bean(name = "reqPayEx", destroyMethod = "destroy")
    @Override
    public Executor getAsyncExecutor() {

        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        executor.setCorePoolSize(
                Integer.parseInt(env.getProperty("reqPayEx-core", "100"))
        );

        executor.setMaxPoolSize(
                Integer.parseInt(env.getProperty("reqPayEx-max", "200"))
        );

        executor.setQueueCapacity(
                Integer.parseInt(env.getProperty("reqPayEx-capacity", "1000"))
        );

        executor.setThreadNamePrefix("reqPayEx-");
        executor.initialize();

        return new DelegatingAsyncTaskExecutor(executor);
    }
}