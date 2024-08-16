[Redirect To Time2Climb FrontEnd](https://github.com/GiovanAaron/Time2Climb_FE)

# Time2Climb_BE

##Connecting to different PostgreSQL databases

Three are two database: time_2_climb and time_2_climb_test

To connet to the right database, you will need to create two .env files for your project: .env.test and .env.development.

In .env.test: PGDATABASE=time_2_climb_test
In .env.development: PGDATABASE=time_2_climb

And then add .env.\* to the .gitignore
