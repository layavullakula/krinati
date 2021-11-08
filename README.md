# Search NearBy Cabs Input
When user searches for nearby cars, then it shows top 3 cars which are nearest to user.

Data models will be roughly the following:

Driver,Car as given
Location modal id,number_plate ref with car,location with type and coordinates

# Input:
Latitude and Longitude (user's current location)

# Output:
Array of top 3 nearest cars with respect to my current location

# Technology:
reactjs,nodejs,mongodb

# Steps to run the code 
1) Run in two terminal first one for frontend and another for backend
2) frontend : cd myapp
              npm i axios react-loader-spinner styled-components react-dom
              npm start
3)backend: nodemon index.js
           (if database problem then attach own database)
4) open browser 'http://localhost:3000/'
5) input the form with longitude and latitude eg:-'-74.0007316,40.7629786' other fields are not mandatory . if wrong input was given then it shows loading scene
6) output shows list of 3 near cars else show error of no nearby cars with back navigate button
7) clicking on back button navigate to home form page.
