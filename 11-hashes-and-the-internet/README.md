## HASHES AND THE INTERNET



# Introduction

The purpose of this lecture is to connect some dots. Ask yourself what do Ruby hashes have to do with the internet? What does this have to do with web development? During this lecture I want you to also reflect on why knowing how to iterate through hashes and arrays was important to learn. I want you all to think about some of these things as we explore a couple websites. I want you to reflect on how websites get to our computers and how we can use some of the information that is available on the internet for our own applications.

# Key Questions

* What is an API?
* What is JSON? How is it related to a hash?
* How are JSON APIs helpful to developers?
* What is a client? What is a server?
* What is HTTP?
* What is an HTTP Request? What is an HTTP Response?
* How can we make a request to a JSON API in Ruby and get a response?
* Lets build something! (How can I use "gets" and "puts" to make a command line application (CLI App) in Ruby?)


# Let's go to Reddit

For those of us that don't know Reddit is a website where people go to procrastinate from working or studying. It's a place where we can READ articles, POST gifs, upvotes, and downvotes, as well as our unsolicited opinions. We can also UPDATE or DELETE these POSTS.

Let's go over to `https://www.reddit.com/r/aww/`

`/r/aww` is a subreddit where we can see posts of cute things happening, usually cute animals doing cute things. 


# Client and Server, Request and Response, HTTP...oh my??

You browser, any broswer you are using is called the *CLIENT*
when you type in a url and hit enter, it sends a *REQUEST* to a *SERVER*
the *SERVER* maps the URL to a file or program under its document directory and sends back a *RESPONSE*
The *RESPONSE* is sent back to the browser and when that response contains the documents in that directory it then reads it and displays it on our screen for us to enjoy


This is a hypersimplification and you can do some googling to learn more about request/response but for the purpose of this lecture we will put it this way.

In laymans terms:

When I'm in chrome or in any browser, well my browser is an application. It is an application that locates, retreives, and displays content from the internet. It gets sent HTML, CSS, Javascript files that are then rendered on our screen and look like this. But how do they end up there??

When I type in `https://www.reddit.com/r/aww/` into my browser, my browser (the client) sends a *REQUEST* to a server.

It says `Hey Server is https://www.reddit.com/r/aww/ there? `

The server says  `Let me check......     YES! Here you go!`

It then sends the browser the web page as html, css, javascript etc. and the browser displays those files on the page and thats essentially how it works.

If you want to learn more about how it works you can look up an overview on HTTP in MDN
I will paste the link `{HERE}`


Many of us are familiar with this site but there is also, another site we can check out.

Lets check out `https://www.reddit.com/r/aww/.json`

What does this site look like? Hint: Text. Thats pretty much what it is, I mean everything we send via HTTP is text or `Hyper Text`. You can think of it as a string though.

But right now this text, instead of being formatted as HTML, it's being sent to us as JSON. Lets use JSONView. It's a chrome extension that makes your JSON more readable.
*GET JSONView!*

Whats going on on this page? Describe what we see.

# What is JSON? Why should we care?

JSON stands for JavaScript Object Notation. It's a type of string that a server sometimes sends us that is formatted in a way that makes it easy to use. 
There are built-in Javascript functions that make it easy for us to play weith JSON but how do we use it with Ruby? 


Well, Ruby has this thing, its called a Hash. It looks a lot like JSON and we can use that JSON stringy thingy, and turn it into a Hash thingy. We can use all the built-in Ruby methods that we would use for hashes and have ourselves a ball! We will get to how we do that in a second.


# What is an API?

An API stand for Application Programming Interface. In the context of web development, and API is a way for a web developer to interact with information on a server. I like to think of it as a way of interacting programmatically with some sort of information from an application that I have or am building. An interface is usually something that is between you and something, its something that allows you to interact with a potentially complex thing in a less complex manner.

Let's check out an API that serves us up some JSON!


`https://www.googleapis.com/books/v1/volumes?q=michael+parenti`


Let's compare the above with `https://www.reddit.com/r/aww/.json`

Let's discuss some of their differences and similarities.

What do they look like? How are things nested or organized?

What is the `q=` doing in the Google Books API?


# Lets Build Something

Introducing.... Rest Client!

There are a lot of different ways to make requests, one that we discussed before is with the browser. Another, is with a Ruby gem called Rest Client.

# Deliverables

* Make an app that welcomes the user.
* This app must `gets` a search query from the user
* The app must take a search query from the user and use it to search the API
* This app must return all of the book titles that come back from this search query




## Steps 
* Let's figure out how to make a search query using the Books API
* Create a file for your project
* Add 'rest-client', 'json', and 'pry' gems
* Use `RestClient.get()` to GET a given url
    `https://www.googleapis.com/books/v1/volumes?q=#{user_query}`
* Inspect the response object and see what we get? Use pry for this.
* Use `JSON.parse()` and pass response object into this.
* Figure out how to get titles out of the Hash.
* How do we list all of the titles?




