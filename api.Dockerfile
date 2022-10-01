FROM golang:1.18-alpine AS builder

# Do a system update
RUN apk update
RUN apk add git curl

# set the working directory to be in the GOROOT directory
WORKDIR /go/src

# get the source code from git and copy it to the working directory
RUN git clone https://github.com/adamkali/Tavern-Backend.git

WORKDIR /go/src/Tavern-Backend

ARG NAME
ARG PASS
RUN git config --global url."https://$UNAME:$PASS@github.com".insteadOf "https://github.com"

# pull the latest for the submodules
RUN git submodule update --recursive --remote

# # copy go.mod and go.sum to the working directory
# COPY /Tavern-Backend/go.mod .
# COPY /Tavern-Backend/go.sum .

# RUN the command to download the dependencies
RUN go mod download

# copy the source code to the working directory
# COPY Tavern-Backend/*.* .

# Now it should build
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags "-s -w" -o /TavernProfile
# RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /TavernProfile

# create alpine image to run the application 
FROM alpine:latest

WORKDIR /root/
COPY --from=builder /TavernProfile .

# expose the port 8000
EXPOSE 8000

# command to run on container start
ENTRYPOINT [ "./TavernProfile", "prod" ]
