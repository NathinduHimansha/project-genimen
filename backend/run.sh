#!/bin/bash

export FLASK_APP="api:create_app('dev')"
export FLASK_ENV=development
flask run --port 5001
