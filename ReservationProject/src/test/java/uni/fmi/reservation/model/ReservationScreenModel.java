package uni.fmi.reservation.model;

import java.time.LocalDateTime;

import uni.fmi.reservation.service.ReservationService;

public class ReservationScreenModel {

	private String email;
	private String telNumber;
	private String cinema;
	private String movie;
	private LocalDateTime projectionTime;
	private int rowNumber;
	private int seatNumbers;
	private String message;
	private String lastName;
	private String firstName;
	private LocalDateTime dateOfReserve;

	public void setEmail(String email) {
		this.email = email;
		
	}

	public void setTelNumber(String telNumber) {
		this.telNumber = telNumber;
		
	}

	public void setCinema(String cinema) {
		this.cinema= cinema;
		
	}

	public void setMovie(String movie) {
		this.movie = movie;
		
	}

	public void setProjection(LocalDateTime projection) {
		this.projectionTime =  projection;
		
	}

	

	public void setSeatNumbers(int seatNumbers) {
		this.seatNumbers = seatNumbers;
		
	}

	public void clickReservationButton() {
		message = ReservationService.makeReservation(email, firstName, lastName, telNumber, projectionTime, cinema, movie, seatNumbers, rowNumber, dateOfReserve);
	}
	

	public String getMessage() {
		
		return message;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
		
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
		
	}

	public void setDateOfReserve(LocalDateTime dateOfReserve) {
		this.dateOfReserve = dateOfReserve;
		
	}

	public void setRowNumber(int rowNumber) {
		this.rowNumber = rowNumber;
		
	}

}
