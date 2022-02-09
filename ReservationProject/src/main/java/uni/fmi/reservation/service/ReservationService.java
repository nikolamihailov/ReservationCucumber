package uni.fmi.reservation.service;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import uni.fmi.models.Projection;
import uni.fmi.models.Reservation;
import uni.fmi.models.User;

public class ReservationService {
	
    private static List<Reservation> reservations = new ArrayList<>();
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX = 
		    Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
    
  
	
	public static String makeReservation(String email, String firstName, String lastName, String telNumber, LocalDateTime projectionTime, String cinema, String movie, int seatNumbers, int rowNumber, LocalDateTime dateOfReserve) {
		
		clearDB();
		User one = new User(email, firstName, lastName, telNumber);
		User two = new User("kol@abv.bg", "Kko", "Koko", "451512115");
		
		
		
		
		
		Projection pj4 = new Projection("", "", LocalDateTime.of(2022, 2, 2, 17, 0));
		Projection pj5 = new Projection("", "", projectionTime);
		Reservation first = new Reservation("without buying", 3, seatNumbers, rowNumber, null, pj5, one);
		
		Reservation second = new Reservation("without buying", 5, 10 , 18, null, pj4, two);
		
		
		reservations.add(second);
		
		
		
		
		/*
		
		if(pj3.getProjectionTime().substring(0, 10).equals(first.getProjection().getProjectionTime().substring(0, 10)) && Integer.parseInt(pj3.getProjectionTime().substring(11, 13)) > Integer.parseInt(first.getProjection().getProjectionTime().substring(11, 13))
				&& ((Integer.parseInt(pj3.getProjectionTime().substring(11, 13)) - Integer.parseInt(first.getProjection().getProjectionTime().substring(11, 13))) == 1)) {
			return "Не можете да направите резервация по-малко от 60 мин. преди прожекция!";
		}
		
		if(dateOfReserve.substring(0, 10).equals(first.getProjection().getProjectionTime().substring(0, 10)) && Integer.parseInt(dateOfReserve.substring(11, 13)) < Integer.parseInt(first.getProjection().getProjectionTime().substring(11, 13))
				&& ((Integer.parseInt(first.getProjection().getProjectionTime().substring(11, 13)) - Integer.parseInt(dateOfReserve.substring(11, 13))) == 1)) {
			return "Не можете да направите резервация по-малко от 60 мин. преди прожекция!";
		}
		
	*/
		
		if(dateOfReserve.getYear() == first.getProjection().getProjectionTime().getYear()
				&& dateOfReserve.getMonth() == first.getProjection().getProjectionTime().getMonth()
				&& dateOfReserve.getDayOfMonth() == first.getProjection().getProjectionTime().getDayOfMonth()
				&& (dateOfReserve.getHour() - first.getProjection().getProjectionTime().getHour()) ==-1)  {
			return "Не можете да направите резервация по-малко от 60 мин. преди прожекция!";
		}
		
		if(email == null || firstName == null ||lastName==null|| telNumber == null) {
			return "Не сте въвели всички задължителни полета!";
		} 
		
		
		
		if(cinema == null || cinema.isEmpty()) {
			return "Моля, въведете кино!";
		}
		if(movie == null || movie.isEmpty()) {
			return "Моля, въведете филм!";
		}
		
		
		for(int j = 0; j< reservations.size();j++) {
		
			
			if(first.getReservationSeatNumbers() == reservations.get(j).getReservationSeatNumbers() &&
					first.getReservationRowNumber() == reservations.get(j).getReservationRowNumber()
					&& (first.getProjection().getProjectionTime().compareTo(pj4.getProjectionTime())) == 0)
			  {
				
					return "Не можете да направите резервация, защото местата са заети";
	
			  }

		   }
		   
		
		if(!validate(email)) {
			return "Невалиден имейл!";
		}
		
		
		
		
		
		return "Успешно направихте резервация!";
		
	}
	
	private static void  clearDB() {
		reservations.clear();
	}
	
	

		public static boolean validate(String emailStr) {
		        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
		        return matcher.find();
		}
	
	

	

}
