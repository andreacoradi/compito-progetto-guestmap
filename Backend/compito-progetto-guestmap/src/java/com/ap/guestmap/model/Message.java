/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ap.guestmap.model;

import java.sql.Date;
import java.sql.Time;
import java.util.UUID;

/**
 *
 * @author pollini
 */
public class Message {
    private final String content;
    private final String lat;
    private final String lon;
    private final String id;
    private final Date date;
    private final Time time;

    public Message(String content, String lat, String lon) {
        this.content = content;
        this.lat = lat;
        this.lon = lon;
        this.id =  UUID.randomUUID().toString();
        this.date = new Date(System.currentTimeMillis());
        this.time = new Time(System.currentTimeMillis());
    }

    public Message(String content, String lat, String lon, String id, String date, String time) {
        this.content = content;
        this.lat = lat;
        this.lon = lon;
        this.id = id;
        this.date = Date.valueOf(date);
        this.time = Time.valueOf(time);
    }

    public String getId() {
        return id;
    }
    
    public String getContent() {
        return content;
    }

    public String getLat() {
        return this.lat;
    }

    public String getLon() {
        return this.lon;
    }
    
    public String getDate(){
        return this.date.toString();
    }
    
    public String getTime(){
        return this.time.toString();
    }
    
}
