# PlaywrightAPIAutomation
This will give you Basic idea about how to automate API using playwright and typescript.

Steps:


    
    1. User should have Visual Studio code installed and install Visual studio extension 'Playwright Test for VSCode' 
          (https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
          
    2. Clone repository in Visual Studio code
    
    3. Select Terminal >> New Terminal
  
    4. Type command npm install in command prompt and hit enter.

    5. Go to website https://gorest.co.in/ and sign up the application.

    6. Copy the token from the website

    7. Open file 'playwright.config.ts' and navigate to section projects and paste the token in front of extraHTTPHeaders as    token value  
    
    8. Select Testing tab from left tree in visual studio code.
    
    9. You will see the test cases and you can execute test case by run button.
    
    10. You can run all test cases using command as 'npx playwright test'

    

Note: you can set your Base URL in 'playwright.config.ts' under projects section and can provide authorization in the extraHTTPHeaders in same section. 
