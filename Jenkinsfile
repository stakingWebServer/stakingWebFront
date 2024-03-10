pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "git pull"
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