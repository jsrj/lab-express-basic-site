const donaldGloverIsBae =  require ('express');
const childishGambino = donaldGloverIsBae ();

childishGambino.set( 'view engine', 'ejs' );

// Gets static assets from the public/ folder:
childishGambino.use(donaldGloverIsBae.static('public'));



childishGambino.get('/' , (request, response, next) => {
    // Anonymous function determines the code that is run when you visit the home page:
      response.render('home.ejs');

  });

  childishGambino.get('/about' , (request, response, next) => {
    // Anonymous function determines the code that is run when you visit the about page:
      response.render('about.ejs');

  });

  childishGambino.get('/gallery' , (request, response, next) => {
    // Anonymous function determines the code that is run when you visit the gallery:
      response.render('gallery.ejs');

  });

  // Sets the port that the app will listen on in Localhost:
    childishGambino.listen(1337);