pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo git pull"
                //sh "sudo git clone https://github.com/stakingWebServer/stakingWebFront.git"
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