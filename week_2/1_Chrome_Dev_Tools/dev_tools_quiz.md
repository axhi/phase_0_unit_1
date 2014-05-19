#### Include an inline screenshot of your codeschool's points from the profile page:

<img src="/imgs/joey_codeschool.png" />

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
  **  The elements tab. It allows you to make edits to the current html page and its corresponding style. You can select an element and inspect it and change styles inline, or to main style.
  * Javascript Debugging
  ** The console tab. You can open it and start writing javascript and run commands write from there. Using the console.log command to see what's happening.
  * Performance Optimization 
  ** The network tab. You can view how long items are taking to load and what elements can be fixed. If you use the network tab in combination with PageSpeed, you can maximize efficiency.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  ** Cmd + Option + I
* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    * #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  * You can't change the text because it is part of the home_bg.gif image. You would need to change the image itself. 

<img src="/imgs/screenshot-postmac.png" />
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
    * top_ten_bullet.png
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    * When you open the network tab on the website, you can sort the loaded pages by size. Doing so will give you the largest files, but you then need to find the first file with Type "image". The file you find will be the largest file-sized image item. URL is: http://www.ticketswizard.com/App_Themes/PXS_Demo/Images/top_ten_bullet.png and the file is 48KB.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  * In my opining, reducing the size of images would be the easiest way to optimize this site. You can save 885.9KiB, a 39% reduction, by compresing a long list of images listed in PageSpeed. 