pipeline {
     agent any
     stages {
        stage('Checkout') {
            steps {
                // Git 저장소에서 코드를 가져옴
                git branch: 'main', url: 'https://github.com/stakingWebServer/stakingWebFront.git'
            }
        }
        stage("Build") {
            steps {
                sh "sudo git pull origin main"
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