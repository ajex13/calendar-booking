# calendar-booking

1. Feature to create, read, view details of an `entity` (e.g hotel, villa, bus, cinema hall, etc.).
    - `entity` will have following data: id, name, description, image, available slots(seats, bed, etc.) and rate per extra person.
    - In details page of `entity`, ability to update name, image, available slots and rate per extra slot.
    - ability to upload a csv sheet for each day from today onwards.
2. Fetch calendar
    - show `calendar` of 25 days along with rates (uploaded by csv) for each `entity`.
    - ability to filter by `entity`, date range.
    - show availability (`sold_out`, `available` or `blocked`) and rate on a day.
3. Calculte rate on multiple entities.
    - upon selecting a date range, with given number of people booking dialog should show a rate calulation and a grand total.
    - when multiple such selections are made for multiple entities, dialog should show calculation for all selected entities and an overall grand total.  
4. Ability to book `enitity` at chosen rate.
5. Ability to cancel a booked `enitity`.
6. Ability to block/unblock a date range for an entity.
    - when a day is blocked in context of an entity its availability id marked as `blocked`. When unblocked it should be reversed to `available`.
7. get the booking details or block details of a day for an entity.
