FROM cypress/base:latest

WORKDIR /home/cypress/

RUN apt-get update && apt install -y default-jre

COPY . /home/cypress/

VOLUME [ "/home/cypress/reports/mochawesome" ]

RUN npm install
RUN npx cypress install

CMD ["npm", "run", "test"]