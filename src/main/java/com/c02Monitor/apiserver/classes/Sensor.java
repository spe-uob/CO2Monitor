package com.c02Monitor.apiserver.classes;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class Sensor {
    @JsonProperty("id")
    private long id;
    @JsonProperty("description")
    private String description;
    @JsonProperty("data")
    private List<Data> data;

    //for the json fake data
    public Sensor() {
        super();
    }

    public Sensor(long id, String description, List<Data> data) {
        this.id = id;
        this.description = description;
        this.data = data;
    }

    public long getId() {
        return id;
    }


    public String getDescription() {
        return description;
    }

    public List<Data> getData() {
        return data;
    }
}
