# Travel Planner

A simple tool for DMs for rolling lots of random encounters during overland travel in D&amp;D 5e

## Introduction

I needed a tool for generating encounters by terrain that were not gated by level. So I made one. If you want an encounter generated that will take your party's level into account, this is not the tool for you. I want my setting to feel unpredictable and occassionally unfairly lethal. Sometimes your party just runs afoul of a Frost Giant at 3rd level. ¯\_(ツ)\_/¯

## Requirements

- [NodeJS](http://nodejs.org)
- A terminal (Terminal for mac, powershell or cmd for Windows)

## Usage

1. Navigate to the folder where this repo was cloned
1. Install the dependencies (`$ npm i`)
1. Input the number of days and terrain type you want to generate encounters for and run the script like so: `terrain=mountain days=2 node index.js`
1. Something that looks like this should happen:

![example.gif](example.gif)
