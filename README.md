# leaflet-challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

### Notice to Graders: 
Please note that I worked with a couple of other classmates to troubleshoot and debug certain issues I encountered when completing this challenge. Additionally, I used ChatGPT to explain and provide examples on how to effectively navigate and establish the metadata field and the loop functions.

## Instructions: Create the Earthquake Visualization

My first task is to visualize an earthquake dataset. I completed the following steps:

1. Get the dataset. To do so, I followed these steps:

- The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the USGS GeoJSON FeedLinks to an external site. page and chose a dataset to visualize.

- When clicking a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. 

2. Import and visualize the data by doing the following:

- Using Leaflet, I created a map that plots all the earthquakes from your dataset based on their longitude and latitude.

- The data markers used reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

I included popups that provide additional information about the earthquake when its associated marker is clicked.

Lastly, I created a legend that will provide context for your map data.


## Acknowledgments
leaflet-challenge was created as an assignment for the University of California, Irvine Data Analytics Bootcamp - June 2024 Cohort under the instruction and guidance of Melissa Engle (Instructor) and Mitchell Stone (TA).
The practical exercises and coding examples demonstrated through the bootcamp helped inform and inspire the code for this project.
