package com.c02Monitor.apiserver.classes;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class Building {
    @JsonProperty("id")
    @Id
    private string id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("rooms")
    private List<Room> rooms;

    //for the json fake data
    public Building() {
        super();
    }

    public Building(long id, String name, List<Room> rooms) {
        this.id = id;
        this.name = name;
        this.rooms = rooms;
    }

    public AddData(long roomId, long sensorId, Data data){ // Must be a neater way of doing this.
        tempRoom = new Room();
        for x in rooms{
            if x.id == roomId{
                tempRoom = x;
                for y in tempRoom.sensors{
                    if y.id == sensorId{
                        y.addData(data)
                    }
                }
            }
        }
    }

    public AddSensor(long roomId, Sensor sensor){ // Must be a neater way of doing this.
        for x in rooms{
            if x.id == roomId{
                x.addSensor(sensor)
                }
            }
        }
    }
    public AddRoom(Room room){ // Must be a neater way of doing this.
       rooms.append(room)
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<Room> getRooms() {
        return rooms;
    }
}
gb