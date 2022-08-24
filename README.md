# Shoe Store

## Tech Stack

### Client

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)
- [Apollo Client GraphQL - React](https://www.apollographql.com/docs/react/)
- [MUI - Material UI - React](https://mui.com)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [date-fns](https://date-fns.org/)

### Server

- [Rails](https://rubyonrails.org/)
- [GraphQL Ruby](https://graphql-ruby.org/)
- [Groupdate](https://github.com/ankane/groupdate)
- [Sidekiq](https://github.com/mperham/sidekiq)
- [Redis](https://redis.io/)

## Requirements

- [NodeJS & NPM](https://nodejs.org/en/)
- [Ruby & Rails](https://guides.rubyonrails.org/v5.0/getting_started.html)
- [Redis](https://redis.io/docs/getting-started/)
- This projects uses the popular library `websocketd` to send messages.

  If you're on a Mac, you can install `websocketd` using [Homebrew](http://brew.sh/). Just run `brew install websocketd`. For other operating systems, or if you don't want to use Homebrew, check out the link below.

  **[Download for Linux, OS X and Windows](https://github.com/joewalnes/websocketd/wiki/Download-and-install)**

  Note that a Ubuntu 64-bit version is already bundled here `bin/websocketd` for convenience.
  <br />

## Setup

1. Install and setup the requirements

2. If your Redis contains password, or is setup in a different port than _6379_, you should replace on : <blockquote>shoe-store-server/config/initializers/sidekiq.rb</blockquote>

3. In the main folder, setup websocketd:

```
  cd bin
  websocketd --port=8080 ruby ../inventory.rb

```

4. In the subfolder of client, install the dependencies and start the server

```
  cd shoe-store-client
  npm i
  npm start
```

5. In the subfolder of server, install the dependencies and start the server

```
  cd shoe-store-server
  bundle install
  rails db:migrate
  rails s
```

6. If the browser doesn't open automatically, open your browser in the page below:

```
  localhost:3001
```

<br />

## Screenshots/Videos

[Full Navigation - Loom Video](https://www.loom.com/share/29b82a5acde74ab191e7eb6ea3581fa8)

<img width="400" height="200" src="https://cdn.loom.com/images/originals/955d5303909d4798a06f975502ec0ab6.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy85NTVkNTMwMzkwOWQ0Nzk4YTA2Zjk3NTUwMmVjMGFiNi5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjEzOTY0MjJ9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=jL3Wg0QCTrLYcKOqXsvq5YjExV6qtKI-Vu7CcnVq9omhizbiHOQH9pEMQbUyU6SHbSXloq00nD8JjibJlcL9PFfy3xRbsLQU8%7EjGmtUog8c2zFU9WnLkIEOSvqkbTAY9fXeNzyyPy2bS--OM2OybHLHLn9DEikDGO-HGDiO9mgl0bcMWa407640iIOq2le5VD3KpX8AKchCypn-NVnJZ5YV-9lKscKPfn4PheVbEt09HtlO%7EuQkXK-g6y2O6Uz6%7ER8touoCtEQ%7EgsPSVvlPN67LyS044jCqePxc8PC8zFNBvW4y9WKBPWbY7-aG-XN6mB4TFMh0rQJNJakUfK8lQcA__)">

<img width="400" height="200" src="https://cdn.loom.com/images/originals/c334fb06ce794a01a92da1449da004fe.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy9jMzM0ZmIwNmNlNzk0YTAxYTkyZGExNDQ5ZGEwMDRmZS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjEzOTYzOTh9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=hS1vlbNC6jay4jrnxJ71K1Zvd-oHkSHgxubVMeYjM9DqnCap236K9cAHDPYGZfaquLwjyDN6i9eeadoR1b2BgZP2kE51EtBmQNfnDTrFlKEAIZxax7Ev9b-CtGay-LmZ8h2-mZkCltO7NcyLXLp1hgRZsIKFrOsNWxbS7rgpE-MU5UoPY3SUIlbJVPtcNTr4RYePi95kO6kS3IDH1pr5NnFi7%7EnvirM2vMavxarRvwI6zsTKeqJhNo-%7EnfC9KD41td2yr2N14W9KdIJGU2ogXpU4dagGN6bpHNj7VA89Z%7EfD7MAEB2k-%7EJjhDON%7EwenmB4umWQK7wBaBujXTQsxpRQ__)">

<img width="400" height="200" src="https://cdn.loom.com/images/originals/f3f3ab61310147d2b99f8f58c08491e5.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy9mM2YzYWI2MTMxMDE0N2QyYjk5ZjhmNThjMDg0OTFlNS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjEzOTY0OTJ9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=ti419tpj6AhhY8KOQs4qmqMZF6vu0q9yPjtoPI8eUFCdyONkD00R04mXGZW%7E-2gM7rK8n%7EcjZtLw3QZ6pgOzqIGaYeMVxRuoQoMfgKldmeiiKougaWg7KSImFN2BQhGQYs8Rs%7EwDQSdnUjmUprKx8%7Ew6x3gsbFOlC1Acv%7EW%7EM9YUEBtKZPKBWOWbYuCYPq9tdQZbTebZBMoPBHfzWF6dODGeMTLSaByxaKW2jJxH11iQ-Ei9NQmJep18j1-Kej4wKfuMilXXzJetmPo6IJzusj0VMAmRoT2F1FoeKZPSM%7E3tRBdZAih3NlyrI7gUzweNX8Qtv-B-eU7Mr9uULJ8VTw__)">

<img width="400" height="200" src="https://cdn.loom.com/images/originals/7d40acab3a854e7891e8171e4d6599ba.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy83ZDQwYWNhYjNhODU0ZTc4OTFlODE3MWU0ZDY1OTliYS5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjEzOTY1NDJ9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=IdFL4v720IMsSRkQyAwU4VmvL9zezgTxxlUhT82SaJ9oNCC5cHG9CxMijHdXsrjHHmTyh4VZoYJXwPQOYukFn3eNepr1zazBfnzZm3GeBzux2a4yi4dwiEK7vo%7EKtu7wkq0ekz%7EuBuTpfYq86%7ETv3e6yFiVfms89aNIIwxVhM0krYU9ZV6V%7EXrHZD0jIkVoIdZB2hZMK5mHzoNrs3KYcbsniyOd%7EsAIK5iEoteVWslRmPjtwo3wCPshSHIzB7Svc-DFbFrDmX5BkxQhTIAcjEbrO7zP3diMS8iH6-d8iOo%7ENpXMBagtz6WRTGgcq%7E0dFwg3mppWYYeMoA6Ixv-qWJg__)">

<img width="400" height="200" src="https://cdn.loom.com/images/originals/596ec6695df24ef1ae4c556e6d2357e2.jpg?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vaW1hZ2VzL29yaWdpbmFscy81OTZlYzY2OTVkZjI0ZWYxYWU0YzU1NmU2ZDIzNTdlMi5qcGciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NjEzOTY1Nzh9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=Ab3CelZ5H1nLWXObfM1EMCMFnlPM0EEiOQnYrW177fXVKvt6L1Da9Z9yLQ4%7ELktrqKyso6Xe5vXcNuWIls-n8lz9%7EoGAYmivLZOs1m1C9ZDVCWAW3FbrE1JKAqNXMp1cnCRJ8PJ%7EKVpV231htELu-Ke124Pkm-kkqqsRLwNO-95ENPU2Uyqiw8QOBX9WnWrPYLTqSD6Mnjdne25B0lWEO2LBw%7E%7EuKBAcDzXdzjxEnrEGF1r7eQKd60Khu8LSmY7bjHTRXGD1BPgjMsHZjMOcwNStYE2xooJJ5I6X9mLvgensY6l2TAUqh30p4oq-1wgO8urmXd7XDIPHJmCBIEyBPg__)">

<br />

## Future improvements

### Tech side

- Setup project in a docker structure to get easier to manage environments, scale, and setup cross-env.
- Setup a better scale process for syncing inventory suggestions data.
- Setup advanced generic UI components to make maintenance and A/B tests easier.
- Transfer the box styling of Material UI from JSX into style files in a styled-components structure.
- Unit & Integrations testing.

### Product side

- Include search in the Dashboard page, searching for content types.
- Include search in the Stores & Models pages, searching for general data.
- Include an option for the user to switch between tables and cards in the stores & products views.
- The totalizers in the Dashboard(like sales amount, total stores) shall show secondary information, which displays how much the information increased or decreased in the latest minutes.
- Apply animations on the initial dashboard render by not displaying all data at once, resulting in better UX.
- Discussion with the Product Team to decide which data display is better for making real-time decisions.

<br /><br /><br />

# Original README file

# Shoe Store

## Synopsis

Aldo Shoes is having a huge flash sale online. You provide support to the inventory department. They want to react real-time to various inventory problems as they arise.

You adjust the inventory whenever a new sale is completed. The return value includes the store, the shoe model and the inventory left for that shoe model in the store.

```
{
  'store' => 'ALDO Ste-Catherine',
  'model' => 'ADERI',
  'inventory' => 10,
}
```

`ALDO Ste-Catherine` store sold a pair of `ADERI` shoes. `ALDO Ste-Catherine` now has 10 pairs of `ADERI` left.

## Goal

**Design an interface that would allow the inventory department to monitor Aldo's stores and shoes inventory.**

Hope you’ll have fun with this little test. I know I had designing it.
Go wild. It can be anything you want. I’ve seen results printed to console, displayed on a webpage, and even someone who did periodical database dumps.

Here are a few ideas if you need an extra challenge:

- Add some sort of alerting system, e.g. When a shoe model at a store goes too low, or too high.
- Add a REST JSON API, or GraphQL
- Suggest shoe transfers from one store to another according to inventory
- Your own crazy idea!

Share your repository with us when you’re done.

Happy Hacking :)

## Installation

This projects uses the popular library `websocketd` to send messages.

If you're on a Mac, you can install `websocketd` using [Homebrew](http://brew.sh/). Just run `brew install websocketd`. For other operating systems, or if you don't want to use Homebrew, check out the link below.

**[Download for Linux, OS X and Windows](https://github.com/joewalnes/websocketd/wiki/Download-and-install)**

Note that a Ubuntu 64-bit version is already bundled here `bin/websocketd` for convenience.

## Getting Started

### Inventory Server

Your WebSocket Server is the tap that aggregates inventories from all stores.

You can run it directly from your own machine.

Run the following to start tapping into the inventory events.

```
(bin/)websocketd --port=8080 ruby inventory.rb
```

You now have an active connection to their stores opened on port 8080.

### Start listening on each event

Listen and react on each event using a WebSocket client.

Various implementations are at your disposal. Whatever floats your boat.

They all work the same way. Provide a method or a block to be executed whenever a new event occurs.

Here are two examples for our favorite languages:

#### Javascript

Open a console on a non-secured page:

```
var ws = new WebSocket('ws://localhost:8080/');

ws.onmessage = function(event) {
  console.log(event.data);
};
```

#### Ruby

##### Installation

```
gem install faye-websocket
gem install eventmachine
```

##### Example

```
require 'faye/websocket'
require 'eventmachine'
require 'json'

EM.run {
  ws = Faye::WebSocket::Client.new('ws://localhost:8080/')

  ws.on :message do |event|
    p JSON.parse(event.data)
  end
}
```
