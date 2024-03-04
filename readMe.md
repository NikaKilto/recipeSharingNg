#open master-branch

recipeSharingApp
in order to run the application, you must use command "npm install" in the CLI, because I have used bootstrap framework, so npm install will allow your code editor to open my application in the design which I created.
next step is to use commant "ng serve -o" command in cli. It will open the application in web.
you will see home page with navigation. 
'new recipe' lets you create new recipe, which contains dish title, description, ingredients, instructions and picture of the dish.
I've created 3 components - home-component, recipe-form component and recipe-details component. As I mentioned above, I installed and worked with bootstrap library.
Sadly, I didn't use angular material, because I didnt have enough education yet. I've implemented service as well. Created routing with wildcard route, which throws error if you type route which do not exist. In addition, you can see pipe in my application, which I used because of shortening the description text for dish for home-page cards.
For me, the biggest challenge was data transferring between service and sibling components. Fortunately, I was able to work things out with the help of youtube tutorials and google. Somehow I managed to learn many new things while working on that project.
That was my first angular project.
