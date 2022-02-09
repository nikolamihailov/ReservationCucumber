package uni.fmi.models;
import java.time.LocalDateTime;
import java.util.*;

/**
 * 
 */
public class Projection {
	
	    private String projectionType;

	    private String projectionAudioType;

	    private LocalDateTime projectionTime;

	    private Set<Reservation> reservations;

	    private Movie movie;

    /**
     * Default constructor
     */
    public Projection() {
    }
    
    public Projection(String projectionType, String projectionAudioType, LocalDateTime projectionTime) {
    	this.projectionType = projectionType;
    	this.projectionAudioType = projectionAudioType;
    	this.projectionTime = projectionTime;
    }

  

    /**
     * @return
     */
    public String getProjectionType() {
        return projectionType;
    }

    /**
     * @param projectionType 
     * @return
     */
    public void setProjectionType(String projectionType) {
        this.projectionType = projectionType;
    }

    /**
     * @return
     */
    public String getProjectionAudioType() {
       
        return projectionAudioType;
    }

    /**
     * @param projectionAudioType 
     * @return
     */
    public void setProjectionAudioType(String projectionAudioType) {
        this.projectionAudioType = projectionAudioType;
        
    }

    /**
     * @return
     */
    public LocalDateTime getProjectionTime() {
       
        return projectionTime;
    }

    /**
     * @param projectionTime 
     * @return
     */
    public void setProjectionTime(LocalDateTime projectionTime) {
        this.projectionTime = projectionTime;
    }

    /**
     * @return
     */
    public Set<Reservation> getReservations() {
       
        return reservations;
    }

    /**
     * @param reservations 
     * @return
     */
    public void setReservations(Set<Reservation> reservations) {
       this.reservations = reservations;
        
    }
    public Movie getMovie() {
        return movie;
    }

    /**
     * @param movie 
     * @return
     */
    public void setMovie(Movie movie) {
        this.movie = movie;
    
    }

}