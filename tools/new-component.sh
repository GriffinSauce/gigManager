#!/bin/bash

set -e

echo "Provide a component name (CaseLikeThis)"
read COMPONENT_NAME

cp ./tools/new-component-template.js ./components/$COMPONENT_NAME.js
