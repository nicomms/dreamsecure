package com.nicomms.dreamsecure;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TestRunner implements ApplicationRunner {

	private Logger log = LoggerFactory.getLogger(TestRunner.class);
	
	@Autowired
	DataSource dataSource;
	
	
	@Override
	public void run(ApplicationArguments args) {
		try (Connection con = dataSource.getConnection()) {
			System.out.println(con.getMetaData().getURL());
			System.out.println(con.getMetaData().getUserName());
//			Statement statement = con.createStatement();
//			String sql = "CREATE TABLE BOARD2(SEQ INTEGER NOT NULL, TITLE VARCHAR(255), PRIMARY KEY (SEQ))";
//			statement.executeUpdate(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
