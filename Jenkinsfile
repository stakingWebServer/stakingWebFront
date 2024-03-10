pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo chmod -R 777 /var/lib/jenkins/workspace/web"
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