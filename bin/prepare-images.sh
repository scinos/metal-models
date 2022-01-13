#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail
set -x

# Original size 5472 x 3072

SOURCE=$1
TARGET=$2

mkdir -p "$TARGET"

for file in "$SOURCE"/*.JPG; do
    name=$(basename -- "$file")
    image="${TARGET}/${name%.*}.jpg"
    thumb="${TARGET}/${name%.*}_thumb.jpg"

    convert "$file" -resize '3840x2156' "${image}"
    convert "$file" -resize '700x400'   "${thumb}"

    cwebp "${thumb}" -o "${thumb%.*}.webp";
    rm "${thumb}"
done