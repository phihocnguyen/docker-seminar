pipeline {
    agent any
    environment {
        PATH = “C:\Program Files\Docker\Docker\resources\bin;${env.PATH}”
        // rest of your environment variables…
    }
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Build Image"){
            steps{
                sh 'docker build -t phihocnguyen123/node-app:1.0 .'
            }
        }
        stage("Push Image"){
            steps {
                withDockerRegistry(credentialsId: 'dockerhub-account', url: 'https://index.docker.io/v1/'){
                    sh 'docker push phihocnguyen123/node-app:1.0'
                }
            }
        }
    }
}
