pipeline {
    agent any
    environment {
        CURRENT_LOCATION = '/var/lib/jenkins/workspace/stakingweb/stakingWebFront';
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github_personal_access_token',
                    url: 'https://github.com/stakingWebServer/stakingWebFront.git'
            }
        }
        stage('build') {
            steps {
                    script{
                        def pid
                        def response
                        def status = true
                        pid = sh(script: "sudo lsof -t -i :3001 -s TCP:LISTEN",returnStdout: true).trim()
                        echo 'test   : : ${pid}'
                       if(pid != "" && pid != null){
                        echo '현재 PID : ${pid}'
                        sh "sudo kill -9 ${pid}"
                        }
                        else{
                            echo "not exist port"
                        }
            sh 'sudo git clone https://github.com/stakingWebServer/stakingWebFront.git'
            sh 'sudo mv ${CURRENT_LOCATION}/** /app/project'
            sh 'sudo npm install'
            sh 'sudo npm run build'
            sh 'sudo nohup npm run start &'
            }
        }
}
}
}
