package uni.fmi.models;

/**
 * 
 */
public class User {
	
	    private String firstName;

	    private String lastName;

	    private String telNumber;

	    private String email;

	    private Reservation reservation;


    /**
     * Default constructor
     */
    public User() {
    }

    /**
     * 
     */
   
    public User(String email, String firstName, String lastName, String telNumber) {
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.telNumber = telNumber;
		
	}

	/**
     * @return
     */
    public String getFirstName() {
        // 
        return firstName;
    }

    /**
     * @param name 
     * @return
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
       
    }

    /**
     * @return
     */
    public String getLastName() {
        
        return lastName;
    }

    /**
     * @param lastName 
     * @return
     */
    public void setLastName(String lastName) {
        
    	this.lastName = lastName;
       
    }

    /**
     * @return
     */
    public String getTelNumber() {
       
        return telNumber;
    }

    /**
     * @param telNumber 
     * @return
     */
    public void setTelNumber(String telNumber) {
        
    	this.telNumber = telNumber;
       
    }

    /**
     * @return
     */
    public String getEmail() {
       
        return email;
    }

    /**
     * @param email 
     * @return
     */
    public void setEmail(String email) {
        
        this.email = email;
    }

    /**
     * @return
     */
    public Reservation getReservation() {
        
        return reservation;
    }

    /**
     * @param reservation 
     * @return
     */
    public void setReservation(Reservation reservation) {
      
    	this.reservation = reservation;
      
    }

}