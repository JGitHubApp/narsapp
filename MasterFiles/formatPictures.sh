#!/bin/bash
#
# Place this program in a folder containing only the zip folders you downloaded.
# It will unzip the folders and format/move the images inside them.
# It will create a two copies of every image: a .gif and a .png
# The .gif images will be stored in a folder titled 'gifs'
#
# Make sure the folder contains ONLY THE ZIP FILES, along with this file.
# The zip files will be deleted after the images have been formatted.

# Unzip all zip files
for zFile in *.zip
do
	unzip $zFile
done

# Move all files to the working directory
mv `find -name *.png` ./
echo "`ls -1 *.png | wc -l` pictures will be converted"

# Format the images
for pic in *.png
do
		mogrify -format gif -crop 400x400+50+50 -scale 100x100 $pic && echo "${pic:7} CONVERTED to .gif"
		mogrify -crop 400x400+50+50 -scale 100x100 $pic && echo "${pic:7} FORMATTED"
		mv $pic ${pic:7}
done

# Move the .gif files into the gifs folder
mkdir gifs
for gif in *.gif
do
	mv $gif "gifs/${gif:7}"
done

# Delete the zip files and their unzipped counterparts
for zFile in *.zip
do
	rm -r ${zFile} ${zFile%.zip} && echo "${zFile} DELETED"
done
