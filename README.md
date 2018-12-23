# Travel Planner

A random encounter generator that doesn't care how squishy you are

## Introduction

I needed a tool for generating encounters by terrain that were not gated by level. So I made one. If you want an encounter generated that will take your party's level into account, this is not the tool for you. I want my setting to feel unpredictable and occassionally unfairly lethal. Sometimes your party just runs afoul of a Frost Giant at 3rd level. ¯\\\_(ツ)\_/¯

Right now the UI favors people with enough technical savvy to use terminal programs, which is all I need. In the future I might create a web interface for it if enough people ask me to.

## Requirements

- [NodeJS](http://nodejs.org)
- A terminal (Terminal for mac, powershell or cmd for Windows)

## Usage

1. Navigate to the folder where this repo was cloned
1. Install the dependencies (`$ npm i`)
1. Input the number of days and terrain type you want to generate encounters for and run the script like so: `terrain=mountain days=2 node index.js`
1. Something that looks like this should happen:

![example.gif](example.gif)

## Terrain Options

There are lists of encounters for all the following terrains:

- Arctic
- Coast
- Desert
- Forest
- Grassland
- Hill
- Mountain
- Swamp
- Underdark
- Underwater
- Urban

## Credit

The monster tables were imported from [Donjon Random Encouter Generator](https://donjon.bin.sh/d20/encounter/).
