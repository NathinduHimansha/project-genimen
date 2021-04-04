#!/bin/bash
export FLASK_APP="api:create_app('test')"
export FLASK_ENV=development
flask run
