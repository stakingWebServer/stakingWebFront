pipeline {
     agent any
     stages {
        stage('Checkout') {
                    steps {
                        git branch: 'main',
                            credentialsId: 'github_personal_access_token',
                            url: 'https://github.com/stakingWebServer/stakingWebFront.git'
                    }
                }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                script {
                    sh 'sudo /app/project/script/deploy.sh'
                }
            }
        }
    }
}