pipeline {
     agent any
     stages {
        stage("change permissions") {
            steps {
                sh "sh chmod -R 777 /var/lib/jenkins/workspace/web/.next"
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