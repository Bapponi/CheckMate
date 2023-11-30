# API for POS Terminal Android application created to manage Restaurants and Caffee's

This API was created for the Payten Hackaton volume #2, by the Coding Lyoko team. It was written using Flask-Restful and consists of modules that are designed for the structure of the API, and the Resources used to expose the API endpoints to the user

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Implementation](#implementation)

## Installation

- **Clone the repository**
    
    Create a directory for the project:
    Use `mkdir <directory_name>` and enter the folder using `cd <directory_name>`
    Use `git clone git@github.com:Bapponi/CheckMate.git` to clone the repository

- **Create virtual environment**

    Create virtual environment:
    Use command `python3 -m venv myEnv`
    Activate virtual environment:
    Use command `source myEnv/bin/activate`

- **Installing dependencies**

    To install required dependencies:
    Use command `pip3 install -r requirements.txt`

##Usage

- **Running the API**

    To run the project:
    Navigate to the back-end directory of the project. In the back end directory do the following
    Use command `python3 resources/resources.py`. If you're getting the following response in the terminal, the app has been launched successfully:
    ```
    * Serving Flask app 'resources'
    * Debug mode: on
    WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
    * Running on http://127.0.0.1:5000
    Press CTRL+C to quit
    * Restarting with stat
    * Debugger is active!
    * Debugger PIN: 596-577-563
    ```

    To check if the API is working correctly run the test.py file using the following command: `python3 resources/test.py` If you're getting all the proper HTTPS responces with the body of the responses in the terminal output, the API is running properly.

    The API's exposed endpoints are the following:
    - login Used for the login of users
    - menu Used to create and items to the menu
    - table Used to add tables to the Restaurant floor
    - order Used to create orders for the table specified

##Implementation

- **Tech stack used**

    In this project I used **Python** as the base language, with the **Flask** and **Flask-Restful** modules for creating the API


- The project consists of 3 different modules:

