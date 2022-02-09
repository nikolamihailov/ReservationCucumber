package uni.fmi.models;
import java.util.*;

/**
 * 
 */
public class Movie {
	
	    private String movieName;

	    private String movieDescription;

	    private int movieDuration;

	    private String movieGenre;

	    private String movieCast;

	    private String movieProducers;

	    private String category;

	    private Set<Cinema> cinemas;

	    private Set<Projection> projections;

    /**
     * Default constructor
     */
    public Movie() {
    }


    /**
     * @return
     */
    public String getMovieName() {
       
        return movieName;
    }

    /**
     * @param movieName 
     * @return
     */
    public void setMovieName(String movieName) {
       this.movieName = movieName;
       
    }

    /**
     * @return
     */
    public String getMovieDescription() {
        
        return movieDescription;
    }

    /**
     * @param movieDescription 
     * @return
     */
    public void setMovieDescription(String movieDescription) {
    
    	this.movieDescription = movieDescription;
    }

    /**
     * @return
     */
    public int getMovieDuration() {
        
        return movieDuration;
    }

    /**
     * @param movieDuration 
     * @return
     */
    public void setMovieDuration(int movieDuration) {
        this.movieDuration = movieDuration;
    }

    /**
     * @return
     */
    public String getMovieGenre() {
        
        return movieGenre;
    }

    /**
     * @param movieGenre 
     * @return
     */
    public void setMovieGenre(String movieGenre) {
     
    	this.movieGenre = movieGenre;
    }

    /**
     * @return
     */
    public String getMovieCast() {
       
        return movieCast;
    }

    /**
     * @param movieCast 
     * @return
     */
    public void setMovieCast(String movieCast) {
       this.movieCast = movieCast;
    }

    /**
     * @return
     */
    public String getMovieProducers() {
     
        return movieProducers;
    }

    /**
     * @param movieProducers 
     * @return
     */
    public void setMovieProducers(String movieProducers) {
    
    	this.movieProducers = movieProducers;
       
    }

    /**
     * @return
     */
    public String getCategory() {
       
        return category;
    }

    /**
     * @param category 
     * @return
     */
    public void setCategory(String category) {
        
    	this.category = category;
          }

    /**
     * @return
     */
    public Set<Cinema> getCinemas() {
    
        return cinemas;
    }

    /**
     * @param cinemas 
     * @return
     */
    public void setCinemas(Set<Cinema> cinemas) {
      this.cinemas = cinemas;
    }

    /**
     * @return
     */
    public Set<Projection> getProjections() {
        
        return projections;
    }

    /**
     * @param projections 
     * @return
     */
    public void setProjections(Set<Projection> projections) {
        this.projections = projections;
    }

}