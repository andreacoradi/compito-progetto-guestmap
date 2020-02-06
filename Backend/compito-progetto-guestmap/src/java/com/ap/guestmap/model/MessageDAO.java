/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ap.guestmap.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author pollini
 * 
 * DAO = DAta Access Object 
 * 
 * Pattern architetturale che descrive la modalità
 * di accesso ai dati salvati "da qualche parte".
 * 
 * Trasformazione di una classe in un singleton:
 * 
 * 1. metto privato il costruttore di default
 * 2. creo una variabile privata STATICA della classe stessa
 * 3. creo un metodo getInstance()
 * 
 */
public class MessageDAO {
    
    private List<Message> messages;
    private Connection conn;
    
    static private MessageDAO instance;
    
    static public MessageDAO getInstance() throws ClassNotFoundException, SQLException {
        if (instance==null){
            instance = new MessageDAO();
        }
        return instance;
    }
    
    

    private MessageDAO() throws ClassNotFoundException, SQLException {
        Class.forName("org.apache.derby.jdbc.EmbeddedDriver");
        
        conn =DriverManager.getConnection("jdbc:derby://localhost:1527/guestmap","test","test");
        
        messages = new ArrayList<>();
    }
    
    public void add(Message msg) {
        try {
            messages.add(msg);
            PreparedStatement stmt = conn.prepareStatement("INSERT INTO MESSAGES VALUES(?,?,?,?,?,?)");
            stmt.setString(1, msg.getLat());
            stmt.setString(2, msg.getLon());
            stmt.setString(3, msg.getDate());
            stmt.setString(4, msg.getTime());
            stmt.setString(5, msg.getId());
            stmt.setString(6, msg.getContent());
            stmt.execute();
        } catch (SQLException ex) {
            Logger.getLogger(MessageDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public List<Message> getAll() throws ClassNotFoundException {
        List<Message> messages = new ArrayList<>();
        try {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM MESSAGES");
            while(rs.next()) {
                Message msg = new Message(rs.getString("content"), rs.getString("lat"), rs.getString("lon"), rs.getString("id"), rs.getString("date"), rs.getString("time"));
                messages.add(msg);
            }
            rs.close();
            return messages;
        } catch (SQLException ex) {
            Logger.getLogger(MessageDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return messages;
    }
}
