package uni.fmi.reservation;

import static org.junit.Assert.assertEquals;

import java.time.LocalDateTime;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.reservation.model.ReservationScreenModel;

public class ReservationSteps {

	private ReservationScreenModel reservationModel;

	@Given("^Потребителят отваря екрана за резервация$")
	public void openReservationScreen() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    reservationModel = new ReservationScreenModel();
	}

	@When("^Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \\\"([^\\\"]*)\\\"$")
	public void addEmail(String email) throws Throwable {
		reservationModel.setEmail(email);
	}

	@When("^Въведе валиден номер: \\\"([^\\\"]*)\\\"$")
	public void addTelNumber(String telNumber) throws Throwable {
		reservationModel.setTelNumber(telNumber);
	
	}
	@When("^Въведе име: \\\"([^\\\"]*)\\\"$")
	public void addFirstName(String firstName) throws Throwable {
	    reservationModel.setFirstName(firstName);
	}

	@When("^Въведе фамилия: \\\"([^\\\"]*)\\\"$")
	public void addLastName(String lastName) throws Throwable {
		reservationModel.setLastName(lastName);
	}

	@When("^Избере в кое кино: \\\"([^\\\"]*)\\\"$")
	public void chooseCinema(String cinema) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		reservationModel.setCinema(cinema);
	}

	@When("^Избере кой филм: \\\"([^\\\"]*)\\\"$")
	public void chooseMovie(String movie) throws Throwable {
		reservationModel.setMovie(movie);
	}

	@When("^Избере коя прожекция на филм: (\\d+), (\\d+),(\\d+), (\\d+), (\\d+)$")
	public void chooseProjection(int year, int month, int day, int hour, int minutes) throws Throwable {
		LocalDateTime projection = LocalDateTime.of(year, month, day, hour, minutes);
		reservationModel.setProjection(projection);
		
	}
	@When("^Избере на кой ред: (\\d+)$")
	public void chooseRowNumber(int rowNumber) throws Throwable {
		reservationModel.setRowNumber(rowNumber);	    
	}
 
    @When("^Избере кои места: (\\d+)$")
    public void chooseSeatNumbers(int numbers) throws Throwable {
    	reservationModel.setSeatNumbers(numbers);
    
    }
	@When("^Кога е направил резервация: (\\d+), (\\d+),(\\d+), (\\d+), (\\d+)$")
	public void dateOfReservation(int year, int month, int day, int hour, int minutes) throws Throwable {
		LocalDateTime dateOfReserve = LocalDateTime.of(year, month, day, hour, minutes);
		reservationModel.setDateOfReserve(dateOfReserve);
	}

	@When("^Натисне бутон за резервация$")
	public void clickReservationButton() throws Throwable { 
		reservationModel.clickReservationButton();
	}

	@Then("^Получава съобщение: \\\"([^\\\"]*)\\\"$")
	public void checkMessage(String resultMessage) throws Throwable {
		assertEquals(resultMessage, reservationModel.getMessage());
	}
	
	@When("^Въведе невалиден имейл адрес \"([^\"]*)\"$")
	public void invalidEmail(String email) throws Throwable {
		reservationModel.setEmail(email);
	  
	}
	
}
