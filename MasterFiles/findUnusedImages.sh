#!/bin/bash
# 
# This program will list all the images in the images folder. By default it
# will list whether or not the image could be found in any of the html
# documents or the appLinkInfo javascript files.
#
# If the parameter '--DELETE' (do not include quotation marks) is used, it will
# also delete all the unused images.

for file in ../images/*;
do
  f="${file##*/}"

  printf '%-45s | ' $f
  if grep -q "images/${f}" ../js/appLinkInfo/* ../htdocs/* ../index.html
    then
      echo 'found'
    else
      if [[ -n $1 ]] && [[ $1 = "--DELETE" ]]
        then
          rm $file && echo 'DELETED!!!'
        else
          echo 'NOT FOUND!!!'
      fi
  fi

  echo -e '============================================================'
done;
