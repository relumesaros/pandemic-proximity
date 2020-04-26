# The problem our tries project solves

- Prevent a pandemic spread by marking yourself as infected or symptomatic
- View map with infected and symptomatic persons in your proximity
- Create ability for users order test kits
- Send optional alerts when users travel and enter in a 'danger zone'
- Prevent fake news
- Reliable statistics

# The solution we bring to the table

- Fake news
  - crawler goes in websites and other reliable sources(ex. WHO)
  - doctors and login, checked that they are eligible, can comment, they can vote or upvote other comments
- Map with tracking infections proximity
  - Google maps with infection rate proximity
    - Proximity will be represented with a circle between 100m to 200m(GPS position within 100 meters of the real user location)
    - Multiple infections will look like an aggregated circle
  - Possibility to get alerts if you are in danger zone
  - Options for how infected/symptomatic people are tracked/populated?
    - through the App, by filling symptoms or by marking yourself as infected
    - through an API available only to the Governments
      - Governments can fill infected people address(which can be live or static)
      - Laws during emergency and GDPR may suffer consequences
      - Governments may enforce infected people to have the app installed
    - Public statistics/information offered by Governments or media
  - Alert if in you are in danger zone
- Mark yourself as infected/symptomatic:
  - using a:
    * Form
      - Complete form with symptoms
      - Send form to local governments
      - Person is marked as infected/symptomatic in the App
    * Phone
  - This way you bring your contribution to the community and you prevent the spreading
  - Now your location(GPS position within 100 meters of the real user location) is used to populate the Map
  - You can also unmark yourself as infected/symptomatic
- Order test kits for a given price:
  - Fill address and name
  - Send order
  - Test kit is sent at home
- Infection statistics
  - Get statistics about infections and deaths
  - Graphics

# What you we done during the weekend

- All that is available in the URL above. Invision mocks were created Friday.

# The solution’s impact to the crisis

- The role of this app is to helps humanity
- It increases community awareness
- Offers a map with infected/symptomatic proximity
- Prevents pandemics spread
- Offers possibility to order and receive test kits

# The necessities in order to continue the project

- We need more developers and more resources

# The value of your solution(s) after the crisis

- This project is not aiming just Covid-19, but any pandemic which may occur in the next years

# Business plan

- Capital is raised by selling test kits

# The URL to the prototype

- Url: http://pandemicproximity.s3-website.eu-central-1.amazonaws.com/#/
- Github: https://github.com/relumesaros/pandemic-proximity
- Invision: https://relu670575.invisionapp.com/public/share/ZN14A8QTRC#/screens


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
