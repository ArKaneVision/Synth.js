# JavaSynth

  JavaSynth is a browser based synthesizer built using Tone.js and React.
  It uses react's state attribute to hold all the setting information that the
  synth uses to create waves. The state changes live as you move dials and
  change settings.

  It also features use of an MongoDB/Mongoose/Express api so users can save their settings and
  come back to them later with a simple click.

 Screenshot of the main page
 ![Demo](https://imgur.com/mTu9knm.png)

 Use effects to change the sound

 ![Demo](https://imgur.com/E4w3iGR.png)

 Try the App out [**here](https://arkanevision.github.io/JavaSynth-Client/#/)

 [API respo](https://github.com/ArKaneVision/JavaSynth-Api)

## Technologies Used
  * React
  * Tone.js
  * JavaScript
  * Styled Components
  * CSS
  * Bootstrap
  * React Knob Dial
  * Atom
  * Node.js
  * Heroku
  * Express
  * MongoDB

## Planning

  To plan this app I made sure to take carful time and consideration.
  I spend time making a precise wireframe and detailed user stories. Before the
  projects official start I spent time testing my ideas and theories, and using
  the technology I was planning on using before starting to make sure I would not
  run into any major errors that would make me have to switch technologies part way
  through my project.

  I split the project into a few sections (Keyboard, synth/effects, libraries,
  and backend) In order to complete my version one I focused on MVP as much as
  possible, I started by creating the keyboard on the front end and adding in
  the event handlers to activate the Tone.js synth modules. After this I built the
  back end using express. I lined up the patch state on the front end with the data
  structure in the back end so that everything can be saved easily.

  I ran into various problems while building this project. The hardest to address
  were the audio issues. Lag and choppy signal plagued development as I
  experimented with various methods of creating sounds

### Wire Frames and User Stories

[Planning Document](https://docs.google.com/document/d/1Lpu7xGPGewcD81nZDs1sDgiIkiri81QBTZC-17bJXMs/edit)

## Moving Forward
    * Improve Sound generation to remove hiccups
    * Give access to master library where users can share patches
    * Add additional effects
    * Build MIDI capability
