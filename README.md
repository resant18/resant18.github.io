# Udacity Mobile Web Specialist Restaurant Review Project

This is a case study project as part of Udacity Mobile Web Specialist Nanodegree which consist of three stages. The given initial code is gradually revised to achieve accesibility standard, more responsive. Moreover, offline first approach as a key characteristic of modern Progressive Web Application is also applied.   

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

1. Python as Server

2. Google MAP API

3. GraphicsMagick as Image Processing Tool

4. NPM Package

5. Hebrew

6. Gulp as Automated Task Script

### Installing

1. If Python is not installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. 

3. With your server running, visit the site: `http://localhost:8000`

### Project Criteria

There are three aspect are considered based on [Udacity Rubric Specification](https://review.udacity.com/#!/rubrics/1090/view)

#### Responsive Design

##### Layout Design Pattern
I use CSS Grid to handle the whole presentation of front end layout. It is easier to CSS Grid rather than CSS Flexbox, since it is able to configure main content much easier in 2 dimensional ways, row and column. In index.html, CSS Grid is applied to main content to create auto-sizing restaurant list in columns. As mentioned in [CSS Tricks](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) "More specifically, our ability to specify how many columns we want in the grid and then letting the browser handle the responsiveness of those columns for us, showing fewer columns on smaller viewport sizes, and more columns as the screen estate allows for more, without needing to write a single media query to dictate this responsive behavior". In restaurant.html, CSS Grid is applied in main content to change 2 columns for wider viewport to 1 column for narrow viewport as well change the order display.

index.html

```
#restaurants-list {    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    margin: 0 auto;
    max-width: 960px;
}
```

restaurant.html

```
.inside #maincontent {
  display: grid;
  grid-area: main-content;
  grid-template-columns: repeat(2, [col] 50%);
  grid-template-rows: repeat(4, [row] auto);
  grid-template-areas:     
    "restaurant-info restaurant-photo-container"
    "restaurant-hours-wrapper map-container"
    "reviews-container reviews-container";
  /* other styles code*/
}
```
Specify name for each area mentioned in *grid-template-areas*. For example:

```
#restaurant-info { 
    /* other styles code*/
    grid-area: restaurant-info;  
}

#restaurant-photo-container { 
    /* other styles code*/
    grid-area: restaurant-photo-container;  
}
```

##### Breakpoint
Only use 1 breakpoint, which is 768px as specified in media queries in responsive.css.

```
@media (max-width: 768px) {...}
```

##### Responsive Images


##### Font Icons
I use Font Awesome Icons to add map marker icon before the restaurant name in restaurant html. 

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

```
<span class="fa fa-map-marker" aria-hidden></span> 
```


#### Accessibility

#### Offline Ability


## Built With

* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - The css layout system used
* [GraphicsMagick]()


## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Renata Santoso**
* **Udacity** - *Initial work* - [Udacity](https://github.com/udacity/mws-restaurant-stage-1)
 


## License

This project is licensed under the MIT License - see the [LICENSE.md]() file for details

## Acknowledgments

* My mentor: 
