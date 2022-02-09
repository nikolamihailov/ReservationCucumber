$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/reservation/reservation.feature");
formatter.feature({
  "line": 2,
  "name": "Потребетелят иска да направи резервация за прожекция",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 73059300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Правене на успешна резервация",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-успешна-резервация",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"mitko@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Избере на кой ред: 3",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Избере кои места: 10",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Кога е направил резервация: 2022, 2,2, 15, 0",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Получава съобщение: \"Успешно направихте резервация!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mitko@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 2458700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 80700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 66500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 78800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 2255800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 69800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "15",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 239700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 2353400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешно направихте резервация!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 1712500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Правене на резервация без имена",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-без-имена",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"kolo@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Избере на кой ред: 8",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Избере кои места: 15",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Кога е направил резервация: 2022, 2,2, 13, 0",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Получава съобщение: \"Не сте въвели всички задължителни полета!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kolo@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 131400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 67400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "13",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 117700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Не сте въвели всички задължителни полета!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Правене на резервация без имейл",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-без-имейл",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Избере на кой ред: 11",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Избере кои места: 20",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Кога е направил резервация: 2022, 2,2, 11, 0",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Получава съобщение: \"Не сте въвели всички задължителни полета!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 167300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "11",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 114200,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Не сте въвели всички задължителни полета!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 26000,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Правене на резервация без телефон",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-без-телефон",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"kolo@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Избере на кой ред: 4",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Избере кои места: 30",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Кога е направил резервация: 2022, 2,2, 10, 0",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Получава съобщение: \"Не сте въвели всички задължителни полета!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kolo@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 49800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 35400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 142400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 228400,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Не сте въвели всички задължителни полета!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Правене на резервация с вече заети места",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-с-вече-заети-места",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"kolo@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Избере на кой ред: 18",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "Избере кои места: 10",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Кога е направил резервация: 2022, 2,2, 11, 0",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Получава съобщение: \"Не можете да направите резервация, защото местата са заети\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kolo@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 56300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 63100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 103400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 122200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 54300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "11",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 152800,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Не можете да направите резервация, защото местата са заети",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 53700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Правене на резервация по-малко от 60 мин. преди прожекция",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-по-малко-от-60-мин.-преди-прожекция",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 76,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"kolo@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Избере на кой ред: 10",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Избере кои места: 30",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "Кога е направил резервация: 2022, 2,2, 16, 0",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "Получава съобщение: \"Не можете да направите резервация по-малко от 60 мин. преди прожекция!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kolo@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 40100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 280900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "16",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 111700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Не можете да направите резервация по-малко от 60 мин. преди прожекция!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Правене на резервация без да е избрал кино",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-без-да-е-избрал-кино",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 92,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"mitko@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Избере на кой ред: 10",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Избере кои места: 18",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Кога е направил резервация: 2022, 2,2, 10, 0",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Получава съобщение: \"Моля, въведете кино!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mitko@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 47500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 111600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 66100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "10",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 164700,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете кино!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 81100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "Правене на резервация без да е избрал филм",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-без-да-е-избрал-филм",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 105,
  "name": "Въведе валиден имейл адрес, на който да се изпрати имейл за потвръждение на резервацията: \"mitko@abv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Избере на кой ред: 7",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "Избере кои места: 12",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Кога е направил резервация: 2022, 2,2, 15, 0",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Получава съобщение: \"Моля, въведете филм!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mitko@abv.bg",
      "offset": 91
    }
  ],
  "location": "ReservationSteps.addEmail(String)"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 223000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 66700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 80200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "15",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 191800,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете филм!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Потребителят отваря екрана за резервация",
  "keyword": "Given "
});
formatter.match({
  "location": "ReservationSteps.openReservationScreen()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.scenario({
  "line": 119,
  "name": "Правене на резервация с невалиден имейл",
  "description": "",
  "id": "потребетелят-иска-да-направи-резервация-за-прожекция;правене-на-резервация-с-невалиден-имейл",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 120,
  "name": "Въведе невалиден имейл адрес \"mitkoabv.bg\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "Въведе валиден номер: \"0897654321\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "Въведе име: \"Nikola\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Въведе фамилия: \"Nikolov\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Избере в кое кино: \"Cinema city\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Избере кой филм: \"Lotr\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Избере коя прожекция на филм: 2022, 2,2, 17, 0",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Избере на кой ред: 3",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "Избере кои места: 31",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Кога е направил резервация: 2022, 2,2, 14, 0",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "Натисне бутон за резервация",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Получава съобщение: \"Невалиден имейл!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mitkoabv.bg",
      "offset": 30
    }
  ],
  "location": "ReservationSteps.invalidEmail(String)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0897654321",
      "offset": 23
    }
  ],
  "location": "ReservationSteps.addTelNumber(String)"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikola",
      "offset": 13
    }
  ],
  "location": "ReservationSteps.addFirstName(String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikolov",
      "offset": 17
    }
  ],
  "location": "ReservationSteps.addLastName(String)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cinema city",
      "offset": 20
    }
  ],
  "location": "ReservationSteps.chooseCinema(String)"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lotr",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseMovie(String)"
});
formatter.result({
  "duration": 50400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "2",
      "offset": 38
    },
    {
      "val": "17",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "ReservationSteps.chooseProjection(int,int,int,int,int)"
});
formatter.result({
  "duration": 354700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "ReservationSteps.chooseRowNumber(int)"
});
formatter.result({
  "duration": 84500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31",
      "offset": 18
    }
  ],
  "location": "ReservationSteps.chooseSeatNumbers(int)"
});
formatter.result({
  "duration": 130500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 28
    },
    {
      "val": "2",
      "offset": 34
    },
    {
      "val": "2",
      "offset": 36
    },
    {
      "val": "14",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 43
    }
  ],
  "location": "ReservationSteps.dateOfReservation(int,int,int,int,int)"
});
formatter.result({
  "duration": 167200,
  "status": "passed"
});
formatter.match({
  "location": "ReservationSteps.clickReservationButton()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден имейл!",
      "offset": 21
    }
  ],
  "location": "ReservationSteps.checkMessage(String)"
});
formatter.result({
  "duration": 83100,
  "status": "passed"
});
});