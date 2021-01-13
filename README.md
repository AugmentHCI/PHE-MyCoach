# phe-views: WebViews for the Health Empower app
## Running the WebViews locally
Run the project locally by going into the project directory and using the ```meteor``` command.
```
meteor
```
Meteor projects run by default on [localhost:3000](http://localhost:3000/). However, to run the project properly, you need to use the right parameters.
The URL routing takes **two parameters**:
* A locale that indicates the language the WebViews need to be shown in: 
  * ```nl-BE``` for Dutch
  * ```fr-BE``` for French
  * ```en``` for English
* A user token identifying the current user

The parameters should be passed to the URL as follows: ```localhost:3000/[locale]/[userToken]```  

An example with my user token (I have been using this token to enter random data to test the WebViews, you can keep using this):  
[http://localhost:3000/nl-BE/eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzZDIzNzI2Yi0xNjdmLTQzOWMtOGI2NS0wY2Q5NGU1YTNhMWQiLCJzdWIiOiIwMDAxIiwiaWF0IjoxNTgyMDk2NzY5LCJpc3MiOiJpZGV3ZS5iZSIsImF1dGhvcml0aWVzIjpbImJlLmlkZXdlLnZyYWdlbmxpanN0LkRlZWxuZW1lciIsImJlLmlkZXdlLnBoZS53ZXJrbmVtZXIiXSwiZXhwIjoxNjEzNjMyNzY5LCJycm5yIjoiNDAxMzk0NSIsImRlZWxuZW1lcklkIjoxMDQwNiwiZ2VicnVpa2VySWQiOjEwNDA2fQ.NeDTiu-DvaMw1txGsGhL7FQuOCiD9pvQUx01dcTiXH6ZW07cLZ1VspYIb8eoEZUcG3oMQPRWjMyH5wFcoshc7Y1hsT2sIPJuRVUJlkkUa-1YjkI8SbHmvkZulwhaB9mTPROcmJ8UEpoT699WfI-bqeb5qMXYZ2vlppngwQOnOtNIpaYwCvpVYYovh9GyN9IWBazcdEK9WYT7-MfYYhlgtnPzxkaIy2qd6qwmwyMPOhqXerY3CFGtFEZwxO0n96TsatyqFoV9DglQI19X9RtNtnm7j3WRpxDs7c5OMx-gqC1_ER7SBrTL1ZvzdvX8hZdLnDuQ-LhsIbMi1ThwQDvk0H6JFsdzFUSy1hCz971A-8XkKOGbol7GzKF9M4k10NAN_zCdlgx3-8i3o2czoT-S_3Hvo6bxp05H0XewN5-i-oC_1mCTPRqrM8p_9Pbqjz7UzfdQtwaceP02rNkYnG1lHPyh89NQJRafdJKg7ExBCwDKvuoeq9cFRWq-0S7hR-9aMY1cCIslzPXSi3N3eWRQi5C55juSHCvMyC8J9il58LWel5Q6ShhI3m_MViiQ4cgxIf47aSsq15uBq_XOFyMCuqB3eZlrAQfx05TeWrDeQq28wXGFgSVJIVUhEvXCcnLTcUasnuzOUJG3VwINhe5akTX-dqEbACdv3J-OjH0d8qY
](http://localhost:3000/nl-BE/eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIzZDIzNzI2Yi0xNjdmLTQzOWMtOGI2NS0wY2Q5NGU1YTNhMWQiLCJzdWIiOiIwMDAxIiwiaWF0IjoxNTgyMDk2NzY5LCJpc3MiOiJpZGV3ZS5iZSIsImF1dGhvcml0aWVzIjpbImJlLmlkZXdlLnZyYWdlbmxpanN0LkRlZWxuZW1lciIsImJlLmlkZXdlLnBoZS53ZXJrbmVtZXIiXSwiZXhwIjoxNjEzNjMyNzY5LCJycm5yIjoiNDAxMzk0NSIsImRlZWxuZW1lcklkIjoxMDQwNiwiZ2VicnVpa2VySWQiOjEwNDA2fQ.NeDTiu-DvaMw1txGsGhL7FQuOCiD9pvQUx01dcTiXH6ZW07cLZ1VspYIb8eoEZUcG3oMQPRWjMyH5wFcoshc7Y1hsT2sIPJuRVUJlkkUa-1YjkI8SbHmvkZulwhaB9mTPROcmJ8UEpoT699WfI-bqeb5qMXYZ2vlppngwQOnOtNIpaYwCvpVYYovh9GyN9IWBazcdEK9WYT7-MfYYhlgtnPzxkaIy2qd6qwmwyMPOhqXerY3CFGtFEZwxO0n96TsatyqFoV9DglQI19X9RtNtnm7j3WRpxDs7c5OMx-gqC1_ER7SBrTL1ZvzdvX8hZdLnDuQ-LhsIbMi1ThwQDvk0H6JFsdzFUSy1hCz971A-8XkKOGbol7GzKF9M4k10NAN_zCdlgx3-8i3o2czoT-S_3Hvo6bxp05H0XewN5-i-oC_1mCTPRqrM8p_9Pbqjz7UzfdQtwaceP02rNkYnG1lHPyh89NQJRafdJKg7ExBCwDKvuoeq9cFRWq-0S7hR-9aMY1cCIslzPXSi3N3eWRQi5C55juSHCvMyC8J9il58LWel5Q6ShhI3m_MViiQ4cgxIf47aSsq15uBq_XOFyMCuqB3eZlrAQfx05TeWrDeQq28wXGFgSVJIVUhEvXCcnLTcUasnuzOUJG3VwINhe5akTX-dqEbACdv3J-OjH0d8qY
). 

If you don't pass any parameters to the URL, you will see the WebViews in English with dummy data.  
Make sure to **turn on the IDEWE VPN** when running the project, otherwise the API calls won't work.  



## Docker
Base image for Meteor projects: https://github.com/jshimko/meteor-launchpad.  

Build the image:
```
docker build -t phe-views .
```

Run the container:
```
docker run -it -d -e MONGO_URL=mongodb://url -e MONGO_OPLOG_URL=mongodb://oplog_url -p [host port]:3000 phe-views
```
Replace ```[host port]``` with for example ```8000``` to test locally on ```localhost:8000```, or with one of the available server ports to run on our server.  
This base image asumes you are using MongoDB. Since this hasn't been implemented yet, you currently have to add dummy environment variables (as shown in the command) to run the container.



## List of libraries/packages used in this project + useful links/tutorials

### URL routing: Flow Router and kadira:react-layout
* https://stackoverflow.com/questions/32792092/configuring-iron-router-in-meteor-react
* https://guide.meteor.com/routing.html
* https://github.com/kadirahq/meteor-react-layout#using-inside-flow-router

### Internationalization: Universe i18n
* https://github.com/vazco/meteor-universe-i18n
* https://sonicviz.com/2016/10/23/internationalizing-meteor/
* https://guide.meteor.com/ui-ux.html
* https://phrase.com/blog/posts/localizing-meteor-applications-react/

### Datepickers: Material-UI pickers
* https://material-ui-pickers.dev/demo/datepicker

### Line and barcharts: Nivo
* https://nivo.rocks/line/
* https://nivo.rocks/bar/
