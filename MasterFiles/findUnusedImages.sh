#!/bin/bash

for file in ../images/*;
  do
    f="${file##*/}"

    printf '%-25s | ' $f
    if grep -q "images/${f}" ../js/appLinkInfo/* ../htdocs/* ../index.html
      then
        echo 'found'
      else
        echo 'NOT FOUND!!!'
    fi

    echo '----------------------------------------'
  done;
