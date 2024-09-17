#!/bin/bash

echo "Updating RubyGems..."
gem update --system -N

echo "Installing Rails..."
gem install rails -v 7.1.3.2

echo "Done!"
