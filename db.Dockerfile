FROM mysql/mysql-server:8.0 as builder

# Set a password for the root user
ARG PASS
ENV MYSQL_ROOT_PASSWORD=PASS

# get the source code from git and copy it to the working directory
RUN git clone https://github.com/adamkali/TavernDB.git

WORKDIR /TavernDB

# copy the sql file dump.sql to the container 
COPY ./dump.sql /docker-entrypoint-initdb.d/

# Expose the port 3306
EXPOSE 3306