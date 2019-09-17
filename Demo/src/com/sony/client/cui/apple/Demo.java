package com.sony.client.cui.apple;

enum Apple { GoldenDel, Winesap, RedDel, Jonathan, Cortland;

public String getPrice() {
	// TODO Auto-generated method stub
	return null;
} }

class Demo
{
	@SuppressWarnings("unused")
	public static void main(String args[])  
	  { 
	    Apple ap; 
	 
	    // Display price of Winesap. 
	    System.out.println("Winesap costs " + 
	                       Apple.Winesap.getPrice() + 
	                       " cents.\n"); 
	 
	    // Display all apples and prices.  TO-DO....
	}
}