const  express  =  require ( "express" ) ;
const  app  =  express ( ) ;
 porta  const =  3000 ;

app . get ( "/" ,  ( req ,  res )  =>  {
  res . send ( "Olá, mundo!" ) ;
} ) ;

app . escute ( porta ,  ( )  =>  {
  console . log ( `Exemplo de aplicativo ouvindo em http: // localhost: $ { port } ` ) ;
} ) ;