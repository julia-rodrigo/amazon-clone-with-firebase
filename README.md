
IMPORTANT: pls read the GUIDE TO RUN CODE.txt in the downloads


Sonny amazon-clone https://www.youtube.com/watch?v=RDV3Z1KCBvo


24/09/2021, 20:30

DISCLAIMER:
https://www.youtube.com/watch?v=RDV3Z1KCBvo
this is the link to the tutorial i followed on 
how to make this code. The code belongs to these clever people.
The changes in the code ive implimented are in firebase coding 
since the firebase version seemed to have been updated to new 
ways of implimenting code. Thank you

NOTES PLS READ:
the link "https://again-d5564.web.app" is the firebase deployed link.
But i have not made my firebase account in blaze/spark mode
therefore the payment and order page wont work as it should since
there isnt a back-end connection (emulator running)

if you decide to look at this code,
this is the guide for running this code 
and starting the back-end emulator 
so you can look at the orders and payment 
page work

xD thank you for this time

//----------RUN THIS APP------------------//

ctrl j
{
    open terminal using 
}

cd amazon-clone
{
    NOTE: you need to rename your folder from "amazon-clone-with-firebase" 
    to "amazon-clone" to run this

    Running this code makes sure youre in file directory 'amazon-clone' 
    and it contains all the files to run the app
}

npm i
{
    github doesnt take folders like node_modules 
    but these can easily be downladed when you 

    wait for a while until finished
}


npm start
{
    in the terminal, run this code 
}

//---------------NEXT STEP-------------//

node [+]
{
    open a new node on the right hand side of the terminal
}

cd amazon-clone
{
    make sure youre in file directory 'amazon-clone'
}

cd functions
{
    make sure youre in file directory 'functions'
}

npm i
{
    This will download missing files needed rto run app
    wait for a while until finished
}

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
{
    run this code to bypass security errors for running firebase
    THIS ALWAYS HAPPENS WHEN YOU DO FIREBASE STUFF 
    (if you make a mistake, dont forget to always run this)
}

firebase emulators:start
{
    run this code and you should get a link to the 
    back end system. Click on (Vew in Emulator UI) "http://localhost:4000/functions" 
    and you should see "watching..."
    and 2 links
}

------------END OF RUNNING APP---------

----------INTERACTING WITH APP --------------------

go back to the react port (localhost: 300) with the amazon clone running
you can begin interacting with the app on your own !!! 
or you could follow these steps to get the full guide

Home page
{
    you can start signingIn by clicking on "Sign In"
}

login page
{
    enter any dummy email with format "mmm@yyy.aaa"
    or 
    
    you can use an existing email here "mayakuro@starlight.lol"
    password: "maclaudine"
    
    to Sign in

    save your email as you wish
}

Home page
{
    add items to basket. Hit the basket icon on the right corner
}

checkout page
{
    click "Proceed to Checkout"
}

payment page
{
    card number must be:
    4242 4242 4242 4242         04 / 24     242     42424

    Bye now
}

Order Page
{
    this page will have all your previously bought items
}

thanks for your time =)

