//personal home page image slide show script
//Andrew Rogala 4/02/18

window.onload=function() {

    //random number between (min and max] (number of images) used to start and stop on different pages
    //The maximum is exclusive and the minimum is inclusive
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    //store urls of you background images to an array
    //have to hard code the number of images: i < # of images
    var arraySource = [];
    for(var i=0; i<97; i++) {
      var source =
      "url("+"images/wallpaper/"+"wp"+(i+1)+"."+"jpg"+")";
      //console.log(source);
      arraySource.push(source);
    }

    //always start the page on a new image
    var start;
    function startAtRandImg() {
      start = getRandomInt(0, arraySource.length);
      document.getElementById('bg').style.backgroundImage = arraySource[start];
    }
    startAtRandImg();

    /*
    timed loop will loop through bg images on homepage delay can be changed
    j has to be global or it will get reset in changeBackgroundImgae()
    Once stop is pressed loopBackgroundImage will be called again and
    loopBackgroundImage will call changeBackgroundImage after stop is pressed
    hence exit/return changeBackgroundImgae when stop is pressed
    once stop is pressed j will still have one added to it.
    j will also have one added to it at end of uninterepted cycle
    Thus index will be off for next and prev buttons
    */
    var j = 0;
    function loopBackgroundImage() {
        setTimeout(changeBackgroundImage,5000);
    }

    function changeBackgroundImage() {
      if(stopLoop === true){
        return;
      }
      else{
        document.getElementById('bg').style.backgroundImage = arraySource[j];
        j++;
        if (j < arraySource.length) {
          loopBackgroundImage();
        }
      }

    }

    loopBackgroundImage();

    /*
    Below function will always stop the page on a different image
    stop var must be global for now.
    due to setTimeout stopAtRandImg will be run after stop has been pressed
    hence return/exit stopAtRandImg when stop is pressed
    set nextImg equal to stop for next and previous btns
    */
    var stop;
    function stopAtRandImg() {
      if(stopLoop === true){
        return;
      }
      else{
      stop = getRandomInt(0, arraySource.length);
      document.getElementById('bg').style.backgroundImage = arraySource[stop];
      nextImg = stop;
      }
    }

    //stopAtRandImg() must be delayed in order to be called at the proper time!
    //((number of images)*delay) + additional time to remain on last img
    setTimeout(stopAtRandImg, (arraySource.length*5000) + 5000 );


    //ensure stopOnImg gets called after process complete
    setTimeout(stopOnImg, (arraySource.length*5000) + 7000 );

    //write a function to stop on current image
    //needs to be global so loopBackgroundImage and stopOnImg have access to this var
    //set nextImg equal to j for next and prev btns
    var stopLoop;
    function stopOnImg() {
        stopLoop = true;
        nextImg = j;
    }



    var nextImg;
    document.getElementById('Next').addEventListener('click', function() {
      //user cant scroll unless press stop first
      if(stopLoop === true) {
         /*
        If user pressed stop then Next at startAtRandImg j === 0
        increment start
        display next img
        It is best to use start here for scroll since j is 0 and the page may have started on anyimage.
        If user keeps pressing next decrement start so it will never be greater than last index.
        */
        if(j === 0) {
          start++;
          document.getElementById('bg').style.backgroundImage = arraySource[start];
            if(start > arraySource.length - 1) {
              start--;
            }
        }

        /*
        If user pressed stop durring loop progress j < arraySource length
        nextImg is set equal to j in stopOnImg function
        and j always gets one added to it after stopOnImg is called (due to timeout)
        thus display nextImg and increment nextImg so user can scroll from here
        decrement nextImg if user keeps pressing next thus it will never be larger than last index
        */
        else if(j < arraySource.length) {
          document.getElementById('bg').style.backgroundImage = arraySource[nextImg];
          nextImg++;
          if(nextImg > arraySource.length - 1) {
            nextImg--;
          }
        }
        /*
        loop has completed cycle and stopAtRandImg landed on any img
        set nextImg and j to equal stop + 1.
        display next image
        */
        else if(j === arraySource.length) {
          nextImg = stop + 1;
          j = stop + 1;
          document.getElementById('bg').style.backgroundImage = arraySource[nextImg];
        }

      }
    });



    document.getElementById('Previous').addEventListener('click', function() {
      //user cant scroll unless stop is pressed first
      if(stopLoop === true) {
        /*
        If user presses stop then Previous at startAtRandImg img j === 0.
        display previous img
        decrement start so user can scroll from here.
        It is best to use start here for scroll since j is 0 and the page may have started on anyimage.
        If user keeps pressing previous increment start so it will never be less than first index.
        */
        if(j === 0) {
          document.getElementById('bg').style.backgroundImage = arraySource[start-1];
          start--;
            if(start < 0) {
              start++;
            }
          }
         /*
        If user pressed stop durring loop progress j < arraySource length
        decrement nextImg display previous img
        never let nextImg be less than 0
        */
        else if(j < arraySource.length) {
        nextImg--;
        document.getElementById('bg').style.backgroundImage = arraySource[nextImg];
          if(nextImg <0) {
            nextImg++;
          }
        }


        /*
        loop has completed cycle and stopAtRandImg landed on any img
        set nextImg and j to equal stop - 1.
        display previous image
        */
        else if(j === arraySource.length) {
        nextImg = stop - 1;
        j = stop - 1;
        document.getElementById('bg').style.backgroundImage = arraySource[nextImg];
        }
      }
    });



    //only call stopLoop() once durring sequence
    document.getElementById('Stop').addEventListener('click', function() {
      if(stopLoop !== true) {
        stopOnImg();
      }
    });



    //reload the page on click of repay button.
    document.getElementById('Replay').addEventListener('click', function(){
      window.location.reload(true);
    });

} //close onload








