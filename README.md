# ProPh - Photography sales app

This app gives you as a phototgrapher the possibility to upload your Photos and sell them to anyone who visits the site.

## Email login

As a photographer you login using your email-adress.

Via Supabase you will get an email with a link to confirm your emailadress the first time and then a login link the following times. Then you get rerouted back to the website and you are logged in.

As a logged in user/photographer you can upload your photos.

You can see and manage your own photos while you are logged in.

## Visitor / buyer

As a non-logged in visitor to the site you can see the Gallery with all the photos available.

You can open up one image in its own page and select a size to buy.

Right now there are only printed copies available on the site, but an upcoming feature is to be able to sell/buy digital copies with different restrictions on how to use them.

## Cart

This is yoru list of photos you want to buy. You can change the number of copies you want to have. If you put 0 (zero) as the number of copies that item will be deleted from the list.

## Sitemap

Gallery

OnePhoto

Login/Admin

- login (if not logged in)
- admin (if logged in)

(admin page shows your own photos and you are able to handle them or add new photos to your portfolio)

Cart

## TechStack

Frontend: React
Styling: Tailwind
Backend: Supabase
