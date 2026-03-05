pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t azure-website-pa .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 azure-website-pa'
            }
        }

    }
}