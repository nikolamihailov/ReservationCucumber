package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Reservation {
	
	    private String reservationType;

	    private int reservationPeopleNumber;

	    private int reservationSeatNumbers;

	    private int reservationRowNumber;
	   
	    private String reservationExpiringDate;

	    private Projection projection;

	    private User user;

    /**
     * Default constructor
     */
    public Reservation() {
    }

   
   

    public Reservation(String reservationType, int reservationPeopleNumber,  int reservationSeatNumbers, int reservationRowNumber, String reservationExpiringDate
    		, Projection projection,
			User user) {
		this.reservationType = reservationType;
		this.reservationPeopleNumber = reservationPeopleNumber;
		this.reservationSeatNumbers = reservationSeatNumbers;
		this.reservationRowNumber = reservationRowNumber;
		this.reservationExpiringDate = reservationExpiringDate;
		this.projection = projection;
		this.user = user;
	}




	/**
     * @return
     */
    public String getReservationType() {
        
        return reservationType;
    }

    /**
     * @param reservationType 
     * @return
     */
    public void setReservationType(String reservationType) {
        this.reservationType = reservationType;
       
    }

    /**
     * @return
     */
    public int getReservationPeopleNumber() {
       
        return reservationPeopleNumber;
    }

    /**
     * @param reservationPeopleNumber 
     * @return
     */
    public void setReservationPeopleNumber(byte reservationPeopleNumber) {
    	this.reservationPeopleNumber = reservationPeopleNumber;
        
    }

    /**
     * @return
     */
    public int getReservationSeatNumbers() {
      
        return reservationSeatNumbers;
    }

    /**
     * @param reservationSeatNumbers 
     * @return
     */
    public void setReservationSeatNumbers(int reservationSeatNumbers) {
        this.reservationSeatNumbers = reservationSeatNumbers;
       
    }

    /**
     * @return
     */
    public int getReservationRowNumber() {
   
        return reservationRowNumber;
    }

    /**
     * @param reservationRowNumber 
     * @return
     */
    public void setReservationRowNumber(int reservationRowNumber) {
       this.reservationRowNumber = reservationRowNumber;
       
    }

    /**
     * @return
     */
    public String getReservatioExpiringDate() {
        return reservationExpiringDate;
    }

    /**
     * @return
     */
    public User getUser() {
     
        return user;
    }

    /**
     * @param user 
     * @return
     */
    public void setUser(User user) {
        this.user = user;
       
    }

    /**
     * @return
     */
    public Projection getProjection() {
       
        return projection;
    }

    /**
     * @param projection 
     * @return
     */
    public void setProjection(Projection projection) {
        this.projection = projection;
        
    }

}