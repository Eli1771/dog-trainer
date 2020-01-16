Plan for routes

- root/             *homepage w/ links to view pets, add pet, and view progress (all notes)*

- root/pets         *landing page for all pets, shows basic id info of each*

- root/pets/:name   *landing page for one pets, shows all details including skills and notes*

- root/progress     *shows all notes for all pets in a log form and (poss) a master skills chart*




** - PRIMARY

find out how to upload images to a server

upload profile images for each pet
  ** create default images for pets without profile image

add confirm messages before deletes. Currently throwing a no-restricted-globals error??

remove empty space from the end of inputs to clean up rendering

use calendar input for DOB??

render current ages dynamically from dob column

** All fetches need to happen before ANY dog components are rendered

** update server in background when any state changes are made
  ** show 'flash' style messages at completion of server actions
