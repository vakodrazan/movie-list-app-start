# Movie List App Start

Show the list of movies. To do that:

 - First, you need to fetch the data from API in 'themovie.org' by using your own key.
 - Second, you need to map through it to show it in the DOM.

## Tools you need:

 - [themoviedb.org](https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=<<your-own-api-key>>)
 - Get the about page of each item [config-url](https://api.themoviedb.org/3/configuration?api_key=<<your-own-api-key>>)
 - It's not good to show your api key in the github link or in the browser, we can hide it by installing the '.env' file `npm install dotenv`. It is to store all the things that is your personal address or for you personally.
 - Install router to get access to the link then go to another path by running this command: `npm install --save react-router-dom`
 - Do not forget to use `.gitignore` file to put all the folder that is not used but are taking up space.