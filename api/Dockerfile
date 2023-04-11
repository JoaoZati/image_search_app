FROM python:3.10

WORKDIR /app

EXPOSE 5000

COPY Pipfile Pipfile.lock /app/

RUN pip install pipenv
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . /app

CMD ["python", "app.py"]