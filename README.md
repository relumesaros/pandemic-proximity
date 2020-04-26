# The problem we try to solve:

1. Unawareness of being in an area where the infection rate is very high
2. Inability to access test kits
3. Fake news
4. Unreliable statistics

# The solution we bring to the table

- Map with tracking infections proximity:
  - A Google map with infection rate proximity is available
  - The location of infected/symptomatic persons will be represented with a circle between 100m to 200m of real user location
  - Multiple infections will look like an aggregated circle
  - Enable alerts when entering in danger zone
- Options for how infected/symptomatic people are tracked/populated?
  - through the Mobile Web App, by filling symptoms or by marking yourself as infected
  - through an API available only to the Governments
- API available only to the Governments
  - Governments can fill infected people address(which can be live or static)
  - Laws during emergency and GDPR may suffer consequences
  - Governments may enforce infected people to have the Mobile Web App installed
- You can mark yourself as symptomatic or as infected
- Marking yourself as symptomatic process:
  - Complete form with symptoms
  - Person may be marked as symptomatic in the Mobile Web App
- Marking yourself as infected/symptomatic effects:
  - You bring your contribution to the community and you prevent the spreading
  - Now your location(GPS position within 100 meters of the real user location) is used to populate the Map
  - You can also unmark yourself as infected/symptomatic
- Order test kits for a given price:
  - Fill shipping address and name
  - Send order by making payment
  - Test kit is sent at home
- Fake news
  - If the Mobile Web App is reliable then also the news will become reliable
  - News could be populated by a crawler from reliable sources(ex. WHO)
  - We also want to create a community of doctors
  - After eligibility test, doctors can login, comment and vote or upvote other comments
- Infection statistics
  - Reliable statistics about infections and deaths
  - Graphics

# What have we done during the weekend

- We implemented a proof of concept with all the functionality that you've just seen
- All is available in the URL below

# The solution’s impact to the crisis

- The scope of this app is to help humanity
- It increases community awareness
- Offers a map with infected/symptomatic proximity
- Prevents pandemics spread
- Offers possibility to order and receive test kits
- Offers reliable news and statistics

# The necessities in order to continue the project

- We need more developers and more resources

# The value of our solution after the crisis

- This project is not aiming just Covid-19, but any pandemic which may occur in the next years

# Business plan

- Capital is raised by selling test kits

# The URL to the prototype

- Mobile Web App: http://pandemicproximity.s3-website.eu-central-1.amazonaws.com/#/
- Github: https://github.com/relumesaros/pandemic-proximity
- InVision: https://relu670575.invisionapp.com/public/share/ZN14A8QTRC#/screens


## Description
This project uses React.

## Install
- Run `npm install`

## Build
- Run `npm run build`

## Deploy
- Deploy to AWS bucket.

## Run locally
- Run `npm run start`

## Code
#### Charts
Package used for charts: https://react-charts.js.org/
