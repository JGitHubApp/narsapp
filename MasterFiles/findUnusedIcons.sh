#!/bin/bash
# 
# This program will list all the images in the icons folder. By default it
# will list whether or not the image could be found in any of the appLinkInfo
# javascript files.
#
# If the parameter '--DELETE' (do not include tick marks) is used, it will
# also delete all the unused images.

function insertSeparator {
  for i in {1..80}; do
    printf '='
  done

  printf '\n'
}

for icon in ../images/icons/*; do
  filename="${icon##*/}"

  printf '%-65s | ' $filename
  if grep -q "images/icons/${filename}" ../js/appLinkInfo/*
    then
      echo 'found'
    else
      if [[ -n $1 ]] && [[ $1 = "--DELETE" ]]
        then
          rm $icon && echo 'DELETED!!!'
        else
          echo 'NOT FOUND!!!'
      fi
  fi

  insertSeparator
done;
