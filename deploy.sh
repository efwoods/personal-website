#!/bin/bash
npm run build        
git add dist && git commit -m 'updating dist subtree' --allow-empty
git subtree push --prefix dist origin gh-pages     