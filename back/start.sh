#!/bin/bash
crontab /etc/cron.d/cron_scheduler
service cron start
wait-for-it db:5432
python manage.py migrate
python manage.py dev_db
gunicorn --reload wsgi --bind 0.0.0.0:8000
