pipeline {

    agent any

    tools {
        nodejs "nodejs"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t azure-site .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f azure-container || exit 0'
                bat 'docker run -d -p 3000:3000 --name azure-container azure-site'
            }
        }

    }
}