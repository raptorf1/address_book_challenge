# Project Title

Address Book [es2015]

# Problem Statement
We've recently been contacted by a client, who would like us to build an address book so that they can manage their contacts. Some of the features requested by the client include:
* Ability to add new contacts
* View a list of existing contacts
* Update existing contacts
* Delete some contacts
* An appealing design that allows ease of navigation

# Technology Stack

<p>Also as part of the design sprint sessions, the team has decided to make this a web-based application. This means the user would need to access this from a browser. The application will consist of a user interface built with HTML with a sprinkle of CSS to make it look good. The logic will be written using pure JavaScript with no additional libraries.</p>
<p><b><u>The decided method to store the contacts is at the local storage of the browser. If you use this application for personal use, keep in mind that each time you clear cookies and history, your contacts will be deleted.</u></b></p>
<p>In addition to that, we would like to have some acceptance tests (also known as end-to-end testing) done while building this application.</p>

# User Stories

```
As a user
In order to stay in touch with my friends
I would like to be able to create a contact for them in my address book
```

* List contacts

```
As a user
In order to contact my friends
I would like to be able to view a list of my saved contacts
```

* Update existing contacts

```
As a user
In order to keep my friends' contact details accurate
I would like to be able to update them when needed
```

* Delete existing contacts

```
As a user
In order to keep my contact list up to date
I would like to be able to delete contacts
```

# Running the tests

After you fork the repository, run `yarn build` in your Terminal and make sure you are in the project folder. That should install all the necessary dependencies on your computer.

Then, from your Terminal go to the project folder and run `yarn cucumber`.

During the time we were building the project we saw that cucumber is a bit unreliable at times. Although all tests are not passing the code is solid and the files aroung the index.html work as expected.

# Built With

* HTML
* CSS
* JavaScript

# Tested With

[YARN](https://www.npmjs.com/package/yarn) - Fast, reliable, and secure dependency management.

[CUCUMBER](https://cucumber.io/) - Tools & techniques that elevate teams to greatness.

# Website Deployment
### You can visit the full website by clicking [here](https://raptorf1.github.io/address_book_challenge/).

# Authors

* **Stefan Karlberg** - [stefankarlberg](https://github.com/stefankarlberg)
* **George Tomaras** - [raptorf1](https://github.com/raptorf1)

<p>Since these are our first steps in programing, please excuse any missing functionality or messy code. We are progressing every day and we will be better project after project. Check our GitHub pages for more.</p>

# License

* **MIT** - https://opensource.org/licenses/MIT

# Acknowledgments

* Kudos to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template.
* [W3 Schools](https://www.w3schools.com/) - 
The World's Largest Web Developer Site. Provided us with CSS styling profiles.
* [Tailwind](https://tailwindcss.com/docs/what-is-tailwind) - A utility-first CSS framework for rapidly building custom user interfaces. Provided us with CSS styling profiles.
* [StackOverflow](https://stackoverflow.com/) - Learn, Share, Build.
