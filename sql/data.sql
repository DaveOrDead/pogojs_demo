create table clients
(
   id serial,
   first_name varchar,
   last_name varchar,
   email varchar
);

insert into clients (first_name, last_name, email) values
   ('David'   , 'Berner'     , 'dave@pogostack.org'       ),
   ('Sandor'  , 'Clegane'    , 'sandor@houseclegane.com'  ),
   ('Gregor'  , 'Clegane'    , 'greg@houseclegane.com'    ),
   ('Rickon'  , 'Stark'      , 'winter@iscoming.net'      ),
   ('Berrick' , 'Dondarrion' , 'thoros@myr.org'           ),
   ('Jojen'   , 'Reed'       , 'jojen@reed.org'           ),
   ('Ilyn'    , 'Payne'      , 'axeman@kingslanding.com'  ),
   ('Podrick' , 'Payne'      , 'pod@housepayne.com'       ),
   ('Davos'   , 'Seaworth'   , 'davos@nofingers.net'      ),
   ('Alliser' , 'Thorne'     , 'ali@watcheronthewall.org' ),
   ('Alex'    , 'Nedoboi'    , 'alex@pogostack.org'       )
;

create table tasks
(
   id serial,
   text varchar
);

