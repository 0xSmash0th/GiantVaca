# GIANTVACA
A chrome extension for alerting you when you have the possibility of getting a vaccine appointment via the Giant website. It will play a youtube video in a new tab to alert you that you can make an appointment. Or, if it sees the "No appointments available" it will refresh. 

# Install 
1. Look over the code, maybe change the video
2. Navigate to chrome://extensions
3. Set developer mode
4. Load unpacked
5. Select the GIANTVACA folder
6. Enable the extension 
7. Navigate to the website and join the queue

# SMS option
If you want to get a SMS text to notify yourself. I did not get texts to start with, my spam blocker was blocking them. So you may need to turn some filters off. 
1. get a API key from https://textbelt.com/
2. add your phone numbers and api key at the top of the content.js file
3. uncomment the textMe calls in the check page function
4. Save changes and follow the above install steps