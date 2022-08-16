Roomy has an App Component that has the routes used in the App including: 
1. / (which renders the Hello component asking the user to sign in with either an existing employee or to make a new employee)
2. /home (which renders teh home component welcoming the user and prompting the user to either make a booking or see their bookings)
3. /form (which renders the booking calendar so the user can book dates)
4. /bookings (which renders a list of all the bookings a user currently has and allows them to delete said bookings)

There is a test suite testing the component Hello using RTL and Jest

The styling is done using CSS

Improvements: 
1. The entire UI could be improved the only real styling is the navigation buttons
2. Test suites for all the components
3. Comments to explain the component and which props it accepts
4. Styling done with tailwind or scss/styled components to allow for a better DRY solution
5. The fetch calls I would refactor to use async await (I used .then out of habit)
6. I would also move the fetch calls out and into a helper file and call these helper fns then (easier to mock in the tests as well)
7. I would use an authentication feature - right now the user is grabbed from the session and that is not ideal
8. In the BookingList all bookings are grabbed from the backend and then iterated over to show to the user - I would ideally refactor and only call the backend for the users bookings. Could be a problem in the future if there are lots of users and lots of bookings.
9. I would add validation to the forms and booking tools (currently you can book several of the same day) 
10. I would orgainze the files into folders (and with time a Stories from storybook)

But being time limited these are features I would add with more time. 
