<h2 align="center">URLCLIP</h2>
<p align="center">
    <img src="https://github.com/JoseRamonMartinez/urlclip/blob/main/frontend/src/assets/ngx-rocket-logo.png" width="150">
</p>

<div align="center">

 [![ci-frontend](https://github.com/JoseRamonMartinez/urlclip/actions/workflows/ci-frontend.yml/badge.svg)](https://github.com/JoseRamonMartinez/urlclip/actions/workflows/ci-frontend.yml)&nbsp;[![ci-service-shortener](https://github.com/JoseRamonMartinez/urlclip/actions/workflows/ci-service-shortener.yml/badge.svg)](https://github.com/JoseRamonMartinez/urlclip/actions/workflows/ci-service-shortener.yml)&nbsp;[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

</div>

## Deployment 🚀

**[https://urlclip.onrender.com/](https://urlclip.onrender.com/)**

## Description 📢

_URL shorter app. Short your links and urls and make easy to share with the people. The system uses a client-server architecture based on microservice. The frontend is composed by an angular web application. The backend follows the microservice architecture, containing at this moment 1 service (service shortener)._

## Structure 📋

The monorepository strategy is used and it is structured as follows:

| Folder      | Content |
| ---------- | :------|
| [/backend](https://github.com/JoseRamonMartinez/MAIA/serverless-aws)  | **backend** code, based on a microservice architecture |
| [/frontend](https://github.com/JoseRamonMartinez/MAIA/frontend-paciente)    |  **frontend** code for the web app|
| [GitHub Actions](https://github.com/JoseRamonMartinez/MAIA/tree/master/.github/workflows)     |   Workflows code for **CI** |


## Getting Started 📖

To get a local copy up and running follow these simple example steps.

### Prerequisites


### Installation


1. Install [go](https://go.dev/doc/install) and [node](https://nodejs.org/es/download/)
2. Clone the repo
   ```sh
   git clone https://github.com/joseramonmartinez/urlclip.git
   ```
3. Install client packages
   ```sh
   cd frontend
   npm install
   ```
4. Install backend packages
   ```sh
   cd backend/service-shortener
   go get -d ./...
   ```
5. In backend/service-shortener, create a  `.env` with the database
   ```sh
    URL_DB=<persistance-database-technology>
    MONGO_URL=<mongo-conexion-chain>
    MONGO_DB=<mongo-database-name>
    MONGO_TIMEOUT=<timeout-time>
    PORT=<port>
   ```

### Local deploy
1. Run client on [localhost:4200](localhost:4200)
   ```sh
   cd frontend
   npm start
   ```
2. Run server on [localhost:8000](localhost:8000)
   ```sh
   cd backend/service-shortener
   go run main.go
   ```


### Server containers with Docker
1. Service shortener 
   ```sh
   docker build -t service-shortener
   docker run -p 8080:8000 service-shortener
   ```



## Author ✒️

- **_José Ramón Martínez Riveiro_ - [Linkedin](https://www.linkedin.com/in/josermartinez/?originalSubdomain=es)**

## License 📄

This project is under [Creative Commons (BY-NC-ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.


<p align="right">(<a href="#top">back to top</a>)</p>
