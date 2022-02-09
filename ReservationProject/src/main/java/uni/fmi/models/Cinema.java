package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Cinema {
	
	private String cinemaLocation;

    private String cinemaName;

    private Set<Movie> movies;

    /**
     * Default constructor
     */
    public Cinema() {
    }

    
    

    /**
     * @return
     */
    public String getCinemaLocation() {
        
        return cinemaLocation;
    }

    /**
     * @param cinemaLocation 
     * @return
     */
    public void setCinemaLocation(String cinemaLocation) {
        this.cinemaLocation = cinemaLocation;
     
    }

    /**
     * @return
     */
    public String getCinemaName() {
        
        return cinemaName;
    }

    /**
     * @param cinemaName 
     * @return
     */
    public void setCinemaName(String cinemaName) {
       this.cinemaName = cinemaName;
    
    }

    /**
     * @return
     */
    public Set<Movie> getMovies() {
      
        return movies;
    }

    /**
     * @param movies 
     * @return
     */
    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
  
    }

}