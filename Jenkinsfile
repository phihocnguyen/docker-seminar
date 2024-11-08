gpipeline {
    agent any
    environment {
        IMAGE_NAME = "phihocnguyen123/node-app"
        TAG = "2.0"
    }
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Build Image"){
            steps{
                sh "docker build -t ${IMAGE_NAME}:${TAG} ."
            }
        }
        stage("Push Image"){
            steps {
                withDockerRegistry(credentialsId: 'dockerhub-account', url: 'https://index.docker.io/v1/'){
                    sh "docker push ${IMAGE_NAME}:${TAG}"
                }
            }
        }
    }
    post {
        success {
            echo 'Docker image has been successfully pushed to Docker Hub.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
