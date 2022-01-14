#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

# Original size 5472 x 3072

SOURCE=$1
TARGET=$2
ENTRY=$3

mkdir -p "$TARGET"

for file in "$SOURCE"/*.JPG; do
    name=$(basename -- "$file")

    # Big image
    image="${TARGET}/${name%.*}.jpg"
    convert "$file" -resize '3840x2156' "${image}"
    jpegoptim "${image}" --strip-all

    # Thumbnail
    thumb="${TARGET}/${name%.*}_thumb.jpg"
    convert "$file" -resize '700x400'   "${thumb}"
    cwebp "${thumb}" -o "${thumb%.*}.webp";
    rm "${thumb}"

    # Entry
    if [[ "$name" == "$ENTRY" ]];
    then
        entry="${TARGET}/entry.jpg"
        convert "$file" -thumbnail 200x200^ -gravity center -extent 200x200 "${entry}"
        cwebp "${entry}" -o "${entry%.*}.webp";
        rm "${entry}"
    fi
done