#!/bin/bash

picPath='../images/pictures/'

# For each picture in the gallery
for pic in ${picPath}*
do
	picName="${pic##*/}"

	# If not a thumbnail
	if [[ "${picName:10}" != "thumbnail-" ]]
	then
		# If height is greater than width
		if [[ `identify -format "%h" "${pic}"` -gt `identify -format "%w" "${pic}"` ]]
		then
			# Shrink height to 100px
			convert -define jpeg:size=1x1 "${pic}" -thumbnail x100 "${picPath}thumbnail-${picName}"
		else
			# Shrink width to 100px
			convert -define jpeg:size=1x1 "${pic}" -thumbnail 100x "${picPath}thumbnail-${picName}"
		fi
	fi
done
