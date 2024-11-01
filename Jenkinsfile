pipeline {
    agent any
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Build Image"){
            steps{
                sh 'docker ps'
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
