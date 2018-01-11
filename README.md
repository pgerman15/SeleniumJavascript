# Selenium with Javascript Guide

*A set of examples to get started with selenium's javascript webdriver*


## Topics covered

  1. [Install](#install)
  1. [Webdriver setup](#setup)
  1. [Selenium basics](#basics)
  1. [Waits](#waits)
  1. [Promises](#promises)

## Install

- [1.1] Installing Node.js
    - Open up the Software Center on your machine
    - Search for Node.js, and install the newest version available(currently 6.9.4)
    - When the install is finished, open the Command Prompt and type 'node --version' to make sure that the install completed correctly.

- [1.2] Installing Selenium dependencies
    - Open the Command Prompt and navigate to the folder in your workspace that you created for this project.
        > **Example**: My workspace folder is located inside my Documents folder, so to get there my command looks like 'cd c:\Users\pgerman\Documents\workspace\MySeleniumProjectName'
    - To install the relevant dependencies, we will be using `npm` which was automatically installed with Node.js. First, we will be installing the Selenium webriver using the command `npm install selenium-webdriver`
    - Next, we need to install the browser driver that corresponds with which browser we want to test on. In this case, we are using Chrome, so we will use `npm install chromedriver` to install the relevant browser driver.
    - Finally, we need to create our actual javascript file. For the purpose of this exercise, I will be creating a file called `test.js` but you can name it whatever you want. 
        - Open your newly created javascript file with your choice of editor
        - Add `console.log('hello world')` to your file and save it.
        - Switch back to your command prompt and run `node yourfile.js` to start your application. If you see `hello world` show up under where you called the `node` command, your node application has been successfully created.  

## Setup

## Basics

## Waits

## Promises
