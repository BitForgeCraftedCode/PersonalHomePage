# PersonalHomePage
Custom home page for your browser

For my first official project on GitHub I had a simple but useful idea; create an awesome home page for any internet browser. Currently it has some links on the left with their respective icons and three search bars: DuckDuckGo, Google, and Bing. The home page also scrolls through a set of images the user places in the image folder. There are also some control buttons on the bottom of the page to allow the user to stop the slideshow on any image, scroll images back and forward manually, and a reload button to start the slide show over again. 
Plans for further development include:
1.	Experiment with animated text (scrolling/animated quote of the day)
2.	Add a second page for quick access to more links.
3.	Add some more functionality to the slideshow (new mode for random image slideshow) currently it only starts and stops on a random image. I would like to add a toggle to have it randomly scroll through the images.
4.	Add input for the user to control the time delay and number of images for the slideshow.

Notes:
1.	To use this program place PersonalHomePage folder anywhere you like on your pc then set your internet browser to open PersonalHomePage.html as your home/landing page. 
2.	Path names may have to be changed to get this to work on your pc see line 19. I made the url a relative path so this should work as is. 
3.	For now, you will have to hard code the number of images in your images/wallpaper folder into the JavaScript file see line 17. Also, to the best of my knowledge JavaScript cannot dynamically modify folders on your system to pull out image quantities and names so I have forced the naming of images to be wp1.jpg through wpx.jpg (where x is the number of images in your folder).
4.	For now, to adjust slide show time delay change the number of milliseconds on lines 44, 84, and 88. Currently set at 5000 milliseconds (5 seconds). 
5.	I only include five pictures I took while hiking. Feel free to add tons of your own.
6.	I sized the icons to 52px X 52px and the control buttons were sized to 30px X 30px.
7.	Feel free to use and modify this code for any use and or join the project. 
8.	I build this to demonstrate a solid understanding of basic JavaScript functions, scope, and time-controlled loops.  Enjoy
