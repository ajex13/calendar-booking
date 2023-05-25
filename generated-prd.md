**Product Requirements Document (PRD)**

**1. Feature: Create, Read, and View Details of an `Entity`**
- Description: This feature allows users to perform CRUD (Create, Read, Update, Delete) operations on entities such as hotels, villas, bus services, cinema halls, etc. Users can create new entities, view existing entity details, and update specific fields of an entity. They can also upload a CSV sheet for each day to provide additional information and manage availability.
- User Stories:
  - As a user, I want to create a new entity with relevant information such as ID, name, description, image, available slots (e.g., seats, beds), and rate per extra person.
  - As a user, I want to view the details of an existing entity, including its ID, name, description, image, available slots, and rate per extra slot.
  - As a user, I want the ability to update specific fields (e.g., name, image, available slots, rate per extra slot) of an entity.
  - As a user, I want to upload a CSV sheet for each day from the current day onwards to manage availability.

**2. Feature: Fetch Calendar**
- Description: This feature provides users with a calendar view that displays the rates uploaded by CSV for each entity over a 25-day period, starting from the current day onwards. Users can filter the calendar by entity and date range to easily find the desired information.
- User Stories:
  - As a user, I want to view a calendar that shows the rates for each entity for the next 25 days, including today.
  - As a user, I want the ability to filter the calendar by entity to focus on a specific entity's rates.
  - As a user, I want the ability to filter the calendar by a specific date range to see rates within that range.

**3. Feature: Calculate Rate on Multiple Entities**
- Description: This feature allows users to calculate rates for a specified number of people within a given date range. The system should provide a rate calculation and a grand total. Additionally, users can make multiple selections for multiple entities, and the system should display the calculations for all selected entities along with an overall grand total.
- User Stories:
  - As a user, I want to select a date range and specify the number of people to calculate the rate for a particular entity.
  - As a user, I want the system to display the rate calculation and the grand total based on the selected entity, date range, and number of people.
  - As a user, I want the ability to make multiple selections for multiple entities to compare rates.
  - As a user, I want the system to display the calculations for all selected entities and provide an overall grand total.

**4. Feature: Book an `Entity` at Chosen Rate**
- Description: This feature allows users to book an entity at a chosen rate. Users should be able to select an entity, specify the booking details (e.g., date range, number of people), and confirm the booking at the chosen rate.
- User Stories:
  - As a user, I want to select an entity and specify the booking details (e.g., date range, number of people) to proceed with the booking.
  - As a user, I want to confirm the booking at the chosen rate for the selected entity.

**5. Feature: Cancel a Booked `Entity`**
- Description: This feature enables users to cancel a previously booked entity. Users should be able to select a booked entity and initiate the cancellation process.
- User Stories:
  - As a user, I want to view my booked entities and select a specific entity for cancellation.
  - As a user,

 I want to initiate the cancellation process for the selected entity.

